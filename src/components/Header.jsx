import React from "react";
import PillNav from "./PillNav";
import logo from "../assets/portfolio.png";

export default function Header() {
  return (
    <section
      id="header"
      className="bg-white/60 backdrop-blur-md sticky top-0 z-30 shadow-sm w-full"
    >
      <div className="max-w-5xl mx-auto px-2 flex items-center justify-center w-full min-w-0">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: "Projects", href: "#projects" },
            { label: "Skills", href: "#skills" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
          ]}
          activeHref="#header"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#f0f0f0"
          pillColor="#fff"
          hoveredPillTextColor="blue"
          pillTextColor="#000000"
        />
      </div>
    </section>
  );
}
