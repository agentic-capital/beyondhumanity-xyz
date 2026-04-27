import { NextRequest, NextResponse } from "next/server";

const BREVO_KEY = process.env.BREVO_API_KEY!;
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || "28");
const CLOSE_API_KEY = process.env.CLOSE_API_KEY;

export async function POST(req: NextRequest) {
  const { email, firstName } = await req.json();
  if (!email?.includes("@")) return NextResponse.json({ error: "Invalid email" }, { status: 400 });

  // 1. Add/update contact in Brevo with list + source attribute
  await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: { "api-key": BREVO_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      attributes: { FIRSTNAME: firstName || "", SOURCE: "beyondhumanity.xyz" },
      listIds: [BREVO_LIST_ID],
      updateEnabled: true,
    }),
  }).catch(console.error);

  // 2. Send report via template 23
  await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": BREVO_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({
      to: [{ email, name: firstName || email }],
      templateId: 23,
      params: { FIRSTNAME: firstName || "there" },
    }),
  }).catch(console.error);

  // 3. Push to Close.com CRM
  if (CLOSE_API_KEY) {
    await fetch("https://api.close.com/api/v1/lead/", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(CLOSE_API_KEY + ":").toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: firstName ? `${firstName} — Beyond Humanity` : `Lead — ${email}`,
        contacts: [{ name: firstName || email, emails: [{ email, type: "office" }] }],
        custom: { Source: "beyondhumanity.xyz" },
      }),
    }).catch(console.error);
  }

  return NextResponse.json({ ok: true });
}
