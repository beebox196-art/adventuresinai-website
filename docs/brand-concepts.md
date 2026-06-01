# AIAI Brand Identity — 3 Concept Directions

> Date: 2026-05-31  
> Author: Mel (UI/UX)  
> Reviewed: Kieran (2026-05-31) — REVISE → GO after fixes  
> Branch: dev  
> Goal: Make the AIAI logo work harder as a commercial brand mark across the site — premium consultancy feel, not info blog.

---

## Current State Summary

| Element | Current |
|---|---|
| Nav logo | `logo-lines-transparent.png` at 36px (index) / 48px (other pages), top-left in white frosted nav |
| Footer logo | `logo-lines-transparent.png` at 36px (index) / 56px (other pages), above page links |
| Brand dividers | Text-only: `<span>AIAI</span>` or `<span>Live Signals</span>` with thin gradient lines |
| Hero | No logo — just headline text on navy gradient |
| Favicon | None |
| OG/social sharing | None |
| Logo assets available | `logo-box-transparent.png` (framed badge, 1254²), `logo-lines-transparent.png` (unframed wordmark, 1254²), plus coloured variants |

**Problem:** The logo is present but invisible. 36px is literally the size of a paragraph. It signals "we slapped a logo on the page" not "this is an established business with a visual identity."

---

## Concept 1: "The Seal" — Authority-First

**Core idea:** Treat the **framed badge** (`logo-box-transparent.png`) as a seal of authority. It appears in fewer places but at meaningful sizes — like a stamp on a report, not a watermark on a flyer.

### Visual Description

This concept is about **presence without repetition**. The framed badge is square, contained, and inherently feels like a mark of credibility. We use it at the two most visible anchor points (nav + footer) at sizes that are *actually readable*, and let the dividers become more refined.

### Where & How

**Nav bar:**
- Switch to `logo-box-transparent.png` at **56px** on desktop, **40px** on mobile
- Remove the tagline gap — the badge contains "ADVENTURES IN AI" already, no need to duplicate
- The white frosted nav provides enough contrast since the badge has a navy background
- Add a subtle gold pill-shaped background behind the logo to create a lockup zone

```html
<!-- Before -->
<a href="index.html" class="flex items-center gap-3 group">
    <img src="assets/img/logo-lines-transparent.png" alt="AIAI" class="aiai-logo">
</a>

<!-- After -->
<a href="index.html" class="flex items-center group">
    <div class="w-14 h-14 flex items-center justify-center rounded-lg bg-aiai-navy/5 ring-1 ring-aiai-gold/20">
        <img src="assets/img/logo-box-transparent.png" alt="AIAI — Adventures in AI" class="h-12 w-12 object-contain">
    </div>
</a>
```

**Hero section:**
- Add the badge as a **subtle background watermark** — large, very low opacity (4-6%), positioned in the upper-right quadrant of the hero. It doesn't compete with the headline but fills the visual negative space that currently has only blurred blobs.
- This says "you're on the AIAI site" the moment the page loads.

```html
<!-- Add inside hero section, before the content -->
<div class="absolute top-4 right-4 lg:top-12 lg:right-12 opacity-[0.04] pointer-events-none">
    <img src="assets/img/logo-box-transparent.png" alt="" class="h-64 w-64 lg:h-96 lg:w-96 object-contain" aria-hidden="true">
</div>
```

**Brand dividers:**
- Keep the text label but add a **mini gold tab** (a small rounded rectangle filled with gold) to the left of the text, echoing the gold accent tabs on the badge logo
- Replace the plain "AIAI" text with a tiny version of the wordmark at 24px

```html
<!-- New divider style -->
<div class="flex items-center justify-center gap-4 py-6">
    <div class="w-6 h-1 rounded-full bg-aiai-gold"></div>
    <span class="text-xs font-bold uppercase tracking-[0.2em] text-aiai-gold">AIAI</span>
    <div class="w-6 h-1 rounded-full bg-aiai-gold"></div>
</div>
```

