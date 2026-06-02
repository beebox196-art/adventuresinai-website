# Tone & Claims Audit Brief — AIAI Website

**From:** Bee (Coordinator)  
**To:** Kieran (Adversarial Reviewer)  
**Date:** 2026-06-01  
**Priority:** Standard  

## Context

Adam spotted that the "Sovereign AI Infrastructure" section on the Services page over-promised — implying local/sovereign AI is an easy option when it requires serious GPU investment, skilled ops, and ongoing maintenance. We've already drafted a fix for that specific section (changing to "Hybrid to Sovereign AI" with honest, graduated language).

Adam's now asked for a full-site audit to catch any other instances of over-promising, over-simplifying, or tone mismatches — so we can fix them all in one consistent pass rather than patching them one by one.

## What to Look For

Review every claim on every page for:

1. **Over-promising capability** — Anything that implies AI is easier, more powerful, or more turnkey than it actually is. Examples: "zero human intervention", "runs without prompting", "never miss", "no manual", "instant", etc.

2. **Over-simplifying complexity** — Presenting genuinely complex challenges (local AI, sovereign infrastructure, full autonomy) as simple plug-and-play options without caveats.

3. **Inconsistent tone** — The Understanding AI page is honest and nuanced ("cloud-first with a local fallback is the smarter starting point", "free puppy economics"). The Services page should match that same honesty. Anywhere that sounds more salesy than the rest of the site needs flagging.

4. **Unverifiable claims** — Statistics, percentages, or comparisons that need sourcing or softening. Also flag any "95%" or similar precise claims that may not hold up.

5. **Absolutes** — "Never", "always", "zero", "all", "every", "no" used in ways that could be contradicted.

6. **Mismatched positioning** — We're "Proof Over Promise". Any section that leans too far into promise territory is a brand inconsistency.

## Pages to Review

| Page | File | Key Areas |
|------|------|-----------|
| Home | index.html | Hero claims, stats, tier descriptions, objections section |
| Understanding AI | understanding-ai.html | Vendor lock-in section, AI capability claims, objections |
| Proof | proof.html | Capability cards, stats, "Honest Assessment" section, autonomy scale |
| Services | services.html | Tier descriptions, "Sovereign AI" (already flagged), process descriptions |
| Build With Us | build-with-us.html | Tool output claims, roadmap promises |
| Contact | contact.html | "What happens next" promises, response time |
| Case Study: OpenClaw | case-study-openclaw.html | Timeline claims, stats, lessons |
| Case Studies Landing | case-studies.html | Intro copy |

## Known Issues (Already Flagged)

- **Services: "Sovereign AI Infrastructure"** — Already being changed to "Hybrid to Sovereign AI" with honest, graduated language. Fix drafted but not yet committed.

## Output Format

For each issue, provide:
- **Page & Section** — Where on the page
- **Current text** — The problematic claim (quote it)
- **Why it's a problem** — Which category (over-promise, over-simplify, tone mismatch, unverifiable, absolute, brand inconsistency)
- **Risk level** — High / Medium / Low
- **Suggested reframe** — Honest alternative that keeps the selling point without over-egging

Rank all issues by risk level at the end so Q knows what to prioritise.

## Guiding Principle

The site's tagline is "Proof Over Promise". Every claim should survive a sceptical potential client reading it and thinking "yeah, but is that actually true?" If it wouldn't survive that test, flag it.

---

_Brief prepared by Bee. Kieran to review, then Mel to decide tonal treatment, then Q to implement in one pass._