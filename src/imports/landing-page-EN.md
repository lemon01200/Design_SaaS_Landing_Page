# Landing Page — Full Copy & Visual Prompts (EN)

> Purpose: Hand this document to Figma designers and frontend engineers as the single source of truth for the homepage. Every section below contains (1) final copy, (2) layout description, and (3) visual/asset prompts.

---

## Global Design Direction

**Brand voice:** Confident, terse, insider. Written by a recruiter for recruiters. Zero corporate fluff.

**Visual mood:** Professional tool, not a SaaS toy. Think Linear, Stripe, Vercel — clean, information-dense, generous whitespace. Not Canva-pastel, not 3D-illustration-heavy.

**Color direction (suggestion, not mandate):**
- Base: near-white `#FAFAF7` or near-black `#0A0A0A` (dark-mode-first feels more "pro tool")
- Primary accent: a restrained deep color — recommend deep indigo `#2E2A5C` or muted forest `#1F3D2E`
- Verdict colors (must exist): red `#D64545`, amber `#E0A800`, green `#2F9E5A`
- Avoid: purple-to-pink gradients, neon, generic SaaS blue `#1976D2`

**Typography:**
- Headlines: a sharp geometric sans — Inter Display, General Sans, or similar
- Body: Inter / Söhne
- Monospace (for JD text, Boolean strings, data): JetBrains Mono or IBM Plex Mono

**Imagery rule:** Every product visual must be a **real product screenshot or high-fidelity UI mock**, never a stock illustration, never a 3D render, never an abstract gradient blob.

---

## Section 1 — Hero

### Layout
- Full-viewport height on desktop, ~80vh on mobile
- Two-column split (60/40) on desktop, stacked on mobile
- Left column: eyebrow tag, headline, subhead, dual CTA, micro-copy
- Right column: a looping product animation (see visual prompt below)

### Copy

**Eyebrow tag (small, above headline):**
```
FOR INDEPENDENT RECRUITERS
```

**Headline (H1, largest text on page):**
```
Know if a JD is fillable —
before you take the req.
```

**Subhead (one line below, ~60% headline size):**
```
The decision layer for independent recruiters. Paste any JD, get a
5-second feasibility verdict and a client-ready market report you
can actually send.
```

**Primary CTA button:**
```
Analyze a JD free  →
```

**Secondary CTA (text link with arrow, next to primary):**
```
See a sample report
```

**Micro-copy (small gray text below buttons):**
```
No signup to start. 3 free reports every month.
```

### Visual Prompt (right column)

> **Asset:** A 6–8 second silent auto-looping screen recording (MP4 + WebM, with a static PNG poster frame for fallback).
>
> **Content of the loop:**
> 1. Frame 1 (0.0–1.0s): An empty product interface with a large "Paste your JD here" textarea, cursor blinking.
> 2. Frame 2 (1.0–2.5s): A realistic Senior Software Engineer JD snippet types itself in (use a believable JD: title, 5 bullet requirements, location "San Francisco, CA", comp "$160–180K base").
> 3. Frame 3 (2.5–3.5s): A subtle loading shimmer; the word "Analyzing" pulses once.
> 4. Frame 4 (3.5–6.0s): The Verdict Card slides in — a large "YELLOW" badge, difficulty score "62 / 100", three bulleted reasons ("Comp band 18% below market", "Only 47 full matches in SF metro", "Stack combo is rare: React + Rust"), and a small "Generate client report" button.
> 5. Frame 5 (6.0–8.0s): Hold on the verdict, gentle Ken Burns zoom, loop back.
>
> **Style:** Match the product's real UI. Dark mode preferred for the demo (looks more pro). No cursor visible during typing. Text should be crisp and readable even at 50% viewport width.

---

## Section 2 — Problem Snapshot

### Layout
- Full-width section, generous vertical padding (~160px top/bottom)
- Section eyebrow + short section headline centered, max-width ~720px
- Below: three columns of quote cards, equal width, with thin divider lines between them on desktop (stacked on mobile)