**Footer:**
- Use the **framed badge** at **64px** — bigger than current, creates a proper brand anchor
- Add a thin gold horizontal rule above the footer content
- Add the tagline "Proof Over Promise" in small caps below the logo

```html
<!-- Before -->
<img src="assets/img/logo-lines-transparent.png" alt="AIAI" class="aiai-footer-logo mb-4">

<!-- After -->
<div class="flex flex-col items-start gap-3">
    <img src="assets/img/logo-box-transparent.png" alt="AIAI — Adventures in AI" class="h-16 w-16 object-contain">
    <p class="text-[10px] font-bold uppercase tracking-[0.25em] text-aiai-gold/70">Proof Over Promise</p>
</div>
```

### Feeling It Creates
- **Authority, trust, establishment.** Like walking into a consultancy where the reception desk has a brass plaque.
- The badge format reads as "certified" or "verified" — it's a seal, not a decoration.
- Less is more: fewer logo appearances, each one intentional.

### Trade-offs
- The badge is heavier visually than the wordmark — it dominates the nav more. This is good for brand recognition but slightly less "clean."
- The hero watermark is subtle to the point of being almost invisible on some screens. It works as a "you feel it but don't see it" brand presence.
- Doesn't feel as "modern tech" — leans traditional consultancy.

### Implementation Notes
- **Files to change:** `index.html`, `services.html`, `proof.html`, `contact.html`, `understanding-ai.html`, `build-with-us.html`
- **CSS additions:** New `.brand-divider-gold` style (or use inline Tailwind as shown)
- **New assets:** None needed — uses existing `logo-box-transparent.png`
- **Complexity:** Low. Swap logo source, adjust heights, add watermark div.

---

## Concept 2: "The Thread" — Continuity-First

**Core idea:** Use the **unframed wordmark** (`logo-lines-transparent.png`) as a continuous visual thread running through every section of the page. The logo is *everywhere* but always at the right scale for its context — like a typographic watermark.

### Visual Description

This concept treats the logo as the **connective tissue** of the site. The wordmark is lightweight, digital, and modular. It appears at different sizes in different contexts, creating a rhythm: nav (medium) → hero (large, faded) → divider (small, inline) → footer (medium).

### Where & How

**Nav bar:**
- Keep `logo-lines-transparent.png` but increase to **48px** with a **gold underline** that extends to the right edge of the nav
- This creates a horizontal brand bar that stretches the logo visually

```html
<a href="index.html" class="flex items-center gap-3 group relative">
    <img src="assets/img/logo-lines-transparent.png" alt="AIAI" class="h-12 w-auto object-contain transition-transform group-hover:scale-105">
    <div class="absolute -bottom-[3px] left-0 right-8 h-px bg-aiai-gold/40 group-hover:bg-aiai-gold transition-colors"></div>
</a>
```

**Hero section:**
- **Logo as headline prefix**: Place a large, semi-transparent wordmark (80-120px, 30% opacity) to the left of or above the hero headline, like a section marker.
- This replaces the current empty space above the headline and creates an immediate brand hierarchy.

```html
<!-- Insert above the hero h1 -->
<div class="mb-4 flex items-center gap-3">
    <img src="assets/img/logo-lines-transparent.png" alt="" class="h-20 w-20 lg:h-24 lg:w-24 object-contain opacity-30" aria-hidden="true">
    <div class="h-px flex-1 max-w-12 bg-aiai-gold/50"></div>
</div>
```

**Brand dividers:**
- **Replace the text-only dividers** with a tiny logo + gold separator lines
- The logo sits in the center at 28px, flanked by gradient lines that fade from gold to transparent

```css
/* Updated .brand-divider CSS */
.brand-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 20px 0;
}
.brand-divider::before,
.brand-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, #b59a3a, transparent);
}
.brand-divider img {
    height: 28px;
    width: auto;
    opacity: 0.7;
}
```

