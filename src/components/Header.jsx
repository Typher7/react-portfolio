import React from "react";
import PillNav from "./PillNav";
import TrueFocus from "./TrueFocus";
import logo from "../assets/portfolio.png";

export default function Header() {
  return (
    <section className="bg-white/60 backdrop-blur-md sticky top-0 z-30 shadow-sm w-full">
      <div className="max-w-5xl mx-auto px-2 py-2 grid grid-cols-3 items-center w-full min-w-0">
        <div className="min-w-0">
          <a href="#hero" className="flex-shrink-0 min-w-0">
            <div className="text-sm font-semibold whitespace-normal">
              <TrueFocus
                sentence="Your Name"
                manualMode={false}
                blurAmount={5}
                borderColor="blue"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </div>
            {/* <div className="text-xl font-semibold">Your Name</div> */}
          </a>
        </div>
        <div></div>
        <div className="flex-shrink-0 min-w-0 flex justify-end">
          <PillNav
            logo={logo}
            logoAlt="Company Logo"
            items={[
              { label: "Projects", href: "#projects" },
              { label: "Skills", href: "#skills" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#f0f0f0"
            pillColor="#fff"
            hoveredPillTextColor="blue"
            pillTextColor="#000000"
          />
        </div>
        {/* <nav className="space-x-4 text-sm">
          <a href="#projects" className="text-slate-700 hover:text-blue-700">Projects</a>
          <a href="#skills" className="text-slate-700 hover:text-blue-700">Skills</a>
          <a href="#about" className="text-slate-700 hover:text-blue-700">About</a>
          <a href="#contact" className="text-slate-700 hover:text-blue-700">Contact</a>
        </nav> */}
      </div>
    </section>
  );
}