### Copy

**Eyebrow tag (centered, small):**
```
THE REAL JOB
```

**Section headline (centered, H2):**
```
Sourcing isn't the hard part.
Deciding what's worth sourcing is.
```

**Three quote cards (left to right):**

**Card 1**
```
"I've just spent 3 weeks on a req
 that was never fillable."

You took the JD on gut feel. Now you've sourced 200 profiles,
the client won't budge on comp, and the clock keeps running.
```

**Card 2**
```
"The client wants a unicorn
 for a donkey's salary."

You know the budget is off, but you don't have the data to
push back. So you burn the relationship — or keep searching
for a miracle.
```

**Card 3**
```
"Every 'AI recruiter tool' wants
 to source for me. I need
 something else."

Sourcing isn't your bottleneck. Deciding which reqs are
worth your next three weeks — that's the job nobody's
building for.
```

### Visual Prompt

> **Asset:** No hero image. Three quote cards styled like pulled quotes from an interview — each quote in a larger italic serif (for contrast against the sans body), followed by a 2-line explanation in the default sans body font.
>
> **Treatment:** A small recruiter avatar (generic silhouette, not a real person) and a faux attribution like "— Sarah K., Tech Recruiter, Austin" / "— Marcus D., Boutique Founder, NYC" / "— Priya R., Independent Sourcer, Remote" can appear below each card if desired. If used, make clear in a tiny footnote these are composites from user interviews, not individual testimonials — OR drop attribution entirely if that feels cleaner.
>
> **Background:** Same as page background, no cards/boxes. Just typography and a hairline divider between columns on desktop.

---

## Section 3 — 30-Second Product Demo

### Layout
- Full-width section, dark background (creates contrast, makes the product visuals pop)
- Centered section headline
- Large product video / GIF below, max-width ~1100px
- Three numbered step labels appear beside or below the video, synced with the footage

### Copy

**Eyebrow:**
```
HOW IT WORKS
```

**Section headline:**
```
From JD to client-ready report
in under 60 seconds.
```

**Section subhead (one line, centered, under headline):**
```
No configuration. No dashboard-building. Paste, read, send.
```

**Three step labels (positioned alongside video):**

```
01  Paste the JD
    We parse the role, requirements, comp, and location automatically.

02  Get the verdict
    A red / yellow / green call in 5 seconds, with the three reasons why.

03  Send the report
    Download a white-labeled PDF — your logo, your name, your client.
```

**Caption below video:**
```
This is a real product recording. Nothing staged.
```

### Visual Prompt

> **Asset:** A 45–60 second silent looping screen recording showing the full flow end-to-end. Speed up natural waits (loading states) to keep it tight.
>
> **Scenes:**
> 1. (0–8s) User pastes a JD into the intake box. System auto-parses into a clean structured card: Title, Level, Requirements, Location, Comp.
> 2. (8–18s) The Verdict screen renders: big YELLOW badge, 62/100 score, three reasons, a small "Talent pool" panel showing "47 full match · 1,240 partial match".
> 3. (18–32s) User clicks "Generate client report". A PDF preview slides in from the right — shows Executive Summary page, then a partial-match waterfall chart page, then a "Recommendations" page.
> 4. (32–45s) User clicks "Download" — the PDF icon drops into an email compose window with the recruiter's own logo visible at the top. Email subject: "Market analysis for the Sr. SWE role".
>
> **Style:** Use product's actual UI. Keep cursor movements smooth and purposeful — no jitter. Add a very subtle zoom-in on the verdict badge and on the partial-match chart (these are the money shots).

---

## Section 4 — Three Value Pillars

### Layout
- Full-width section, light background (contrast with dark demo section above)
- Section intro (centered, max-width ~720px)
- Three horizontal rows, each one full-width: alternating image-left / image-right layout (row 1 image-right, row 2 image-left, row 3 image-right). Each row has generous padding (~120px vertical).

### Copy

**Eyebrow:**
```
WHAT YOU GET
```

**Section headline:**
```
Three things that change
how you work every day.
```

