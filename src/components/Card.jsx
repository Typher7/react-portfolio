import React from "react";

export default function Card({ project }) {
  if (!project) return null

  return (
    <article className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-slate-600 mb-4">{project.desc}</p>
      <a href={project.link} className="text-sky-600 hover:underline text-sm">View</a>
    </article>
  );
}
