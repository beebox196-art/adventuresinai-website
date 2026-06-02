# Kieran Review — AIAI Website Claims Audit

**Date:** 2026-06-01
**Reviewer:** Kieran (adversarial reviewer)
**Scope:** 8 HTML files across the AIAI website
**Standard:** "Proof Over Promise" — every claim must be honest, graduated, evidence-based, and free of salesy absolutism.

---

## FINDINGS

---

### HIGH RISK

---

#### 1. Contradictory GitHub Star Counts (Internal Factual Error)

**Page:** `case-studies.html` — OpenClaw card stats vs. `case-study-openclaw.html` body text

**Current text:**
- Card (case-studies.html): `"114K GitHub stars"`
- Body (case-study-openclaw.html): `"300K+ GitHub Stars"`, `"reached 250,000 stars in approximately 10 weeks"`

**Why it's a problem:** These numbers differ by nearly 3× on the same site. A visitor who reads the card and then the article will immediately spot the contradiction. For a brand whose identity is "Proof Over Promise," a verifiable factual error like this is deeply damaging. It suggests the numbers were fabricated or carelessly updated, undermining every other stat on the site.

**Risk:** HIGH

**Suggested reframe:** Audit the real current star count and use one consistent number everywhere. If uncertain, use a range: `"300K+ (and growing)"` or verify the actual figure. Never let the card and the article disagree.

---

#### 2. "Never Miss a Customer Enquiry Again"

**Page:** `services.html` — Quick Wins → Email Monitoring & Triage

**Current text:**
> "AI watches your inbox, categorises by urgency, flags important messages. Never miss a customer enquiry again."

**Why it's a problem:** This is an absolute promise that cannot be delivered. AI email triage has false negatives. Classifiers miss things. Edge cases exist. A single missed customer enquiry would make this claim a lie. It's also the kind of guarantee a "Proof Over Promise" brand should never make — it's a promise, not proof.

**Risk:** HIGH

**Suggested reframe:**
> "AI watches your inbox, categorises by urgency, and flags important messages — so you're far less likely to miss a customer enquiry."

---

#### 3. "All Running Without Prompting"

**Page:** `services.html` — AI Adoption → AI Team Setup & Configuration

**Current text:**
> "We build and configure an autonomous AI team tailored to your business. Email, reporting, monitoring, intelligence — all running without prompting."

**Why it's a problem:** This contradicts the brand's own guidance on human oversight. The case study explicitly states: *"For anything external, public, or financially consequential, we require explicit approval. The agent proposes; the human disposes."* Claiming systems run "without prompting" implies zero human involvement, which is neither accurate nor responsible. It also sets an unrealistic expectation that the client can walk away entirely.

**Risk:** HIGH

**Suggested reframe:**
> "We build and configure an autonomous AI team tailored to your business. Email, reporting, monitoring, intelligence — running on schedule, with human oversight where it matters."

---

#### 4. "From Assessment Through to Autonomous Operations"

**Page:** `services.html` — Strategic Partnership → Full AI Adoption Roadmap

**Current text:**
> "A phased plan for transforming how your business operates with AI. From assessment through to autonomous operations. Measured at every step."

**Why it's a problem:** "Autonomous operations" is an endpoint that very few businesses will ever reach — and implying it's a guaranteed destination over-promises the outcome. Even with the best systems, human judgement remains essential. The phrase reads like a sales brochure for a destination that may not exist.

**Risk:** HIGH

**Suggested reframe:**
> "A phased plan for transforming how your business operates with AI. From assessment through to significantly greater automation — measured at every step, with clear decision points on what to automate and what to keep human."

---

#### 5. "Zero Human Intervention Per Cycle"

**Page:** `index.html` — Live Intelligence Pipeline stats block

**Current text:**
> "0 Human intervention per cycle"

**Why it's a problem:** This is presented as a hard metric alongside "95% data reduction." But "zero human intervention" is almost certainly not true end-to-end. Someone designed the pipeline. Someone maintains it. Someone reviews outputs periodically. Someone handles failures. The claim ignores the human labour that built, maintains, and monitors the system. For a brand that champions human oversight elsewhere, this is inconsistent.

**Risk:** HIGH

**Suggested reframe:**
> "Runs on schedule without daily human involvement" or "Automated per cycle — reviewed weekly"