```html
<!-- Before -->
<div class="brand-divider"><span>AIAI</span></div>

<!-- After -->
<div class="brand-divider">
    <img src="assets/img/logo-lines-transparent.png" alt="" aria-hidden="true">
</div>
```

**Footer:**
- **Full logo lockup**: Wordmark at 56px with tagline "Adventures in AI" underneath in small, tracked-out text
- Add a subtle navy-to-dark gradient behind the footer logo area

```html
<div class="flex flex-col items-start gap-2">
    <img src="assets/img/logo-lines-transparent.png" alt="AIAI" class="h-14 w-auto object-contain">
    <p class="text-[11px] font-medium tracking-[0.15em] text-white/35 uppercase">Adventures in AI</p>
</div>
```

**Between service tiers / key sections:**
- On the "What We Do" section and the CTA section, add a small logo mark (24px, gold opacity 50%) centered above the section header — creates brand continuity without being intrusive

### Feeling It Creates
- **Connected, flowing, digital-native.** The logo becomes the site's rhythm — you notice it at every scroll point, but never at the wrong size.
- Feels like a modern software company that's also a consultancy (e.g., Stripe, Linear) — confident enough to put their mark everywhere, elegant enough to do it without shouting.
- The gold separator threads create visual continuity that ties the whole page together.

### Trade-offs
- More logo appearances = more maintenance. Every page change needs to consider logo placement.
- Risk of overuse: if every section has a logo mark, none of them stand out. Need discipline about which dividers get the treatment.
- The wordmark alone (without the frame) is less distinctive as a standalone mark — it works as part of a system, not as a badge.

### Implementation Notes
- **Files to change:** All 6 HTML pages
- **CSS additions:** Replace `.brand-divider` rules in the `<style>` block on each page, add gold line utilities
- **New assets:** None needed
- **Complexity:** Medium. The wordmark-on-divider pattern needs to be applied consistently across every page's brand dividers (especially `understanding-ai.html` which has 5 of them).

---

## Concept 3: "The Lockup" — System-First

**Core idea:** Create a **proper brand identity system** with a logo lockup (badge + tagline), favicon, OG image, and a structured footer. This is the most "commercial consultancy" approach — it treats the website as a brand touchpoint, not just a content page.

### Visual Description

This is the **most comprehensive** direction. It doesn't just change where the logo appears — it adds brand infrastructure that currently doesn't exist (favicon, social sharing image) and upgrades the footer into a proper brand statement. The aesthetic is closer to Deloitte Digital or a boutique strategy firm than a tech startup.

### Where & How

**Favicon + OG tags (NEW — biggest impact for least code):**
- Generate a 32×32 favicon from the framed badge (`logo-box-transparent.png`) — the square format is perfect for this
- Add `<link rel="icon">` and `<meta property="og:image">` to every page's `<head>`
- This means the brand appears in browser tabs, bookmarks, and social shares — places it currently doesn't exist at all

```html
<!-- Add to <head> on every page -->
<link rel="icon" type="image/png" sizes="32x32" href="assets/img/logo-box-transparent.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/img/logo-box-transparent.png">
<meta property="og:image" content="https://aiai.co.uk/assets/img/og-share-card.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

**Nav bar:**
- **Dual logo approach**: Use `logo-lines-transparent.png` at **44px** for the nav (lighter weight) but add a **gold vertical bar** and the word "AIAI" in small caps next to it
- This creates a proper brand lockup in the nav

```html
<a href="index.html" class="flex items-center gap-3 group">
    <img src="assets/img/logo-lines-transparent.png" alt="" class="h-11 w-11 object-contain" aria-hidden="true">
    <div class="hidden sm:block w-px h-8 bg-aiai-gold/30"></div>
    <span class="hidden sm:block text-xs font-bold uppercase tracking-[0.2em] text-aiai-navy/80 group-hover:text-aiai-gold transition-colors">AIAI</span>
