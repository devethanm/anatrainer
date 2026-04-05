# anatrainer

**anatrainer** is a minimal web app for practicing **hiragana** and **katakana**: a large character appears on screen, you type the **rōmaji** (e.g. が → `ga`), and you get immediate feedback before moving on. You can tailor each session—by row/column-style groups and by including or excluding **combination** kana (e.g. ヒョ, しゅ)—so practice stays focused.

The experience is intentionally **calm, small, and unobtrusive**, and it should feel great on **phone and desktop**. It is inspired by the classic drill site [djtkana.com](https://djtkana.com), with a modern stack and room for quality-of-life improvements over time.

**Stack:** Laravel, **Inertia.js**, React, Tailwind CSS, Vite.

## Product and design specification

All product vision, MVP scope, UX principles, and how docs stay in sync live in **[docs/DESIGN.md](docs/DESIGN.md)**. Start there when implementing features or changing behavior.

## Development

Initial setup, day-to-day commands, tests, and code layout are documented in **[CLAUDE.md](CLAUDE.md)** (including `composer run dev`, `composer run setup`, and testing).

## Contributing

When you change user-facing behavior or MVP scope, update **`docs/DESIGN.md`** in the same change (or first), then keep **`README.md`**, **`CLAUDE.md`**, and **`CURSOR.md`** summaries consistent with the spec.