---

### MEDIUM RISK

---

#### 6. "95% Data Reduction (20KB → 1KB)"

**Page:** `index.html` — Live Intelligence Pipeline stats block

**Current text:**
> "95% Data reduction (20KB → 1KB)"

**Why it's a problem:** This is presented as a precise, universal metric but is almost certainly an average or best-case figure from one type of input. YouTube transcripts vary enormously in length. Some are 5KB, some are 100KB. A single "95%" figure implies this is a reliable, repeatable result across all inputs, which is misleading. If challenged, AIAI would need to show the methodology behind this number.

**Risk:** MEDIUM

**Suggested reframe:**
> "~95% data reduction on typical inputs (e.g., 20KB transcript → ~1KB insight note)" — or better yet, remove the specific ratio and say: "Significant data reduction — long-form content distilled to actionable insights."

---

#### 7. "Your Competitors Aren't Waiting. The Risk Isn't Adopting Early — It's Falling Behind Permanently."

**Page:** `index.html` — Honest Framework → "It's too early for AI"

**Current text:**
> "Your competitors aren't waiting. The risk isn't adopting early — it's falling behind permanently."

**Why it's a problem:** Fear-based selling disguised as honest advice. The DSIT stat (16% adoption) actually shows that 84% of UK businesses *are* waiting. The claim that competitors "aren't waiting" is contradicted by the very data cited on the page. "Permanently" is also an absolute — no competitive disadvantage from a technology decision is truly permanent.

**Risk:** MEDIUM

**Suggested reframe:**
> "80% of UK businesses haven't started yet. That means early adopters have a real window — but waiting too long closes it. Starting small now builds capability; starting later means playing catch-up."

---

#### 8. "AI Manages Social Presence" / "Alerts You to Opportunities"

**Page:** `index.html` — The Journey → Local Business → AI-Autonomous

**Current text:**
> "AI monitors email, generates reports, manages social presence, alerts you to opportunities."

**Why it's a problem:** "Manages social presence" oversells what AI can do reliably. AI can draft posts, schedule them, and even analyse engagement — but "managing" implies end-to-end ownership including community engagement, brand voice decisions, and crisis response. "Alerts you to opportunities" is vague enough to be meaningless — what kind of opportunities? Based on what signal?

**Risk:** MEDIUM

**Suggested reframe:**
> "AI monitors email, generates reports, drafts social content for your approval, and flags patterns worth acting on."

---

#### 9. "Designed, Built, Tested, and Deployed Rapidly"

**Page:** `index.html` — Live Intelligence Pipeline

**Current text:**
> "This entire pipeline [...] was designed, built, tested, and deployed rapidly."

**Why it's a problem:** "Rapidly" is a weasel word. How rapidly? An hour? A week? A month? Without a timescale, this communicates nothing and invites scepticism. If it was genuinely fast, say how fast. If you can't, don't use the word.

**Risk:** MEDIUM

**Suggested reframe:**
> State the actual timeframe, or remove the claim entirely. "Deployed in under a week" or "Built and deployed in days" — if either is true. If not, just say: "This entire pipeline [...] runs continuously on our infrastructure."

---

#### 10. "Sovereign AI Infrastructure" Language Persists

**Page:** `services.html` — AI Adoption tier; `index.html` — What We Do section

**Current text:**
> services.html: "Sovereign AI Infrastructure — Your AI runs on your infrastructure. Your data stays on your network."
> index.html: "Sovereign AI infrastructure" listed as a bullet under AI Adoption.

**Why it's a problem:** This was already flagged and revised on `services.html` to "Hybrid to Sovereign AI" with graduated language. The old absolute version is still live on both pages. It creates an either/or framing (local OR cloud) that contradicts the nuanced "cloud-first with local fallback" position articulated on `understanding-ai.html`.

**Risk:** MEDIUM

**Suggested reframe:** Update both pages to the revised "Hybrid to Sovereign AI" language with graduated options, matching the nuanced position on `understanding-ai.html`.

---

#### 11. "This Isn't Theory. It's Proven Practice."

**Page:** `services.html` — Strategic Partnership → Lessons Learned & Evidence

**Current text:**
> "Our documented journey — what worked, what didn't, and why — gives your board confidence that this isn't theory. It's proven practice."

