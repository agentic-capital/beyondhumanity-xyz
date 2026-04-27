export default function SlidesReviewPage() {
  const slides = [
    {
      num: 1,
      title: "BEYOND HUMANITY (Title)",
      script: `"What you're about to see is something that took me three years to put together — and it changed how I think about where we are right now. The question isn't whether AI agents are changing everything. They are. The question — the one that actually matters for your money — is: where does the value go?"

(brief pause — let the title breathe)`,
    },
    {
      num: 2,
      title: "You've Seen This Before",
      script: `"You've been here before. The internet. Mobile. The cloud. And here's what's worth remembering: every single time, the investors who came out ahead weren't the ones chasing the hot apps — they were the ones who understood what those apps ran on. The pipes. The power. The picks and shovels. We're at that same moment again — except bigger."

(beat — let the idea settle)`,
    },
    {
      num: 3,
      title: "The Shift",
      script: `"Here's the thing that most people haven't fully absorbed yet. For literally five thousand years — every economic model ever built — rested on one assumption: growth is bounded by how many humans are available to work. That was the ceiling. And this decade, that ceiling just disappeared. You're looking at the first economic era in human history where that's not true."

(pause — let the weight of that land)`,
    },
    {
      num: 4,
      title: "The Numbers",
      script: `"Here's what that looks like in real numbers. Three hundred and fifty million AI agents are active today — right now. By 2027, that's projected to hit two billion — more than the entire global workforce. And by 2030? One hundred billion. More agents than all the humans who've ever lived. Let that sink in for a second."

(pause — give viewers time to absorb the numbers)`,
    },
    {
      num: 5,
      title: "What They're Actually Doing",
      script: `"And this isn't ChatGPT writing your emails. JPMorgan is using agents to review loan covenants. Pfizer is running clinical trial analysis. GitHub reports that seventy percent of all code being written right now is AI-generated. And eighty-five percent of Fortune 500 companies have agents running in production today. This isn't a future thing. You're watching the restructuring of the economy — right now."

(transition beat)`,
    },
    {
      num: 6,
      title: "The Broken Assumption",
      script: `"Every valuation model you've ever seen is built on a world where labor is scarce and human. GDP models. Wage models. Inflation models. They all assume a biological cap on productivity. That cap is gone. The models haven't been updated. And that gap — between where reality is and where the models say it is — that's exactly where opportunity lives."

(pause — let the implication register)`,
    },
    {
      num: 7,
      title: "Why Most Investors Are Wrong",
      script: `"Here's the mistake I see almost everywhere. People hear AI and they go buy the apps. The chatbots. The copilots. The AI tools. But applications are fragile. Today's winner is tomorrow's Myspace. The companies that build and power everything AI runs on are a completely different category. That's structural. That compounds. Own what everything else runs on."

(brief pause — this is the thesis crystallizing)`,
    },
    {
      num: 8,
      title: "The Substrate",
      script: `"So what are those companies? ASML makes the only EUV lithography machines on earth — full stop. Without them, no advanced chips get made, period. TSMC runs the only 3-nanometer fabs, and they're booked two years out. SK Hynix has a near-monopoly on the high-bandwidth memory every AI model requires. And the power grid? There's a two-thousand-one-hundred-day queue just to connect to it. These aren't investment ideas. These are structural chokepoints — and right now, most of them are being treated like cyclical chip stocks."

(beat)`,
    },
    {
      num: 9,
      title: "The Gold Rush Analogy",
      script: `"Think about the California Gold Rush. The people who reliably got rich weren't the prospectors — it was Levi Strauss selling denim and Wells Fargo moving the money. The picks and shovels. We are in an AI gold rush right now. ASML is Levi Strauss. The question you want to ask yourself is: are you the prospector — or do you own the shovels?"

(pause — let the analogy resonate)`,
    },
    {
      num: 10,
      title: "The Kodak Moment",
      script: `"Here's what I find genuinely strange. You talk to sophisticated investors — real money, serious portfolios — and most of them will nod along to everything I'm saying. They agree AI is transformative. Then they go back to their desk and open the same spreadsheet with the same DCF model and the same assumptions that were built for a world that no longer exists. Their conviction and their portfolio are completely disconnected. That's the Kodak moment — knowing the world is changing and not moving."

(beat — let the audience check themselves)`,
    },
    {
      num: 11,
      title: "The Window",
      script: `"The window for this isn't infinite. Once 'agent productivity' becomes a standard line item on every analyst's model — once consensus fully catches up to what's already happening — the repricing will already be done. My best read is that window is eighteen to twenty-four months out. We are not there yet. That's the window you're looking at right now."

(transition beat — building to resolution)`,
    },
    {
      num: 12,
      title: "The Track Record",
      script: `"I've been running this thesis in my personal brokerage account for thirty-nine months. The result has been three hundred and forty-nine percent annualized, a Sharpe ratio of two point one three, and over thirteen thousand percent cumulative. Now — I need to be clear with you: this is a personal account, not fund performance. These figures haven't been independently audited. And past results absolutely do not guarantee future returns. What they tell you is that the thesis itself has been stress-tested in a real market with real money. That's all I'm claiming."

(deliberate pause — the disclaimer matters)`,
    },
    {
      num: 13,
      title: "What To Do",
      script: `"Three practical things. First: read the full report at beyondhumanity.xyz — it's free. Second: look at the substrate companies — ASML, TSMC, SK Hynix, and SOXL if you want a basket approach. Third: think about your timeline. You likely have eighteen to twenty-four months before consensus catches up. That's the window. Use it deliberately."

(beat — clear and actionable)`,
    },
    {
      num: 14,
      title: "Get the Book",
      script: `"The full report is eighteen thousand words across seven chapters. It covers the whole thesis — the economic shift, the specific companies, how to structure a position, and the real risks. It's free. No paywall. Just go to beyondhumanity.xyz and grab your copy."

(pause — let the URL land)`,
    },
    {
      num: 15,
      title: "Disclaimer",
      script: `"One final note. This entire presentation is for informational and educational purposes only. Nothing here is investment advice, and nothing here is an offer to buy or sell any security. All performance figures are from a personal brokerage account prior to any fund formation. Past performance does not predict future results. Please do your own research before making any investment decision."`,
    },
  ];

  return (
    <main style={{ background: "#fff", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", padding: "40px 20px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <p style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8 }}>Beyond Humanity · Production Review</p>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>Video Slides + Audio Script</h1>
        <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 40 }}>15 slides · ~4 min 50 sec voiceover · Review before filming</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {slides.map((slide) => (
            <div key={slide.num} style={{ borderTop: "2px solid #e5e7eb", paddingTop: 32 }}>
              {/* Slide number + title */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#9ca3af", background: "#f3f4f6", padding: "3px 10px", borderRadius: 99 }}>
                  Slide {slide.num}
                </span>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", margin: 0 }}>{slide.title}</h2>
              </div>

              {/* Slide image */}
              <div style={{ marginBottom: 20, borderRadius: 8, overflow: "hidden", border: "1px solid #e5e7eb", background: "#030a14" }}>
                <img
                  src={`/slides/slide_${String(slide.num).padStart(2, "0")}.png`}
                  alt={`Slide ${slide.num}: ${slide.title}`}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              {/* Audio script */}
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "20px 24px" }}>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#64748b", marginBottom: 12 }}>🎙 Voiceover Script</p>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.8, margin: 0, whiteSpace: "pre-wrap", fontStyle: "italic" }}>
                  {slide.script}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 60, borderTop: "1px solid #e5e7eb", paddingTop: 32, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "#9ca3af" }}>beyondhumanity.xyz · For production review only · Not for distribution</p>
        </div>
      </div>
    </main>
  );
}