---

**Pillar 1 (image on right):**

Small label (above H3):
```
01 — DECIDE
```

Pillar headline (H3):
```
Stop guessing which reqs to take.
```

Body:
```
Every JD gets a 0–100 difficulty score, a red / yellow / green
verdict, and the three reasons why. No more 30-minute LinkedIn
Recruiter fishing trips to estimate feasibility.

Works on any JD — tech, healthcare, finance, exec. Results in
five seconds, with a confidence level attached to every number.
```

Proof line (small, under body):
```
→ Built on H1B LCA, BLS OEWS, Levels.fyi, and enriched profile data.
```

---

**Pillar 2 (image on left):**

Small label:
```
02 — ADVISE
```

Pillar headline:
```
Push back with data, not opinions.
```

Body:
```
Generate a branded market report — yours, not ours — that your
client will actually read. Show them the 47 people who match
their JD exactly, and the 1,200 who would if they flex on one
thing.

The conversation stops being "can you find this person?" and
starts being "should we be looking for this person?"
```

Proof line:
```
→ White-labeled PDF. Your logo, your name, your client sees a
  market analysis — not a tool output.
```

---

**Pillar 3 (image on right):**

Small label:
```
03 — EXECUTE
```

Pillar headline:
```
Skip the sourcing strategy meeting.
```

Body:
```
Once you've taken the req, get a ready-to-run playbook: Boolean
strings for LinkedIn, 20 target companies, and the outreach
angles that actually work for this profile.

Three Boolean variants per JD — wide net, precise, and
adjacent-skill — so you can run multiple sourcing strategies
in parallel.
```

Proof line:
```
→ Copy-paste into LinkedIn Recruiter, SeekOut, or any tool you
  already use.
```

### Visual Prompts (one per pillar)

> **Pillar 1 image:**
> A large screenshot of the Verdict Card. Shows: "YELLOW · 62 / 100" large badge at top; below it, a 3-item reasons list styled like a checklist; below that, a small "Confidence: Medium (n=312 profiles)" footer. Card floats on a subtle layered background — maybe two stacked cards slightly offset behind it to imply "one of many JDs analyzed".
>
> **Pillar 2 image:**
> A mocked client-facing PDF cover, slightly tilted at maybe 6° for dimensionality. Top of the cover: the recruiter's own logo placeholder ("YOUR LOGO"). Title: "Market Feasibility Analysis — Senior Software Engineer, SF". Small subtitle "Prepared by Sarah Kim · Kim Talent Partners · May 2026". A second PDF page peeks out from behind the cover showing a partial-match waterfall chart (bars going from 47 → 312 → 1,240 as conditions relax).
>
> **Pillar 3 image:**
> A screenshot of the Sourcing Playbook panel: three tabs ("Wide Net" / "Precise" / "Adjacent Skills"), one tab active showing a Boolean string in monospace with syntax highlighting. Below the Boolean, a "Copy" button and a list of "Top target companies" as pill chips (Stripe, Figma, Notion, Linear, Vercel, etc. — use plausible company names in the target profile).

---

## Section 5 — The Killer Moment: Client Report ★

### Layout
- Full-width section, **dark background with a subtle warm tint** (creates a ceremonial feel — this is the hero feature)
- Wider than other sections; let it breathe
- Left column (40%): text block
- Right column (60%): an interactive/flippable PDF preview
- Below the two columns, centered: a secondary CTA

### Copy

**Eyebrow:**
```
THE REPORT
```

**Section headline (H2, largest on the section):**
```
You don't just source.
You advise.
```

**Body (left column, single column of prose):**
```
Every report is yours to brand, yours to send.
Your logo. Your name. Your client sees a
5-page market analysis — not a tool output.

When your client reads this, you stop being
"the recruiter I hired." You become the market
expert they consult.

That's not a feature. That's a repositioning.
```

**Feature list (below body, tight, 4 items with small checkmarks):**
```
✓  Fully white-labeled — your brand, top to bottom
✓  Shareable as PDF or live link
✓  Narrative-first: every chart has a takeaway
✓  Yours to keep — even after your subscription ends
```

