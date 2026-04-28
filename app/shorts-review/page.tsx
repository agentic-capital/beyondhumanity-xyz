"use client";

const NAVY = "#030a14";
const NAVY_2 = "#0a1828";
const GOLD = "#f5c842";
const TEAL = "#00c4e0";
const BORDER = "#1e2c44";
const MUTED = "#8a9bb3";
const RED = "#f87171";
const GREEN = "#4ade80";
const YELLOW = "#fbbf24";

type Video = {
  v: number;
  dur: string;
  grade: "A+" | "A" | "B" | "C" | "D";
  shootOrder: number;
  hook: string;
  verdict: string;
  problems: string[];
  fix: string | null;
  slideCount: number;
};

const videos: Video[] = [
  {
    v: 1,
    dur: "25s",
    grade: "B",
    shootOrder: 7,
    hook: "Pattern Hook",
    verdict: "The concept is solid but the structure is broken. 'Something bigger just happened' slides appear AFTER the CTA — that's backwards. The hook takes 2 full slides to land a single idea. For Shorts, you're dead in slide 1 if you don't stop the scroll.",
    problems: [
      "Slides 6–7 ('Something bigger just happened') appear after the first CTA — sequence is wrong",
      "Hook is passive: 'You've invested through the internet boom' assumes context, doesn't demand attention",
      "8 slides at 25s = too fast to read and absorb",
    ],
    fix: "Restructure: Open with 'Something bigger just happened.' THEN run the pattern (internet → mobile → cloud). THEN the book CTA. Cut to 6 slides max.",
    slideCount: 8,
  },
  {
    v: 2,
    dur: "14s",
    grade: "A+",
    shootOrder: 2,
    hook: "Book Reveal",
    verdict: "Best overall. 'This book is free. Here's why.' is the strongest hook in the set — clear, specific, creates instant curiosity. 'YouTube only showed this to HNW investors' is the best single line across all 10 videos. 14 seconds is perfect Shorts length. Do not change this one.",
    problems: [],
    fix: null,
    slideCount: 4,
  },
  {
    v: 3,
    dur: "24s",
    grade: "A",
    shootOrder: 6,
    hook: "100 Copies / Scarcity",
    verdict: "Scarcity works and '$97' as a giant number is excellent. The urgency holds up. One problem: 'building a network' sounds like a LinkedIn bro, not a neighbor investor. Small fix, high upside.",
    problems: [
      "'I'm building a network of serious investors' — sounds corporate, breaks the peer-neighbor tone",
      "'Less than 100 copies remaining' — if this is always true, sophisticated HNW investors will see through it",
    ],
    fix: "Change 'building a network' to 'I want to find the investors who see this coming' — same idea, human tone. For the scarcity line: make it honest (e.g., 'First 100 are free. After that, $97. That's it.').",
    slideCount: 5,
  },
  {
    v: 4,
    dur: "60s",
    grade: "D",
    shootOrder: 10,
    hook: "Numbers Shock",
    verdict: "Doesn't work. '350 million' as your opening line is a cold data dump — a 55-year-old HNW investor scrolling at night has zero reason to care about that number without context. 60 seconds is 2–3x too long for Shorts. The underlying idea (big numbers = proof of scale) is valid but the execution is wrong for this format.",
    problems: [
      "Opening 'hook' is a bare number with no emotional frame — doesn't stop the scroll",
      "60 seconds is the longest in the set — way outside optimal Shorts length (15–30s)",
      "8 slides of pure data with no story arc or tension",
      "No book reveal until slide 6 — audience is gone by then",
    ],
    fix: "Full rewrite. New hook: 'Most investors don't know these 3 numbers. They should.' Then reveal 350M → 2B → $100B with a one-line context each. Cut to 20s, 5 slides max, book CTA at end. Or cut this video entirely and redistribute the numbers into V10.",
    slideCount: 8,
  },
  {
    v: 5,
    dur: "19s",
    grade: "A",
    shootOrder: 3,
    hook: "Smart Money",
    verdict: "'Most investors are buying the wrong layer of AI' is a strong hook — provocative, ego-activating, exactly right for the HNW self-image. 'Smart money bought the infrastructure' is a perfect second line. Clean 5-slide structure, right length. Top performer for cold audiences.",
    problems: [
      "Minor: 'Smart money' framing could feel slightly insider-jargon to non-finance 55+ viewers",
    ],
    fix: "Optional: test 'Sophisticated investors bought the infrastructure' as an alternative to 'Smart money' — may resonate better with the Palm Beach set who don't identify as traders.",
    slideCount: 5,
  },
  {
    v: 6,
    dur: "14s",
    grade: "A+",
    shootOrder: 1,
    hook: "Gold Rush Analogy",
    verdict: "Best hook in the set alongside V2. 'Miners lost. Levi Strauss won.' — immediate, visual, instantly understood by anyone over 40. 14 seconds is perfect. The analogy does all the heavy lifting. Shoot this first.",
    problems: [],
    fix: null,
    slideCount: 5,
  },
  {
    v: 7,
    dur: "23s",
    grade: "A",
    shootOrder: 5,
    hook: "HNW Exclusive",
    verdict: "High upside but has a trust risk. 'This video was only shown to HNW investors — YouTube controls who sees this' is genuinely powerful targeting psychology. But 'It's free — but only for people watching this video' is manipulative and savvy investors will notice. That one line could tank credibility.",
    problems: [
      "'Only for people watching this video' — technically false (the book is free everywhere) and sounds like a dark pattern. Sophisticated HNW investors will clock this.",
    ],
    fix: "Cut the 'only for people watching' slide entirely. The exclusivity is already implied by the targeting line. Let the audience feel chosen without you stating a falsehood.",
    slideCount: 5,
  },
  {
    v: 8,
    dur: "30s",
    grade: "C",
    shootOrder: 8,
    hook: "Window Closing",
    verdict: "The urgency concept is right but the hook is dead. '18 to 24 months' as your opening line means nothing without context — it's a random number. The audience needs to feel the urgency before they'll care about the window. 8 slides at 30s is too dense.",
    problems: [
      "Hook 'The window is 18 to 24 months' — no emotional setup, no reason to care",
      "8 slides at 30s = ~3.7s per slide, too fast for text-heavy Shorts",
      "CTA appears twice but feels rushed both times",
    ],
    fix: "New hook: 'You have about 18 months before this becomes obvious to everyone. After that, you're late.' THEN explain why. Cut to 5–6 slides, 20–25s total.",
    slideCount: 8,
  },
  {
    v: 9,
    dur: "43s",
    grade: "D",
    shootOrder: 9,
    hook: "Conversation / Trust",
    verdict: "Doesn't work as a YouTube Short. 'I'm not a financial advisor' is the worst possible opening for Shorts — starts with a disclaimer, sounds defensive, zero hook. 43 seconds is too long. 'Reply to discuss' is the wrong CTA for Shorts (you can't DM easily). The content itself is good — it would work as a warm email or a longer ad format, but not here.",
    problems: [
      "First line is a disclaimer — instant scroll-past for most users",
      "43 seconds = audience drops off after 15–20s",
      "'Reply to discuss' — wrong CTA for the Shorts format",
      "9 slides, most text-heavy — information overload without visual hooks",
    ],
    fix: "Cut this format entirely for Shorts. Salvage the best line ('I'm an investor who spent 3 years on one thesis') and use it as a slide inside V10 or V1. Or rebuild as a 20s version that opens with the thesis, not the disclaimer.",
    slideCount: 9,
  },
  {
    v: 10,
    dur: "34s",
    grade: "A",
    shootOrder: 4,
    hook: "Hybrid Best",
    verdict: "Best storytelling structure in the set. Internet/mobile/AI three-peat is excellent — specific, credible, builds momentum. 'AI is no different.' as a single giant slide is a perfect punch line. Slightly long at 34s and the double CTA at the end is slightly redundant, but overall top-tier.",
    problems: [
      "34s is slightly long — two slides could be cut without losing the argument",
      "Double CTA at slides 7–8 feels repetitive",
    ],
    fix: "Cut one CTA slide (keep the book cover CTA, drop the plain text one). Trim 1 body slide to hit 25–28s. Otherwise keep as is.",
    slideCount: 8,
  },
];