</a>
```

**Hero section:**
- **Pill badge**: Add a small framed badge version at the top-left of the hero content, above the "AI for Real Businesses" eyebrow text. It acts like a "verified" badge for the page.
- Size: 40px. Opacity: full (it's on the navy hero, the badge's navy background blends, gold tabs pop).

```html
<div class="flex items-center gap-3 mb-5">
    <div class="w-10 h-10 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
        <img src="assets/img/logo-box-transparent.png" alt="" class="h-8 w-8 object-contain" aria-hidden="true">
    </div>
    <p class="text-sm font-semibold uppercase tracking-widest text-aiai-sage-light">AI for Real Businesses</p>
</div>
```

**Brand dividers:**
- **Hybrid approach**: Use the gold tab bars concept — two short gold bars flanking the text, but make the text itself use a small version of the logo image instead of the word "AIAI"
- On sections where "Live Signals" or other text is the label, keep the text but add gold bars

```html
<div class="flex items-center justify-center gap-4 py-6">
    <div class="flex-1 h-px bg-gradient-to-r from-transparent via-aiai-gold/30 to-transparent"></div>
    <img src="assets/img/logo-lines-transparent.png" alt="" class="h-6 w-6 object-contain opacity-60" aria-hidden="true">
    <div class="flex-1 h-px bg-gradient-to-r from-transparent via-aiai-gold/30 to-transparent"></div>
</div>
```

**Footer — the big change:**
- **Restructure into a proper brand footer**:
  1. Top row: Gold horizontal rule spanning full width
  2. Left column: **Framed badge** (`logo-box-transparent.png`) at 72px + "Adventures in AI Ltd." + short tagline
  3. Center column: Page links in two columns
  4. Right column: CTA + social proof
  5. Bottom row: Copyright with subtle gold accent

```html
<footer class="bg-aiai-dark text-white">
    <!-- Gold top rule -->
    <div class="h-px bg-gradient-to-r from-transparent via-aiai-gold/40 to-transparent"></div>
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
            <!-- Brand column (4 cols) -->
            <div class="md:col-span-4 flex flex-col gap-4">
                <img src="assets/img/logo-box-transparent.png" alt="AIAI — Adventures in AI" class="h-18 w-18 object-contain">
                <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-aiai-gold/60">Proof Over Promise</p>
                <p class="text-sm text-white/50 leading-relaxed">AI that meets you where you are. We build systems, not demos. Every proof point is a working pattern.</p>
            </div>
            <!-- Links column (4 cols) -->
            <div class="md:col-span-4 grid grid-cols-2 gap-8">
                <div>
                    <h4 class="font-semibold text-xs uppercase tracking-wider text-white/40 mb-4">Navigate</h4>
                    <ul class="space-y-2.5">
                        <li><a href="index.html" class="text-sm text-white/60 hover:text-aiai-sage-light transition-colors">Home</a></li>
                        <li><a href="understanding-ai.html" class="text-sm text-white/60 hover:text-aiai-sage-light transition-colors">Understanding AI</a></li>
                        <li><a href="proof.html" class="text-sm text-white/60 hover:text-aiai-sage-light transition-colors">Proof</a></li>
                        <li><a href="services.html" class="text-sm text-white/60 hover:text-aiai-sage-light transition-colors">Services</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-xs uppercase tracking-wider text-white/40 mb-4">Connect</h4>
                    <ul class="space-y-2.5">
                        <li><a href="contact.html" class="text-sm text-white/60 hover:text-aiai-sage-light transition-colors">Contact</a></li>
                        <li><a href="build-with-us.html" class="text-sm text-white/60 hover:text-aiai-sage-light transition-colors">Build With Us</a></li>
                    </ul>
                </div>
            </div>
            <!-- CTA column (4 cols) -->
            <div class="md:col-span-4">
                <h4 class="font-semibold text-xs uppercase tracking-wider text-white/40 mb-4">Start a Conversation</h4>
                <p class="text-sm text-white/50 mb-4">No sales pitch. No pressure. Just an honest conversation about what AI can do for your business.</p>
                <a href="contact.html" class="inline-flex items-center gap-2 px-5 py-2.5 bg-aiai-gold/20 hover:bg-aiai-gold/30 text-aiai-gold text-sm font-semibold rounded-lg transition-colors border border-aiai-gold/30">
                    Get in Touch
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </a>
            </div>
        </div>
        <div class="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p class="text-xs text-white/30">&copy; 2026 Adventures in AI Ltd. All rights reserved.</p>
            <p class="text-xs text-white/30">Built with AI &middot; OpenClaw</p>
        </div>
    </div>
