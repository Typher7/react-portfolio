import React from "react";
import headshot from "../assets/headshot.jpg";
import TextType from "./TextType";

export default function Hero() {

  return (
    <section className="min-h-[60vh] flex items-center" id="hero">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <TextType
            text={["I am Kwame", "A web developer."]}
            className="text-4xl md:text-5xl font-extrabold mb-4"
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />

          <p className="text-lg text-slate-700 mb-6">
            I build accessible, performant web apps with React and Tailwind CSS.
          </p>
          <div className="flex gap-3">
            <a
              href="#projects"
              className="inline-block bg-sky-600 text-white px-4 py-2 rounded-md shadow hover:bg-sky-700"
            >
              See projects
            </a>
            <a
              href="#contact"
              className="inline-block border border-slate-300 px-4 py-2 rounded-md hover:bg-slate-50"
            >
              Contact me
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-end">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
            <img
              src={headshot}
              alt="Headshot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
