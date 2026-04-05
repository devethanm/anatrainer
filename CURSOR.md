# CURSOR.md

Guidance for Cursor agents working in this repository.

## Product

**anatrainer** — practice hiragana and katakana by typing rōmaji; minimal UI; mobile- and desktop-friendly. Session customization includes table subsets and optional inclusion of combination kana.

**Authoritative product and design specification:** [`docs/DESIGN.md`](docs/DESIGN.md). Implement and review UX against that file.

**Stack:** Laravel, Inertia.js, React, Tailwind CSS, Vite (see [`CLAUDE.md`](CLAUDE.md) for commands and codebase layout).

## Documentation maintenance

- When changing user-facing behavior or MVP scope, **update `docs/DESIGN.md`** in the same change (or first).
- When **`docs/DESIGN.md` changes**, reconcile **`README.md`**, **`CLAUDE.md`**, and **`CURSOR.md`** so short summaries and links stay accurate.