</footer>
```

### Feeling It Creates
- **Established, structured, professional.** This is the look of a business that has a brand guide, not just a logo file.
- The favicon + OG image addition means the brand appears in browser tabs and social shares — currently it's a blank tab.
- The structured footer is the kind of thing a $2M+ consultancy has. It signals "we're serious about our business."

### Trade-offs
- **Most work:** Requires generating a favicon and OG image (both can be derived from existing assets), updating every page's `<head>`.
- The framed badge in the footer is visually heavier — on a dark background it may need a subtle ring or glow to not feel like a hole.
- The nav lockup with text next to the logo adds visual complexity to the nav — need to test at 360px width on mobile.
- The gold top-rule on the footer may look too decorative on some pages.

### Implementation Notes
- **Files to change:** All 6 HTML pages (head for favicon/OG, body for footer/nav)
- **New assets to generate:**
  - `assets/img/favicon.png` — 32×32 crop from `logo-box-transparent.png`
  - `assets/img/og-share-card.png` — 1200×630 social sharing image (navy background, centered badge, tagline)
- **CSS additions:** Footer gold rule, nav lockup text styles
- **Complexity:** High. But this is the direction that creates the most commercial impact.

---

## Comparison Summary

| Aspect | Concept 1: "The Seal" | Concept 2: "The Thread" | Concept 3: "The Lockup" |
|---|---|---|---|
| **Logo variant** | Framed badge | Unframed wordmark | Both (badge for authority, wordmark for flow) |
| **Nav size** | 48px, boxed | 48px, gold underline | 44px + "AIAI" text lockup |
| **Hero treatment** | Subtle watermark (4% opacity) | Large semi-transparent prefix | Small pill badge above eyebrow |
| **Dividers** | Gold tabs + text | Logo image + gold lines | Hybrid logo mark + gold bars |
| **Footer** | Badge + "Proof Over Promise" | Wordmark + "Adventures in AI" | Full 3-column layout, badge CTA |
| **Favicon/OG** | No change | No change | ✅ Adds favicon + social card |
| **Feeling** | Authority, tradition | Flow, digital-native | System, professionalism |
| **Complexity** | Low | Medium | High |
| **Best for** | Quick credibility boost | Modern tech consultancy look | Full brand infrastructure |

---

## Recommendation

**Start with Concept 3's infrastructure (favicon + OG image)** — that's the highest-impact, lowest-risk change because it works everywhere, not just on the site. Browser tabs and social shares are where the brand currently *doesn't exist*.

**Then layer Concept 1 on top** for the on-page treatment — the framed badge in the nav and footer, gold-tab dividers, and the hero watermark. Concept 1 is the quickest to implement and creates the most immediate "this is a real business" signal.

Concept 2's "thread" approach is elegant but risks overusing the wordmark. The badge (Concept 1) is inherently more distinctive and works better at small sizes.

---

## Quick Wins (implementable in one session)

1. **Favicon**: `cp assets/img/logo-box-transparent.png assets/img/favicon.png` + add `<link rel="icon">` to all `<head>` blocks
2. **Nav logo size bump**: Change `height: 36px` → `height: 48px` in `.aiai-logo` CSS across all pages
3. **Footer gold rule**: Add `<div class="h-px bg-gradient-to-r from-transparent via-aiai-gold/40 to-transparent"></div>` above every footer
4. **Badge in footer**: Swap `logo-lines-transparent.png` → `logo-box-transparent.png` + increase height to 64px
5. **Divider gold tabs**: Replace `brand-divider` span content with the gold-bar pattern shown above
