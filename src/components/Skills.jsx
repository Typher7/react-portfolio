import React from "react";

const skills = [
  "React",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Accessibility",
  "Testing",
  "Node.js",
  "Git",
  "Responsive Design",
  "UI/UX Design",
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