**Why it's a problem:** "Proven practice" is a strong claim. Proven where? To what standard? One internal deployment is a case study; "proven practice" implies broader validation. The phrase sounds like a consultancy pitch rather than the measured honesty the brand aspires to.

**Risk:** MEDIUM

**Suggested reframe:**
> "Our documented journey — what worked, what didn't, and why — is evidence you can examine, not a theoretical framework. We've done this ourselves, and we'll show you the details."

---

#### 12. "Fastest-Growing Open-Source Project in History"

**Page:** `case-study-openclaw.html` — Hero subhead and article body

**Current text:**
> "How a personal side project became the fastest-growing open-source project in history"
> "gaining stars at a rate that surpassed any open-source project in history"

**Why it's a problem:** This is an extraordinary claim about a third-party project that OpenClaw/AIAI did not create. Even if approximately true by GitHub star velocity, "in history" is an absolute that's hard to verify and easy to challenge. (Did anyone count every open-source project ever? What about early projects before GitHub existed?) Using superlatives for a case study undermines the measured tone.

**Risk:** MEDIUM

**Suggested reframe:**
> "How a personal side project became one of the fastest-growing open-source projects ever recorded" — or simply state the numbers without the superlative: "250,000 stars in 10 weeks — a pace few open-source projects have matched."

---

### LOW RISK

---

#### 13. "Three Things the AI Industry Doesn't Want to Talk About"

**Page:** `index.html` — Three Pillars section heading

**Current text:**
> "Three things the AI industry doesn't want to talk about."

**Why it's a problem:** Mildly conspiratorial framing. It positions AIAI as the brave truth-teller against a silent industry, which is a familiar marketing trope. The actual three points (proof, starting from reality, ownership) are things the industry *does* talk about — they're just framed differently by different vendors. It's not dishonest, but it's a bit theatrical for a "Proof Over Promise" brand.

**Risk:** LOW

**Suggested reframe:**
> "Three things most AI advice gets wrong." — or even: "What we do differently."

---

#### 14. "We're Not Like Other AI Consultancies. Here's Why That Matters."

**Page:** `index.html` — Three Pillars section subheading

**Current text:**
> "We're not like other AI consultancies. Here's why that matters for your business."

**Why it's a problem:** Generic differentiation claim. Every consultancy says this. It's not false, but it's not evidence either. A "Proof Over Promise" brand could demonstrate differentiation through specifics rather than assertion.

**Risk:** LOW

**Suggested reframe:** Either remove it (the three pillars speak for themselves) or replace with something specific: "We run AI on our own infrastructure first. Here's what that means for your business."

---

#### 15. "$0 Marketing Budget"

**Page:** `case-studies.html` — OpenClaw card stat

**Current text:**
> "$0 Marketing budget"

**Why it's a problem:** This can't be verified. The OpenClaw project may not have spent money on paid advertising, but there are many forms of marketing — PR, community building, conference talks, content creation. Peter Steinberger's personal profile and media appearances (TED Talk is mentioned) are themselves marketing activities with implicit costs.

**Risk:** LOW

**Suggested reframe:** "No paid advertising" — or remove the stat. The growth story is compelling enough without unverifiable numbers.

---

#### 16. "You're Already Ahead of 80% of Businesses"

**Page:** `understanding-ai.html` — CTA section

**Current text:**
> "The fact that you're here means you're already ahead of 80% of businesses."

**Why it's a problem:** This is flattery, not insight. Visiting a webpage doesn't mean a business is ahead of anything. It's a feel-good line designed to make the reader feel special, which is the opposite of the honest, no-nonsense tone the brand claims. It also co-opts the DSIT stat (80% not using AI) to make a claim it doesn't support — visiting a page ≠ adopting AI.

**Risk:** LOW

**Suggested reframe:**
> "If you're thinking seriously about AI, you're in the minority — and that's an advantage. Let's have an honest conversation about what it could actually do for your business."

---

#### 17. "Microsoft Copilot Is Designed for This — Your Data Becomes Part of Their Ecosystem."

**Page:** `understanding-ai.html` — Jargon Buster → Vendor Lock-in

