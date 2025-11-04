import React from "react";
import SpotlightCard from "./SpotlightCard";

export default function Card({ project }) {
  if (!project) return null;

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSrc = width < 768 ? project.imageMobile || project.image : project.image;

  return (
    <div>
      {/* <article className="p-4 bg-white rounded-lg shadow">
        <h3 className="font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-slate-600 mb-4">{project.desc}</p>
        <a href={project.link} className="text-sky-600 hover:underline text-sm">View</a>
      </article> */}
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(29, 102, 237, 0.2)"
      >
        <h3 className="font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-slate-600 mb-4">{project.desc}</p>
        {project.image && (
          <div className="mb-4">
            <img
              src={imageSrc}
              alt={project.title || "Project image"}
              className="w-full h-full object-cover rounded"
              loading="lazy"
            />
          </div>
        )}
        <a href={project.link} className="text-sky-600 hover:underline text-sm">
          View
        </a>
      </SpotlightCard>
    </div>
  );
}
