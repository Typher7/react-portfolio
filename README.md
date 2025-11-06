# Personal Portfolio Website


A modern, responsive portfolio website built with React, Vite, and TailwindCSS. This portfolio showcases my projects, skills, and professional experience with smooth animations powered by GSAP.

## 🚀 Features

- Modern and responsive design
- Interactive UI animations using GSAP
- Smooth scrolling and text animations
- Project showcase section
- Skills and expertise display
- Contact form

## 🛠️ Technologies

- **React** - UI framework
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **GSAP** - Professional-grade animation library
- **Lucide React** - Modern icon set

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (bundled with Node.js)

### Installation & development (Windows PowerShell)

1. Clone the repository and enter the folder:

```powershell
git clone https://github.com/Typher7/react-portfolio.git
cd "react-portfolio"
```

2. Install dependencies:

```powershell
npm install
```

3. Start the development server (Vite):

```powershell
npm run dev
```

4. Build for production:

```powershell
npm run build
```

5. Preview the production build locally:

```powershell
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/         # Static assets like images (includes `projectlogo.png` used by the Projects section)
├── components/     # React components
│   ├── About.jsx
│   ├── Card.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── SplitText.jsx
│   └── TextType.jsx
└── lib/           # Utility functions and helpers
    └── utils.js
```

## 🎨 Customization

The portfolio can be customized by:

- Modifying TailwindCSS configuration in `tailwind.config.js`
- Updating component content in the `src/components` directory
- Adding or tweaking animations using GSAP in components
- Editing helper utilities in `src/lib/utils.js`

## 📝 License

This project is open source.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

Enoch Atuahene - enatua01@wsc.edu
Project Link: https://github.com/Typher7/react-portfolio

---

Notes about recent changes
- All project entries in `src/components/Projects.jsx` now use the local image asset `src/assets/projectlogo.png` instead of remote placeholders. This makes the app work offline and avoids external hotlinking.

Troubleshooting
- If you run into missing asset errors, confirm `src/assets/projectlogo.png` exists. If you see build errors related to Node or Vite, make sure Node.js is up-to-date and run `npm install` again.