**Current text:**
> "When switching away from a vendor becomes so expensive and disruptive that you're effectively trapped. Microsoft Copilot is designed for this — your data becomes part of their ecosystem."

**Why it's a problem:** This is stated as fact ("is designed for this") when it's an interpretation. Microsoft would argue Copilot is designed for productivity, not lock-in. The broader point about ecosystem lock-in is valid, but attributing deliberate lock-in design to a specific product as a stated fact goes beyond what can be proven.

**Risk:** LOW

**Suggested reframe:**
> "When switching away from a vendor becomes so expensive and disruptive that you're effectively trapped. Products like Microsoft Copilot integrate deeply with your existing data and workflows — which creates dependency, whether that's the intention or not."

---

## RISK-RANKED SUMMARY

| # | Risk | Page | Issue |
|---|------|------|-------|
| 1 | **HIGH** | case-studies vs. case-study-openclaw | Contradictory GitHub star counts (114K vs. 300K+) |
| 2 | **HIGH** | services.html | "Never miss a customer enquiry again" — impossible absolute |
| 3 | **HIGH** | services.html | "All running without prompting" — contradicts human-oversight ethos |
| 4 | **HIGH** | services.html | "From assessment through to autonomous operations" — over-promises endpoint |
| 5 | **HIGH** | index.html | "Zero human intervention per cycle" — ignores human labour behind the system |
| 6 | **MEDIUM** | index.html | "95% data reduction" — presented as universal metric without methodology |
| 7 | **MEDIUM** | index.html | "Competitors aren't waiting / falling behind permanently" — fear-based, contradicts own data |
| 8 | **MEDIUM** | index.html | "Manages social presence / alerts to opportunities" — oversells capability |
| 9 | **MEDIUM** | index.html | "Deployed rapidly" — weasel word, no timescale |
| 10 | **MEDIUM** | services.html + index.html | "Sovereign AI Infrastructure" — old absolute framing persists despite revision |
| 11 | **MEDIUM** | services.html | "Proven practice" — overstates validation scope |
| 12 | **MEDIUM** | case-study-openclaw.html | "Fastest-growing in history" — unverifiable superlative for third-party project |
| 13 | **LOW** | index.html | "AI industry doesn't want to talk about" — mild conspiratorial framing |
| 14 | **LOW** | index.html | "We're not like other consultancies" — generic assertion, not evidence |
| 15 | **LOW** | case-studies.html | "$0 marketing budget" — unverifiable |
| 16 | **LOW** | understanding-ai.html | "You're already ahead of 80%" — flattery, not insight |
| 17 | **LOW** | understanding-ai.html | "Copilot is designed for this" — interpretation stated as fact |

---

### ADDITIONAL FINDINGS FROM proof.html

---

#### 18. "No Important Email Gets Missed"

**Page:** `proof.html` — Autonomous Email Management card

**Current text:**
> "Our AI monitors both email accounts every 30 minutes. It triages incoming mail, categorises by urgency, routes to the right team member, and flags critical items for immediate attention. No important email gets missed."

**Why it's a problem:** Same issue as finding #2 but repeated on the proof page. This is another absolute promise that cannot be guaranteed. AI triage systems have false negative rates. The phrase "no important email gets missed" is a guarantee, not a description of capability. It also appears in the same page that later admits: *"Real-time alerting for urgent items isn't in place yet"* — which directly undermines the claim about flagging critical items for "immediate attention."

**Risk:** HIGH

**Suggested reframe:**
> "Our AI monitors both email accounts every 30 minutes. It triages incoming mail, categorises by urgency, routes to the right team member, and flags critical items for attention — so important emails are far less likely to be overlooked."

---

#### 19. Internal Contradiction: "No Missed Items" vs. "Real-Time Alerting Isn't In Place Yet"

**Page:** `proof.html` — Daily Operational Reports card vs. Honest Assessment section

**Current text:**
- Card: "Every morning and evening, our AI generates comprehensive briefings [...] No manual compilation. **No missed items.**"
- Honest Assessment: "**Real-time alerting for urgent items isn't in place yet**"

**Why it's a problem:** The proof page contains a direct internal contradiction within the same document. It claims "no missed items" in the capability card, then admits real-time alerting isn't operational in the honest assessment section. If urgent alerting isn't in place, items *can* be missed between scheduled briefings. This undermines the credibility of the entire proof page.

