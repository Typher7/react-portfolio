import React from "react";
import headshot from "../assets/headshot.png";
import ProfileCard from "./ProfileCard";
import TextType from "./TextType";
import TrueFocus from "./TrueFocus";

export default function Hero() {
  return (
    <section
      className="min-h-[60vh] flex flex-col items-center pt-32"
      id="hero"
    >
      <div className="w-full justify-center pt-48 mb-6 block md:hidden">
        <TrueFocus
          sentence="Your Name"
          manualMode={false}
          blurAmount={5}
          borderColor="blue"
          glowColor="rgba(0, 0, 255, 0.6)"
          animationDuration={1}
          pauseBetweenAnimations={1}
        />
      </div>
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <TextType
            text={["I am 'Your Name'", "I am an Aspiring Software Engineer."]}
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
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-400"
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
          <div className="">
            <ProfileCard
              name="Your Name"
              title="Aspiring Software Engineer"
              handle="your_handle"
              status="Online"
              contactText="Contact Me"
              avatarUrl={headshot}
              iconUrl=""
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                  window.location.hash = "#contact";
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
