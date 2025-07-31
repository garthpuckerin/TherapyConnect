# TherapyConnect

A modern, responsive therapy website for solo practitioners. Includes online calendar scheduling, secure contact form, and a calming, accessible design.

## Features

- 5 pages: Home, About, Services, Book a Session, Contact
- Online booking via Calendly (iframe)
- Secure contact form (Netlify Forms or Formspree)
- Mobile-first, accessible, calming color palette
- Built with React (TypeScript) and TailwindCSS
- Unit and E2E testing (Vitest, Playwright)
- CI/CD via GitHub Actions
- Ready for Vercel or Netlify deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Linting & Formatting

```bash
npm run lint
npm run format
```

### Testing

```bash
npm run test
npm run test:ui
npm run test:coverage
```

### Build

```bash
npm run build
```

### Environment Variables

See `.env.example` for all required environment variables.

### Deployment

- **Vercel:** Connect your repo and import. No extra config needed.
- **Netlify:** Add site, set build command to `npm run build` and publish directory to `dist/`.

## Folder Structure

```
/repo-root
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── tests/
├── .env.example
├── .gitignore
├── README.md
├── LICENSE
├── tsconfig.json
├── tailwind.config.js
├── package.json
```

## License

MIT
