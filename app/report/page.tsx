import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beyond Humanity — An Investment Thesis on the Agent Economy",
  description:
    "A 39-month verified track record. +349% annualized. 33 Fidelity statements. The full investment thesis on the AI agent economy by Dean Gallagher.",
};

export default function ReportPage() {
  return (
    <main className="bg-white text-[#0f172a] min-h-screen">
      {/* ── Hero ── */}
      <section className="max-w-[720px] mx-auto px-6 pt-16 pb-10">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-4">
          Beyond Humanity · Agentic Capital · April 2026
        </p>
        <div className="border-t-2 border-[#f5c842] mb-8" />
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#0f172a] leading-tight mb-4">
          Beyond Humanity
        </h1>
        <p className="text-xl md:text-2xl font-serif text-gray-600 leading-snug mb-6">
          An Investment Thesis on the Agent Economy
        </p>
        <p className="text-sm font-sans text-gray-500 mb-8">
          Dean Gallagher · General Partner · Wellington, FL
        </p>

        {/* Stat pills */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            { value: "39 Months", label: "Verified" },
            { value: "+349%", label: "Annualized" },
            { value: "33", label: "Fidelity Statements" },
          ].map((s) => (
            <div
              key={s.label}
              className="inline-flex flex-col items-center bg-[#f8fafc] border border-gray-200 rounded px-5 py-3"
            >
              <span className="font-mono text-2xl font-bold text-[#0f172a]">
                {s.value}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 font-sans italic">
          For Accredited Investors Only · Educational Reading Only · Not an
          Offer to Buy or Sell Securities
        </p>
      </section>

      {/* ── Data Callout Strip ── */}
      <div className="bg-[#0f172a] text-white py-10">
        <div className="max-w-[720px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "350M+", label: "Active Agents" },
            { value: "20%/mo", label: "Growth Rate" },
            { value: "85%", label: "Fortune 500" },
            { value: "$500B", label: "US Investment" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-mono font-bold text-[#f5c842]">
                {s.value}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      <article className="max-w-[720px] mx-auto px-6 py-14 space-y-16">
        {/* ── Section I — Population Event ── */}
        <section>
          <p className="text-xs uppercase tracking-widest text-[#00c4e0] font-sans mb-2">
            Section I
          </p>
          <h2 className="text-3xl font-serif font-bold mb-6">
            The Population Event
          </h2>

          <blockquote className="border-l-4 border-[#f5c842] pl-6 my-8 py-1">
            <p className="text-xl font-serif text-[#0f172a] leading-relaxed italic">
              "The fastest-growing population on Earth is one nobody counts in
              any census. It is growing at 20% per month."
            </p>
          </blockquote>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            Every government in the world counts its population. The U.S. Census
            Bureau has measured the American population since 1790. Every
            economic model — GDP, inflation, productivity, wages — is built on
            population as a fixed input that grows at the rate of human births.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            In 2024, that assumption broke. Not because of some future
            prediction. Not because of AGI. Because of a fact visible in
            enterprise software dashboards right now: there are autonomous AI
            agents doing the work of knowledge workers, and their number is
            growing faster than any human demographic in recorded history.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            You need two people to make a human. You need one GPU cluster to
            deploy ten million agents. That asymmetry changes everything. The
            labor supply curve — the one underpinning every inflation model,
            every wage forecast, every GDP projection — assumed human births as
            its input. That assumption is now wrong. It broke in February 2024,
            and no one has updated the models.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            Our research, triangulating data from Microsoft, Google, Salesforce,
            and independent inference compute analysis, estimates the current
            global population of{" "}
            <strong>
              Economically Productive Autonomous Agents at 350 million and
              growing at over 15% per month.
            </strong>{" "}
            This is a workforce that works 24/7, does not sleep or take
            vacations, requires no healthcare, no retirement, and no HR
            department. Its cost is falling, not rising. Its supply is bounded
            only by available compute.
          </p>

          {/* Crossover Table */}
          <table className="w-full text-sm border-collapse mt-6 mb-6">
            <thead>
              <tr className="bg-[#0f172a] text-white">
                <th className="text-left p-3 font-medium">Milestone</th>
                <th className="text-left p-3 font-medium">Timeline</th>
                <th className="text-left p-3 font-medium">Scale</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "US knowledge workers surpassed",
                  "Mid-2025",
                  "65M humans &lt; AI agents",
                ],
                [
                  "Global knowledge workers",
                  "Dec 2026",
                  "800M",
                ],
                ["All working humans", "Late 2027", "3.5B"],
                ["All humans ever lived", "~2030", "100B+"],
              ].map(([milestone, timeline, scale], i) => (
                <tr
                  key={milestone}
                  className={`border-b border-gray-100 ${
                    i % 2 === 1 ? "bg-[#f8fafc]" : ""
                  }`}
                >
                  <td
                    className="p-3 text-gray-700"
                    dangerouslySetInnerHTML={{ __html: milestone }}
                  />
                  <td className="p-3 text-gray-700 font-medium">{timeline}</td>
                  <td className="p-3 text-gray-700">{scale}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-sm text-gray-500 italic">
            Source: Alpha Strategies AI Population Model, Q1 2026; Gartner Q1
            2026 CIO Survey; Morgan Stanley Research.
          </p>
        </section>

        {/* ── Section II — Evidence ── */}
        <section>
          <p className="text-xs uppercase tracking-widest text-[#00c4e0] font-sans mb-2">
            Section II
          </p>
          <h2 className="text-3xl font-serif font-bold mb-6">The Evidence</h2>

          <blockquote className="border-l-4 border-[#f5c842] pl-6 my-8 py-1">
            <p className="text-xl font-serif text-[#0f172a] leading-relaxed italic">
              "This is not theoretical. It is on the income statement."
            </p>
          </blockquote>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The agent economy is not a forecast. It is a current balance sheet
            entry. The companies that have deployed at scale are reporting the
            results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {[
              {
                company: "Klarna",
                stat: "$40M",
                desc: "Profit improvement in 2024. AI agent replaced 700 FTEs. Deployed within one month. Same CSAT score as humans — with 25% fewer repeat inquiries.",
              },
              {
                company: "Microsoft",
                stat: "400K hrs",
                desc: "Human work hours saved annually via Finance Copilot Agent. $25M in direct operational savings from invoice processing alone.",
              },
              {
                company: "McKinsey",
                stat: "420%",
                desc: "Median ROI across 500 enterprise agent deployments. Median payback period: 5.5 months. Top decile ROI: over 1,500%.",
              },
              {
                company: "Cost Delta",
                stat: "1,000×",
                desc: "$5.00 per task for a human knowledge worker. $0.005 per equivalent task for an AI agent. The differential is not incremental. It is civilizational.",
              },
            ].map((c) => (
              <div
                key={c.company}
                className="bg-[#f8fafc] border border-gray-200 rounded p-5"
              >
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                  {c.company}
                </div>
                <div className="text-3xl font-mono font-bold text-[#0f172a] mb-2">
                  {c.stat}
                </div>
                <div className="text-sm text-gray-600 leading-relaxed">
                  {c.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Adoption table */}
          <table className="w-full text-sm border-collapse mt-4 mb-6">
            <thead>
              <tr className="bg-[#0f172a] text-white">
                <th className="text-left p-3 font-medium">Period</th>
                <th className="text-left p-3 font-medium">
                  Fortune 500 with AI Agents in Production
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Mid-2024", "10%"],
                ["Early 2025", "45%"],
                ["April 2026", "85%"],
              ].map(([period, pct], i) => (
                <tr
                  key={period}
                  className={`border-b border-gray-100 ${
                    i % 2 === 1 ? "bg-[#f8fafc]" : ""
                  }`}
                >
                  <td className="p-3 text-gray-700">{period}</td>
                  <td className="p-3 font-semibold text-[#0f172a]">{pct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ── Section III — Broken Assumption ── */}
        <section>
          <p className="text-xs uppercase tracking-widest text-[#00c4e0] font-sans mb-2">
            Section III
          </p>
          <h2 className="text-3xl font-serif font-bold mb-6">
            The Broken Assumption
          </h2>

          <blockquote className="border-l-4 border-[#f5c842] pl-6 my-8 py-1">
            <p className="text-xl font-serif text-[#0f172a] leading-relaxed italic">
              "Every economic model ever written assumes cognitive labor is
              bounded by human births. That assumption broke in February 2024."
            </p>
          </blockquote>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            At the core of all modern economic thought lies a simple equation.
            In its most common form — the Cobb-Douglas production function — GDP
            is expressed as <em>Y = A × K^α × L^(1-α)</em>. For centuries, the
            variable <strong>L</strong> had one implicit definition: human
            population times participation rate times hours worked.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            This assumption is so deeply embedded it is rarely stated outright —
            much like a fish does not describe water. The Federal Reserve's
            inflation models, the CBO's GDP forecasts, IMF projections, the
            Phillips Curve itself — all assume that the supply of labor is a
            function of human biology. When unemployment is low, workers have
            bargaining power. Wages rise. Prices rise. This is the entire
            mechanism of monetary policy.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The steam engine didn't break this assumption. Neither did
            electricity, the assembly line, or the internet. Each was a tool of{" "}
            <em>augmentation</em> — making humans more productive. None of them
            were a source of <em>addition</em> to the labor supply. None of them
            were the worker itself.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            An AI agent is different in kind, not degree. It can perceive,
            reason, and act. It takes a high-level goal and independently
            devises and executes the steps to achieve it. It is not a tool for
            the worker. It is the worker. The new production function is:{" "}
            <em>L_total = L_human + L_agent</em>. L_human grows at ~1% per
            year. L_agent grows at ~20% per month.
          </p>

          <table className="w-full text-sm border-collapse mt-4 mb-6">
            <thead>
              <tr className="bg-[#0f172a] text-white">
                <th className="text-left p-3 font-medium">Era</th>
                <th className="text-left p-3 font-medium">Constraint</th>
                <th className="text-left p-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Agricultural (10,000 BC–1760)", "Arable land", "Resolved"],
                ["Industrial (1760–1970)", "Physical labor & energy", "Resolved"],
                [
                  "Information (1970–2023)",
                  "Knowledge labor & coordination",
                  "Breaking",
                ],
                [
                  "Agent Economy (2024–)",
                  "Compute & energy",
                  "New constraint",
                ],
              ].map(([era, constraint, status], i) => (
                <tr
                  key={era}
                  className={`border-b border-gray-100 ${
                    i % 2 === 1 ? "bg-[#f8fafc]" : ""
                  }`}
                >
                  <td className="p-3 text-gray-700">{era}</td>
                  <td className="p-3 text-gray-700">{constraint}</td>
                  <td className="p-3 font-medium text-[#0f172a]">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ── Section IV — Investment Landscape ── */}
        <section>
          <p className="text-xs uppercase tracking-widest text-[#00c4e0] font-sans mb-2">
            Section IV
          </p>
          <h2 className="text-3xl font-serif font-bold mb-6">
            The Investment Landscape
          </h2>

          <blockquote className="border-l-4 border-[#f5c842] pl-6 my-8 py-1">
            <p className="text-xl font-serif text-[#0f172a] leading-relaxed italic">
              "In the Gold Rush, the surest fortunes were made by the people who
              sold picks, shovels, and Levi's jeans."
            </p>
          </blockquote>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The application layer — the agents themselves — will be a
            hyper-competitive, low-margin commodity. The enduring, generational
            wealth will be captured by the companies that own the underlying
            substrate: the non-negotiable, physically constrained infrastructure
            upon which this entire economy runs.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            This is the Rent Extraction Principle. It held in railroads (steel
            and coal won, not the railroads). It held in the dot-com era (Cisco,
            Oracle, and the plumbing won, not Pets.com). It held in mobile
            (TSMC and ASML won, not the apps). It will hold here.
          </p>

          <table className="w-full text-sm border-collapse mt-4 mb-6">
            <thead>
              <tr className="bg-[#0f172a] text-white">
                <th className="text-left p-3 font-medium">Layer</th>
                <th className="text-left p-3 font-medium">Company</th>
                <th className="text-left p-3 font-medium">Moat</th>
                <th className="text-left p-3 font-medium">Margin</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Lithography",
                  "ASML",
                  "Only EUV machines on Earth",
                  "52%",
                ],
                [
                  "Fabrication",
                  "TSMC",
                  "Only sub-3nm fabs",
                  "53%",
                ],
                [
                  "Memory (HBM)",
                  "SK Hynix",
                  "HBM monopoly",
                  "72%",
                ],
                [
                  "Power Grid",
                  "Grid infrastructure",
                  "2,100-day queue",
                  "—",
                ],
                [
                  "Inference Networking",
                  "Arista / Broadcom",
                  "Hyperscaler lock-in",
                  "65%+",
                ],
              ].map(([layer, company, moat, margin], i) => (
                <tr
                  key={layer}
                  className={`border-b border-gray-100 ${
                    i % 2 === 1 ? "bg-[#f8fafc]" : ""
                  }`}
                >
                  <td className="p-3 text-gray-700">{layer}</td>
                  <td className="p-3 font-medium text-[#0f172a]">{company}</td>
                  <td className="p-3 text-gray-700">{moat}</td>
                  <td className="p-3 text-gray-700">{margin}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-lg font-serif font-semibold mt-8 mb-3">
            Hyperscaler Capital Expenditure ($B)
          </h3>
          <table className="w-full text-sm border-collapse mb-6">
            <thead>
              <tr className="bg-[#0f172a] text-white">
                <th className="text-left p-3 font-medium">Company</th>
                <th className="text-left p-3 font-medium">2024</th>
                <th className="text-left p-3 font-medium">2025</th>
                <th className="text-left p-3 font-medium">2026E</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Microsoft", "$44B", "$65B", "$85B"],
                ["Google", "$48B", "$75B", "$95B"],
                ["Amazon", "$63B", "$83B", "$105B"],
                ["Meta", "$35B", "$60B", "$72B"],
              ].map(([co, y24, y25, y26], i) => (
                <tr
                  key={co}
                  className={`border-b border-gray-100 ${
                    i % 2 === 1 ? "bg-[#f8fafc]" : ""
                  }`}
                >
                  <td className="p-3 font-medium text-[#0f172a]">{co}</td>
                  <td className="p-3 text-gray-700">{y24}</td>
                  <td className="p-3 text-gray-700">{y25}</td>
                  <td className="p-3 text-gray-700">{y26}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ── Section V — Policy Tailwind ── */}
        <section>
          <p className="text-xs uppercase tracking-widest text-[#00c4e0] font-sans mb-2">
            Section V
          </p>
          <h2 className="text-3xl font-serif font-bold mb-6">
            The Policy Tailwind
          </h2>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            This is not just a corporate trend. Governments are treating AI
            infrastructure as a national security imperative. The United States
            has invoked the Defense Production Act for semiconductor supply
            chains. The Stargate Initiative commits $500 billion in US AI
            infrastructure investment. Seventeen national AI strategies are now
            active across the G20.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The result is a capital expenditure environment with no historical
            precedent in peacetime. Every dollar of government commitment
            de-risks private investment and accelerates the build-out of the
            substrate. This is the tailwind beneath the tailwind.
          </p>

          <table className="w-full text-sm border-collapse mt-4 mb-6">
            <thead>
              <tr className="bg-[#0f172a] text-white">
                <th className="text-left p-3 font-medium">Country</th>
                <th className="text-left p-3 font-medium">Commitment</th>
                <th className="text-left p-3 font-medium">Primary Focus</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["United States", "$500B (Stargate)", "Full-stack AI infrastructure"],
                ["European Union", "€20B (AI Factories)", "Sovereign compute capacity"],
                ["China", "$140B+ (5-yr plan)", "Semiconductor independence"],
                ["United Kingdom", "£11B", "Frontier model safety + compute"],
                ["UAE / Saudi Arabia", "$50B+", "Hyperscale data centers"],
              ].map(([country, commitment, focus], i) => (
                <tr
                  key={country}
                  className={`border-b border-gray-100 ${
                    i % 2 === 1 ? "bg-[#f8fafc]" : ""
                  }`}
                >
                  <td className="p-3 font-medium text-[#0f172a]">{country}</td>
                  <td className="p-3 text-gray-700">{commitment}</td>
                  <td className="p-3 text-gray-700">{focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ── Section VI — Physical Bottlenecks ── */}
        <section>
          <p className="text-xs uppercase tracking-widest text-[#00c4e0] font-sans mb-2">
            Section VI
          </p>
          <h2 className="text-3xl font-serif font-bold mb-6">
            The Physical Bottlenecks
          </h2>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The agent economy runs on electricity. A single NVIDIA Blackwell
            rack consumes up to 120 kW — the equivalent of a dozen homes. A
            large AI data center requires over 500 megawatts, the power budget
            of a small city. The constraint is not capital or ambition. The
            constraint is physics.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The US grid interconnection queue currently stands at a{" "}
            <strong>2,100-day wait</strong>. Transformer lead times have
            extended to <strong>128 weeks</strong>. Power prices in key data
            center markets have increased <strong>833%</strong> in three years.
            These are not temporary disruptions. They are structural constraints
            that will persist for the entire decade and create durable pricing
            power for the companies that manage them.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The companies positioned to benefit:{" "}
            <strong>Eaton (ETN)</strong> for electrical distribution equipment;{" "}
            <strong>GE Vernova (GEV)</strong> for gas turbines and grid
            hardware; <strong>Quanta Services (PWR)</strong> for grid
            construction. These are the unglamorous picks and shovels of the
            agent economy — and they are already reporting record backlogs.
          </p>

          <table className="w-full text-sm border-collapse mt-4 mb-6">
            <thead>
              <tr className="bg-[#0f172a] text-white">
                <th className="text-left p-3 font-medium">Constraint</th>
                <th className="text-left p-3 font-medium">Current Reality</th>
                <th className="text-left p-3 font-medium">Investment Play</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Grid Interconnection Queue",
                  "2,100-day average wait",
                  "Quanta Services (PWR), GE Vernova (GEV)",
                ],
                [
                  "Transformer Lead Times",
                  "128-week backlog",
                  "Eaton (ETN)",
                ],
                [
                  "Cooling / Thermal Density",
                  "120kW+ per rack (Blackwell)",
                  "Vertiv (VRT)",
                ],
                [
                  "Off-Grid Power",
                  "Utilities can't keep up",
                  "Bloom Energy (BE)",
                ],
                [
                  "Nuclear Baseload",
                  "24/7 clean power demand",
                  "Vistra (VST), Constellation (CEG)",
                ],
              ].map(([constraint, reality, play], i) => (
                <tr
                  key={constraint}
                  className={`border-b border-gray-100 ${
                    i % 2 === 1 ? "bg-[#f8fafc]" : ""
                  }`}
                >
                  <td className="p-3 text-gray-700">{constraint}</td>
                  <td className="p-3 text-gray-700">{reality}</td>
                  <td className="p-3 font-medium text-[#0f172a]">{play}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ── Section VII — Technology Upgrade ── */}
        <section>
          <p className="text-xs uppercase tracking-widest text-[#00c4e0] font-sans mb-2">
            Section VII
          </p>
          <h2 className="text-3xl font-serif font-bold mb-6">
            The Technology Upgrade
          </h2>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            Inside every AI data center, a silent transition is underway: copper
            to optical. At 400G and 800G switching speeds, the physics of
            electrical signals begin to fail. Light moves faster and carries
            more data with less heat. The entire networking fabric of the agent
            economy must be rebuilt in photons.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            <strong>Arista Networks (ANET)</strong> holds over 50% market share
            in 400G and 800G Ethernet switching — the standard for AI clusters.
            Their EOS operating system is purpose-built for the performance
            demands of GPU-to-GPU communication. As InfiniBand loses ground to
            open-standard Ethernet in large clusters, Arista is the primary
            beneficiary.
          </p>

          <table className="w-full text-sm border-collapse mt-4 mb-6">
            <thead>
              <tr className="bg-[#0f172a] text-white">
                <th className="text-left p-3 font-medium">Generation</th>
                <th className="text-left p-3 font-medium">Speed</th>
                <th className="text-left p-3 font-medium">Technology</th>
                <th className="text-left p-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Legacy DC", "100G", "Copper / traditional", "Being replaced"],
                ["Current AI", "400G", "Optical Ethernet", "Deployment now"],
                ["Next-gen AI", "800G", "Full coherent optical", "2026–2027"],
                ["Future AI", "1.6T", "Silicon photonics", "2028+"],
              ].map(([gen, speed, tech, status], i) => (
                <tr
                  key={gen}
                  className={`border-b border-gray-100 ${
                    i % 2 === 1 ? "bg-[#f8fafc]" : ""
                  }`}
                >
                  <td className="p-3 text-gray-700">{gen}</td>
                  <td className="p-3 text-gray-700">{speed}</td>
                  <td className="p-3 text-gray-700">{tech}</td>
                  <td className="p-3 font-medium text-[#0f172a]">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ── Section VIII — Repricing Event ── */}
        <section>
          <p className="text-xs uppercase tracking-widest text-[#00c4e0] font-sans mb-2">
            Section VIII
          </p>
          <h2 className="text-3xl font-serif font-bold mb-6">
            The Repricing Event
          </h2>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            Goldman Sachs projects AI will add{" "}
            <strong>$10–12 trillion to global GDP by 2035</strong>. The San
            Francisco Federal Reserve attributes 0.7 percentage points of 2025
            US productivity growth directly to AI adoption — a number they
            expect to increase. The IMF has begun revising its long-run growth
            models upward for the first time in a decade.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            And yet: no bank model has AGI in it. No consensus estimate prices
            in the crossover moment — the day agent labor exceeds human labor as
            a share of global output. No DCF model has a variable for{" "}
            <em>L_agent</em>. Every equity valuation model on Wall Street is
            still solving for a world where labor is a function of human births.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            We are at the 1997 moment of the internet. The infrastructure is
            real. The adoption is accelerating. The P/E rerate has begun for a
            handful of obvious plays. But the full repricing — when every
            analyst updates their models to account for a labor supply that is
            no longer bounded by biology — has not happened. That is the
            opportunity.
          </p>

          <table className="w-full text-sm border-collapse mt-4 mb-6">
            <thead>
              <tr className="bg-[#0f172a] text-white">
                <th className="text-left p-3 font-medium">
                  What No Consensus Model Includes
                </th>
                <th className="text-left p-3 font-medium">Implication</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Agent labor as % of GDP contribution",
                  "GDP forecasts are structurally low",
                ],
                [
                  "Inference cost deflationary spiral",
                  "Corporate margins understated for adopters",
                ],
                [
                  "Phillips Curve inversion",
                  "Monetary policy models are obsolete",
                ],
                [
                  "Recursive AI improvement loop",
                  "Productivity growth is non-linear",
                ],
                [
                  "L_agent replacing L_human at scale",
                  "Labor cost assumptions are too high",
                ],
              ].map(([item, implication], i) => (
                <tr
                  key={item}
                  className={`border-b border-gray-100 ${
                    i % 2 === 1 ? "bg-[#f8fafc]" : ""
                  }`}
                >
                  <td className="p-3 text-gray-700">{item}</td>
                  <td className="p-3 font-medium text-[#0f172a]">
                    {implication}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ── Section IX — Trade Already Placed ── */}
        <section>
          <p className="text-xs uppercase tracking-widest text-[#00c4e0] font-sans mb-2">
            Section IX
          </p>
          <h2 className="text-3xl font-serif font-bold mb-6">
            The Trade Already Placed
          </h2>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            On January 13, 2023, I initiated a personal portfolio with a
            singular mandate: test this thesis with real capital. The world on
            that date was in the grip of a tech winter. Major companies were
            announcing layoffs. The Federal Reserve was hiking rates. Recession
            consensus was at 70%. ChatGPT had been public for six weeks and was
            being described as a clever parlor trick.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            My thesis was specific and falsifiable: the market was mispricing
            the <em>rate of acceleration</em> of AI adoption. The hardware
            bottleneck would hit before anyone was ready. The value would accrue
            to the substrate — the picks, shovels, and electrical grid of the
            new economy. The first position was FNGU. The final, distilled
            expression was SOXL.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The position survived a{" "}
            <strong>−36.5% drawdown in Spring 2024</strong>. Every night during
            that drawdown, I re-underwrote the thesis from scratch, asking three
            questions: Has the fundamental demand for compute decreased? Has a
            new technology broken the hardware bottleneck? Is the sell-off
            fundamental or emotional? The answer, each time, was no, no, and
            emotional. The entire drawdown was recovered in just over one month.
            The lesson: conviction isn't a feeling. It's a discipline. It's
            returning to first principles when your P&L is trying to override
            your analysis.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The SOXL entry in April 2025 at $9.45 — during the tariff panic,
            when the semiconductor index gapped down 8% at the open — was the
            clinical application of that lesson. Maximum pessimism. Clear
            fundamental thesis. No change in long-term demand. One of the
            largest single-tranche allocations since the portfolio's inception.
          </p>

          <h3 className="text-lg font-serif font-semibold mt-8 mb-3">
            Verified Performance (33 Fidelity Statements)
          </h3>
          <table className="w-full text-sm border-collapse mb-6">
            <thead>
              <tr className="bg-[#0f172a] text-white">
                <th className="text-left p-3 font-medium">Period</th>
                <th className="text-left p-3 font-medium">GP Return</th>
                <th className="text-left p-3 font-medium">Nasdaq 100</th>
                <th className="text-left p-3 font-medium">Outperformance</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2023", "+330%", "+54%", "+276 pts"],
                ["2024", "+342%", "+18%", "+324 pts"],
                ["2025", "+380%", "+24%", "+356 pts"],
                ["YTD 2026", "+141.54%", "+12%", "+129 pts"],
                ["Annualized", "+349.52%", "+24%", "+325 pts"],
              ].map(([period, gp, ndx, out], i) => (
                <tr
                  key={period}
                  className={`border-b border-gray-100 ${
                    i % 2 === 1 ? "bg-[#f8fafc]" : ""
                  }`}
                >
                  <td className="p-3 font-medium text-[#0f172a]">{period}</td>
                  <td className="p-3 text-[#00c4e0] font-semibold">{gp}</td>
                  <td className="p-3 text-gray-500">{ndx}</td>
                  <td className="p-3 text-[#f5c842] font-semibold">{out}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-lg font-serif font-semibold mt-6 mb-3">
            Portfolio Journey
          </h3>
          <table className="w-full text-sm border-collapse mb-6">
            <thead>
              <tr className="bg-[#0f172a] text-white">
                <th className="text-left p-3 font-medium">Phase</th>
                <th className="text-left p-3 font-medium">Instrument</th>
                <th className="text-left p-3 font-medium">Thesis</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Jan 2023",
                  "FNGU (3× FAANG ETN)",
                  "Broad AI platform shift; tech winter is wrong",
                ],
                [
                  "Mid-2023",
                  "BITX (2× Bitcoin ETF)",
                  "Risk-on sentiment return; animal spirits",
                ],
                [
                  "Late 2023",
                  "TSLL + MSTU",
                  "Refining to specific AI winners: Tesla (physical AI) + Microsoft (platform)",
                ],
                [
                  "Late 2023 → Now",
                  "SOXL (3× Semiconductors)",
                  "Final distillation: pure hardware bottleneck thesis",
                ],
              ].map(([phase, instrument, thesis], i) => (
                <tr
                  key={phase}
                  className={`border-b border-gray-100 ${
                    i % 2 === 1 ? "bg-[#f8fafc]" : ""
                  }`}
                >
                  <td className="p-3 font-medium text-[#0f172a]">{phase}</td>
                  <td className="p-3 text-gray-700 font-mono text-xs">
                    {instrument}
                  </td>
                  <td className="p-3 text-gray-700">{thesis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ── Section X — The Window ── */}
        <section>
          <p className="text-xs uppercase tracking-widest text-[#00c4e0] font-sans mb-2">
            Section X
          </p>
          <h2 className="text-3xl font-serif font-bold mb-6">The Window</h2>

          <p className="text-base leading-relaxed text-gray-700 mb-4">
            The window to be early closes when consensus arrives. Consensus has
            not arrived. The indicators:
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                n: "01",
                title: "The Shock-and-Awe Paralysis",
                body: "Most business leaders acknowledge AI but haven't acted. They're in wait-and-see. This is the same position as Kodak executives in 2007. They knew the iPhone was coming. They chose to wait.",
              },
              {
                n: "02",
                title: "Analysts Haven't Updated",
                body: "Wall Street models still price companies based on human-employee headcount trajectories. When you can replace 30% of your knowledge workforce with agents in 18 months, the operating leverage doesn't show up in any current model.",
              },
              {
                n: "03",
                title: "The Valuation Spread",
                body: "NVDA is priced for AI dominance. Inference cloud, power infrastructure, and physical AI companies are priced for 'interesting technology.' The spread between where these trade and where they'll trade when deployment scales is the thesis.",
              },
              {
                n: "04",
                title: "The Recursive Engine Is Starting",
                body: "Agents are now being used to build better agents. AlphaGo started learning from itself after human games. We are at the equivalent moment. The improvement rate is about to accelerate.",
              },
              {
                n: "05",
                title: "The AGI Clock",
                body: "Leopold Aschenbrenner said 2027. In June 2024, as a 23-year-old former OpenAI researcher, he published a 165-page essay almost nobody read — and then used it to raise $9 billion. Every major prediction he made has come true. Every month that passes is a month closer to the moment when AGI is no longer a prediction but a description.",
              },
            ].map((item) => (
              <div key={item.n} className="flex gap-4">
                <div className="text-2xl font-mono font-bold text-[#f5c842] shrink-0 w-10">
                  {item.n}
                </div>
                <div>
                  <div className="font-semibold text-[#0f172a] mb-1">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    {item.body}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="border-l-4 border-[#f5c842] pl-6 my-10 py-1">
            <p className="text-xl font-serif text-[#0f172a] leading-relaxed italic">
              "The agents are already in the economy. The models haven't caught
              up. The window is still open — but it's narrowing by the quarter."
            </p>
          </blockquote>

          <div className="text-center mt-10">
            <a
              href="https://agenticcapital.fund"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0f172a] text-white px-8 py-4 text-sm uppercase tracking-widest font-sans hover:bg-[#1e293b] transition-colors"
            >
              Learn More at agenticcapital.fund →
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* ── About ── */}
        <section>
          <h2 className="text-2xl font-serif font-bold mb-4">
            About Dean Gallagher
          </h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            Dean Gallagher is the General Partner of Agentic Capital, based in
            Wellington, Florida. He began constructing and stress-testing the AI
            infrastructure investment thesis in January 2023 — eighteen months
            before it reached mainstream consensus. Over 39 months of live
            market exposure, the thesis was refined through a −36.5% drawdown,
            a series of macro inflection points, and ultimately validated across
            33 consecutive Fidelity statements. The annualized return over this
            period stands at +349.52% against a Nasdaq 100 benchmark of +24%.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Agentic Capital invests in the substrate layer of the AI economy —
            the compute, power, networking, and physical infrastructure upon
            which the agent economy runs. The fund is open to accredited
            investors.
          </p>
        </section>

        {/* ── Disclaimer ── */}
        <section>
          <div className="border-t border-gray-100 pt-10">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong className="text-gray-500">IMPORTANT DISCLOSURES:</strong>{" "}
              This document is for informational and educational purposes only.
              It does not constitute an offer to sell or a solicitation of an
              offer to buy any securities. Past performance is not indicative of
              future results. The performance described represents the General
              Partner&apos;s personal trading account and is presented for
              illustrative purposes only. It is not the performance of Agentic
              Capital fund and should not be considered a reflection of the
              returns the fund may generate. The personal account was managed
              with a high degree of concentration and utilized leveraged
              financial instruments (ETFs) which carry unique and significant
              risks, including the risk of total loss. The risk profile of this
              personal account is materially different from the strategy that
              will be employed by Agentic Capital fund, which will operate under
              formal risk management controls and a different leverage profile.
              Investing in securities involves substantial risk, including the
              possible loss of principal. This document is intended solely for
              accredited investors as defined under applicable securities laws.
              Nothing contained herein constitutes investment, legal, tax, or
              other advice. Recipients should consult their own advisers before
              making any investment decision. Agentic Capital is not a
              registered investment adviser. All figures and projections are
              estimates based on available data and are subject to change
              without notice.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
