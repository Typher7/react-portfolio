import React from 'react'

export default function Header() {
  return (
    <section className="bg-white/60 backdrop-blur-md sticky top-0 z-30 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero">
          <div className="text-xl font-semibold">Kwame</div>
        </a>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="text-slate-700 hover:text-slate-900">Projects</a>
          <a href="#skills" className="text-slate-700 hover:text-slate-900">Skills</a>
          <a href="#about" className="text-slate-700 hover:text-slate-900">About</a>
          <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </section>
  )
}
