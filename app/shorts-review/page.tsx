export default function ShortsReviewPage() {
  const videos = [
    { v: 1,  dur: "25s",  grade: "A",  hook: "Pattern Hook", angle: "Clean — no scarcity", desc: "Internet. Mobile. Cloud. You've seen this before. Best for cold audiences." },
    { v: 2,  dur: "14s",  grade: "A",  hook: "Book Reveal",  angle: "YouTube targeted you", desc: "Book front and center. 'YouTube only showed this to HNW investors.' Fast and punchy." },
    { v: 3,  dur: "24s",  grade: "A",  hook: "100 Copies",   angle: "Scarcity — 100 free, then $97", desc: "Giving away 100 printed copies. After that it's $97. Urgency throughout." },
    { v: 4,  dur: "24s",  grade: "B",  hook: "Numbers Shock", angle: "Data heavy", desc: "350M. 2B. 100B. Pure numbers. No book." },
    { v: 5,  dur: "19s",  grade: "A",  hook: "Smart Money",  angle: "Authority", desc: "Most investors are buying the wrong layer. I wrote the book. It's free." },
    { v: 6,  dur: "14s",  grade: "A",  hook: "Gold Rush",    angle: "Analogy", desc: "Miners lost. Levi Strauss won. AI gold rush. Picks and shovels. 14 seconds." },
    { v: 7,  dur: "23s",  grade: "A",  hook: "HNW Exclusive", angle: "Flattery + targeted", desc: "This video was only shown to high-net-worth investors. Book reveal. Strong." },
    { v: 8,  dur: "30s",  grade: "B",  hook: "Window Closing", angle: "Urgency", desc: "18 to 24 months. Pattern hook. CTA twice." },
    { v: 9,  dur: "43s",  grade: "B",  hook: "Conversation",  angle: "Trust + network", desc: "Personal tone. I spent 3 years on this thesis. Longer format." },
    { v: 10, dur: "34s",  grade: "A",  hook: "Hybrid Best",  angle: "Network building", desc: "Best hook + network reason + book twice + two CTAs." },
  ];

  const slideCounts: Record<number, number> = { 1:8, 2:4, 3:5, 4:8, 5:5, 6:5, 7:5, 8:8, 9:9, 10:8 };

  return (
    <main style={{ background: "#fff", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", padding: "40px 20px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <p style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8 }}>Beyond Humanity · Campaign Review</p>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>10 YouTube Shorts — Slide Review</h1>
        <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 12 }}>Vertical 1080x1920 · Voice: placeholder (swap for Dean) · All slides scrollable below</p>

        {/* Summary table */}
        <div style={{ overflowX: "auto", marginBottom: 48 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                {["#", "Duration", "Grade", "Hook", "Free Angle", "Notes"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "8px 12px", fontWeight: 700, color: "#374151", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {videos.map(v => (
                <tr key={v.v} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "10px 12px", fontWeight: 700 }}>
                    <a href={`#v${v.v}`} style={{ color: "#1d4ed8", textDecoration: "none" }}>V{v.v}</a>
                  </td>
                  <td style={{ padding: "10px 12px", fontFamily: "monospace", color: "#6b7280" }}>{v.dur}</td>
                  <td style={{ padding: "10px 12px" }}>
                    <span style={{ background: v.grade === "A" ? "#dcfce7" : "#fef9c3", color: v.grade === "A" ? "#166534" : "#713f12", fontWeight: 700, padding: "2px 8px", borderRadius: 4, fontSize: 12 }}>{v.grade}</span>
                  </td>
                  <td style={{ padding: "10px 12px", fontWeight: 600, color: "#0f172a" }}>{v.hook}</td>
                  <td style={{ padding: "10px 12px", color: "#6b7280", fontSize: 12 }}>{v.angle}</td>
                  <td style={{ padding: "10px 12px", color: "#6b7280", fontSize: 12 }}>{v.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 24 }}>
          Top 3 to run first: <span style={{ color: "#1d4ed8" }}>V1 (Pattern Hook)</span> · <span style={{ color: "#1d4ed8" }}>V7 (HNW Exclusive)</span> · <span style={{ color: "#1d4ed8" }}>V6 (Gold Rush)</span>
        </p>

        <hr style={{ border: "none", borderTop: "2px solid #e5e7eb", marginBottom: 48 }} />

        {/* All videos */}
        {videos.map(({ v, dur, grade, hook, angle, desc }) => {
          const count = slideCounts[v] || 0;
          const slideNums = Array.from({ length: count }, (_, i) => i + 1);

          return (
            <div key={v} id={`v${v}`} style={{ marginBottom: 72 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: "#0f172a" }}>V{v}</span>
                <span style={{ background: grade === "A" ? "#dcfce7" : "#fef9c3", color: grade === "A" ? "#166534" : "#713f12", fontWeight: 700, padding: "3px 10px", borderRadius: 4, fontSize: 13 }}>{grade}</span>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#9ca3af", background: "#f9fafb", padding: "3px 8px", borderRadius: 4 }}>{dur}</span>
                <span style={{ fontWeight: 700, color: "#374151" }}>{hook}</span>
                <span style={{ color: "#9ca3af", fontSize: 12 }}>{angle}</span>
              </div>
              <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 20 }}>{desc}</p>

              {/* Horizontal scrollable slide row */}
              <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 12 }}>
                {slideNums.map(n => (
                  <div key={n} style={{ flexShrink: 0, width: 180 }}>
                    <img
                      src={`/shorts/v${v}/slide_${String(n).padStart(2,"0")}.png`}
                      alt={`V${v} slide ${n}`}
                      style={{ width: 180, height: 320, objectFit: "cover", borderRadius: 8, border: "1px solid #e5e7eb", display: "block" }}
                    />
                    <p style={{ fontSize: 11, color: "#9ca3af", textAlign: "center", marginTop: 4 }}>Slide {n}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: 24, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#9ca3af" }}>beyondhumanity.xyz · Internal review · Not for distribution</p>
        </div>
      </div>
    </main>
  );
}
