"use client";
import { useState, useEffect, useRef } from "react";
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
  const addressRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    // Load Google Places script
    const scriptId = "google-places-script";
    if (document.getElementById(scriptId)) return;
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCTCF7dQIk4B-BxtjVU0qIcPbKJCuIKBSg&libraries=places`;
    script.async = true;
script.onload = () => initAutocomplete();
    document.head.appendChild(script);
  }, []);

  function initAutocomplete() {
    if (!addressRef.current || !(window as unknown as Record<string,unknown>).google) return;
    const g = (window as unknown as { google: { maps: { places: { Autocomplete: new (el: HTMLElement, opts: object) => { addListener: (e: string, cb: () => void) => void; getPlace: () => { address_components?: Array<{ long_name: string; short_name: string; types: string[] }>, formatted_address?: string } } } } } }).google;
    const autocomplete = new g.maps.places.Autocomplete(addressRef.current, {
      types: ["address"],
      componentRestrictions: { country: "us" },
    });
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place.address_components) return;
      let streetNumber = "", route = "", locality = "", adminArea = "", postalCode = "";
      for (const c of place.address_components) {
        if (c.types.includes("street_number")) streetNumber = c.long_name;
        if (c.types.includes("route")) route = c.long_name;
        if (c.types.includes("locality")) locality = c.long_name;
        if (c.types.includes("administrative_area_level_1")) adminArea = c.short_name;
        if (c.types.includes("postal_code")) postalCode = c.long_name;
      }
      setAddress(`${streetNumber} ${route}`.trim());
      setCity(locality);
      setState(adminArea);
      setZip(postalCode);
    });
  }

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
    padding: "11px 14px",
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
    marginBottom: 5,
  };

  const bullets = [
    "Why the economic models investors rely on were built for a world that no longer exists",
    "The 5 infrastructure chokepoints every AI system runs through: why they matter to your portfolio",
    "A plain-English research framework any self-directed investor can apply today",
  ];

  return (
    <main style={{ background: "#fff", minHeight: "100vh", color: "#0f172a", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <style>{`
        * { box-sizing: border-box; }

        /* ── Layout ── */
        .bh-wrap {
          max-width: 480px;
          margin: 0 auto;
          padding: 18px 18px 0;
          display: flex;
          flex-direction: column;
        }
        /* Mobile: content first (headline), then form */
        .bh-content-col { order: 1; margin-bottom: 0; }
        .bh-form-col    { order: 2; }

        @media (min-width: 768px) {
          .bh-wrap {
            max-width: 1040px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: start;
            padding: 56px 32px;
          }
          .bh-content-col { order: 1; }
          .bh-form-col    { order: 2; }
        }

        /* ── Show/hide by viewport ── */
        /* Things that only show on desktop (full copy / bullets in content col) */
        .bh-desktop-only { display: none; }
        @media (min-width: 768px) {
          .bh-desktop-only { display: block; }
        }
        /* Bullets flex wrapper */
        .bh-bullets { display: none; flex-direction: column; gap: 12px; }
        @media (min-width: 768px) {
          .bh-bullets { display: flex; }
        }
        /* Mobile-only bullets (shown below form on mobile) */
        .bh-mobile-bullets { display: flex; flex-direction: column; gap: 12px; margin: 24px 0 0; }
        @media (min-width: 768px) {
          .bh-mobile-bullets { display: none; }
        }

        /* ── CTA Button ── */
        .bh-btn {
          background: #1d4ed8;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 16px 24px;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          width: 100%;
          letter-spacing: -0.01em;
          transition: background 0.15s;
        }
        .bh-btn:hover  { background: #1e40af; }
        .bh-btn:disabled { opacity: 0.7; cursor: default; }
      `}</style>

      <div className="bh-wrap">

        {/* ══════════════════════════════════════
            CONTENT COLUMN
            Mobile:  shows badge + H1 + 1-line subhead only
            Desktop: shows full copy + bullets
        ══════════════════════════════════════ */}
        <div className="bh-content-col">

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b7280", margin: "0 0 10px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
            Free Book · 2026
          </p>

          {/* Pre-headline pattern hook */}
          <p style={{ fontSize: 14, fontWeight: 700, color: "#6b7280", margin: "0 0 8px", letterSpacing: "0.01em" }}>
            The internet. Mobile. Cloud computing. Each one created the same opportunity.
          </p>

          <h1 style={{ fontSize: "clamp(24px, 6vw, 34px)", fontWeight: 800, lineHeight: 1.15, color: "#0f172a", margin: "0 0 12px", letterSpacing: "-0.025em" }}>
            Every Major Technology Wave Opens a Window. Then It Closes.
          </h1>

          {/* Mobile: 1-sentence hook for self-directed investor */}
          <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.6, margin: "0 0 14px" }}>
            If you manage your own investments, this book was written for you. The window is open right now. And this is the research that explains why.
          </p>

          {/* Desktop: extended copy */}
          <div className="bh-desktop-only">
            <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.68, margin: "0 0 20px" }}>
              Each time, early investors who understood the <strong>infrastructure layer</strong> did extraordinarily well. Those who waited for consensus caught very little of it.
            </p>
            <p style={{ fontSize: 16, color: "#0f172a", lineHeight: 1.68, margin: "0 0 24px", fontWeight: 600 }}>
              Written for self-directed investors who do their own research. Plain English. No hype. No speculation.
            </p>
          </div>

          {/* Desktop: bullets */}
          <div className="bh-bullets">
            {bullets.map(b => (
              <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ color: "#16a34a", fontSize: 17, lineHeight: 1.45, flexShrink: 0, fontWeight: 700 }}>✓</span>
                <span style={{ color: "#374151", fontSize: 15, lineHeight: 1.55 }}>{b}</span>
              </div>
            ))}
          </div>

          {/* Desktop: social proof + byline */}
          <div className="bh-desktop-only">
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9ca3af", margin: "22px 0 4px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
              18,000 Words · 7 Chapters · Free
            </p>
            <p style={{ fontSize: 13, fontStyle: "italic", color: "#6b7280", margin: 0 }}>
              By Dean Gallagher, Independent Investor
            </p>
          </div>

        </div>

        {/* ══════════════════════════════════════
            FORM COLUMN (book + form)
        ══════════════════════════════════════ */}
        <div className="bh-form-col">

          {/* Book cover */}
          <div style={{ textAlign: "center", margin: "4px 0 14px" }}>
            <img
              src="/book-cover.png"
              alt="Beyond Humanity. Free Book"
              style={{
                width: 190,
                height: "auto",
                borderRadius: 6,
                boxShadow: "0 24px 64px rgba(0,0,0,0.38), 0 8px 24px rgba(0,0,0,0.22), -8px 4px 0 rgba(0,0,0,0.14), -4px 2px 0 rgba(0,0,0,0.09)",
                display: "inline-block",
              }}
            />
            <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 8, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.5 }}>
              18,000 Words · 7 Chapters<br />Free · Printed Copy Shipped
            </p>
          </div>

          {/* Trust badge above form */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 13, color: "#374151", fontWeight: 600 }}>🔒</span>
            <span style={{ fontSize: 12, color: "#6b7280" }}>No sales calls. No pitches. Just the book.</span>
          </div>

          {/* Form card */}
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "20px 20px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>

            <h2 style={{ fontSize: 19, fontWeight: 700, color: "#0f172a", margin: "0 0 4px", lineHeight: 1.25 }}>
              Get the Free Book
            </h2>
            <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 14px", lineHeight: 1.5 }}>
              Shipped to your door. No obligation.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 11 }}>
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
                <label style={labelStyle}>Phone <span style={{ color: "#9ca3af", fontWeight: 400 }}>(optional)</span></label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Mailing Address</label>
                <input ref={addressRef} type="text" value={address} onChange={e => setAddress(e.target.value)}
                  placeholder="Start typing your address…" style={inputStyle} autoComplete="off" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 56px 80px", gap: 7 }}>
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

              <button type="submit" disabled={status === "loading"} className="bh-btn" style={{ marginTop: 5 }}>
                {status === "loading" ? "Sending…" : "Send Me the Free Book →"}
              </button>

              <p style={{ fontSize: 12, color: "#6b7280", textAlign: "center", margin: "2px 0 0" }}>
                Printed copy shipped free to your door.
              </p>
            </form>
          </div>

          {/* Mobile: bullets appear below form */}
          <div className="bh-mobile-bullets">
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9ca3af", margin: "0 0 12px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
              What&apos;s Inside
            </p>
            {bullets.map(b => (
              <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ color: "#16a34a", fontSize: 17, lineHeight: 1.45, flexShrink: 0, fontWeight: 700 }}>✓</span>
                <span style={{ color: "#374151", fontSize: 15, lineHeight: 1.55 }}>{b}</span>
              </div>
            ))}
            <p style={{ fontSize: 13, fontStyle: "italic", color: "#6b7280", margin: "8px 0 0" }}>
              By Dean Gallagher, Independent Investor
            </p>
          </div>

        </div>
      </div>

      <footer style={{ borderTop: "1px solid #e5e7eb", padding: "24px 20px", textAlign: "center", marginTop: 36 }}>
        <p style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.7, maxWidth: 560, margin: "0 auto" }}>
          Beyond Humanity is an independent economic research publication. This report is for informational and educational purposes only. It does not constitute investment advice or an offer to buy or sell any security.
        </p>
      </footer>
    </main>
  );
}
