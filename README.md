**Portfolio Website**
A personal portfolio built with React and Vite. Includes responsive sections for About, Skills, Projects and a Contact form.
**Quick Start**
Prerequisites: Node.js (16+ recommended)
Install dependencies and run the dev server:
```bash
npm install
npm run dev
```
Build for production and preview locally:
```bash
npm run build
npm run preview
```
**Features**
- **Responsive layout:** mobile-first responsive UI.
- **Sections:** About, Skills, Projects, Contact, Footer.
- **Contact form:** integrates with EmailJS (optional).
- **Fast dev feedback:** Vite HMR for quick edits.
**Tech Stack**
- **React** — UI library.
- **Vite** — build tool and dev server.
- **Tailwind CSS** (via `index.css`) — utility-first styling.
- **PostCSS** — CSS processing.
**Project Structure (key files)**
- [src/App.jsx](src/App.jsx)
- [src/main.jsx](src/main.jsx)
- [src/index.css](src/index.css)
- [src/components/About.jsx](src/components/About.jsx)
- [src/components/Skills.jsx](src/components/Skills.jsx)
- [src/components/Projects.jsx](src/components/Projects.jsx)
- [src/components/Contact.jsx](src/components/Contact.jsx)
- [src/components/Header.jsx](src/components/Header.jsx)
- [src/components/Footer.jsx](src/components/Footer.jsx)
**Contact form / EmailJS**
The contact form in [src/components/Contact.jsx](src/components/Contact.jsx) uses EmailJS. If you want the form to send emails:
1. Install the EmailJS client:
```bash
npm install @emailjs/browser
```
2. Add your EmailJS service/template/public key where the component expects them (or load them from environment variables). Check `src/components/Contact.jsx` for placeholders and replace with your values.
**Development notes & troubleshooting**
- If Vite reports a missing import for `@emailjs/browser`, install it (see above) or remove the EmailJS usage in the contact component.
- If you see JSX parse errors, check for unterminated strings or mismatched quotes in components (the dev server will show file and line numbers).
**Deploy**
You can deploy this site to Vercel, Netlify, or any static host that supports a built folder. Typical flow:
```bash
npm run build
# deploy the `dist` (or `build`) directory from your host provider
```

**Contact**
- For questions about this repo, check the `Contact` section in the app or open an issue.
