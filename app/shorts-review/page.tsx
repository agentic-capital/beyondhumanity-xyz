"use client";

const NAVY = "#030a14";
const NAVY_2 = "#0a1828";
const GOLD = "#f5c842";
const TEAL = "#00c4e0";
const BORDER = "#1e2c44";
const MUTED = "#8a9bb3";
const GREEN = "#4ade80";

type Video = {
  v: number;
  dur: string;
  grade: "A+" | "A";
  hook: string;
  verdict: string;
  slideCount: number;
  squeezeSlug: string;
};

const videos: Video[] = [
  { v: 1,  dur: "~16s", grade: "A",  hook: "The Shift",       verdict: "Opens with the provocation. Personal Palm Beach angle. Book named. Local offer. 5 clean slides.",           slideCount: 5,  squeezeSlug: "census" },
  { v: 2,  dur: "~16s", grade: "A+", hook: "Book Reveal",     verdict: "'This book is free. Here's why.' — best hook. Book appears ONCE (last slide only). Punchy.",              slideCount: 5,  squeezeSlug: "book" },
  { v: 3,  dur: "~16s", grade: "A",  hook: "The Neighbor",    verdict: "'Wrong layer of AI' is specific. Neighbor framing. Book named. Local offer. Solid.",                       slideCount: 5,  squeezeSlug: "hybrid" },
  { v: 4,  dur: "~16s", grade: "A",  hook: "Why Free",        verdict: "'Why free? I want to find the investors who see the same thing.' — most transparent + human line in set.", slideCount: 5,  squeezeSlug: "foryou" },
  { v: 5,  dur: "~16s", grade: "A",  hook: "Three Years",     verdict: "'Biggest investing shift I've seen in decades.' + 'Beyond Humanity.' alone on a slide. Great punch.",      slideCount: 5,  squeezeSlug: "insider" },
  { v: 6,  dur: "~16s", grade: "A+", hook: "Gold Rush",       verdict: "'Miners lost. Levi Strauss won.' — timeless, zero setup. Book once only (last slide). Best analogy.",     slideCount: 5,  squeezeSlug: "goldrush" },
  { v: 7,  dur: "~16s", grade: "A",  hook: "Get Your Copy",   verdict: "'Printed. Signed. Shipped to your door. Free.' — strongest offer slide in the set. Book once.",          slideCount: 5,  squeezeSlug: "book" },
  { v: 8,  dur: "~18s", grade: "A",  hook: "Pipes + Neighbor",verdict: "Pipes/chips/AI three-beat analogy. 'Palm Beach County neighbor? It's free.' — direct and human.",         slideCount: 6,  squeezeSlug: "gap" },
  { v: 9,  dur: "~16s", grade: "A",  hook: "The Agents",      verdict: "350M → 2B numbers, human bridge, book. Clean transitions. Palm Beach offer lands naturally.",              slideCount: 5,  squeezeSlug: "numbers" },
  { v: 10, dur: "~20s", grade: "A",  hook: "The Peer",        verdict: "'If you've been a long-term investor 20-30 years... you already know.' Perfect self-ID. Book + offer.",   slideCount: 7,  squeezeSlug: "foryou" },
];

const SQUEEZE_PAGES = [
  ["census",  "The Shift"],
  ["broken",  "Broken Assumption"],
  ["numbers", "Three Numbers"],
  ["sequel",  "Predicted Sequel"],
  ["goldrush","Gold Rush"],
  ["foryou",  "Written For You"],
  ["gap",     "The Gap"],
  ["insider", "The Insider"],
  ["hybrid",  "Hybrid"],
  ["book",    "Book Reveal"],
];

