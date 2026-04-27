"use client";
import { useState } from "react";

export default function HomePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, phone }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1.5px solid #d1d5db",
    borderRadius: 4,
    padding: "13px 16px",
    fontSize: 15,
    color: "#111",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  };

  return (
    <main style={{ background: "#fff", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* Responsive styles */}
      <style>{`
        .above-fold {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          min-height: 100vh;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .headline-col {
          padding: 48px 0;
          order: 1;
        }
        .form-col {
          order: 2;
        }
        @media (max-width: 768px) {
          .above-fold {
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding: 32px 16px;
            min-height: unset;
          }
          .form-col {
            order: 1;
            width: 100%;
          }
          .headline-col {
            order: 2;
            padding: 0 0 32px;
            width: 100%;
          }
        }
        .bottom-cta-btn {
          display: inline-block;
          background: #1d4ed8;
          color: #fff;
          padding: 15px 36px;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
        }
        .bottom-cta-btn:hover {
          background: #1e40af;
        }
      `}</style>

      {/* ABOVE THE FOLD */}
      <section className="above-fold">

        {/* LEFT — Headline + credibility */}
        <div className="headline-col">
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6b7280", marginBottom: 20 }}>
            Free Research Report · 2026
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.12, color: "#0f172a", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
            Every Major Technology Wave<br />Creates a Window —<br />Then Closes It.
          </h1>
          <p style={{ fontSize: "1.05rem", fontWeight: 500, color: "#374151", margin: "0 0 6px", lineHeight: 1.5 }}>
            You watched the Internet reshape the economy. Then mobile. Then cloud. Each time, early investors who understood the infrastructure layer did extraordinarily well. Those who waited for consensus caught very little of it.
          </p>
          <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.7, margin: "0 0 10px" }}>
            The AI infrastructure window is open right now.
          </p>
          <p style={{ fontSize: "0.9rem", fontStyle: "italic", color: "#6b7280", marginBottom: 28 }}>
            By Dean Gallagher, Independent Investor
          </p>
          <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.7, margin: "0 0 28px", maxWidth: 480 }}>
            Software is replacing jobs across every industry — faster than anyone expected. This free 18,000-word report explains what that means for asset allocation, why most portfolios are positioned in the wrong layer, and where value is concentrating next.
          </p>

          {/* Book cover */}
          <div style={{ marginBottom: 32 }}>
            <img
              src="/book-cover.png"
              alt="Beyond Humanity — Free Research Report"
              style={{ width: 160, height: "auto", boxShadow: "0 8px 32px rgba(0,0,0,0.25)", borderRadius: 4 }}
            />
          </div>

          {/* Bullets */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "Why the economic models investors rely on were built for a world that no longer exists",
              "The 5 infrastructure chokepoints every AI system runs through",
              "A plain-English research framework — no hype, no speculation",
            ].map(b => (
              <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ color: "#16a34a", fontSize: 18, lineHeight: 1.4, flexShrink: 0 }}>✓</span>
                <span style={{ color: "#374151", fontSize: "0.95rem", lineHeight: 1.5 }}>{b}</span>
              </div>
            ))}
          </div>

          {/* Social proof strip */}
          <div style={{ display: "flex", gap: 24, marginTop: 36, paddingTop: 28, borderTop: "1px solid #e5e7eb" }}>
            {[["18,000", "Words"], ["7", "Chapters"], ["Free", "No cost"]].map(([v, l]) => (
              <div key={l}>
                <p style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>{v}</p>
                <p style={{ fontSize: "0.75rem", color: "#9ca3af", margin: "2px 0 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Form box */}
        <div className="form-col">
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: "40px 36px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>Check your inbox.</h3>
                <p style={{ color: "#6b7280", marginBottom: 24 }}>Your copy of <em>Beyond Humanity</em> is on its way.</p>
                <a href="/beyond-humanity-report.pdf" download
                  style={{ display: "inline-block", background: "#1d4ed8", color: "#fff", padding: "12px 24px", borderRadius: 6, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                  ↓ Direct Download
                </a>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>
                  Get the Free Report
                </h2>
                <p style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: 28, lineHeight: 1.5 }}>
                  Free. Instant delivery. No obligation.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>First Name</label>
                    <input type="text" required value={firstName} onChange={e => setFirstName(e.target.value)}
                      placeholder="Your first name" style={inputStyle}
                      onFocus={e => e.currentTarget.style.borderColor = "#1d4ed8"}
                      onBlur={e => e.currentTarget.style.borderColor = "#d1d5db"} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Email Address</label>
                    <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                      placeholder="you@example.com" style={inputStyle}
                      onFocus={e => e.currentTarget.style.borderColor = "#1d4ed8"}
                      onBlur={e => e.currentTarget.style.borderColor = "#d1d5db"} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Phone <span style={{ fontWeight: 400, color: "#9ca3af" }}>(optional)</span></label>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000" style={inputStyle}
                      onFocus={e => e.currentTarget.style.borderColor = "#1d4ed8"}
                      onBlur={e => e.currentTarget.style.borderColor = "#d1d5db"} />
                  </div>

                  {status === "error" && (
                    <p style={{ color: "#dc2626", fontSize: 13, margin: 0 }}>Something went wrong. Please try again.</p>
                  )}

                  <button type="submit" disabled={status === "loading"}
                    style={{
                      background: "#1d4ed8", color: "#fff", border: "none", borderRadius: 6,
                      padding: "15px 24px", fontSize: 15, fontWeight: 700, cursor: "pointer",
                      letterSpacing: "0.01em", marginTop: 4,
                      opacity: status === "loading" ? 0.7 : 1,
                    }}>
                    {status === "loading" ? "Sending…" : "Send Me the Free Report →"}
                  </button>

                  <p style={{ fontSize: 12, color: "#6b7280", textAlign: "center", margin: 0 }}>
                    🔒 No sales calls. No pitches. Just the report.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE — below fold */}
      <section style={{ background: "#f8fafc", borderTop: "1px solid #e5e7eb", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0f172a", marginBottom: 8, textAlign: "center" }}>What's Inside</h2>
          <p style={{ color: "#6b7280", textAlign: "center", marginBottom: 48, fontSize: "1rem" }}>Seven chapters. Every concept explained plainly.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              ["I", "The Fracture", "The one economic assumption that broke in 2024 — and why every forecast written before it needs to be revisited."],
              ["II", "The Evidence", "Publicly reported revenue. Large-company deployment data. The AI infrastructure shift is already showing up in earnings."],
              ["III", "The Assumption That Broke", "GDP, employment, inflation — every model built on a constraint that is now being removed faster than policymakers understand."],
              ["IV", "Why Most Investors Are Waiting", "Why markets are slow to reprice structural shifts — and what the historical record of previous technology waves tells us about timing."],
              ["V", "The Research Framework", "How to analyze the AI infrastructure stack as an independent investor — the questions worth asking and the metrics worth tracking."],
              ["VI", "The Substrate", "The 5 chokepoints every AI system runs through — hardware, fabrication, memory, power, and inference capacity."],
              ["VII", "The Window", "How long structural mispricings typically persist before consensus closes them. Where we appear to be right now."],
            ].map(([ch, title, desc], i) => (
              <div key={ch} style={{ display: "flex", gap: 20, padding: "24px 28px", background: i % 2 === 0 ? "#fff" : "#f8fafc", border: "1px solid #e5e7eb", borderTop: i === 0 ? "1px solid #e5e7eb" : "none" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#9ca3af", width: 20, flexShrink: 0, paddingTop: 2 }}>{ch}</span>
                <div>
                  <p style={{ fontWeight: 700, color: "#0f172a", margin: "0 0 4px", fontSize: "0.95rem" }}>{title}</p>
                  <p style={{ color: "#6b7280", margin: 0, fontSize: "0.875rem", lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>Ready to read it?</h3>
            <p style={{ color: "#6b7280", marginBottom: 28 }}>Free. Instant delivery. No obligation.</p>
            <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="bottom-cta-btn">
              Get the Free Report →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.7, maxWidth: 700, margin: "0 auto" }}>
          Beyond Humanity is an independent economic research publication. This report is for informational and educational purposes only. It does not constitute investment advice or an offer to buy or sell any security. All views are those of the author.
        </p>
      </footer>

    </main>
  );
}
