
import React from "react";

const ProjectCard = ({ title, description, techStack, github, liveDemo, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
        <p className="text-gray-700 mb-3">{description}</p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Tech Stack:</strong> {techStack.join(", ")}
        </p>
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
