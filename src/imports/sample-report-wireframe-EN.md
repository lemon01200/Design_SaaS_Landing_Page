# Client Report — 6-Page Wireframe Spec (EN)

> Hand this document to Figma designers as the single source of truth for the client-facing PDF report. Every page below contains (1) layout description, (2) all copy and data fields, and (3) visual design notes.

---

## Global Design Direction

**Format:** A4 / US Letter PDF, portrait orientation. Designed to be read on screen and printable.

**Brand voice:** Confident, restrained, editorial. This is not a dashboard. This is a market analysis report that a hiring manager would forward to their VP.

**Visual references:** The Economist country briefings, McKinsey slide decks, Stratechery reports. Clean charts. Generous margins. Serif headlines, sans-serif body. Color used sparingly — only to draw attention to the verdict and the two or three most critical numbers.

**Typography:**
- Cover title: serif display (e.g. Playfair Display, Cormorant, or Georgia)
- Page section headers: same serif, 18–22pt
- Body: Inter or Söhne, 9–11pt
- Data / chart labels: Inter, 7–9pt
- Mono (for numbers, Boolean, data footnotes): JetBrains Mono or IBM Plex Mono, 8–10pt

**Color palette:**
- Page background: `#FFFFFF`
- Primary text: `#1A1A1A`
- Secondary text / labels: `#6B7280`
- Accent / brand: `#2E2A5C` (deep indigo — used for section dividers, key numbers)
- Verdict Red: `#D64545` / bg `#FDE8E8`
- Verdict Amber: `#E0A800` / bg `#FDF3D0`
- Verdict Green: `#2F9E5A` / bg `#E6F4EC`
- Chart colors: a restrained 4-color palette —
  - Primary bar: `#2E2A5C`
  - Secondary bar: `#4F6BED`
  - Tertiary bar: `#6B8F71`
  - Quaternary bar: `#C4A45A`
- Hairlines / borders: `#E5E7EB`
- Subtle section background: `#F9FAFB` (very light, for alternating sections)

**Margins:** 0.75 inch (≈ 54pt) all sides. Content area width: ~6.5 inches on US Letter.

**Header / Footer strip (every page except cover):**
- Top-left: small recruiter logo (max 1.2" wide × 0.3" tall)
- Top-right: report title in 7pt gray — "Market Feasibility Analysis · Sr. SWE, SF"
- Bottom-right: page number — "2 / 6"
- Bottom-left: tiny brand note — "Analysis powered by ReqCheck" (6pt, 30% gray)
- A hairline rule separates header from content, and content from footer

**White-label rule:** Every logo, name, and firm reference is a placeholder token `{{RECRUITER_LOGO}}`, `{{RECRUITER_NAME}}`, `{{RECRUITER_FIRM}}`, `{{RECRUITER_CONTACT}}`. The report must look like the recruiter's own document.

---

## Page 1 — Cover

### Purpose
Establish professional credibility in 3 seconds. The client should feel "this is going to be good" before reading a single word.

### Layout

```
┌─────────────────────────────────────────────┐
│                                             │
│            {{RECRUITER_LOGO}}               │
│                                             │
│                                             │
│                                             │
│          MARKET FEASIBILITY                 │
│             ANALYSIS                        │
│                                             │
│    ─────────────────────────────            │
│                                             │
│     Senior Software Engineer                │
│     San Francisco Bay Area                  │
│                                             │
│                                             │
│                47                           │
│          full matches                       │
│        ────────────────────                 │
│     1,240 with one condition                │
│            relaxed                          │
│                                             │
│                                             │
│                                             │
│   Prepared by {{RECRUITER_NAME}}            │
│   {{RECRUITER_FIRM}}                        │
│   {{REPORT_DATE}}                           │
│                                             │
└─────────────────────────────────────────────┘
```

### Content Details

