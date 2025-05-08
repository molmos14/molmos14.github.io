import React from "react";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of the project.",
    link: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of the project.",
    link: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 3",
    description: "A brief description of the project.",
    link: "https://github.com/yourusername/project3",
  },
];

const ProjectsPage = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;