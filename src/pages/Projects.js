import React from "react";
import projectData from "../data/Projects";

const Projects = () => {
  return (
    <div className="container py-5 text-white">
      <h2 className="mb-4 text-center">My Projects</h2>
      <div className="row">
        {projectData.map((project, index) => (
          <div key={index} className="col-md-4 col-lg-4 mb-4">
            <div className="card bg-dark text-white shadow" style={{ height: "100%", width:"100%" }}>
              <img
                src={project.image}
                className="card-img-top img-fluid"
                alt={project.title}
                style={{ width: "500px", height: "250px", objectFit: "" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-4">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <p className="mt-4 mb-4">
                  <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                </p>
                {project.refrence && (
                  <p className="mb-4">
                    <strong>Reference:</strong> {project.refrence}
                  </p>
                )}
              </div>
              <div className="card-footer bg-transparent border-top-0 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    className="btn btn-outline-light btn-sm me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    className="btn btn-outline-light btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
