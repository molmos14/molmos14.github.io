import React from "react";
import "./App.css";

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

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm a software developer passionate about building
            user-friendly applications and solving challenging problems.
          </p>
        </section>
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
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: your.email@example.com</p>
          <p>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              Your Profile
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              yourusername
            </a>
          </p>
        </section>
      </main>
      <footer>
        <p>© 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;