**Risk:** HIGH

**Suggested reframe:** The "No missed items" claim must go. Replace with: "Comprehensive briefings from multiple sources, on schedule." The honest assessment section is the right tone — keep that honesty throughout.

---

#### 20. "3× Development Velocity"

**Page:** `proof.html` — Stats block

**Current text:**
> "3× Development velocity"

**Why it's a problem:** This is a precise-sounding metric with no denominator, no baseline, and no methodology. 3× compared to what? A single developer? A traditional team? Before AI? Without a defined comparison, this number communicates nothing verifiable. It sounds scientific but is actually a decoration.

**Risk:** MEDIUM

**Suggested reframe:** Either provide the comparison ("3× faster than our pre-AI baseline for equivalent tasks") or replace with qualitative language: "Significantly faster development cycles".

---

#### 21. "0 Data Leaves Our Network"

**Page:** `proof.html` — Stats block

**Current text:**
> "0 Data leaves our network"

**Why it's a problem:** This is misleading. The site itself states they use cloud models (cloud-first with local fallback). If they're sending data to cloud AI providers for processing, data *does* leave their network. Even with local models, some features (email monitoring, YouTube extraction, competitive intelligence) inherently involve fetching data from external sources. The claim may be technically true for a subset of data, but presented as a blanket statement it's false.

**Risk:** MEDIUM

**Suggested reframe:** Be specific: "0 sensitive business data stored on third-party systems" — if that's the actual claim. Or: "Core processing runs on our infrastructure" — without the absolute.

---

#### 22. "We Don't Hope It Works — We Know It Does"

**Page:** `proof.html` — Methodology → Repeatable

**Current text:**
> "Success isn't accidental. A rigorous methodology produces consistent results. We don't hope it works — we know it does."

**Why it's a problem:** This is a certainty claim that no AI consultancy can honestly make. AI systems are probabilistic. They work well most of the time, within defined boundaries — but "we know it does" implies a level of deterministic certainty that doesn't exist in AI. It contradicts the page's own honest assessment section which lists four areas that "need work."

**Risk:** MEDIUM

**Suggested reframe:**
> "Success isn't accidental. A documented methodology produces consistent results. We test, we measure, and we improve weekly."

---

#### 23. "Designed, Built, and Deployed Rapidly" (Repeated)

**Page:** `proof.html` — Real Examples → YouTube extraction example

**Current text:**
> "Designed, built, and deployed rapidly."

**Why it's a problem:** Same issue as finding #9. "Rapidly" appears again on this page. Without a timeframe, it's meaningless.

**Risk:** LOW

**Suggested reframe:** State the actual timeframe or remove the adverb.

---

### ADDITIONAL FINDINGS FROM contact.html

---

#### 24. "We'll Get Back to You Within 24 Hours"

**Page:** `contact.html` — Contact form description and follow-up section

**Current text:**
> "We'll get back to you within 24 hours." (appears twice on the page)

**Why it's a problem:** This is a concrete promise. If the team misses a weekend submission, goes on holiday, or the monitoring system fails, this becomes a broken commitment. However, this is a standard service promise and relatively low risk compared to product claims.

**Risk:** LOW

**Suggested reframe:** Either keep it (and have a process to honour it) or soften to: "We aim to respond within 24 hours on business days."

---

### ADDITIONAL FINDINGS FROM build-with-us.html

---

#### 25. "Just Honest Insight"

**Page:** `build-with-us.html` — Hero subheading

**Current text:**
> "Answer 4 quick questions and we'll build you a personalised AI readiness snapshot — instantly. No sales pitch, no waiting. Just honest insight."

**Why it's a problem:** The snapshot is generated from a JavaScript decision tree with hardcoded sector data. It's a template response, not genuine analysis. Calling it "personalised" and "honest insight" overstates what is essentially a form-to-template pipeline. The insight isn't dishonest — it's just not personalised in any meaningful sense.

**Risk:** MEDIUM

**Suggested reframe:** "Answer 4 quick questions and we'll generate an AI readiness snapshot for your sector — instantly. No sales pitch, no waiting. A practical starting point for the conversation."

---

## UPDATED RISK-RANKED SUMMARY

