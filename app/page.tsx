"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, phone, address, city, state, zip }),
      });
      if (!res.ok) throw new Error();
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1.5px solid #d1d5db",
    borderRadius: 4,
    padding: "13px 16px",
    fontSize: 16,
    color: "#111",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "#374151",
    marginBottom: 6,
  };

  return (
    <main style={{ background: "#fff", minHeight: "100vh", color: "#0f172a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <style>{`
        .bh-wrap {
          max-width: 480px;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }
        .bh-form-col { order: 1; }
        .bh-content-col { order: 2; }
        @media (min-width: 768px) {
          .bh-wrap {
            max-width: 1000px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 56px;
            align-items: start;
            padding: 56px 24px;
          }
          .bh-form-col { order: 2; }
          .bh-content-col { order: 1; }
        }
      `}</style>

      <div className="bh-wrap">

        {/* FORM COLUMN */}
        <div className="bh-form-col">
          {/* Big book cover */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <img
              src="/book-cover.png"
              alt="Beyond Humanity — Free Book"
              style={{
                width: 220,
                height: "auto",
                borderRadius: 6,
                boxShadow: "0 24px 64px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.25), -8px 4px 0 rgba(0,0,0,0.15), -4px 2px 0 rgba(0,0,0,0.1)",
                display: "inline-block",
              }}
            />
            <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 12, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Free Book · Digital + Printed Copy Shipped
            </p>
          </div>

          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b7280", margin: "0 0 12px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
            Free Book · 2026
          </p>

          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 28, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 18 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", margin: "0 0 6px", lineHeight: 1.25 }}>
                  Get the Free Book
                </h2>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.5 }}>
                  Free. Shipped to your door. No obligation.
                </p>
              </div>

            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={labelStyle}>First Name</label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  placeholder="Your first name"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Phone</label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Mailing Address</label>
                <input type="text" value={address} onChange={e => setAddress(e.target.value)}
                  placeholder="123 Main Street" style={inputStyle} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 100px", gap: 8 }}>
                <div>
                  <label style={labelStyle}>City</label>
                  <input type="text" value={city} onChange={e => setCity(e.target.value)}
                    placeholder="Miami" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>State</label>
                  <input type="text" value={state} onChange={e => setState(e.target.value)}
                    placeholder="FL" maxLength={2} style={{ ...inputStyle, textTransform: "uppercase" }} />
                </div>
                <div>
                  <label style={labelStyle}>ZIP</label>
                  <input type="text" value={zip} onChange={e => setZip(e.target.value)}
                    placeholder="33101" style={inputStyle} />
                </div>
              </div>

              {status === "error" && (
                <p style={{ color: "#dc2626", fontSize: 13, margin: 0 }}>Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  background: "#1d4ed8",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "16px 24px",
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                  marginTop: 4,
                  width: "100%",
                  opacity: status === "loading" ? 0.7 : 1,
                }}
              >
                {status === "loading" ? "Sending…" : "Send Me the Free Book →"}
              </button>

              <p style={{ fontSize: 12, color: "#6b7280", textAlign: "center", margin: 0 }}>
                🔒 No sales calls. No pitches. Just the report.
              </p>
            </form>
          </div>
        </div>

        {/* CONTENT COLUMN */}
        <div className="bh-content-col">
          <h1 style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.18, color: "#0f172a", margin: "32px 0 12px", letterSpacing: "-0.02em" }}>
            Every Major Technology Wave Creates a Window — Then Closes It.
          </h1>

          <p style={{ fontSize: 14, fontStyle: "italic", color: "#6b7280", margin: "0 0 20px" }}>
            By Dean Gallagher, Independent Investor
          </p>

          <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.7, margin: "0 0 24px" }}>
            You watched the Internet reshape the economy. Then mobile. Then cloud. Each time, early investors who understood the infrastructure layer did extraordinarily well. Those who waited for consensus caught very little of it. The AI infrastructure window is open right now.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, margin: "0 0 28px" }}>
            {[
              "Why the economic models investors rely on were built for a world that no longer exists",
              "The 5 infrastructure chokepoints every AI system runs through",
              "A plain-English research framework — no hype, no speculation",
            ].map(b => (
              <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ color: "#16a34a", fontSize: 18, lineHeight: 1.4, flexShrink: 0, fontWeight: 700 }}>✓</span>
                <span style={{ color: "#374151", fontSize: 15, lineHeight: 1.55 }}>{b}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9ca3af", margin: 0, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
            18,000 Words · 7 Chapters · Free
          </p>
        </div>

      </div>

      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "24px 20px", textAlign: "center", marginTop: 40 }}>
        <p style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
          Beyond Humanity is an independent economic research publication. This report is for informational and educational purposes only. It does not constitute investment advice or an offer to buy or sell any security.
        </p>
      </footer>
    </main>
  );
}
