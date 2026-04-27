import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your report is on its way — Beyond Humanity",
  description: "Your copy of Beyond Humanity has been sent. Check your inbox, and watch the mail for your printed copy.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main style={{ background: "#fff", minHeight: "100vh", color: "#0f172a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <style>{`
        .ty-cards {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        @media (min-width: 600px) {
          .ty-cards {
            flex-direction: row;
          }
          .ty-card { flex: 1; }
        }
      `}</style>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "40px 20px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 48, color: "#16a34a", lineHeight: 1, marginBottom: 16, fontWeight: 700 }}>✓</div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: "#0f172a", margin: "0 0 8px", lineHeight: 1.25 }}>
            Your report is on its way.
          </h1>
          <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>
            Two things happening right now:
          </p>
        </div>

        <div className="ty-cards">
          <div className="ty-card" style={{ background: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 10, padding: 20 }}>
            <div style={{ fontSize: 28, lineHeight: 1, marginBottom: 10 }}>📧</div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: "0 0 6px" }}>
              Check your inbox
            </p>
            <p style={{ fontSize: 13, color: "#374151", margin: 0, lineHeight: 1.55 }}>
              Your digital copy of <em>Beyond Humanity</em> just landed. Open it — the email is from Beyond Humanity Research.
            </p>
          </div>
          <div className="ty-card" style={{ background: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 10, padding: 20 }}>
            <div style={{ fontSize: 28, lineHeight: 1, marginBottom: 10 }}>📬</div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", margin: "0 0 6px" }}>
              Your printed copy is in the mail
            </p>
            <p style={{ fontSize: 13, color: "#374151", margin: 0, lineHeight: 1.55 }}>
              A physical copy is being shipped to you. It typically arrives within 5–7 business days.
            </p>
          </div>
        </div>

        <p style={{ fontSize: 13, fontStyle: "italic", color: "#6b7280", margin: "20px 0 28px", lineHeight: 1.55 }}>
          → Can't find the email? Check your spam folder and mark it "Not Spam" — this helps future emails reach you.
        </p>

        <a
          href="/beyond-humanity-report.pdf"
          style={{
            display: "block",
            background: "#1d4ed8",
            color: "#fff",
            padding: "16px 24px",
            borderRadius: 6,
            fontSize: 16,
            fontWeight: 700,
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Read Online Now →
        </a>

        <p style={{ textAlign: "center", margin: "16px 0 0" }}>
          <a href="/" style={{ fontSize: 13, color: "#6b7280", textDecoration: "underline" }}>
            Return to beyondhumanity.xyz
          </a>
        </p>
      </div>

      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "24px 20px", textAlign: "center", marginTop: 40 }}>
        <p style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
          Beyond Humanity Research · beyondhumanity.xyz · This is independent research, not investment advice.
        </p>
      </footer>
    </main>
  );
}
