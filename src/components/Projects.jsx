import React from "react";
import Card from "./Card";
import projectLogo1 from "../assets/project-logo.png";
// import projectLogo2 from "../assets/project-logo.png";
// import projectLogo3 from "../assets/project-ogo.png";

const projects = [
  {
    id: 1,
    title: "Project One",
    desc: "A short description of the project.",
    link: "#projects",
    image: projectLogo1,
    imageMobile: projectLogo1,
  },
  {
    id: 2,
    title: "Project Two",
    desc: "A short description of the project.",
    link: "#projects",
    image: projectLogo1,
    imageMobile: projectLogo1,
  },
  {
    id: 3,
    title: "Project Three",
    desc: "A short description of the project.",
    link: "#projects",
    image: projectLogo1,
    imageMobile: projectLogo1,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
