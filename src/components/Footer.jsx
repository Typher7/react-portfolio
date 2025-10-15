import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} Your Name — Built with React & Tailwind</div>
    </footer>
  )
}