export default function ShortsReviewPage() {
  return (
    <main style={{ background: NAVY, minHeight: "100vh", color: "#fff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", padding: "40px 20px" }}>
      <style>{`
        * { box-sizing: border-box; }
        .slide-row { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 12px; }
        .slide-row::-webkit-scrollbar { height: 4px; }
        .slide-row::-webkit-scrollbar-track { background: ${NAVY_2}; }
        .slide-row::-webkit-scrollbar-thumb { background: ${BORDER}; border-radius: 2px; }
        a { color: ${TEAL}; text-decoration: none; }
        a:hover { text-decoration: underline; }
      `}</style>

      <div style={{ maxWidth: 980, margin: "0 auto" }}>

        {/* Header */}
        <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED, marginBottom: 8, fontFamily: "monospace" }}>
          Beyond Humanity · Internal Campaign Review
        </p>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 6 }}>
          10 YouTube Shorts — Final Slide Review
        </h1>
        <p style={{ fontSize: 14, color: MUTED, marginBottom: 8 }}>
          Platform: YouTube Shorts mobile only · 1080×1920 · Target: 55+, $2.5M+, Palm Beach County
        </p>
        <p style={{ fontSize: 13, color: GREEN, marginBottom: 32, fontWeight: 600 }}>
          ✅ Final pass — no word counts · no book 2x · clean book slides · human voice throughout · Google Ads compliant
        </p>

        {/* Squeeze Pages */}
        <div style={{ background: NAVY_2, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "20px 24px", marginBottom: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, marginBottom: 12, fontFamily: "monospace" }}>
            🌴 Squeeze Pages — All Live (Palm Beach Edition)
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {SQUEEZE_PAGES.map(([slug, label]) => (
              <a
                key={slug}
                href={`https://beyondhumanity.xyz/get/${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#030a14", border: `1px solid ${GOLD}44`,
                  borderRadius: 6, padding: "6px 14px",
                  fontSize: 13, color: GOLD, fontWeight: 600,
                }}
              >
                /get/{slug} · {label}
              </a>
            ))}
          </div>
          <p style={{ fontSize: 12, color: MUTED, marginTop: 12 }}>
            All pages have: 🌴 Palm Beach banner · scarcity badge · "why it's free" note · address autocomplete (pending Google Cloud fix)
          </p>
        </div>

        {/* Summary table */}
        <div style={{ overflowX: "auto", marginBottom: 48, background: NAVY_2, borderRadius: 10, border: `1px solid ${BORDER}` }}>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                {["#", "Dur", "Grade", "Hook", "Squeeze Page", "Notes"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "10px 12px", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: MUTED, fontWeight: 700, borderBottom: `2px solid ${BORDER}` }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {videos.map(v => (
                <tr key={v.v} style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <td style={{ padding: "10px 12px", fontWeight: 700 }}>
                    <a href={`#v${v.v}`}>V{v.v}</a>
                  </td>
                  <td style={{ padding: "10px 12px", fontFamily: "monospace", fontSize: 12, color: MUTED }}>{v.dur}</td>
                  <td style={{ padding: "10px 12px" }}>
                    <span style={{ background: v.grade === "A+" ? "#052e16" : "#041a10", color: GREEN, fontWeight: 800, padding: "2px 8px", borderRadius: 4, fontSize: 12 }}>{v.grade}</span>
                  </td>
                  <td style={{ padding: "10px 12px", fontWeight: 600, color: "#e2e8f0" }}>{v.hook}</td>
                  <td style={{ padding: "10px 12px" }}>
                    <a href={`https://beyondhumanity.xyz/get/${v.squeezeSlug}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: GOLD }}>
                      /get/{v.squeezeSlug}
                    </a>
                  </td>
                  <td style={{ padding: "10px 12px", color: MUTED, fontSize: 12 }}>{v.verdict.slice(0, 60)}…</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <hr style={{ border: "none", borderTop: `2px solid ${BORDER}`, marginBottom: 48 }} />

        {/* Individual video sections */}
        {videos.map(({ v, dur, grade, hook, verdict, slideCount, squeezeSlug }) => {
          const slideNums = Array.from({ length: slideCount }, (_, i) => i + 1);
          return (
            <div key={v} id={`v${v}`} style={{ marginBottom: 64, paddingBottom: 64, borderBottom: `1px solid ${BORDER}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
                <span style={{ fontSize: 24, fontWeight: 900, color: "#fff" }}>V{v}</span>
                <span style={{ background: grade === "A+" ? "#052e16" : "#041a10", color: GREEN, fontWeight: 800, padding: "4px 12px", borderRadius: 5, fontSize: 14 }}>{grade}</span>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: MUTED, background: NAVY_2, padding: "3px 8px", borderRadius: 4 }}>{dur}</span>
                <span style={{ fontWeight: 700, color: "#e2e8f0", fontSize: 16 }}>{hook}</span>
                <a href={`https://beyondhumanity.xyz/get/${squeezeSlug}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: GOLD, fontWeight: 600 }}>
                  → /get/{squeezeSlug}
                </a>
              </div>
              <p style={{ fontSize: 14, color: "#cdd5e1", lineHeight: 1.7, marginBottom: 20, maxWidth: 720 }}>{verdict}</p>
              <div className="slide-row">
                {slideNums.map(n => (
                  <div key={n} style={{ flexShrink: 0, width: 160 }}>
                    <img
                      src={`/shorts/v${v}/slide_${String(n).padStart(2, "0")}.png`}
                      alt={`V${v} slide ${n}`}
                      style={{ width: 160, height: 285, objectFit: "cover", borderRadius: 6, border: `1px solid ${BORDER}`, display: "block" }}
                    />
                    <p style={{ fontSize: 10, color: MUTED, textAlign: "center", marginTop: 4 }}>Slide {n}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: MUTED }}>beyondhumanity.xyz · Internal review · Not for distribution</p>
        </div>
      </div>
    </main>
  );
}
