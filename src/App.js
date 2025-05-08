import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ProjectsPage from "./components/ProjectsPage.js";
import ResumePage from "./components/ResumePage.js";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Portfolio</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <section id="about">
                  <h2>About Me</h2>
                  <p>
                    Hello! I'm a software developer passionate about building
                    user-friendly applications and solving challenging problems.
                  </p>
                </section>
              }
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </main>
        <footer>
          <p>© 2023 Your Name. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;