**Secondary CTA (centered, below the two-column layout):**
```
See a full sample report  →
```

### Visual Prompt

> **Asset:** A faux-interactive PDF viewer embedded in the section. Shows a 5-page sample report that auto-advances every 4 seconds (or on scroll — designer's call). Each page should be clearly visible and beautifully typeset.
>
> **Page 1 — Cover:**
> "Market Feasibility Analysis" (large serif)
> "Senior Software Engineer — San Francisco Bay Area" (subtitle)
> Recruiter's logo at top, recruiter's name + firm + date at bottom.
> A single hero stat in the middle: "47 full matches · 1,240 with one condition relaxed".
>
> **Page 2 — Executive Summary:**
> Three-paragraph prose summary of the finding. Left margin has a small "Verdict: Yellow" callout with the difficulty score.
>
> **Page 3 — Partial-Match Waterfall:**
> A horizontal bar chart showing how talent pool size grows as each requirement is relaxed. Bars labeled: "All conditions met: 47", "Relax PhD: 189", "Relax 'in SF': 612", "Relax Rust req: 1,240". Visual dominance — make this the most striking page.
>
> **Page 4 — Compensation Reality:**
> A chart showing market comp distribution (box plot or histogram), with a red vertical line showing "Your budget: $180K" landing at the 32nd percentile. Short caption: "Your budget reaches ~32% of qualified candidates. Top 50% requires $210K+."
>
> **Page 5 — Recommendations:**
> A numbered list of 3 client-facing recommendations (e.g., "1. Relax the Rust requirement", "2. Move to $210K total comp", "3. Expand to Seattle metro"). Closing line: "With these changes, expected fillable pool: 1,200+. Time-to-fill: 4–6 weeks."
>
> **Style for all pages:** A restrained editorial layout, not a dashboard. Serif headlines, sans body, clean charts with very few colors. Think *The Economist* report, not Salesforce dashboard.

---

## Section 6 — How We're Different (Positioning Table)

### Layout
- Full-width section, light background
- Centered section headline + one-line intro
- A 4-column comparison table, centered, max-width ~960px
- The "You" column is visually emphasized (slight highlight background, bolder borders)

### Copy

**Eyebrow:**
```
POSITIONING
```

**Section headline:**
```
We're not another sourcing tool.
We sit above them.
```

**Section subhead (one line):**
```
Use us before you open LinkedIn Recruiter — not instead of it.
```

**Comparison table:**

| Capability | LinkedIn Recruiter | SeekOut / HireEZ | ATS (Bullhorn, etc.) | **[Product Name]** |
|---|:---:|:---:|:---:|:---:|
| Find candidates | ✓ | ✓ | — | — |
| Manage pipeline | — | — | ✓ | — |
| **Decide if a req is fillable** | — | — | — | **✓** |
| **Generate client-facing market reports** | — | — | — | **✓** |
| **Benchmark JDs against your history** | — | — | — | **✓** |
| **Push back on unrealistic client asks** | — | — | — | **✓** |

**Caption under table:**
```
Your sourcing stack is fine. What's missing is the layer that
tells you which reqs deserve it.
```

### Visual Prompt

> **Asset:** Clean comparison table, no illustration needed. Typography-driven.
>
> **Treatment:**
> - The "[Product Name]" column should have a subtle accent-colored background (~5% opacity of the brand accent color)
> - Checkmarks are the brand accent color in the product column, neutral gray in competitor columns
> - Competitor logos (small, grayscale, ~20px) can appear above each column header for recognition
> - Row headers are left-aligned, bold for the four "only we do this" rows

---

## Section 7 — Data & Trust

### Layout
- Full-width, light background
- Two-column on desktop: left 55% text, right 45% data source logo grid
- Stacked on mobile with logos below

### Copy

**Eyebrow:**
```
THE DATA
```

**Section headline:**
```
Every number comes from somewhere.
And we'll tell you where.
```

**Body:**
```
We don't make numbers up. Every figure in every report is
sourced, dated, and tagged with a confidence level.

  Talent pool data — aggregated from public professional
  profiles via compliant enrichment APIs (PDL, Proxycurl).

  Compensation — H1B LCA filings, BLS OEWS, Levels.fyi,
  and aggregated user-reported comp.

  Market signals — public job postings across LinkedIn,
  Indeed, and specialized boards.

When we don't have enough data to answer confidently,
we say so. No hallucinated precision.
```

**Callout box (below body, subtle border):**
```
Every number in every report carries a confidence tag:
High · Medium · Low — along with sample size.

Because a number without its confidence is just a guess.
```

### Visual Prompt

> **Asset:** A tidy grid of ~8 data source logos in grayscale (so no single one dominates).
>
> **Logos to include (in this order):**
> BLS (Bureau of Labor Statistics), US Dept of Labor (for H1B LCA), Levels.fyi, People Data Labs, Proxycurl, LinkedIn (public data), Indeed, Glassdoor.
>
> **Treatment:**
> - 4×2 grid on desktop, 2×4 on mobile
> - All logos rendered in a single neutral color (charcoal gray) for visual consistency
> - Subtle hover state: logo returns to full color on hover — this is a small quality detail that tells pro users "someone cared about this"

---

## Section 8 — Social Proof

### Layout
- Full-width, light background
- Centered headline + subhead
- Below: one large featured testimonial card, centered, max-width ~720px
- Below that: a horizontal strip of 3 smaller testimonial cards
- Bottom: usage stats row (3 numbers, equally spaced)

### Copy

**Eyebrow:**
```
TRUSTED BY RECRUITERS WHO WON'T TOLERATE BAD TOOLS
```

**Section headline:**
```
Built with independent recruiters.
Used daily by the ones who ship.
```

---

**Featured testimonial (large, centered):**

```
"This is the thing I show prospects before they even ask about
 my fee. They look at the report and immediately understand why
 their last three searches failed. Then they sign with me."

  — Sarah K., Independent Tech Recruiter, Austin, TX
    Placed 34 SWE roles in 2025
```

---

**Three smaller testimonials (row of 3):**

**Card 1:**
```
"I declined two reqs last month because the tool flagged them
as unfillable. Saved me probably six weeks of wasted work."

— Marcus D., Founder, Boutique Tech Search, NYC
```

**Card 2:**
```
"The waterfall chart is the single most useful visual I've
ever shown a hiring manager. They finally get it."

— Priya R., Independent Sourcer, Remote
```

**Card 3:**
```
"I raised my fee by 20% after I started attaching these
reports to my proposals. No one pushed back."

— James L., Solo Recruiter, Healthcare Tech, Boston
```

---

**Stats row (bottom, three equal columns):**

```
400+                   15,000                 $2.4M
Independent            JDs analyzed           Saved commission
recruiters             this month             (self-reported)
```

**MVP note (internal, not displayed):**
> Before real customers exist, replace the stats row with a single line: "Early access — join 200+ recruiters on the waitlist." Do not fake testimonials. If needed, use real interview quotes with permission, or label them "composite from 15 user interviews" honestly.

### Visual Prompt

> **Asset:** Testimonial cards. Each has:
> - A circular avatar (can be a real photo if permission granted, or a stylized initial-based avatar with the recruiter's firm color)
> - The quote in a slightly larger, readable size
> - Attribution: name, role, firm, city
>
> **Treatment:**
> - Featured testimonial card: slightly raised (subtle shadow), with opening quote mark `"` as a large decorative serif character in the top-left
> - Smaller cards: flat, no shadow, thin 1px border
> - Stats row: numbers in a large display weight of the heading font; labels in small caps below

---

## Section 9 — Pricing Teaser

### Layout
- Full-width, light background (or slight gray tint to separate from Section 8)
- Centered section headline + one-line intro
- Two pricing cards side-by-side, max total width ~880px
- The "Pro" card is visually emphasized (accent border, "Most popular" badge)
- Below cards: a small link to "Teams & boutique firms → custom pricing"

### Copy

**Eyebrow:**
```
PRICING
```

**Section headline:**
```
Simple pricing.
Built for how independent recruiters actually work.
```

**Section subhead:**
```
Start free. Upgrade when you're ready to send reports to clients.
```

---

**Pricing Card 1 — Free:**

```
Free
$0 / month

For trying it out.

   3 JD analyses per month
   Core feasibility verdict
   Watermarked client report
   No credit card required

[ Start free  → ]
```

---

**Pricing Card 2 — Pro (emphasized):**

Badge (top right of card):
```
MOST POPULAR
```

```
Pro
$89 / month   (billed annually)
or $109 / month, billed monthly

For recruiters running a real book of business.

   Unlimited JD analyses
   Full white-label client reports
   Boolean string export (3 variants per JD)
   Historical benchmark & workspace
   Priority data coverage
   Email support, 24h response

[ Start 14-day free trial  → ]
```

**Below cards (small text, centered):**
```
Teams and boutique firms (3+ seats) → Talk to us about custom pricing.
```

**Guarantee line (very bottom, small):**
```
30-day money-back guarantee. If the data doesn't cover your niche,
we'll refund you — no questions asked.
```

### Visual Prompt

> **Asset:** Two pricing cards, side by side.
>
> **Treatment:**
> - Free card: white / page-background color, thin 1px neutral border
> - Pro card: slightly elevated, 2px accent-color border, small "MOST POPULAR" pill in the accent color at top-right
> - Price numbers are large (48–56px) and use the display font
> - Feature list uses a checkmark bullet in the accent color (Pro) or neutral (Free)
> - Both CTAs are full-width within their card; Pro CTA is filled solid, Free CTA is outlined

---

## Section 10 — FAQ

### Layout
- Full-width, light background (can match page base)
- Centered section headline, max-width ~720px
- Accordion-style FAQ list below, max-width ~720px, left-aligned

### Copy

**Eyebrow:**
```
QUESTIONS
```

**Section headline:**
```
The things recruiters ask us before they sign up.
```

---

**FAQ items (6 total, accordion format):**

**Q1:**
```
How accurate is the talent pool number?
```
Answer:
```
Every figure carries a confidence tag — High, Medium, or Low —
based on sample size and data source coverage. We don't smooth
over uncertainty with a clean number. If we only have 40
matching profiles in our sample, we'll tell you that, and flag
the result as lower confidence. Coverage improves monthly as
we add sources.
```

**Q2:**
```
Do I need to replace my LinkedIn Recruiter or SeekOut?
```
Answer:
```
No. We're the decision layer, not a sourcing tool. Use us
before you open LinkedIn Recruiter — to decide whether this
req is worth your next three weeks — not instead of it.
```

**Q3:**
```
What kinds of JDs work best right now?
```
Answer:
```
US tech roles (SWE, DS, PM, EM) at mid-to-staff levels, in the
top 20 US metros. That's where our data is deepest and our
verdicts are most trustworthy today. We're expanding to
healthcare, finance, and sales roles next.
```

**Q4:**
```
Is this just GPT? Will it hallucinate numbers?
```
Answer:
```
No. The data pipeline is structured: real sources, real queries,
real aggregation. We use LLMs only for narrative generation in
the client report — wrapping the real numbers in readable prose.
Every number you see traces back to a source we can name.
```

**Q5:**
```
Can I white-label the client report with my logo?
```
Answer:
```
Yes. On Pro, every report is fully white-labeled — your logo,
your firm name, your contact info. Your client sees your brand,
not ours. No watermarks, no "powered by" footer.
```

**Q6:**
```
What if the data doesn't cover my niche?
```
Answer:
```
30-day money-back guarantee, no questions asked. We'd rather
refund you than have you pay for something that doesn't help.
Email us, we return your payment within 48 hours.
```

### Visual Prompt

> **Asset:** Standard accordion component. No illustrations.
>
> **Treatment:**
> - Each question is the full row, with a + / – toggle on the right
> - Hairline divider between items
> - Questions in medium-weight sans (18–20px), answers in regular-weight body size (16–17px) with slightly reduced contrast
> - Default state: all collapsed except the first one (open by default to show the interaction)

---

## Section 11 — Final CTA

### Layout
- Full-width colored band — either deep brand accent or near-black
- Centered content, max-width ~720px
- Large headline, one-line subhead, single big CTA button, micro-copy below

### Copy

**Headline (very large, centered):**
```
Your next req might not
be worth taking.
```

**Subhead (one line, smaller, centered):**
```
Find out in 5 seconds.
```

**CTA button (large, centered):**
```
Analyze a JD free  →
```

**Micro-copy (below button, very small):**
```
No signup to start. 3 free reports every month.
```

### Visual Prompt

> **Asset:** No imagery. This section is purely typographic.
>
> **Treatment:**
> - Background: deep brand accent or near-black (`#0A0A0A` if going dark)
> - Text: high-contrast white or off-white
> - Headline: very large display size (64–88px desktop, 40–48px mobile)
> - CTA button: large, solid, high-contrast. Accent color on dark background, or white-on-black if the section is accent-colored.
> - Generous vertical padding (~140px top/bottom) — this section should feel like a deliberate closing punctuation, not just another block.

---

## Section 12 — Footer

### Layout
- Full-width, darker background than page (if page is light) or a lighter panel (if page is dark)
- Four columns on desktop, stacked on mobile
- Bottom bar with copyright, small legal links, and a single social link

### Copy

**Column 1 — Product:**
```
Product
────
Features
Sample reports
Pricing
Changelog
Roadmap
```

**Column 2 — For:**
```
For
────
Independent recruiters
Boutique firms
Sourcers
```

**Column 3 — Company:**
```
Company
────
Manifesto
Data & sources
Security
Contact
```

**Column 4 — Stay in the loop:**
```
Stay in the loop
────
One email a month. Market reports, product updates,
and the occasional recruiting hot take.

[ your@email.com        ] [ Subscribe ]
```

**Bottom bar:**
```
© 2026 [Company Name]. Built for recruiters who think.

Privacy · Terms · Status         LinkedIn →
```

### Visual Prompt

> **Asset:** Minimal typographic footer.
>
> **Treatment:**
> - Column headers in uppercase small caps, accent or neutral color
> - Links in the body text color, hover state underlines them
> - Email capture field: simple, one-line, no decoration
> - Single social icon (LinkedIn only) — do not scatter Twitter / Instagram / Facebook icons
> - A tiny product logo appears at the very bottom-left of the bottom bar

---

## Implementation Notes for Figma / Engineering

**Responsive breakpoints (suggested):**
- Desktop: 1280px+
- Tablet: 768–1279px (stack most two-column sections, keep three-column in 2+1 layout)
- Mobile: <768px (full stack, reduce vertical padding by ~40%)

**Motion:**
- Hero video auto-loops silently
- Demo video auto-loops silently
- All other sections: subtle fade-in-up on scroll (max 300ms, don't overdo it)
- Do NOT add parallax, pinned scrolls, or horizontal scroll gimmicks — this is a tool, not a marketing site

**Accessibility:**
- All videos must have PNG poster fallback
- Color contrast must meet WCAG AA (especially for verdict colors)
- All CTAs reachable by keyboard; focus states visible
- Alt text on every real screenshot

**Performance:**
- Videos: WebM + MP4, max 2MB each, 720p is enough
- Lazy-load everything below the hero
- Target Lighthouse performance score 90+

**Copy QA rules before launch:**
- Every "47", "1,240", "$180K" etc. in copy must match what the demo video actually shows. If the video changes, copy updates.
- No Lorem Ipsum anywhere. If content isn't ready, don't ship the section.
- All CTAs must lead somewhere that actually works. No "Coming soon" hidden behind primary CTAs.

---

**End of document.**
