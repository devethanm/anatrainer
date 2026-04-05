# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Product context

- **anatrainer** is a hiragana/katakana drill app: show kana, user types rōmaji, immediate success/error feedback, then the next prompt.
- **MVP** includes session customization (subset by table groups; include/exclude combination kana such as ヒョ, しゅ).
- **UX:** ultra-minimal, unintrusive, excellent on mobile and desktop; see the full spec for principles and non-goals.
- **Canonical product/design spec:** [`docs/DESIGN.md`](docs/DESIGN.md). Implement features against that document.

### Documentation maintenance

- When changing behavior that affects users, UX, or MVP scope, **update `docs/DESIGN.md` in the same change** (or update the design doc first).
- When **`docs/DESIGN.md` changes**, reconcile **`README.md`**, **`CLAUDE.md`**, and **`CURSOR.md`** so summaries and pointers stay accurate.

## Commands

### Development
```bash
composer run dev      # Start full dev environment (Laravel server, queue, logs, Vite HMR)
composer run setup    # Initial setup: install deps, migrate, build assets
```

### Testing
```bash
composer run test     # Run all tests with linting (Pint + Pest)
php artisan test      # Run Pest tests only
php artisan test --filter=AuthenticationTest   # Run a single test file
php artisan test --filter="user can login"     # Run a single test by name
```

### Code Quality
```bash
./vendor/bin/pint             # PHP code style fixer
npm run lint                  # ESLint (auto-fix)
npm run format                # Prettier (resources/ directory)
npm run types:check           # TypeScript type check
```

### Build
```bash
npm run build         # Frontend production build
npm run build:ssr     # Frontend + SSR build
```

## Architecture

**Stack:** Laravel 13 + Inertia.js 3 + React 19 + Tailwind CSS 4. PHP renders the initial HTML shell via `resources/views/app.blade.php`; all UI is React served through Inertia (no separate API layer).

### Backend

- `app/Actions/Fortify/` — user creation and password reset logic (called by Laravel Fortify)
- `app/Concerns/` — shared validation traits (`PasswordValidationRules`, `ProfileValidationRules`) used by form requests and Fortify actions
- `app/Http/Controllers/Settings/` — `ProfileController` and `SecurityController` for the settings pages
- `app/Http/Requests/Settings/` — form request classes for all settings mutations
- `app/Http/Middleware/HandleInertiaRequests` — shares global props (auth user, app name, sidebar state) with every Inertia response
- `routes/settings.php` — settings routes (included by `web.php`)

Authentication is handled entirely by **Laravel Fortify** (`config/fortify.php`). Features enabled: registration, password reset, email verification, 2FA with confirmation.

### Trainer (planned)

Kana practice UI and routes are not implemented yet. When added, document controller/page paths here. **MVP behavior and UX:** [`docs/DESIGN.md`](docs/DESIGN.md) (core flow and session customization).

### Frontend

- `resources/js/pages/` — Inertia page components. Layouts are assigned automatically in `app.tsx` based on route prefix (`/auth/*` → `AuthLayout`, `/settings/*` → `SettingsLayout`, else → `AppLayout`)
- `resources/js/components/ui/` — Radix UI-based primitives (button, card, input, dialog, etc.)
- `resources/js/layouts/` — `AppLayout` (sidebar nav), `AuthLayout` (minimal), `SettingsLayout` (settings sidebar)

### Testing

- Tests use **in-memory SQLite** (`DB_CONNECTION=sqlite`, `DB_DATABASE=:memory:`)
- `tests/Pest.php` — global Pest config; `tests/TestCase.php` extends Laravel's test case
- Feature tests live in `tests/Feature/Auth/` and `tests/Feature/Settings/`
- Use `RefreshDatabase` trait (already on `TestCase`) — no manual DB cleanup needed