**Recruiter logo** (top center, ~1.5" wide max):
- Placeholder: `{{RECRUITER_LOGO}}` — a simple monogram or logotype
- Vertically positioned ~1 inch from top edge

**Report title** (main visual block, centered vertically in upper-middle):
- "MARKET FEASIBILITY" in 11pt uppercase sans-serif, tracking +0.2em, gray 40%
- "ANALYSIS" in 36–40pt serif display, brand accent color
- A thin 1.5pt decorative rule below, 2 inches wide, brand accent color

**Job title** (below the decorative rule):
- "Senior Software Engineer" in 16–18pt serif, medium weight, primary text color
- "San Francisco Bay Area" in 12pt sans-serif, gray

**Hero metric** (the visual climax of the cover, centered):
- "47" in 72–84pt serif display or heavy sans, brand accent or primary text
- "full matches" in 12pt sans-serif below it, gray
- A thin 0.5pt separator line, 3 inches wide
- "1,240 with one condition relaxed" in 14pt sans-serif, primary text

**Prepared-by block** (bottom of page, ~0.75 inch from bottom edge):
- "Prepared by {{RECRUITER_NAME}}" in 9pt sans-serif, primary text
- "{{RECRUITER_FIRM}}" in 9pt sans-serif, gray
- "{{REPORT_DATE}}" in 9pt sans-serif, gray

### Design Notes
- The cover contains no charts, no dashboard elements. Pure editorial typography.
- The hero number "47" is the only thing that should compete for attention. Everything else recedes.
- Page count: this page counts as page 1 of 6, but the page number should NOT be displayed on the cover. Header/footer strip is hidden on this page.

---

## Page 2 — Executive Summary

### Purpose
The busiest page in the report. A VP/CTO should be able to read only this page and understand the situation. Every element earns its place.

### Layout

```
┌─────────────────────────────────────────────┐
│ {{LOGO}}        Market Feasibility · Sr SWE │
│─────────────────────────────────────────────│
│                                             │
│  ◉  YELLOW · 62 / 100                       │
│     confidence: medium (n=312)              │
│                                             │
│  EXECUTIVE SUMMARY                          │
│                                             │
│  This Senior Software Engineer role in      │
│  San Francisco presents moderate            │
│  difficulty. Our analysis of 312            │
│  matching profiles in the SF Bay Area       │
│  shows 47 candidates fully meet all         │
│  listed requirements.                       │
│                                             │
│  The primary constraint is compensation:    │
│  at $160–180K base, the budget reaches      │
│  approximately 32% of qualified             │
│  candidates. Top 50% commands $210K+.       │
│                                             │
│  Relaxing the Rust requirement expands      │
│  the pool to 1,240 partial matches,         │
│  suggesting a skill-adjacent sourcing       │
│  strategy may be most productive.           │
│                                             │
│  ┌──────────────────┐ ┌──────────────────┐  │
│  │                  │ │                  │  │
│  │   47             │ │   1,240          │  │
│  │   full matches   │ │   partial matches│  │
│  │   2.1% of market │ │   if Rust relaxed│  │
│  │                  │ │                  │  │
│  └──────────────────┘ └──────────────────┘  │
│                                             │
│  ───────────────────────────────────────    │
│  Key bottleneck: Rust requirement filters   │
│  out 96% of otherwise-qualified candidates. │
│  See page 3 for the full waterfall.         │
│  See page 4 for compensation breakdown.     │
│  Recommendations on page 6.                 │
│                                             │
│─────────────────────────────────────────────│
│  Analysis powered by ReqCheck          2/6  │
└─────────────────────────────────────────────┘
```

### Content Details

**Verdict badge** (top of content area, left-aligned):
- A pill-shaped badge: colored dot + "YELLOW · 62/100"
- Badge background: amber-tinted (`#FDF3D0`), amber dot (`#E0A800`)
- Right next to it: "confidence: medium (n=312)" in 8pt mono, gray
- These two elements sit on the same line

**Section header** "EXECUTIVE SUMMARY":
- 18–20pt serif, primary text, left-aligned
- No underline, just a 0.5pt hairline below the verdict badge that spans full content width

**Three-paragraph prose** (below header, ~10/14pt body text):
- Paragraph 1: Overall verdict. What's the situation.
- Paragraph 2: The most important finding (usually comp-related).
- Paragraph 3: The most actionable insight (what happens if you adjust).

**Two metric cards** (side by side, equal width, 0.2" gap):
- Card 1: "47" large (28–32pt) in brand accent, below it "full matches" + "2.1% of market" in 8pt gray
- Card 2: "1,240" large (28–32pt) in secondary blue, below it "partial matches" + "if Rust relaxed" in 8pt gray
- Each card: white background, 1px border, 6–8pt rounded corners, generous internal padding (~16pt)

**Cross-reference line** (bottom, hairline above):
- Small italic text: "Key bottleneck: ... See page 3 ... See page 4 ... Recommendations on page 6."
- Acts as a table of contents for the rest of the report. 8pt, gray.

### Design Notes
- The two metric cards are the visual anchor. Everything else flows around them.
- If the verdict is RED, the two cards should still be calm — don't make the page feel alarming.
- Keep prose paragraphs short — max 4 lines each.

---

## Page 3 — Talent Pool Waterfall ★

### Purpose
The most visually impactful page. Show the client exactly how their requirements shrink the talent pool, and how much it grows when each condition is relaxed.

### Layout

```
┌─────────────────────────────────────────────┐
│ {{LOGO}}        Market Feasibility · Sr SWE │
│─────────────────────────────────────────────│
│                                             │
│  TALENT POOL ANALYSIS                       │
│  How the candidate pool changes as          │
│  requirements are relaxed                   │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │                                      │   │
│  │  All conditions met    47  ██        │   │
│  │                                      │   │
│  │  Relax PhD             189 ██████    │   │
│  │  requirement            +142         │   │
│  │                                      │   │
│  │  Relax "SF only"       612 █████████ │   │
│  │  requirement            +423 ███     │   │
│  │                                      │   │
│  │  Relax Rust            1240 █████████│   │
│  │  requirement            +628 ██████  │   │
│  │                                      │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │  TOP 5 MOST RESTRICTIVE              │   │
│  │  REQUIREMENTS                        │   │
│  │                                      │   │
│  │  Rust experience   4% of market  ██  │   │
│  │  On-site 4d/week  12% of market  ██  │   │
│  │  Series B+ exp    18% of market  ██  │   │
│  │  MS/PhD required  31% of market  ██  │   │
│  │  React 5+yr       42% of market  ██  │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  KEY TAKEAWAY                               │
│  The Rust requirement alone eliminates      │
│  96% of otherwise-qualified candidates.     │
│  This is the single highest-leverage         │
│  condition to negotiate with the client.     │
│                                             │
│─────────────────────────────────────────────│
│  Analysis powered by ReqCheck          3/6  │
└─────────────────────────────────────────────┘
```

### Content Details

**Section header:**
- "TALENT POOL ANALYSIS" in 18–20pt serif
- One-line subtitle: "How the candidate pool changes as requirements are relaxed" in 10pt gray

**Waterfall chart** (main visual, top half of page):
- Horizontal bar chart, left-aligned labels, bars extend right
- Each row:
  - Label on left: condition description ("All conditions met", "Relax PhD requirement", …)
  - Bar: filled color, width proportional to value (max bar = 100% of the widest row = 1,240)
  - Number: the count value, right-aligned or at bar end, in bold mono
  - Secondary note below: "+142" in gray for each relaxed condition row
- Bar colors from top to bottom: darkest → lightest (brand accent → light blue/amber gradient)
- Data for this example:
  | Condition | Count | Width (% of 1240) | Delta |
  |---|---|---|---|
  | All conditions met | 47 | 3.8% | — |
  | Relax PhD requirement | 189 | 15.2% | +142 |
  | Relax "In SF only" | 612 | 49.4% | +423 |
  | Relax Rust requirement | 1,240 | 100% | +628 |

**Most Restrictive Requirements** (secondary chart, bottom half):
- A smaller horizontal bar chart
- Title: "TOP 5 MOST RESTRICTIVE REQUIREMENTS"
- Each row: requirement name + "% of market" + horizontal bar showing how few candidates satisfy this single condition
- The smallest percentage = the most restrictive requirement (sort ascending by %)
- This chart answers: "Which one thing should I ask the client to drop?"
- Data example:
  | Requirement | % of market |
  |---|---|
  | Rust experience | 4% |
  | On-site 4 days/week | 12% |
  | Series B+ experience | 18% |
  | MS/PhD required | 31% |
  | React 5+ years | 42% |

**Key Takeaway** (bottom callout):
- A subtle background box (light brand tint, ~5% opacity)
- "KEY TAKEAWAY" in 8pt uppercase bold
- One sentence conclusion in 10pt: names the single highest-leverage condition to negotiate

### Design Notes
- The waterfall must dominate the page visually. It's the "screenshot this and tweet it" chart.
- Bars must have enough height (12–16pt minimum) to be readable and clickable-looking.
- The delta numbers (+142, +423, +628) are important — they show the magnitude of impact at a glance.

---

## Page 4 — Compensation Reality Check

### Purpose
Show the client that their budget is the problem, not the recruiter's ability. The "reverse persona" is the killer feature here.

### Layout

```
┌─────────────────────────────────────────────┐
│ {{LOGO}}        Market Feasibility · Sr SWE │
│─────────────────────────────────────────────│
│                                             │
│  COMPENSATION REALITY                       │
│  Market base salary distribution —          │
│  Sr. SWE, San Francisco Bay Area            │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │                                      │   │
│  │    [Market salary histogram]         │   │
│  │                                      │   │
│  │    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│░░░░░░░░░░░░    │   │
│  │    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│░░░░░░░░░░░░    │   │
│  │    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│░░░░░░░░░░░░    │   │
│  │    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓    │   │
│  │         ▲                           │   │
│  │    Your budget: $180K               │   │
│  │    32nd percentile                  │   │
│  │                                      │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  YOUR BUDGET REACHES ~32% OF QUALIFIED      │
│  CANDIDATES IN THIS MARKET.                 │
│  Top 50% requires $210K+ base.              │
│  Top 25% requires $240K+ base.              │
│                                             │
│  ┌──────────────────┐  ┌──────────────────┐ │
│  │                  │  │                  │ │
│  │  AT $180K        │  │  AT $210K        │ │
│  │  You can hire:   │  │  You can hire:   │ │
│  │                  │  │                  │ │
│  │  ~3–5 yr exp     │  │  ~5–8 yr exp     │ │
│  │  Mid-size cos    │  │  FAANG-adjacent  │ │
│  │  Non-FAANG bg    │  │  IPO experience  │ │
│  │  Tier-2 cities   │  │  SF / NYC based  │ │
│  │                  │  │                  │ │
│  └──────────────────┘  └──────────────────┘ │
│                                             │
│─────────────────────────────────────────────│
│  Analysis powered by ReqCheck          4/6  │
└─────────────────────────────────────────────┘
```

### Content Details

**Section header:**
- "COMPENSATION REALITY" in 18–20pt serif
- Subtitle: "Market base salary distribution — Sr. SWE, San Francisco Bay Area" in 10pt gray

**Histogram chart** (top half):
- X-axis: base salary, $120K → $300K, marked in $20K increments
- Y-axis: number of candidates (relative, not absolute — show as % of peak)
- The histogram bars fill from left, colored in brand accent
- A vertical RED line marks the client's budget position
- Above the line: a small red label "Your budget: $180K"
- Below the line: "32nd percentile" in red
- All bars to the RIGHT of the red line: shaded in a lighter gray to visually show "this is the part you can't reach"
- Key percentile markers below the axis: P25 ($165K), P50 ($210K), P75 ($240K), P90 ($275K)

**Percentile summary** (below chart, centered):
- One line each for P25, P50, P75, P90 — in small 9pt text
- P50 and P75 are bolded
- The client's budget position is the only one in color

**Reverse Persona — two side-by-side cards** (bottom half):
- Card 1 title: "AT $180K, YOU CAN HIRE:" (client's current budget, in gray)
- Card 2 title: "AT $210K, YOU CAN HIRE:" (suggested budget, in brand accent or green)
- Each card lists 4 bullet traits:
  - Typical years of experience
  - Company background (FAANG / startup / mid-size)
  - Notable experience signals (IPO, scale-up, etc.)
  - Geographic concentration
- Card 1 uses muted/gray styling. Card 2 uses warmer/richer styling. The contrast IS the argument.

### Design Notes
- Never say "you're cheap." Show it. The reverse persona cards do this with zero judgment.
- The red budget line + grayed-out "unreachable" bars are a very quiet, very powerful visual. Let the chart do the arguing.
- If the budget is already competitive (green verdict for comp), the two cards can be "At $180K" vs "At $210K (stretch)", reframing as opportunity rather than deficiency.

---

## Page 5 — Market Landscape

### Purpose
Show where the talent lives — geographically and by employer. This page is the bridge from "analysis" to "action."

### Layout

```
┌─────────────────────────────────────────────┐
│ {{LOGO}}        Market Feasibility · Sr SWE │
│─────────────────────────────────────────────│
│                                             │
│  MARKET LANDSCAPE                           │
│  Where the talent lives and works           │
│                                             │
│  GEOGRAPHIC DISTRIBUTION                    │
│  ┌──────────────────────────────────────┐   │
│  │ SF Bay Area    ████████████████  312 │   │
│  │ New York       ██████████        198 │   │
│  │ Seattle        ████████          156 │   │
│  │ Austin         ██████            124 │   │
│  │ Los Angeles    ████               89 │   │
│  └──────────────────────────────────────┘   │
│  * 87% of qualified candidates are          │
│    concentrated in these 5 metros.          │
│                                             │
│  TOP EMPLOYERS                              │
│  ┌──────────────────────────────────────┐   │
│  │                                      │   │
│  │  Stripe  23   Figma  18   Notion  15 │   │
│  │                                      │   │
│  │  Linear  14   Vercel  13   GitHub 12 │   │
│  │                                      │   │
│  │  Brex  11   Ramp  10   Cloudflare 9  │   │
│  │                                      │   │
│  │  Datadog  8   Plaid  7   Supabase 7  │   │
│  │                                      │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │  MARKET ACTIVITY                     │   │
│  │                                      │   │
│  │  ~14% of this talent pool shows      │   │
│  │  active job-seeking signals.         │   │
│  │                                      │   │
│  │  23 similar JDs posted in the        │   │
│  │  last 30 days across LinkedIn        │   │
│  │  and Indeed.                         │   │
│  └──────────────────────────────────────┘   │
│                                             │
│─────────────────────────────────────────────│
│  Analysis powered by ReqCheck          5/6  │
└─────────────────────────────────────────────┘
```

### Content Details

**Section header:**
- "MARKET LANDSCAPE" in 18–20pt serif
- Subtitle: "Where the talent lives and works" in 10pt gray

**Geographic Distribution** (top section):
- Horizontal bar chart, 5 rows
- Left: metro name in 10pt
- Bar: proportional width, brand accent color
- Right: count number in 10pt mono bold
- Footnote below chart: "% of qualified candidates concentrated in these N metros"
- Data for this example:
  | Metro | Count |
  |---|---|
  | SF Bay Area | 312 |
  | New York | 198 |
  | Seattle | 156 |
  | Austin | 124 |
  | Los Angeles | 89 |

**Top Employers** (middle section):
- A tag cloud / pill grid layout, NOT a table
- Each employer rendered as a rounded pill:
  - Company name in 10pt, count in 9pt mono
  - Company name in primary text, count in gray
  - Light gray background (`#F3F4F6`), no border
  - 12 companies displayed in a 4×3 or 6×2 grid
- The visual effect should be "glanceable" — the client's eye should go straight to the top-left company

**Market Activity** (bottom section, subtle box):
- A light background card with two data points:
  1. "~14% of this talent pool shows active job-seeking signals" (with a small upward-trend icon)
  2. "23 similar JDs posted in the last 30 days across LinkedIn and Indeed" (with a small building/company icon)
- Both rendered as icon + sentence, not as big numbers
- Purpose: subtle urgency — not only are these candidates rare, but competitors are also hunting them

### Design Notes
- This is the "calmest" page visually. It's information, not argument. Let pages 3 and 4 do the arguing.
- The employer pills should feel like a premium version of LinkedIn's "Where they work" section — familiar pattern, elevated execution.
- Geographic data should include a note if the JD's target location dominates (e.g., "SF Bay Area accounts for 66% of matches").

---

## Page 6 — Recommendations

### Purpose
Close the report with clear, specific, actionable recommendations. This page transforms the recruiter from "analyst" to "advisor."

### Layout

```
┌─────────────────────────────────────────────┐
│ {{LOGO}}        Market Feasibility · Sr SWE │
│─────────────────────────────────────────────│
│                                             │
│  RECOMMENDATIONS                            │
│  Three changes to make this req fillable    │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │                                      │   │
│  │  1                                   │   │
│  │  RELAX THE RUST REQUIREMENT          │   │
│  │                                      │   │
│  │  Consider engineers with strong      │   │
│  │  systems programming experience in   │   │
│  │  C++ or Go. The talent pool expands  │   │
│  │  16× with this change alone.         │   │
│  │                                      │   │
│  │  Pool:  47 → 1,240                   │   │
│  │  Score:  62 → 31 (GREEN)             │   │
│  │                                      │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │  2                                   │   │
│  │  INCREASE TOTAL COMP TO $210K+       │   │
│  │  ...                                 │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │  3                                   │   │
│  │  EXPAND TO SEATTLE + REMOTE (PST)    │   │
│  │  ...                                 │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  ┌──────────────────────────────────────┐   │
│  │           CURRENT    ADJUSTED  MARKET│   │
│  │  Matches    47       1,200+    2,800 │   │
│  │  Reach %    32%        68%        —  │   │
│  │  Est. TTF  12+ wks   4–6 wks   6 wks │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  Ready to adjust the JD? Let's re-run       │
│  this analysis with the new criteria.       │
│                                             │
│  {{RECRUITER_NAME}} · {{RECRUITER_EMAIL}}   │
│                                             │
│─────────────────────────────────────────────│
│  Analysis powered by ReqCheck          6/6  │
└─────────────────────────────────────────────┘
```

### Content Details

**Section header:**
- "RECOMMENDATIONS" in 18–20pt serif
- Subtitle: "Three changes to make this req fillable" (or "…to reduce time-to-fill") in 10pt gray

**Three recommendation cards** (stacked vertically, equal width):
- Each card: white background, 1px border, 8pt radius, generous internal padding (~20pt)
- Card structure:
  - **Number**: large serif numeral (24–28pt) in brand accent, left-aligned or in a circle
  - **Title**: "RELAX THE RUST REQUIREMENT" in 11pt bold sans-serif, all caps
  - **Body**: 2–3 lines in 10pt, explaining the recommendation and expected impact
  - **Metrics strip** (bottom of card): two small metric pills showing "before → after"
    - "Pool: 47 → 1,240" and "Score: 62 → 31 (GREEN)"
    - Each pill: light background, 8pt mono, tight padding
- For this example, three cards:
  1. Relax Rust → C++/Go, Pool 47→1,240, Score 62→31 GREEN
  2. Increase comp to $210K+, Reach 32%→68%, Pool +300
  3. Expand to Seattle + remote PST, Pool +250

**Summary comparison table** (below the three cards):
- A compact 3-column, 4-row table
- Columns: "CURRENT" / "ADJUSTED" / "MARKET AVG"
- Rows: "Matches", "Reach %", "Est. Time-to-Fill"
- "CURRENT" numbers are the JD as-is (muted/gray)
- "ADJUSTED" numbers apply all 3 recommendations (brand accent or green, bold)
- "MARKET AVG" provides a reference point (gray, for context)

**Closing line** (below the table):
- "Ready to adjust the JD? Let's re-run this analysis with the new criteria." in 10pt italic
- This is a soft CTA — it invites the client to act without being salesy

**Contact block** (bottom of page, above footer):
- "{{RECRUITER_NAME}} · {{RECRUITER_EMAIL}}" in 9pt, centered

### Design Notes
- The three cards should feel distinct but not heavy. Generous white space between them.
- Number + title should be scannable — a VP should get the gist just by reading the three titles.
- The summary table is the "closing argument." It reduces the entire 6-page report to one row of before/after numbers.
- If verdict is GREEN (very fillable), reframe this page: "Why this req is set up for success" + 3 accelerators rather than 3 fixes.

---

## Page-by-Page Cheat Sheet (for quick reference)

| Page | Title | Dominant Visual | Emotional Job |
|------|-------|-----------------|---------------|
| 1 | Cover | Hero number "47" | "This looks professional." |
| 2 | Executive Summary | Two metric cards | "I understand the situation." |
| 3 | Talent Pool Waterfall | Waterfall bar chart | "Wow, Rust really is the problem." |
| 4 | Compensation Reality | Histogram + Reverse Persona | "We can't afford the person we described." |
| 5 | Market Landscape | Geo bars + Employer pills | "OK, I know where they are." |
| 6 | Recommendations | 3 cards + Summary table | "Here's what we should do." |

---

## Implementation Notes for Designers

1. **This is a template, not a fixed document.** Every recruiter gets the same page structure, different data. Design with data variability in mind: what if "47" is "3"? What if it's "8,400"? What if the verdict is GREEN and page 4 has nothing to argue about?

2. **Data placeholders for the example (Sr. SWE, SF):**
   - Verdict: YELLOW, 62/100
   - Full matches: 47
   - Waterfall: 47 → 189 (+PhD) → 612 (+SF) → 1,240 (+Rust)
   - Budget: $180K base, market median $210K
   - Top metros: SF 312, NYC 198, Seattle 156, Austin 124, LA 89
   - Top employers: Stripe 23, Figma 18, Notion 15, Linear 14, Vercel 13, GitHub 12, Brex 11, Ramp 10, Cloudflare 9, Datadog 8, Plaid 7, Supabase 7

3. **Accessibility:** All charts must have sufficient color contrast. Every chart should be interpretable in grayscale print. Label data points directly rather than relying solely on a legend.

4. **Print-friendly:** No dark backgrounds. Whites and very light grays only. Charts should work in B&W laser print.

5. **File format:** Final deliverable to engineering should be a PDF template with clearly marked variable regions {{like_this}}. Engineering will replace these with real data.

6. **The ReqCheck watermark:** Only ONE mention of ReqCheck per page — the tiny "Analysis powered by ReqCheck" in the footer. It must be there (this is your growth engine), but it must never compete with the recruiter's brand.

---

**End of document.**
