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
    padding: "14px 14px",
    fontSize: 16,
    color: "#fff",
    background: NAVY_2,
    outline: "none",
    boxSizing: "border-box",
    minHeight: 52,
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


      <style>{`
        * { box-sizing: border-box; }

        /* Mobile-first page wrapper */
        .bh-wrap {
          max-width: 540px;
          margin: 0 auto;
          padding: 16px 12px 0;
        }

        /* Single column stack — mobile is the only layout that matters */
        .bh-page-stack {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Headline section */
        .bh-headline { order: 1; margin-bottom: 4px; }

        /* Form column — comes right after headline */
        .bh-form-col { order: 2; margin-top: 16px; }

        /* Content (bullets, sub text) — below form on mobile */
        .bh-content-below { order: 3; margin-top: 24px; }

        /* Bullets: hidden on mobile, shown on desktop */
        .bh-bullets {
          display: none;
        }
        @media (min-width: 768px) {
          .bh-bullets {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 20px;
          }
        }

        /* CTA button */
        .bh-btn {
          background: ${GOLD};
          color: ${NAVY};
          border: none;
          border-radius: 6px;
          padding: 18px 24px;
          font-size: 18px;
          font-weight: 800;
          cursor: pointer;
          width: 100%;
          min-height: 56px;
          letter-spacing: -0.01em;
          transition: background 0.15s, transform 0.05s;
        }
        .bh-btn:hover  { background: #ffd45a; }
        .bh-btn:active { transform: translateY(1px); }
        .bh-btn:disabled { opacity: 0.7; cursor: default; }

        input::placeholder { color: #4a5a73; }

        /* Google Places autocomplete dropdown — dark theme */
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
        <div className="bh-page-stack">

          {/* HEADLINE — above form */}
          <div className="bh-headline">
            {variant.preheadline && (
              <p style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: GOLD, margin: "0 0 10px",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              }}>
                {variant.preheadline}
              </p>
            )}

            <h1 style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(26px, 7vw, 48px)",
              fontWeight: 700, lineHeight: 1.12,
              color: "#fff", margin: "0 0 10px",
              letterSpacing: "-0.02em",
            }}>
              {variant.hero}
            </h1>

            {variant.bigNumber && (
              <div style={{ margin: "8px 0 16px" }}>
                <div style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(56px, 14vw, 120px)", fontWeight: 700,
                  color: GOLD, lineHeight: 1, letterSpacing: "-0.03em",
                }}>
                  {variant.bigNumber}
                </div>
                <div style={{ height: 4, background: TEAL, width: 80, marginTop: 8 }} />
                <p style={{ fontSize: 14, color: MUTED, margin: "10px 0 0", lineHeight: 1.5 }}>
                  {variant.bigNumberLabel}
                </p>
              </div>
            )}

            {variant.timeline && (
              <div style={{ margin: "10px 0 14px", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "14px 16px", background: NAVY_2 }}>
                {variant.timeline.map((t, i) => (
                  <div key={t.era} style={{
                    display: "flex", justifyContent: "space-between",
                    padding: "7px 0",
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

            <p style={{ fontSize: 16, color: "#cdd5e1", lineHeight: 1.6, margin: "0 0 4px" }}>
              {variant.sub}
            </p>
          </div>

          {/* FORM COLUMN — immediately after headline */}
          <div className="bh-form-col">
            <div style={{ textAlign: "center", margin: "0 0 14px" }}>
              <img
                src="/book-cover.png"
                alt="Beyond Humanity"
                style={{
                  width: 240,
                  maxWidth: "78vw",
                  height: "auto",
                  borderRadius: 4,
                  display: "inline-block",
                  /* printed book look: deep shadows + warm gold glow + slight right-edge depth */
                  boxShadow: [
                    "6px 0 0 0 rgba(0,0,0,0.35)",        /* spine edge */
                    "0 32px 64px rgba(0,0,0,0.65)",       /* deep drop shadow */
                    "0 12px 28px rgba(0,0,0,0.45)",       /* mid shadow */
                    "0 4px 8px rgba(0,0,0,0.3)",          /* tight shadow */
                    "0 0 40px rgba(245,200,66,0.12)",     /* gold glow */
                  ].join(", "),
                  transform: "perspective(800px) rotateY(-4deg)",  /* slight 3D angle */
                }}
              />
            </div>

            <div style={{
              background: NAVY_2,
              border: `1px solid ${BORDER}`,
              borderRadius: 12, padding: "20px 18px 22px",
              boxShadow: "0 8px 28px rgba(0,0,0,0.3)",
            }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 6px", lineHeight: 1.25 }}>
                Get the free essay
              </h2>
              <p style={{ fontSize: 13, color: MUTED, margin: "0 0 14px", lineHeight: 1.5 }}>
                Free PDF instantly. Printed copy shipped to your door. No sales calls.
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

                <button type="submit" disabled={status === "loading"} className="bh-btn" style={{ marginTop: 6 }}>
                  {status === "loading" ? "Sending…" : variant.cta}
                </button>

                <p style={{ fontSize: 12, color: MUTED, textAlign: "center", margin: "4px 0 0" }}>
                  100 copies. Free. No shipping cost.
                </p>
              </form>
            </div>

            {/* Why it's free — shown below form on mobile */}
            <p style={{ fontSize: 12, color: MUTED, margin: "16px 0 0", fontStyle: "italic", lineHeight: 1.6, textAlign: "center" }}>
              18,000 words · 7 chapters · No fund pitch · No email required to read it · Free
            </p>
          </div>

          {/* CONTENT BELOW — bullets visible only on desktop via CSS */}
          {variant.bullets && (
            <div className="bh-content-below">
              <div className="bh-bullets">
                {variant.bullets.map((b) => (
                  <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{ color: TEAL, fontSize: 18, lineHeight: 1.3, flexShrink: 0, fontWeight: 700 }}>—</span>
                    <span style={{ color: "#cdd5e1", fontSize: 15, lineHeight: 1.55 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "28px 20px", textAlign: "center", marginTop: 40, position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
          For informational and educational purposes only. Not investment advice.
          <br />
          Beyond Humanity Research · Dean Gallagher · Palm Beach County, Florida
        </p>
      </footer>
    </main>
  );
}