| # | Risk | Page | Issue |
|---|------|------|-------|
| 1 | **HIGH** | case-studies vs. case-study-openclaw | Contradictory GitHub star counts (114K vs. 300K+) |
| 2 | **HIGH** | services.html | "Never miss a customer enquiry again" — impossible absolute |
| 3 | **HIGH** | services.html | "All running without prompting" — contradicts human-oversight ethos |
| 4 | **HIGH** | services.html | "From assessment through to autonomous operations" — over-promises endpoint |
| 5 | **HIGH** | index.html | "Zero human intervention per cycle" — ignores human labour behind the system |
| 18 | **HIGH** | proof.html | "No important email gets missed" — impossible absolute |
| 19 | **HIGH** | proof.html | Internal contradiction: "no missed items" vs. "alerting not in place yet" |
| 6 | **MEDIUM** | index.html | "95% data reduction" — presented as universal metric without methodology |
| 7 | **MEDIUM** | index.html | "Competitors aren't waiting / falling behind permanently" — fear-based, contradicts own data |
| 8 | **MEDIUM** | index.html | "Manages social presence / alerts to opportunities" — oversells capability |
| 9 | **MEDIUM** | index.html | "Deployed rapidly" — weasel word, no timescale |
| 10 | **MEDIUM** | services.html + index.html | "Sovereign AI Infrastructure" — old absolute framing persists despite revision |
| 11 | **MEDIUM** | services.html | "Proven practice" — overstates validation scope |
| 12 | **MEDIUM** | case-study-openclaw.html | "Fastest-growing in history" — unverifiable superlative for third-party project |
| 20 | **MEDIUM** | proof.html | "3× development velocity" — unverifiable metric, no baseline |
| 21 | **MEDIUM** | proof.html | "0 data leaves our network" — misleading given cloud model usage |
| 22 | **MEDIUM** | proof.html | "We know it does" — certainty claim contradicts own "needs work" section |
| 25 | **MEDIUM** | build-with-us.html | "Personalised honest insight" — template responses aren't personalised |
| 13 | **LOW** | index.html | "AI industry doesn't want to talk about" — mild conspiratorial framing |
| 14 | **LOW** | index.html | "We're not like other consultancies" — generic assertion, not evidence |
| 15 | **LOW** | case-studies.html | "$0 marketing budget" — unverifiable |
| 16 | **LOW** | understanding-ai.html | "You're already ahead of 80%" — flattery, not insight |
| 17 | **LOW** | understanding-ai.html | "Copilot is designed for this" — interpretation stated as fact |
| 23 | **LOW** | proof.html | "Designed, built, and deployed rapidly" — repeated weasel word |
| 24 | **LOW** | contact.html | "Within 24 hours" — standard promise, manageable risk |

---

## OVERALL ASSESSMENT

**Strengths:**
- `understanding-ai.html` is the tonal benchmark — honest, nuanced, acknowledges AI limitations, uses graduated language. This is the standard every other page should match.
- The "Proof Over Promise" tagline is consistently present in footers and CTAs.
- The Jargon Buster and "What AI Is / Isn't" sections are genuinely useful and defensible.
- Sources are cited (footnotes), which is better than most AI consultancies.

**Core Pattern of Risk:**
The site is most honest when it's explaining AI and least honest when it's selling AIAI's services. The `index.html` hero pipeline and `services.html` tier descriptions are where promises creep in — absolutes, unverifiable metrics, and superlatives replace the measured honesty of the education pages.

**Most Urgent Fixes (Top 8):**
1. **Fix the star count contradiction** — factual error across two pages (114K vs. 300K+).
2. **Remove "Never miss a customer enquiry again"** — impossible absolute on services.html.
3. **Remove "No important email gets missed"** — impossible absolute on proof.html.
4. **Fix the internal contradiction on proof.html** — "no missed items" directly conflicts with "real-time alerting isn't in place yet."
5. **Remove "all running without prompting"** — contradicts the site's own human-oversight guidance.
6. **Replace "zero human intervention"** — appears on both index.html and proof.html; erases human labour.
7. **Update "Sovereign AI" language** on index.html to match the revised services.html position.
8. **Fix "0 data leaves our network"** — misleading given cloud-first model usage acknowledged elsewhere.

The site is good. These fixes would make it defensible.
