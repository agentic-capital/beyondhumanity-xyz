"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

type Variant = {
  hero: string;
  sub: string;
  bullets?: string[];
  cta: string;
  preheadline?: string;
  bigNumber?: string;
  bigNumberLabel?: string;
  timeline?: { era: string; years: string }[];
};

const NAVY = "#030a14";
const NAVY_2 = "#0a1828";
const GOLD = "#f5c842";
const TEAL = "#00c4e0";
const BORDER = "#1e2c44";
const MUTED = "#8a9bb3";

// Extend window type for Google Maps
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google?: any;
    initGooglePlaces?: () => void;
  }
}

export default function VariantClient({ variant }: { variant: Variant }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateField, setStateField] = useState("");
  const [zip, setZip] = useState("");

  const addressInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<unknown>(null);

  const initAutocomplete = useCallback(() => {
    if (!addressInputRef.current || !window.google?.maps?.places) return;
    if (autocompleteRef.current) return; // already initialized

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ac = new (window.google.maps.places.Autocomplete as any)(
      addressInputRef.current,
      {
        types: ["address"],
        componentRestrictions: { country: "us" },
        fields: ["address_components", "formatted_address"],
      }
    );
    autocompleteRef.current = ac;

    ac.addListener("place_changed", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const place = ac.getPlace() as any;
      if (!place?.address_components) return;

      let streetNumber = "";
      let route = "";
      let cityVal = "";
      let stateVal = "";
      let zipVal = "";

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      for (const component of place.address_components as any[]) {
        const types: string[] = component.types;
        if (types.includes("street_number")) streetNumber = component.long_name;
        if (types.includes("route")) route = component.short_name;
        if (types.includes("locality")) cityVal = component.long_name;
        if (types.includes("administrative_area_level_1")) stateVal = component.short_name;
        if (types.includes("postal_code")) zipVal = component.long_name;
      }

      const streetAddress = [streetNumber, route].filter(Boolean).join(" ");
      setAddress(streetAddress);
      setCity(cityVal);
      setStateField(stateVal);
      setZip(zipVal);
    });
  }, []);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY;
    if (!apiKey) return;

    // If already loaded
    if (window.google?.maps?.places) {
      initAutocomplete();
      return;
    }

    // Set up callback
    window.initGooglePlaces = initAutocomplete;

    // Inject script once
    if (!document.getElementById("google-places-script")) {
      const script = document.createElement("script");
      script.id = "google-places-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGooglePlaces`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    return () => {
      window.initGooglePlaces = undefined;
    };
  }, [initAutocomplete]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, phone, address, city, state: stateField, zip }),
      });
      if (!res.ok) throw new Error();
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid ${BORDER}`,
    borderRadius: 4,
    padding: "12px 14px",
    fontSize: 16,
    color: "#fff",
    background: NAVY_2,
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    fontWeight: 700,
    color: MUTED,
    marginBottom: 5,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  };

  return (
    <main style={{ background: NAVY, minHeight: "100vh", color: "#fff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", position: "relative", overflow: "hidden" }}>
      {/* Gradient wash — subtle ocean/waterfront feel */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 100% 100%, rgba(0,100,80,0.08) 0%, transparent 70%)", zIndex: 0 }} />

      {/* Palm tree SVG silhouettes — right side, fixed, low opacity */}
      <div style={{ position: "fixed", right: 0, top: 0, bottom: 0, width: 220, pointerEvents: "none", opacity: 0.08, zIndex: 0 }} aria-hidden="true">
        <svg viewBox="0 0 220 800" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
          {/* Trunk 1 */}
          <path d="M160 800 C158 720 155 640 152 560 C149 480 145 400 148 320 C151 240 158 180 162 140" stroke="#00c4e0" strokeWidth="7" fill="none" strokeLinecap="round"/>
          {/* Fronds 1 */}
          <path d="M162 140 C140 110 100 95 75 80 M162 140 C155 105 165 70 175 50 M162 140 C185 112 215 105 230 95 M162 140 C170 108 195 100 215 115 M162 140 C145 115 130 100 110 110" stroke="#00c4e0" strokeWidth="4" fill="none" strokeLinecap="round"/>
          {/* Trunk 2 — smaller, offset */}
          <path d="M195 800 C193 740 190 680 188 620 C186 560 183 500 185 450 C187 400 191 360 194 330" stroke="#00c4e0" strokeWidth="5" fill="none" strokeLinecap="round"/>
          {/* Fronds 2 */}
          <path d="M194 330 C175 305 145 295 125 285 M194 330 C188 300 196 272 204 255 M194 330 C212 308 230 303 242 298 M194 330 C200 305 215 298 228 310" stroke="#00c4e0" strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Top announcement banner */}
      <div style={{ background: GOLD, color: NAVY, textAlign: "center", padding: "10px 20px", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", position: "relative", zIndex: 10 }}>
        🌴 Palm Beach County &nbsp;·&nbsp; Private Offer &nbsp;·&nbsp; Limited Time
      </div>
      <style>{`
        * { box-sizing: border-box; }
        .bh-wrap {
          max-width: 560px;
          margin: 0 auto;
          padding: 28px 20px 0;
        }
        @media (min-width: 768px) {
          .bh-wrap {
            max-width: 1080px;
            display: grid;
            grid-template-columns: 1.1fr 1fr;
            gap: 56px;
            align-items: start;
            padding: 56px 32px;
          }
        }
        .bh-content { order: 1; }
        .bh-form-col { order: 2; }
        .bh-bullets { display: flex; flex-direction: column; gap: 12px; margin-top: 20px; }
        .bh-btn {
          background: ${GOLD};
          color: ${NAVY};
          border: none;
          border-radius: 6px;
          padding: 17px 24px;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
          width: 100%;
          letter-spacing: -0.01em;
          transition: background 0.15s, transform 0.05s;
        }
        .bh-btn:hover  { background: #ffd45a; }
        .bh-btn:active { transform: translateY(1px); }
        .bh-btn:disabled { opacity: 0.7; cursor: default; }
        input::placeholder { color: #4a5a73; }
        /* Style the Google Places autocomplete dropdown to match dark theme */
        .pac-container {
          background: #0a1828 !important;
          border: 1px solid #1e2c44 !important;
          border-radius: 6px !important;
          margin-top: 4px !important;
          box-shadow: 0 8px 24px rgba(0,0,0,0.5) !important;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
        }
        .pac-item {
          background: #0a1828 !important;
          color: #cdd5e1 !important;
          border-top: 1px solid #1e2c44 !important;
          padding: 10px 14px !important;
          cursor: pointer !important;
          font-size: 14px !important;
        }
        .pac-item:hover, .pac-item-selected {
          background: #0f2035 !important;
        }
        .pac-item-query {
          color: #ffffff !important;
          font-size: 14px !important;
        }
        .pac-matched {
          color: #f5c842 !important;
          font-weight: 700 !important;
        }
        .pac-icon { display: none !important; }
        .pac-logo::after { display: none !important; }
      `}</style>

      <div className="bh-wrap" style={{ position: "relative", zIndex: 1 }}>

        {/* CONTENT */}
        <div className="bh-content">
          {variant.preheadline && (
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: GOLD, margin: "0 0 14px",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            }}>
              {variant.preheadline}
            </p>
          )}

          <h1 style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(28px, 6.4vw, 48px)",
            fontWeight: 700, lineHeight: 1.12,
            color: "#fff", margin: "0 0 20px",
            letterSpacing: "-0.02em",
          }}>
            {variant.hero}
          </h1>

          {variant.bigNumber && (
            <div style={{ margin: "8px 0 24px" }}>
              <div style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(64px, 14vw, 120px)", fontWeight: 700,
                color: GOLD, lineHeight: 1, letterSpacing: "-0.03em",
              }}>
                {variant.bigNumber}
              </div>
              <div style={{ height: 4, background: TEAL, width: 80, marginTop: 12 }} />
              <p style={{ fontSize: 14, color: MUTED, margin: "12px 0 0", lineHeight: 1.5 }}>
                {variant.bigNumberLabel}
              </p>
            </div>
          )}

          {variant.timeline && (
            <div style={{ margin: "14px 0 24px", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "16px 20px", background: NAVY_2 }}>
              {variant.timeline.map((t, i) => (
                <div key={t.era} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: i < variant.timeline!.length - 1 ? `1px solid ${BORDER}` : "none",
                }}>
                  <span style={{
                    fontSize: 14, fontWeight: 600,
                    color: i === variant.timeline!.length - 1 ? GOLD : "#fff",
                  }}>{t.era}</span>
                  <span style={{
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                    fontSize: 13,
                    color: i === variant.timeline!.length - 1 ? GOLD : MUTED,
                    fontWeight: i === variant.timeline!.length - 1 ? 700 : 400,
                  }}>{t.years}</span>
                </div>
              ))}
            </div>
          )}

          <p style={{ fontSize: 17, color: "#cdd5e1", lineHeight: 1.6, margin: "0 0 8px" }}>
            {variant.sub}
          </p>

          {variant.bullets && (
            <div className="bh-bullets">
              {variant.bullets.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ color: TEAL, fontSize: 18, lineHeight: 1.3, flexShrink: 0, fontWeight: 700 }}>—</span>
                  <span style={{ color: "#cdd5e1", fontSize: 15, lineHeight: 1.55 }}>{b}</span>
                </div>
              ))}
            </div>
          )}

          <p style={{ fontSize: 12, color: MUTED, margin: "28px 0 0", fontStyle: "italic", lineHeight: 1.6 }}>
            18,000 words · 7 chapters · No fund pitch · No email required to read it · Free
          </p>
        </div>

        {/* FORM COLUMN */}
        <div className="bh-form-col">
          {/* Scarcity badge */}
          <div style={{ textAlign: "center", margin: "0 0 12px" }}>
            <span style={{
              display: "inline-block",
              border: `1px solid ${GOLD}`,
              color: GOLD,
              background: NAVY,
              borderRadius: 999,
              padding: "5px 14px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.03em",
            }}>🌴 Palm Beach County Exclusive — Limited copies remaining</span>
          </div>

          <div style={{ textAlign: "center", margin: "0 0 16px" }}>
            <img
              src="/book-cover.png"
              alt="Beyond Humanity"
              style={{
                width: 220, height: "auto", borderRadius: 4,
                boxShadow: "0 28px 64px rgba(0,0,0,0.55), 0 12px 24px rgba(245,200,66,0.10)",
                display: "inline-block",
              }}
            />
          </div>

          <div style={{
            background: NAVY_2,
            border: `1px solid ${BORDER}`,
            borderRadius: 12, padding: "22px 22px 24px",
            boxShadow: "0 8px 28px rgba(0,0,0,0.3)",
          }}>
            <h2 style={{ fontSize: 19, fontWeight: 700, color: "#fff", margin: "0 0 6px", lineHeight: 1.25 }}>
              Claim your Palm Beach copy
            </h2>
            <p style={{ fontSize: 13, color: MUTED, margin: "0 0 16px", lineHeight: 1.5 }}>
              Dean personally signs and ships each copy to Palm Beach County neighbors. Free. No obligation.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div>
                <label style={labelStyle}>First name</label>
                <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Your first name" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone <span style={{ color: "#4a5a73", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Mailing address</label>
                <input
                  ref={addressInputRef}
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Start typing your address…"
                  style={inputStyle}
                  autoComplete="off"
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 86px", gap: 8 }}>
                <div>
                  <label style={labelStyle}>City</label>
                  <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
                    placeholder="Palm Beach" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>State</label>
                  <input type="text" value={stateField} onChange={(e) => setStateField(e.target.value)}
                    placeholder="FL" maxLength={2} style={{ ...inputStyle, textTransform: "uppercase" }} />
                </div>
                <div>
                  <label style={labelStyle}>ZIP</label>
                  <input type="text" value={zip} onChange={(e) => setZip(e.target.value)}
                    placeholder="33480" style={inputStyle} />
                </div>
              </div>

              {status === "error" && (
                <p style={{ color: "#fca5a5", fontSize: 13, margin: 0 }}>Something went wrong. Please try again.</p>
              )}

              <p style={{ fontSize: 12, color: MUTED, fontStyle: "italic", margin: "4px 0 2px", lineHeight: 1.6 }}>
                &ldquo;I&rsquo;m giving these away because I want feedback from other serious investors here in Palm Beach County. That&rsquo;s it.&rdquo;
              </p>

              <button type="submit" disabled={status === "loading"} className="bh-btn" style={{ marginTop: 6 }}>
                {status === "loading" ? "Sending…" : variant.cta}
              </button>

              <p style={{ fontSize: 12, color: MUTED, textAlign: "center", margin: "4px 0 0" }}>
                Palm Beach County only &nbsp;·&nbsp; Limited print run &nbsp;·&nbsp; Ships free
              </p>
            </form>
          </div>
        </div>
      </div>

      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "28px 20px", textAlign: "center", marginTop: 48, position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
          For informational and educational purposes only. Not investment advice.
          <br />
          Beyond Humanity Research · Dean Gallagher · Palm Beach County, Florida
        </p>
      </footer>
    </main>
  );
}
