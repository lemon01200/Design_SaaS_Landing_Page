import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { HeroProductMockup } from "./components/HeroProductMockup";
import { HeroAnimatedDemo } from "./components/HeroAnimatedDemo";
import { VerdictCardMockup } from "./components/VerdictCardMockup";
import { PDFReportMockup } from "./components/PDFReportMockup";
import { SourcingPlaybookMockup } from "./components/SourcingPlaybookMockup";
import { EarlyAccessDialog } from "./components/EarlyAccessDialog";
import SampleReport from "./pages/SampleReport";

function HomePage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight text-foreground">
              ReqVerdict
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                Features
              </a>
              <Link to="/sample-report" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                Sample Reports
              </Link>
              <a href="#pricing" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                Pricing
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <Button
                className="bg-[#2E2A5C] hover:bg-[#2E2A5C]/90"
                onClick={() => setDialogOpen(true)}
              >
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="text-xs uppercase tracking-widest text-foreground/60">
                FOR INDEPENDENT RECRUITERS
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
                Know if a JD is fillable —<br />before you take the req.
              </h1>

              <p className="text-xl text-foreground/70 leading-relaxed max-w-xl">
                The decision layer for independent recruiters. Paste any JD, get a
                5-second feasibility verdict and a client-ready market report you
                can actually send.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#2E2A5C] hover:bg-[#2E2A5C]/90 text-lg px-8"
                  onClick={() => setDialogOpen(true)}
                >
                  Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="ghost" className="text-lg" asChild>
                  <Link to="/sample-report">See a sample report</Link>
                </Button>
              </div>

              <p className="text-sm text-foreground/50">
                Join the waitlist. First 100 recruiters get 6 months free.
              </p>
            </div>

            <div>
              <HeroAnimatedDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Snapshot */}
      <section className="py-32 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs uppercase tracking-widest text-foreground/60">
              THE REAL JOB
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
              Sourcing isn't the hard part.<br />Deciding what's worth sourcing is.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 max-w-6xl mx-auto">
            {[
              {
                quote: "I've just spent 3 weeks on a req that was never fillable.",
                body: "You took the JD on gut feel. Now you've sourced 200 profiles, the client won't budge on comp, and the clock keeps running.",
              },
              {
                quote: "The client wants a unicorn for a donkey's salary.",
                body: "You know the budget is off, but you don't have the data to push back. So you burn the relationship — or keep searching for a miracle.",
              },
              {
                quote: "Every 'AI recruiter tool' wants to source for me. I need something else.",
                body: "Sourcing isn't your bottleneck. Deciding which reqs are worth your next three weeks — that's the job nobody's building for.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="py-8 px-6 space-y-4 border-r last:border-r-0 border-border"
              >
                <p className="text-2xl italic text-foreground/90 leading-snug">
                  "{item.quote}"
                </p>
                <p className="text-foreground/60 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Demo */}
      <section className="py-32 bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs uppercase tracking-widest text-white/60">
              HOW IT WORKS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              From JD to client-ready report<br />in under 60 seconds.
            </h2>
            <p className="text-xl text-white/70">
              No configuration. No dashboard-building. Paste, read, send.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Paste the JD",
                desc: "We parse the role, requirements, comp, and location automatically.",
              },
              {
                num: "02",
                title: "Get the verdict",
                desc: "A red / yellow / green call in 5 seconds, with the three reasons why.",
              },
              {
                num: "03",
                title: "Send the report",
                desc: "Download a white-labeled PDF — your logo, your name, your client.",
              },
            ].map((step) => (
              <div key={step.num} className="space-y-3">
                <div className="text-5xl font-light text-white/30">{step.num}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-32" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <div className="text-xs uppercase tracking-widest text-foreground/60">
              WHAT YOU GET
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Three things that change<br />how you work every day.
            </h2>
          </div>

          {/* Pillar 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-6">
              <div className="text-sm text-foreground/60 uppercase tracking-wide">
                01 — DECIDE
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Stop guessing which reqs to take.
              </h3>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Every JD gets a 0–100 difficulty score, a red / yellow / green
                  verdict, and the three reasons why. No more 30-minute LinkedIn
                  Recruiter fishing trips to estimate feasibility.
                </p>
                <p>
                  Works on any JD — tech, healthcare, finance, exec. Results in
                  five seconds, with a confidence level attached to every number.
                </p>
              </div>
              <p className="text-sm text-foreground/50">
                → Built on H1B LCA, BLS OEWS, Levels.fyi, and enriched profile data.
              </p>
            </div>
            <div>
              <VerdictCardMockup />
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 md:order-1">
              <PDFReportMockup />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="text-sm text-foreground/60 uppercase tracking-wide">
                02 — ADVISE
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Push back with data, not opinions.
              </h3>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Generate a branded market report — yours, not ours — that your
                  client will actually read. Show them the 47 people who match
                  their JD exactly, and the 1,200 who would if they flex on one
                  thing.
                </p>
                <p>
                  The conversation stops being "can you find this person?" and
                  starts being "should we be looking for this person?"
                </p>
              </div>
              <p className="text-sm text-foreground/50">
                → White-labeled PDF. Your logo, your name, your client sees a
                market analysis — not a tool output.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-sm text-foreground/60 uppercase tracking-wide">
                03 — EXECUTE
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Skip the sourcing strategy meeting.
              </h3>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Once you've taken the req, get a ready-to-run playbook: Boolean
                  strings for LinkedIn, 20 target companies, and the outreach
                  angles that actually work for this profile.
                </p>
                <p>
                  Three Boolean variants per JD — wide net, precise, and
                  adjacent-skill — so you can run multiple sourcing strategies
                  in parallel.
                </p>
              </div>
              <p className="text-sm text-foreground/50">
                → Copy-paste into LinkedIn Recruiter, SeekOut, or any tool you
                already use.
              </p>
            </div>
            <div>
              <SourcingPlaybookMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Client Report Section */}
      <section className="py-32 bg-gradient-to-br from-[#2E2A5C]/10 to-transparent">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16 items-center mb-12">
            <div className="md:col-span-2 space-y-6">
              <div className="text-xs uppercase tracking-widest text-foreground/60">
                THE REPORT
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                You don't just source.<br />You advise.
              </h2>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Every report is yours to brand, yours to send.
                  Your logo. Your name. Your client sees a
                  5-page market analysis — not a tool output.
                </p>
                <p>
                  When your client reads this, you stop being
                  "the recruiter I hired." You become the market
                  expert they consult.
                </p>
                <p className="font-semibold text-foreground">
                  That's not a feature. That's a repositioning.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                {[
                  "Fully white-labeled — your brand, top to bottom",
                  "Shareable as PDF or live link",
                  "Narrative-first: every chart has a takeaway",
                  "Yours to keep — even after your subscription ends",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <Check className="h-5 w-5 text-[#2F9E5A] mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <PDFReportMockup />
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <Link to="/sample-report">
                See a full sample report <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Positioning Table */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs uppercase tracking-widest text-foreground/60">
              POSITIONING
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              We're not another sourcing tool.<br />We sit above them.
            </h2>
            <p className="text-xl text-foreground/70">
              Use us before you open LinkedIn Recruiter — not instead of it.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">
                    Capability
                  </th>
                  <th className="text-center py-4 px-4 text-sm text-foreground/60">
                    LinkedIn<br />Recruiter
                  </th>
                  <th className="text-center py-4 px-4 text-sm text-foreground/60">
                    SeekOut /<br />HireEZ
                  </th>
                  <th className="text-center py-4 px-4 text-sm text-foreground/60">
                    ATS<br />(Bullhorn, etc.)
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground bg-[#2E2A5C]/5">
                    ReqVerdict
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Find candidates", values: ["✓", "✓", "—", "—"] },
                  { label: "Manage pipeline", values: ["—", "—", "✓", "—"] },
                  { label: "Decide if a req is fillable", values: ["—", "—", "—", "✓"], highlight: true },
                  { label: "Generate client-facing market reports", values: ["—", "—", "—", "✓"], highlight: true },
                  { label: "Benchmark JDs against your history", values: ["—", "—", "—", "✓"], highlight: true },
                  { label: "Push back on unrealistic client asks", values: ["—", "—", "—", "✓"], highlight: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className={`py-4 px-4 ${row.highlight ? 'font-semibold' : ''} text-foreground`}>
                      {row.label}
                    </td>
                    {row.values.map((val, j) => (
                      <td
                        key={j}
                        className={`text-center py-4 px-4 ${
                          j === 3 ? 'bg-[#2E2A5C]/5' : ''
                        }`}
                      >
                        <span className={val === "✓" && j === 3 ? 'text-[#2E2A5C] font-bold text-lg' : 'text-foreground/40'}>
                          {val}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-foreground/60 mt-8 max-w-2xl mx-auto">
            Your sourcing stack is fine. What's missing is the layer that
            tells you which reqs deserve it.
          </p>
        </div>
      </section>

      {/* Data & Trust */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-widest text-foreground/60">
                THE DATA
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Every number comes from somewhere.<br />And we'll tell you where.
              </h2>
              <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
                <p>
                  We don't make numbers up. Every figure in every report is
                  sourced, dated, and tagged with a confidence level.
                </p>
                <div className="pl-6 border-l-2 border-border space-y-3">
                  <p>
                    <strong className="text-foreground">Talent pool data</strong> — aggregated from public professional
                    profiles via compliant enrichment APIs (PDL, Proxycurl).
                  </p>
                  <p>
                    <strong className="text-foreground">Compensation</strong> — H1B LCA filings, BLS OEWS, Levels.fyi,
                    and aggregated user-reported comp.
                  </p>
                  <p>
                    <strong className="text-foreground">Market signals</strong> — public job postings across LinkedIn,
                    Indeed, and specialized boards.
                  </p>
                </div>
                <p>
                  When we don't have enough data to answer confidently,
                  we say so. No hallucinated precision.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 space-y-2">
                <p className="text-foreground font-semibold">
                  Every number in every report carries a confidence tag:
                </p>
                <p className="text-foreground/70">
                  <span className="font-mono text-[#2F9E5A]">High</span> ·{" "}
                  <span className="font-mono text-[#E0A800]">Medium</span> ·{" "}
                  <span className="font-mono text-[#D64545]">Low</span> — along with sample size.
                </p>
                <p className="text-foreground/60 text-sm italic">
                  Because a number without its confidence is just a guess.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                "BLS",
                "US Dept of Labor",
                "Levels.fyi",
                "People Data Labs",
                "Proxycurl",
                "LinkedIn",
                "Indeed",
                "Glassdoor",
              ].map((source) => (
                <div
                  key={source}
                  className="bg-background border border-border rounded-lg p-6 flex items-center justify-center text-center"
                >
                  <span className="text-foreground/60 font-semibold">{source}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs uppercase tracking-widest text-foreground/60">
              TRUSTED BY RECRUITERS WHO WON'T TOLERATE BAD TOOLS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Built with independent recruiters.<br />Used daily by the ones who ship.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-background border-2 border-border rounded-lg p-8 md:p-12 shadow-lg">
              <div className="text-6xl text-foreground/10 font-serif mb-4">"</div>
              <p className="text-2xl md:text-3xl italic text-foreground/90 leading-relaxed mb-6">
                This is the thing I show prospects before they even ask about
                my fee. They look at the report and immediately understand why
                their last three searches failed. Then they sign with me.
              </p>
              <div className="space-y-1">
                <p className="font-semibold text-foreground">— Sarah K.</p>
                <p className="text-foreground/60">Independent Tech Recruiter, Austin, TX</p>
                <p className="text-sm text-foreground/50">Placed 34 SWE roles in 2025</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                quote: "I declined two reqs last month because the tool flagged them as unfillable. Saved me probably six weeks of wasted work.",
                author: "Marcus D.",
                role: "Founder, Boutique Tech Search, NYC",
              },
              {
                quote: "The waterfall chart is the single most useful visual I've ever shown a hiring manager. They finally get it.",
                author: "Priya R.",
                role: "Independent Sourcer, Remote",
              },
              {
                quote: "I raised my fee by 20% after I started attaching these reports to my proposals. No one pushed back.",
                author: "James L.",
                role: "Solo Recruiter, Healthcare Tech, Boston",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-6 space-y-4">
                <p className="text-foreground/90 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="space-y-0.5 text-sm">
                  <p className="font-semibold text-foreground">— {testimonial.author}</p>
                  <p className="text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
            {[
              { num: "400+", label: "Independent\nrecruiters" },
              { num: "15,000", label: "JDs analyzed\nthis month" },
              { num: "$2.4M", label: "Saved commission\n(self-reported)" },
            ].map((stat) => (
              <div key={stat.num} className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-foreground">
                  {stat.num}
                </div>
                <div className="text-foreground/60 whitespace-pre-line">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 bg-muted/30" id="pricing">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs uppercase tracking-widest text-foreground/60">
              PRICING
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Simple pricing.<br />Built for how independent recruiters actually work.
            </h2>
            <p className="text-xl text-foreground/70">
              Start free. Upgrade when you're ready to send reports to clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {/* Free Card */}
            <div className="bg-background border border-border rounded-lg p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Free</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-foreground">$0</span>
                  <span className="text-foreground/60">/ month</span>
                </div>
                <p className="text-foreground/70">For trying it out.</p>
              </div>

              <div className="space-y-3">
                {[
                  "3 JD analyses per month",
                  "Core feasibility verdict",
                  "Watermarked client report",
                  "No credit card required",
                ].map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <Check className="h-5 w-5 text-foreground/40 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => setDialogOpen(true)}
              >
                Start free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Pro Card */}
            <div className="bg-background border-2 border-[#2E2A5C] rounded-lg p-8 space-y-6 relative">
              <Badge className="absolute -top-3 right-6 bg-[#2E2A5C]">
                MOST POPULAR
              </Badge>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Pro</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold text-foreground">$89</span>
                  <span className="text-foreground/60">/ month</span>
                </div>
                <p className="text-sm text-foreground/60 mb-2">
                  billed annually
                </p>
                <p className="text-sm text-foreground/60">
                  or $109 / month, billed monthly
                </p>
                <p className="text-foreground/70 mt-3">
                  For recruiters running a real book of business.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Unlimited JD analyses",
                  "Full white-label client reports",
                  "Boolean string export (3 variants per JD)",
                  "Historical benchmark & workspace",
                  "Priority data coverage",
                  "Email support, 24h response",
                ].map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <Check className="h-5 w-5 text-[#2E2A5C] mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full bg-[#2E2A5C] hover:bg-[#2E2A5C]/90"
                onClick={() => setDialogOpen(true)}
              >
                Start 14-day free trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="text-center space-y-3">
            <p className="text-foreground/60">
              Teams and boutique firms (3+ seats) → Talk to us about custom pricing.
            </p>
            <p className="text-sm text-foreground/50">
              30-day money-back guarantee. If the data doesn't cover your niche,
              we'll refund you — no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs uppercase tracking-widest text-foreground/60">
              QUESTIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              The things recruiters ask us before they sign up.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-0">
              {[
                {
                  q: "How accurate is the talent pool number?",
                  a: "Every figure carries a confidence tag — High, Medium, or Low — based on sample size and data source coverage. We don't smooth over uncertainty with a clean number. If we only have 40 matching profiles in our sample, we'll tell you that, and flag the result as lower confidence. Coverage improves monthly as we add sources.",
                },
                {
                  q: "Do I need to replace my LinkedIn Recruiter or SeekOut?",
                  a: "No. We're the decision layer, not a sourcing tool. Use us before you open LinkedIn Recruiter — to decide whether this req is worth your next three weeks — not instead of it.",
                },
                {
                  q: "What kinds of JDs work best right now?",
                  a: "US tech roles (SWE, DS, PM, EM) at mid-to-staff levels, in the top 20 US metros. That's where our data is deepest and our verdicts are most trustworthy today. We're expanding to healthcare, finance, and sales roles next.",
                },
                {
                  q: "Is this just GPT? Will it hallucinate numbers?",
                  a: "No. The data pipeline is structured: real sources, real queries, real aggregation. We use LLMs only for narrative generation in the client report — wrapping the real numbers in readable prose. Every number you see traces back to a source we can name.",
                },
                {
                  q: "Can I white-label the client report with my logo?",
                  a: "Yes. On Pro, every report is fully white-labeled — your logo, your firm name, your contact info. Your client sees your brand, not ours. No watermarks, no \"powered by\" footer.",
                },
                {
                  q: "What if the data doesn't cover my niche?",
                  a: "30-day money-back guarantee, no questions asked. We'd rather refund you than have you pay for something that doesn't help. Email us, we return your payment within 48 hours.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-lg">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#2E2A5C] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Your next req might not<br />be worth taking.
            </h2>
            <p className="text-2xl text-white/80">
              Find out in 5 seconds.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-white text-[#2E2A5C] hover:bg-white/90"
              onClick={() => setDialogOpen(true)}
            >
              Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-white/60">
              Join the waitlist. First 100 recruiters get 6 months free.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wide">
                Product
              </h4>
              <div className="space-y-2">
                {["Features", "Sample reports", "Pricing", "Changelog", "Roadmap"].map((link) => (
                  <div key={link}>
                    <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wide">
                For
              </h4>
              <div className="space-y-2">
                {["Independent recruiters", "Boutique firms", "Sourcers"].map((link) => (
                  <div key={link}>
                    <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wide">
                Company
              </h4>
              <div className="space-y-2">
                {["Manifesto", "Data & sources", "Security", "Contact"].map((link) => (
                  <div key={link}>
                    <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wide">
                Stay in the loop
              </h4>
              <p className="text-sm text-foreground/60 mb-4">
                One email a month. Market reports, product updates,
                and the occasional recruiting hot take.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-background border border-border rounded text-sm"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © 2026 ReqVerdict. Built for recruiters who think.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Status
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Early Access Dialog */}
      <EarlyAccessDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sample-report" element={<SampleReport />} />
      </Routes>
    </BrowserRouter>
  );
}