const gradeColor = (g: string) => {
  if (g === "A+" || g === "A") return { bg: "#052e16", color: GREEN };
  if (g === "B") return { bg: "#1c1917", color: YELLOW };
  if (g === "C") return { bg: "#1c0a05", color: "#fb923c" };
  return { bg: "#1f0808", color: RED };
};

export default function ShortsReviewPage() {
  const sorted = [...videos].sort((a, b) => a.shootOrder - b.shootOrder);

  return (
    <main style={{ background: NAVY, minHeight: "100vh", color: "#fff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", padding: "40px 20px" }}>
      <style>{`
        * { box-sizing: border-box; }
        .slide-row { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 12px; }
        .slide-row::-webkit-scrollbar { height: 4px; }
        .slide-row::-webkit-scrollbar-track { background: ${NAVY_2}; }
        .slide-row::-webkit-scrollbar-thumb { background: ${BORDER}; border-radius: 2px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { text-align: left; padding: 10px 12px; }
        tr { border-bottom: 1px solid ${BORDER}; }
        thead tr { border-bottom: 2px solid ${BORDER}; }
        a { color: ${TEAL}; text-decoration: none; }
        a:hover { text-decoration: underline; }
      `}</style>

      <div style={{ maxWidth: 980, margin: "0 auto" }}>

        {/* Header */}
        <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED, marginBottom: 8, fontFamily: "monospace" }}>
          Beyond Humanity · Internal Campaign Review
        </p>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 6 }}>
          10 YouTube Shorts — Script + Slide Critique
        </h1>
        <p style={{ fontSize: 14, color: MUTED, marginBottom: 8 }}>
          Platform: YouTube Shorts mobile only · 1080×1920 · Target: 55+, $2.5M+, Palm Beach County
        </p>
        <p style={{ fontSize: 13, color: GOLD, marginBottom: 32, fontWeight: 600 }}>
          ⚠️ Grades are honest, not generous. V4 and V9 need major rewrites before rendering audio.
        </p>

        {/* Shoot order recommendation */}
        <div style={{ background: NAVY_2, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "20px 24px", marginBottom: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, marginBottom: 10, fontFamily: "monospace" }}>Recommended Shoot Order</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {sorted.map(({ v, grade, hook }) => {
              const { bg, color } = gradeColor(grade);
              return (
                <a key={v} href={`#v${v}`} style={{
                  background: bg, border: `1px solid ${color}22`,
                  borderRadius: 6, padding: "6px 12px",
                  display: "flex", alignItems: "center", gap: 6, color: "#fff",
                }}>
                  <span style={{ fontWeight: 800, color }}>V{v}</span>
                  <span style={{ fontSize: 12, color: MUTED }}>{hook}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color, background: `${color}22`, padding: "1px 6px", borderRadius: 3 }}>{grade}</span>
                </a>
              );
            })}
          </div>
          <p style={{ fontSize: 12, color: MUTED, marginTop: 12 }}>
            Start with V6 + V2 (14s each) — fastest proof-of-concept. Fix V4 + V9 before rendering audio.
          </p>
        </div>

        {/* Summary table */}
        <div style={{ overflowX: "auto", marginBottom: 48, background: NAVY_2, borderRadius: 10, border: `1px solid ${BORDER}` }}>
          <table>
            <thead>
              <tr>
                {["#", "Dur", "Grade", "Hook", "Shoot", "Status"].map(h => (
                  <th key={h} style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: MUTED, fontWeight: 700 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {videos.map(v => {
                const { bg, color } = gradeColor(v.grade);
                const statusColor = v.grade === "A+" || v.grade === "A" ? GREEN : v.grade === "B" ? YELLOW : RED;
                const statusText = v.grade === "A+" || v.grade === "A" ? "Ready" : v.grade === "B" ? "Minor fix" : v.grade === "C" ? "Rewrite hook" : "Major rewrite";
                return (
                  <tr key={v.v}>
                    <td style={{ fontWeight: 700 }}>
                      <a href={`#v${v.v}`}>V{v.v}</a>
                    </td>
                    <td style={{ fontFamily: "monospace", fontSize: 12, color: MUTED }}>{v.dur}</td>
                    <td>
                      <span style={{ background: bg, color, fontWeight: 800, padding: "2px 8px", borderRadius: 4, fontSize: 12 }}>{v.grade}</span>
                    </td>
                    <td style={{ fontWeight: 600, color: "#e2e8f0" }}>{v.hook}</td>
                    <td style={{ fontFamily: "monospace", fontSize: 12, color: MUTED }}>#{v.shootOrder}</td>
                    <td>
                      <span style={{ color: statusColor, fontSize: 12, fontWeight: 600 }}>{statusText}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <hr style={{ border: "none", borderTop: `2px solid ${BORDER}`, marginBottom: 48 }} />

        {/* Individual video sections */}
        {videos.map(({ v, dur, grade, hook, verdict, problems, fix, slideCount }) => {
          const { bg, color } = gradeColor(grade);
          const slideNums = Array.from({ length: slideCount }, (_, i) => i + 1);

          return (
            <div key={v} id={`v${v}`} style={{ marginBottom: 64, paddingBottom: 64, borderBottom: `1px solid ${BORDER}` }}>

              {/* Video header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
                <span style={{ fontSize: 24, fontWeight: 900, color: "#fff" }}>V{v}</span>
                <span style={{ background: bg, color, fontWeight: 800, padding: "4px 12px", borderRadius: 5, fontSize: 14 }}>{grade}</span>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: MUTED, background: NAVY_2, padding: "3px 8px", borderRadius: 4 }}>{dur}</span>
                <span style={{ fontWeight: 700, color: "#e2e8f0", fontSize: 16 }}>{hook}</span>
                <span style={{ fontSize: 12, color: MUTED }}>Shoot #{videos.find(x => x.v === v)?.shootOrder}</span>
              </div>

              {/* Verdict */}
              <p style={{ fontSize: 14, color: "#cdd5e1", lineHeight: 1.7, marginBottom: 16, maxWidth: 720 }}>
                {verdict}
              </p>

              {/* Problems */}
              {problems.length > 0 && (
                <div style={{ background: "#1f0808", border: `1px solid ${RED}33`, borderRadius: 8, padding: "14px 18px", marginBottom: 14 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: RED, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Problems</p>
                  {problems.map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
                      <span style={{ color: RED, flexShrink: 0, fontWeight: 700 }}>✕</span>
                      <span style={{ fontSize: 13, color: "#fca5a5", lineHeight: 1.55 }}>{p}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Fix */}
              {fix && (
                <div style={{ background: "#052e16", border: `1px solid ${GREEN}33`, borderRadius: 8, padding: "14px 18px", marginBottom: 20 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Fix</p>
                  <p style={{ fontSize: 13, color: "#bbf7d0", lineHeight: 1.6, margin: 0 }}>{fix}</p>
                </div>
              )}

              {!fix && problems.length === 0 && (
                <div style={{ background: "#052e16", border: `1px solid ${GREEN}33`, borderRadius: 8, padding: "10px 18px", marginBottom: 20, display: "inline-block" }}>
                  <span style={{ fontSize: 13, color: GREEN, fontWeight: 700 }}>✓ No changes needed. Render audio.</span>
                </div>
              )}

              {/* Slides */}
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
