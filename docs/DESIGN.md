# anatrainer — product and design specification

**Status:** living document. This file is the **authoritative** source for product intent, UX, and MVP scope. Other docs (`README.md`, `CLAUDE.md`, `CURSOR.md`) should stay aligned with it; see the maintenance rule in those files.

---

## Product identity

**anatrainer** (“ana” + trainer) is a web application for learning and practicing **hiragana** and **katakana** by typing **rōmaji** equivalents.

It is inspired by the classic practice site [djtkana.com](https://djtkana.com): similar pedagogical idea (focused drills, configurable subsets), but **not** a pixel-for-pixel clone. The goal is to **modernize, refine, and restyle** the experience and add **quality-of-life** improvements over time.

**Audience:** learners who want a calm, fast drill surface on **phone or desktop**, without unnecessary chrome.

---

## Design principles

- **Ultra-minimal** — only what the practice session needs; no decorative noise.
- **Unintrusive** — feedback is clear but brief; the character and input stay central.
- **Beautiful through restraint** — typography, spacing, and motion used sparingly and intentionally.
- **Mobile and desktop** — touch-friendly targets, readable type, layouts that work in narrow viewports.
- **Accessibility baseline** — sufficient contrast for text and feedback states; visible focus for keyboard users; respect `prefers-reduced-motion` for non-essential animation.

---

## Core user flow (MVP)

1. A **Japanese character** (single kana or combination, per session rules) appears **large** and centered (or otherwise visually primary).
2. The user types the correct **rōmaji** in a **small** text field (e.g. が → `ga`).
3. **Correct input**
   - Brief **success** affordance (e.g. green flash or equivalent).
   - Advance to the **next** character in the current session.
4. **Incorrect input**
   - Brief **error** affordance (e.g. red flash or equivalent).
   - Show the **correct rōmaji** so the user can learn before continuing.
5. The session **continues** according to the selected pool (random or shuffled order—implementation detail; document here if it affects UX).

**Open implementation details** (decide in code, then update this section if user-visible):

- Whether to auto-advance on correct answer after a short delay vs. requiring Enter again.
- Normalization rules for rōmaji (e.g. `shi` vs. `si`, `fu` vs. `hu`)—should match learner expectations and be consistent.

---

## Session customization (MVP)

Before or during a session, the user can **narrow what is practiced**:

- **Script:** hiragana only, katakana only, or **both** (mixed pool).
- **Column / vowel groups:** practice subsets aligned with how kana tables are taught (e.g. あ-row, か-row, …), similar in spirit to djtkana’s column toggles—not necessarily identical grouping UI.
- **Combinations (yōon / small kana):** explicit **include / exclude** for combination forms (e.g. ヒョ, しゅ, にょ).

**Dakuten / handakuten** (゛゜) and **basic vs. voiced** groupings may follow djtkana-style IA or a simplified layout; if the UX diverges, record the decision in **Decision log** below.

---

## Non-goals (MVP)

The following are **out of scope for the first shippable trainer** unless explicitly moved into MVP later:

- Stroke-order diagrams or writing practice.
- Multiple font previews as a core requirement (djtkana-style font checkboxes).
- Audio / “play sound” (can move to **Backlog** as a QoL item).
- User accounts required to practice (the Laravel app may ship with auth for other pages; the **trainer MVP** should work without forcing login unless product direction changes).

---

## Backlog (post-MVP ideas)

Quality-of-life and depth, to prioritize as the product evolves:

- Optional **audio** per character.
- **Statistics** or streaks (possibly tied to auth later).
- **Keyboard shortcuts** (e.g. skip, repeat).
- **Extended rōmaji** policy documentation in-app (tooltip or help).
- Deeper **a11y** pass (screen reader labels for the current prompt, live regions for feedback).

---

## Technical constraints

- **Backend:** Laravel (current app: Laravel 13).
- **Frontend:** React **via Inertia.js** — server-driven routing and props; UI in React with Tailwind CSS. **Not** a separate SPA-only API for the MVP unless the product explicitly adds one later.
- **Build:** Vite for frontend assets.

Trainer-specific routes, controllers, and page paths should be documented in `CLAUDE.md` once they exist; this document stays **product and UX** focused.

---

## Reference imagery

For a **stable, repo-tracked** visual reference (e.g. djtkana-inspired layout), store screenshots under **`docs/assets/`** and link them from here. Avoid relying on editor-only asset paths that are not committed to git.

---

## Decision log

| Date       | Decision |
|-----------|----------|
| 2026-04-04 | Established `docs/DESIGN.md` as canonical product/design spec; MVP defined as rōmaji drill + subset selection including combinations. |
