import { NextRequest, NextResponse } from "next/server";

const BREVO_KEY = process.env.BREVO_API_KEY!;
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || "28");
const CLOSE_API_KEY = process.env.CLOSE_API_KEY;

// Close CRM — The Macro Edge
// Dean's user ID for assignment
const DEAN_USER_ID = "user_gvxYir4BmRw9uphGEW9cmboD1sAIEomGxgxJVwKC2Kp";

// Custom field IDs (fetched 2026-04-28)
const CF = {
  source:       "cf_Ro4pbW1pVoXpMnz3QjJ7wu4TQHo6HaRYFFHuZG16tHZ",
  pipeline:     "cf_y07cmLh3a0HR4NGd6MP1jmrrvXP6UsF1TaQevPuLeTE",
  formSourceUrl:"cf_Akbmaz0pNIyPfSh86bYTd75ohgoGQkGmIOYotQGFKQn",
  signupDate:   "cf_33cYpkY1ttlTWbiJtNEHBJEMVa6IIg80UtBsTiynglB",
  howHeard:     "cf_oSpqAQkJTvbQOkZpqDtV8wbikcmnWICfFVQHpQF769R",
  notes:        "cf_xVnky1Iuw8Pp2ThqGU4o22bwkqpkMNCEBGbosEQvdy5",
};

async function closeAuth() {
  return `Basic ${Buffer.from(`${CLOSE_API_KEY}:`).toString("base64")}`;
}

async function findLeadByEmail(email: string): Promise<string | null> {
  if (!CLOSE_API_KEY) return null;
  const r = await fetch(
    `https://api.close.com/api/v1/lead/?query=email%3A${encodeURIComponent(email)}&_fields=id`,
    { headers: { Authorization: await closeAuth() } }
  ).catch(() => null);
  if (!r?.ok) return null;
  const d = await r.json();
  return d?.data?.[0]?.id ?? null;
}

export async function POST(req: NextRequest) {
  const referer = req.headers.get("referer") || "beyondhumanity.xyz";
  const { email, firstName, phone, address, city, state, zip } = await req.json();
  if (!email?.includes("@")) return NextResponse.json({ error: "Invalid email" }, { status: 400 });

  const today = new Date().toISOString().slice(0, 10);
  const displayName = firstName ? `${firstName} — Beyond Humanity` : `Lead — ${email}`;

  // ── 1. Brevo: add to list + send template ────────────────────────────────
  await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: { "api-key": BREVO_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      attributes: {
        FIRSTNAME: firstName || "",
        SMS: phone || "",
        ADDRESS: address || "",
        CITY: city || "",
        STATE: state || "",
        POSTCODE: zip || "",
        SOURCE: "beyondhumanity.xyz",
      },
      listIds: [BREVO_LIST_ID],
      updateEnabled: true,
    }),
  }).catch(console.error);

  await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": BREVO_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({
      to: [{ email, name: firstName || email }],
      templateId: 23,
      params: { FIRSTNAME: firstName || "there" },
    }),
  }).catch(console.error);

  // ── 2. Brevo SMS ─────────────────────────────────────────────────────────
  // Send a welcome SMS if phone was provided
  if (phone) {
    const smsPhone = phone.replace(/\D/g, "").replace(/^1/, ""); // strip to digits, remove leading 1
    if (smsPhone.length >= 10) {
      await fetch("https://api.brevo.com/v3/transactionalSMS/sms", {
        method: "POST",
        headers: { "api-key": BREVO_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: "BeyondHum",
          recipient: `+1${smsPhone.slice(-10)}`,
          content: `${firstName || "Hi"} - your Beyond Humanity research is on its way! Read it now: https://beyondhumanity.xyz/beyond-humanity-report.pdf - Dean Gallagher`,
          type: "transactional",
        }),
      }).catch(console.error);
    }
  }

  // ── 3. Close CRM ─────────────────────────────────────────────────────────
  if (CLOSE_API_KEY) {
    const auth = await closeAuth();
    const headers = { Authorization: auth, "Content-Type": "application/json" };

    // Dedupe: check if lead already exists by email
    const existingId = await findLeadByEmail(email);

    const customFields = {
      [CF.source]:        "beyondhumanity",
      [CF.pipeline]:      "investor",
      [CF.formSourceUrl]: referer,
      [CF.signupDate]:    today,
      [CF.howHeard]:      "beyondhumanity.xyz ad",
      [CF.notes]:         `Essay download — ${today}. Address: ${[address, city, state, zip].filter(Boolean).join(", ") || "not provided"}`,
    };

    const contacts = [{
      name: firstName || email,
      emails: [{ email, type: "office" }],
      ...(phone ? { phones: [{ phone, type: "mobile" }] } : {}),
      ...(address ? {
        addresses: [{ address_1: address, city: city || "", state: state || "", zipcode: zip || "", country: "US", type: "mailing" }]
      } : {}),
    }];

    if (existingId) {
      // Update existing lead — append a note, don't change status downward
      await fetch(`https://api.close.com/api/v1/lead/${existingId}/`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ "custom": customFields }),
      }).catch(console.error);

      await fetch("https://api.close.com/api/v1/activity/note/", {
        method: "POST",
        headers,
        body: JSON.stringify({
          lead_id: existingId,
          note: `Re-submitted Beyond Humanity form on ${today}. Referer: ${referer}`,
        }),
      }).catch(console.error);
    } else {
      // Create new lead assigned to Dean
      const newLead = await fetch("https://api.close.com/api/v1/lead/", {
        method: "POST",
        headers,
        body: JSON.stringify({
          name: displayName,
          status_id: "stat_gDpFgwUaNbaS5lYfl2ZBDrXWOJ39IwH7CrrWa3U7xBo", // New Lead
          assigned_to: DEAN_USER_ID,
          contacts,
          "custom": customFields,
        }),
      }).catch(console.error);

      // Auto-create follow-up task for Dean
      if (newLead?.ok) {
        const lead = await (newLead as Response).json();
        const due = new Date(Date.now() + 24*60*60*1000).toISOString().slice(0,10);
        await fetch("https://api.close.com/api/v1/task/", {
          method: "POST",
          headers,
          body: JSON.stringify({
            lead_id: lead.id,
            assigned_to: DEAN_USER_ID,
            text: "Follow up — Beyond Humanity essay download",
            type: "lead",
            due_date: due,
            is_complete: false,
          }),
        }).catch(console.error);
      }
    }
  }

  return NextResponse.json({ ok: true });
}
