import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function SampleReport() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Report Container - A4 / Letter format */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-[8.5in] mx-auto space-y-16">

          {/* Page 1 - Cover */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-16 min-h-[11in] flex flex-col justify-between">
            <div className="text-center space-y-12">
              <div className="text-xs uppercase tracking-widest text-gray-400 mb-8">
                YOUR LOGO
              </div>

              <div className="space-y-4">
                <div className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  MARKET FEASIBILITY
                </div>
                <h1 className="text-5xl font-serif text-[#2E2A5C]">
                  ANALYSIS
                </h1>
                <div className="w-32 h-0.5 bg-[#2E2A5C] mx-auto"></div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-serif text-gray-900">
                  Senior Software Engineer
                </h2>
                <p className="text-base text-gray-600">
                  San Francisco Bay Area
                </p>
              </div>

              <div className="py-12 space-y-4">
                <div className="text-7xl font-serif text-[#2E2A5C]">
                  47
                </div>
                <div className="text-sm text-gray-600">
                  full matches
                </div>
                <div className="w-48 h-px bg-gray-300 mx-auto"></div>
                <div className="text-lg text-gray-900">
                  1,240 with one condition relaxed
                </div>
              </div>
            </div>

            <div className="text-center space-y-1 text-sm text-gray-600">
              <p>Prepared by Sarah Kim</p>
              <p>Kim Talent Partners</p>
              <p>May 14, 2026</p>
            </div>
          </div>

          {/* Page 2 - Executive Summary */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-12 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
              <div className="text-xs text-gray-400">YOUR LOGO</div>
              <div className="text-xs text-gray-500">Market Feasibility · Sr SWE</div>
            </div>

            {/* Verdict Badge */}
            <div className="flex items-center gap-4 mb-8">
              <Badge className="bg-[#FDF3D0] text-gray-900 px-4 py-2 text-base hover:bg-[#FDF3D0]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#E0A800] mr-2"></span>
                YELLOW · 62 / 100
              </Badge>
              <span className="text-xs font-mono text-gray-500">
                confidence: medium (n=312)
              </span>
            </div>

            {/* Section Title */}
            <h2 className="text-2xl font-serif text-gray-900 mb-6">
              EXECUTIVE SUMMARY
            </h2>

            {/* Prose */}
            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p>
                This Senior Software Engineer role in San Francisco presents moderate
                difficulty. Our analysis of 312 matching profiles in the SF Bay Area
                shows 47 candidates fully meet all listed requirements.
              </p>
              <p>
                The primary constraint is compensation: at $160–180K base, the budget
                reaches approximately 32% of qualified candidates. Top 50% commands $210K+.
              </p>
              <p>
                Relaxing the Rust requirement expands the pool to 1,240 partial matches,
                suggesting a skill-adjacent sourcing strategy may be most productive.
              </p>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
                <div className="text-4xl font-semibold text-[#2E2A5C] mb-2">47</div>
                <div className="text-sm text-gray-600">full matches</div>
                <div className="text-xs text-gray-500 mt-1">2.1% of market</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
                <div className="text-4xl font-semibold text-[#4F6BED] mb-2">1,240</div>
                <div className="text-sm text-gray-600">partial matches</div>
                <div className="text-xs text-gray-500 mt-1">if Rust relaxed</div>
              </div>
            </div>

            {/* Cross-reference */}
            <div className="border-t border-gray-200 pt-6 pb-8 text-sm text-gray-600 italic flex-grow">
              Key bottleneck: Rust requirement filters out 96% of otherwise-qualified candidates.
              See page 3 for the full waterfall. See page 4 for compensation breakdown.
              Recommendations on page 6.
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-gray-200 flex justify-between text-xs text-gray-400">
              <span>Analysis powered by ReqVerdict</span>
              <span>2/6</span>
            </div>
          </div>

          {/* Page 3 - Talent Pool Waterfall */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-12 min-h-[11in]">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
              <div className="text-xs text-gray-400">YOUR LOGO</div>
              <div className="text-xs text-gray-500">Market Feasibility · Sr SWE</div>
            </div>

            {/* Section Title */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-2">
                TALENT POOL ANALYSIS
              </h2>
              <p className="text-sm text-gray-600">
                How the candidate pool changes as requirements are relaxed
              </p>
            </div>

            {/* Waterfall Chart */}
            <div className="space-y-6 mb-12">
              {[
                { label: "All conditions met", value: 47, width: "3.8%", delta: null },
                { label: "Relax PhD requirement", value: 189, width: "15.2%", delta: "+142" },
                { label: "Relax 'SF only' requirement", value: 612, width: "49.4%", delta: "+423" },
                { label: "Relax Rust requirement", value: 1240, width: "100%", delta: "+628" },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-48 text-sm text-gray-700">{item.label}</div>
                    <div className="flex-1 flex items-center gap-3">
                      <div
                        className="h-8 bg-gradient-to-r from-[#2E2A5C] to-[#4F6BED] rounded"
                        style={{ width: item.width }}
                      ></div>
                      <span className="font-mono font-semibold text-gray-900 min-w-[4ch]">
                        {item.value}
                      </span>
                    </div>
                  </div>
                  {item.delta && (
                    <div className="ml-48 text-xs text-gray-500 font-mono">{item.delta}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Most Restrictive Requirements */}
            <div className="border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                TOP 5 MOST RESTRICTIVE REQUIREMENTS
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Rust experience", pct: 4 },
                  { name: "On-site 4d/week", pct: 12 },
                  { name: "Series B+ exp", pct: 18 },
                  { name: "MS/PhD required", pct: 31 },
                  { name: "React 5+yr", pct: 42 },
                ].map((req, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-40 text-sm text-gray-700">{req.name}</div>
                    <div className="flex-1 flex items-center gap-2">
                      <div
                        className="h-6 bg-[#2E2A5C]/30 rounded"
                        style={{ width: `${req.pct}%` }}
                      ></div>
                      <span className="text-xs text-gray-600">{req.pct}% of market</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaway */}
            <div className="bg-[#2E2A5C]/5 border border-[#2E2A5C]/20 rounded-lg p-6">
              <div className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">
                KEY TAKEAWAY
              </div>
              <p className="text-sm text-gray-700">
                The Rust requirement alone eliminates 96% of otherwise-qualified candidates.
                This is the single highest-leverage condition to negotiate with the client.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-4 border-t border-gray-200 flex justify-between text-xs text-gray-400">
              <span>Analysis powered by ReqVerdict</span>
              <span>3/6</span>
            </div>
          </div>

          {/* Page 4 - Compensation Reality */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-12 min-h-[11in]">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
              <div className="text-xs text-gray-400">YOUR LOGO</div>
              <div className="text-xs text-gray-500">Market Feasibility · Sr SWE</div>
            </div>

            {/* Section Title */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-2">
                COMPENSATION REALITY
              </h2>
              <p className="text-sm text-gray-600">
                Market base salary distribution — Sr. SWE, San Francisco Bay Area
              </p>
            </div>

            {/* Histogram Visualization */}
            <div className="border border-gray-200 rounded-lg p-8 mb-8 bg-gray-50">
              <div className="relative h-48 flex items-end gap-1 mb-3">
                {/* Simplified histogram bars */}
                <div className="flex-1 bg-[#2E2A5C] h-[30%] rounded-t"></div>
                <div className="flex-1 bg-[#2E2A5C] h-[50%] rounded-t"></div>
                <div className="flex-1 bg-[#2E2A5C] h-[70%] rounded-t"></div>
                <div className="flex-1 bg-[#2E2A5C] h-[85%] rounded-t"></div>
                <div className="flex-1 bg-[#2E2A5C] h-[95%] rounded-t"></div>
                <div className="flex-1 bg-[#2E2A5C] h-[100%] rounded-t relative">
                  <div className="absolute -right-px top-0 bottom-0 w-0.5 bg-[#D64545] z-10"></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-[#D64545] whitespace-nowrap font-semibold">
                    ↓ $180K
                  </div>
                </div>
                <div className="flex-1 bg-gray-300 h-[95%] rounded-t"></div>
                <div className="flex-1 bg-gray-300 h-[85%] rounded-t"></div>
                <div className="flex-1 bg-gray-300 h-[70%] rounded-t"></div>
                <div className="flex-1 bg-gray-300 h-[50%] rounded-t"></div>
                <div className="flex-1 bg-gray-300 h-[30%] rounded-t"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>$120K</span>
                <span>$180K</span>
                <span>$240K</span>
                <span>$300K</span>
              </div>
              <div className="text-center">
                <span className="text-xs text-[#D64545] font-semibold">
                  Your budget: 32nd percentile
                </span>
              </div>
            </div>

            {/* Percentile Summary */}
            <div className="text-center text-base mb-12 space-y-2">
              <p className="font-semibold text-gray-900">
                YOUR BUDGET REACHES ~32% OF QUALIFIED CANDIDATES IN THIS MARKET.
              </p>
              <p className="text-gray-700">Top 50% requires $210K+ base.</p>
              <p className="text-gray-700">Top 25% requires $240K+ base.</p>
            </div>

            {/* Reverse Persona Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-4">
                  AT $180K YOU CAN HIRE:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• ~3–5 yr exp</li>
                  <li>• Mid-size companies</li>
                  <li>• Non-FAANG background</li>
                  <li>• Tier-2 cities</li>
                </ul>
              </div>
              <div className="border-2 border-[#2E2A5C] rounded-lg p-6 bg-white">
                <h3 className="text-sm font-semibold text-[#2E2A5C] uppercase mb-4">
                  AT $210K YOU CAN HIRE:
                </h3>
                <ul className="space-y-2 text-sm text-gray-900">
                  <li>• ~5–8 yr exp</li>
                  <li>• FAANG-adjacent</li>
                  <li>• IPO experience</li>
                  <li>• SF / NYC based</li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-4 border-t border-gray-200 flex justify-between text-xs text-gray-400">
              <span>Analysis powered by ReqVerdict</span>
              <span>4/6</span>
            </div>
          </div>

          {/* Page 5 - Market Landscape */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-12 min-h-[11in]">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
              <div className="text-xs text-gray-400">YOUR LOGO</div>
              <div className="text-xs text-gray-500">Market Feasibility · Sr SWE</div>
            </div>

            {/* Section Title */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-2">
                MARKET LANDSCAPE
              </h2>
              <p className="text-sm text-gray-600">
                Where the talent lives and works
              </p>
            </div>

            {/* Geographic Distribution */}
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                GEOGRAPHIC DISTRIBUTION
              </h3>
              <div className="space-y-3 mb-4">
                {[
                  { metro: "SF Bay Area", count: 312, width: "100%" },
                  { metro: "New York", count: 198, width: "63%" },
                  { metro: "Seattle", count: 156, width: "50%" },
                  { metro: "Austin", count: 124, width: "40%" },
                  { metro: "Los Angeles", count: 89, width: "28%" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-32 text-sm text-gray-700">{item.metro}</div>
                    <div className="flex-1 flex items-center gap-3">
                      <div
                        className="h-6 bg-[#2E2A5C] rounded"
                        style={{ width: item.width }}
                      ></div>
                      <span className="font-mono text-sm text-gray-900">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 italic">
                * 87% of qualified candidates are concentrated in these 5 metros.
              </p>
            </div>

            {/* Top Employers */}
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                TOP EMPLOYERS
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Stripe", count: 23 },
                  { name: "Figma", count: 18 },
                  { name: "Notion", count: 15 },
                  { name: "Linear", count: 14 },
                  { name: "Vercel", count: 13 },
                  { name: "GitHub", count: 12 },
                  { name: "Brex", count: 11 },
                  { name: "Ramp", count: 10 },
                  { name: "Cloudflare", count: 9 },
                  { name: "Datadog", count: 8 },
                  { name: "Plaid", count: 7 },
                  { name: "Supabase", count: 7 },
                ].map((company, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 rounded-full px-4 py-2 flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-900">{company.name}</span>
                    <span className="text-xs font-mono text-gray-600">{company.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Activity */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                MARKET ACTIVITY
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  ~14% of this talent pool shows active job-seeking signals.
                </p>
                <p>
                  23 similar JDs posted in the last 30 days across LinkedIn and Indeed.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-4 border-t border-gray-200 flex justify-between text-xs text-gray-400">
              <span>Analysis powered by ReqVerdict</span>
              <span>5/6</span>
            </div>
          </div>

          {/* Page 6 - Recommendations */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-12 min-h-[11in]">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
              <div className="text-xs text-gray-400">YOUR LOGO</div>
              <div className="text-xs text-gray-500">Market Feasibility · Sr SWE</div>
            </div>

            {/* Section Title */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-2">
                RECOMMENDATIONS
              </h2>
              <p className="text-sm text-gray-600">
                Three changes to make this req fillable
              </p>
            </div>

            {/* Three Recommendation Cards */}
            <div className="space-y-6 mb-10">
              {[
                {
                  num: "1",
                  title: "RELAX THE RUST REQUIREMENT",
                  body: "Consider engineers with strong systems programming experience in C++ or Go. The talent pool expands 16× with this change alone.",
                  metrics: [
                    { label: "Pool", value: "47 → 1,240" },
                    { label: "Score", value: "62 → 31 (GREEN)" },
                  ],
                },
                {
                  num: "2",
                  title: "INCREASE TOTAL COMP TO $210K+",
                  body: "Moving to market median compensation expands your reach from 32% to 68% of qualified candidates and significantly reduces time-to-fill.",
                  metrics: [
                    { label: "Reach", value: "32% → 68%" },
                    { label: "Pool", value: "+300 candidates" },
                  ],
                },
                {
                  num: "3",
                  title: "EXPAND TO SEATTLE + REMOTE (PST)",
                  body: "Seattle metro adds 156 qualified candidates. Remote PST timezone adds another 94, while maintaining team collaboration windows.",
                  metrics: [
                    { label: "Pool", value: "+250 candidates" },
                    { label: "Geographic", value: "SF → West Coast" },
                  ],
                },
              ].map((rec, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-6 bg-white">
                  <div className="flex gap-4 mb-4">
                    <div className="text-3xl font-serif text-[#2E2A5C]">{rec.num}</div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase mb-2">
                        {rec.title}
                      </h3>
                      <p className="text-sm text-gray-700 mb-4">{rec.body}</p>
                      <div className="flex gap-3">
                        {rec.metrics.map((metric, j) => (
                          <div
                            key={j}
                            className="bg-gray-100 rounded px-3 py-1 text-xs font-mono text-gray-700"
                          >
                            {metric.label}: {metric.value}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs uppercase text-gray-600"></th>
                    <th className="text-center px-4 py-3 text-xs uppercase text-gray-600">
                      Current
                    </th>
                    <th className="text-center px-4 py-3 text-xs uppercase text-[#2E2A5C] font-semibold">
                      Adjusted
                    </th>
                    <th className="text-center px-4 py-3 text-xs uppercase text-gray-600">
                      Market
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Matches</td>
                    <td className="px-4 py-3 text-center text-gray-600">47</td>
                    <td className="px-4 py-3 text-center font-semibold text-[#2E2A5C]">
                      1,200+
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600">2,800</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Reach %</td>
                    <td className="px-4 py-3 text-center text-gray-600">32%</td>
                    <td className="px-4 py-3 text-center font-semibold text-[#2E2A5C]">68%</td>
                    <td className="px-4 py-3 text-center text-gray-600">—</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-700">Est. TTF</td>
                    <td className="px-4 py-3 text-center text-gray-600">12+ wks</td>
                    <td className="px-4 py-3 text-center font-semibold text-[#2E2A5C]">
                      4–6 wks
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600">6 wks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Closing */}
            <div className="text-center space-y-4">
              <p className="text-sm text-gray-700 italic">
                Ready to adjust the JD? Let's re-run this analysis with the new criteria.
              </p>
              <p className="text-sm text-gray-900">
                Sarah Kim · sarah@kimtalent.com
              </p>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-4 border-t border-gray-200 flex justify-between text-xs text-gray-400">
              <span>Analysis powered by ReqVerdict</span>
              <span>6/6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
