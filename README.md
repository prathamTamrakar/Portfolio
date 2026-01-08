# Portfolio Website
A personal portfolio website built with React and Vite, featuring responsive design with sections for About, Skills, Projects, and a functional Contact form.
## Quick Start
### Prerequisites
- Node.js 16+ (recommended)
### Installation & Development
```bash
npm install
npm run dev
```
The app will start on `http://localhost:5173`
### Build for Production
```bash
npm run build
npm run preview
```
## Features
- **Responsive Design** — Mobile-first, works seamlessly on all devices
- **Fast Development** — Vite with HMR for instant updates
- **Multiple Sections** — About, Skills, Projects, Contact, and Footer
- **Contact Form** — Integrated EmailJS support (optional)
- **Modern Styling** — Tailwind CSS for utility-first styling
## Tech Stack
- **React** — UI library for interactive components
- **Vite** — Lightning-fast build tool and dev server
- **Tailwind CSS** — Utility-first CSS framework
- **PostCSS** — CSS transformation tool
- **EmailJS** — Email sending service (optional)
## Project Structure
```
src/
├── App.jsx                    # Main application component
├── main.jsx                   # Entry point
├── index.css                  # Global styles
└── components/
    ├── Header.jsx            # Navigation header
    ├── About.jsx             # About section
    ├── Skills.jsx            # Skills showcase
    ├── Projects.jsx          # Projects portfolio
    ├── Contact.jsx           # Contact form
    └── Footer.jsx            # Footer
```
## Setting Up EmailJS (Optional)
The Contact form can send emails via EmailJS:
1. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```
2. **Configure EmailJS:**
   - Sign up at [emailjs.com](https://emailjs.com)
   - Get your Service ID, Template ID, and Public Key
   - Add them to `src/components/Contact.jsx`
3. **Test the form** — Submit a message to verify it works
## Development & Troubleshooting
### Common Issues
**Missing `@emailjs/browser` import:**
- Run `npm install @emailjs/browser`
- Or remove the import if you don't need email functionality
**JSX parse errors:**
- Check for unterminated strings or mismatched quotes
- Vite dev server shows exact file and line number
**Port already in use:**
- Vite will automatically use the next available port
- Or manually specify: `vite --port 3000`
## Building & Deployment
### Build the project:
```bash
npm run build
```
### Deploy to:
- **Vercel** — Push to GitHub, connect via Vercel dashboard
- **Netlify** — Push to GitHub, connect via Netlify dashboard
- **GitHub Pages** — Configure build settings and branch
All assets go into the `dist/` folder after building.
## Contributing
Contributions are welcome! To improve the portfolio:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
## License
This project is open source and available under the MIT License. See `LICENSE` file for details.
## Support
- **Issues?** Open a GitHub issue
- **Questions?** Use the Contact form in the app or email directly
- **Feedback?** Suggestions welcome!
---
**Made with ❤️ by Pratham Tamrakar**
