# Contributing to TherapyConnect

Thank you for considering contributing! We welcome improvements, bug fixes, and new features.

## Branching Model

- **main**: Production-ready, always deployable.
- **dev**: Active development, feature merges, deploy previews.
- **feature/xyz**: For new features or fixes. Branch off `dev`.

## Pull Requests

- Target `dev` for new features/bugfixes.
- Keep PRs focused and small if possible.
- Add a clear description and reference related issues.
- Ensure all checks (lint, test, build) pass before requesting review.

## Code Style

- Use TypeScript and React (TSX).
- Follow ESLint and Prettier configs in the repo.
- Prefer functional components and hooks.
- Use semantic HTML and accessible markup.
- Use TailwindCSS for styling.

## Commits

- Use clear, descriptive commit messages.
- Reference issues where relevant.

## Testing

- Add/maintain unit tests (Vitest) for all logic/components.
- Add/maintain E2E tests (Playwright) for flows.
- Run `npm run test` and `npm run lint` before pushing.

## Issues

- Use GitHub Issues for bugs, enhancements, and questions.
- Provide as much detail as possible.

---

Thank you for helping make TherapyConnect better!
