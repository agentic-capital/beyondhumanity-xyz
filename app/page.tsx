"use client";
import { useState } from "react";

export default function HomePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main style={{ background: "#030a14", minHeight: "100vh", fontFamily: "Georgia, serif" }}>

      {/* HERO */}
      <section style={{ borderBottom: "1px solid #0f2040", padding: "80px 24px 64px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f5c842", marginBottom: 24 }}>
            Free Research Report · 2026 Edition
          </p>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, lineHeight: 1, color: "#fff", margin: "0 0 24px" }}>
            Beyond<br />
            <em style={{ color: "#f5c842", fontStyle: "italic" }}>Humanity.</em>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "#cbd5e1", lineHeight: 1.7, maxWidth: 600, marginBottom: 16 }}>
            350 million AI agents are active today. By 2030, more than every human who ever lived.
            Most investors haven&apos;t processed what this means for markets, capital flows, and where wealth concentrates next.
          </p>
          <p style={{ fontSize: "1rem", color: "#94a3b8", lineHeight: 1.7, maxWidth: 580 }}>
            This 18,000-word report breaks down the economic shift, the infrastructure it runs on,
            and why the window to position ahead of consensus is closing fast.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div style={{ border: "1px solid #f5c842", padding: "40px 36px", background: "#060e1c" }}>
            <p style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f5c842", marginBottom: 8 }}>
              Get the Free Report
            </p>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 300, color: "#fff", marginBottom: 6 }}>
              Download <em style={{ color: "#f5c842" }}>Beyond Humanity</em>
            </h2>
            <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: 32 }}>
              18,000 words. No fluff. Delivered to your inbox instantly.
            </p>

            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "24px 0" }}>
                <p style={{ fontSize: "1.5rem", marginBottom: 12 }}>✓</p>
                <p style={{ color: "#4ade80", fontFamily: "monospace", fontSize: 13, letterSpacing: "0.1em" }}>Report sent — check your inbox.</p>
                <a
                  href="/beyond-humanity-report.pdf"
                  download
                  style={{ display: "inline-block", marginTop: 20, fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5c842", textDecoration: "none" }}
                >
                  ↓ Direct download if email doesn&apos;t arrive
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontFamily: "monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#f5c842", marginBottom: 8 }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder="Your first name"
                    style={{ width: "100%", background: "#030a14", border: "1px solid #0f2040", color: "#fff", padding: "12px 16px", fontSize: 14, outline: "none", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = "#f5c842"}
                    onBlur={e => e.target.style.borderColor = "#0f2040"}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#f5c842", marginBottom: 8 }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    style={{ width: "100%", background: "#030a14", border: "1px solid #0f2040", color: "#fff", padding: "12px 16px", fontSize: 14, outline: "none", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = "#f5c842"}
                    onBlur={e => e.target.style.borderColor = "#0f2040"}
                  />
                </div>

                {status === "error" && (
                  <p style={{ color: "#f87171", fontFamily: "monospace", fontSize: 12 }}>
                    Something went wrong. Try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    background: "#f5c842", color: "#030a14", border: "none",
                    padding: "14px 24px", fontFamily: "monospace", fontSize: 12,
                    letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer",
                    fontWeight: 700, marginTop: 8,
                    opacity: status === "loading" ? 0.7 : 1
                  }}
                >
                  {status === "loading" ? "Sending…" : "Send Me the Report →"}
                </button>

                <p style={{ fontSize: 11, color: "#475569", textAlign: "center" }}>
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STATS */}
      <section style={{ borderTop: "1px solid #0f2040", borderBottom: "1px solid #0f2040", padding: "48px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: "#0f2040" }}>
          {[
            { val: "18,000", label: "Words of research" },
            { val: "7", label: "Chapters" },
            { val: "Free", label: "No cost, no catch" },
          ].map(({ val, label }) => (
            <div key={label} style={{ background: "#030a14", padding: "32px 24px", textAlign: "center" }}>
              <p style={{ fontFamily: "monospace", fontSize: "2rem", fontWeight: 700, color: "#f5c842", marginBottom: 8 }}>{val}</p>
              <p style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748b" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S IN THE REPORT */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#f5c842", marginBottom: 24 }}>What&apos;s Inside</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#0f2040" }}>
            {[
              { ch: "I", title: "The Fracture", desc: "The one economic assumption that broke in 2024 — and why every forecast written before it is now wrong." },
              { ch: "II", title: "The Evidence", desc: "GAAP-reported revenue. 85% of the Fortune 500 in production. The agent economy is not a thesis — it's a line item." },
              { ch: "III", title: "The Assumption That Broke", desc: "GDP, wages, inflation — every model was built on a biological constraint that no longer exists." },
              { ch: "IV", title: "Why Nobody Is Acting", desc: "The Kodak moment for the entire asset management industry. The gap between knowing and acting." },
              { ch: "V", title: "The Trade", desc: "A 39-month personal account. Every position, every rotation, the drawdown that tested conviction." },
              { ch: "VI", title: "The Substrate", desc: "ASML. TSMC. SK Hynix. The 5 chokepoints that every AI agent runs on — and where durable value accrues." },
              { ch: "VII", title: "The Window", desc: "18 to 24 months. When this closes, the repricing is over. Where we are right now." },
            ].map(({ ch, title, desc }) => (
              <div key={ch} style={{ background: "#060e1c", padding: "20px 24px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#f5c842", opacity: 0.6, width: 24, flexShrink: 0, marginTop: 2 }}>{ch}</span>
                <div>
                  <p style={{ color: "#fff", fontSize: "0.9rem", marginBottom: 4 }}>{title}</p>
                  <p style={{ color: "#64748b", fontSize: "0.8rem", lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ borderTop: "1px solid #0f2040", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 300, color: "#fff", marginBottom: 16 }}>
            The window is open.<br /><em style={{ color: "#f5c842" }}>Get the report.</em>
          </h2>
          <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: 32 }}>Free. Instant delivery. No obligation.</p>
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ display: "inline-block", background: "#f5c842", color: "#030a14", padding: "14px 32px", fontFamily: "monospace", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}
          >
            Download Free Report →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #0f2040", padding: "24px", textAlign: "center" }}>
        <p style={{ fontFamily: "monospace", fontSize: 10, color: "#334155", lineHeight: 1.8 }}>
          Beyond Humanity is an independent economic research publication. This report is for informational purposes only and does not constitute investment advice or an offer to buy or sell any security. Past performance is not indicative of future results.
        </p>
      </footer>

    </main>
  );
}
