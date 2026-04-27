import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || "1");
const CLOSE_API_KEY = process.env.CLOSE_API_KEY;
const PDF_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? `${process.env.NEXT_PUBLIC_SITE_URL}/beyond-humanity-report.pdf`
  : "https://beyondhumanity.xyz/beyond-humanity-report.pdf";

export async function POST(req: NextRequest) {
  const { email, firstName } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // 1. Add to Brevo
  try {
    const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: firstName || "", SOURCE: "beyondhumanity.xyz" },
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!brevoRes.ok && brevoRes.status !== 204) {
      const err = await brevoRes.text();
      console.error("Brevo error:", err);
    }
  } catch (e) {
    console.error("Brevo fetch error:", e);
  }

  // 2. Send transactional email with PDF link via Brevo
  try {
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Beyond Humanity", email: "hello@beyondhumanity.xyz" },
        to: [{ email, name: firstName || email }],
        subject: "Your copy of Beyond Humanity",
        htmlContent: `
          <div style="background:#030a14;color:#e2e8f0;padding:40px;font-family:Georgia,serif;max-width:600px;margin:0 auto">
            <p style="font-family:monospace;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#f5c842;margin-bottom:24px">Beyond Humanity · Research Report</p>
            <h1 style="font-size:2rem;font-weight:300;color:#fff;margin-bottom:20px">Your report is ready.</h1>
            <p style="color:#94a3b8;line-height:1.7;margin-bottom:32px">
              ${firstName ? `${firstName}, thanks` : "Thanks"} for requesting the report. Click below to download your copy of <em>Beyond Humanity</em> — 18,000 words on the AI agent economy and where value concentrates next.
            </p>
            <a href="${PDF_URL}" style="display:inline-block;background:#f5c842;color:#030a14;padding:14px 28px;font-family:monospace;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;font-weight:700;text-decoration:none;margin-bottom:32px">
              ↓ Download the Report
            </a>
            <p style="color:#64748b;font-size:13px;line-height:1.7">
              If the button doesn't work, copy this link:<br/>
              <a href="${PDF_URL}" style="color:#f5c842">${PDF_URL}</a>
            </p>
            <hr style="border:none;border-top:1px solid #0f2040;margin:32px 0"/>
            <p style="color:#334155;font-size:11px;font-family:monospace">
              Beyond Humanity is independent research. Not investment advice. Unsubscribe anytime.
            </p>
          </div>
        `,
      }),
    });
  } catch (e) {
    console.error("Brevo email error:", e);
  }

  // 3. Push to Close.com CRM (if key exists)
  if (CLOSE_API_KEY) {
    try {
      // Create lead
      const leadRes = await fetch("https://api.close.com/api/v1/lead/", {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(CLOSE_API_KEY + ":").toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: firstName ? `${firstName} (Beyond Humanity lead)` : `Lead — ${email}`,
          contacts: [
            {
              name: firstName || email,
              emails: [{ email, type: "office" }],
            },
          ],
          custom: { Source: "beyondhumanity.xyz", Report: "Beyond Humanity" },
        }),
      });
      if (!leadRes.ok) {
        console.error("Close.com error:", await leadRes.text());
      }
    } catch (e) {
      console.error("Close.com fetch error:", e);
    }
  }

  return NextResponse.json({ ok: true });
}
