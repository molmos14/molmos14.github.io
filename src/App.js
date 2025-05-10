import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage.js";
import ResumePage from "./components/ResumePage.js";
import AboutMe from "./components/AboutMe.js";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Manuel Olmos Antillón</h1>
            <nav className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/projects" className="hover:underline">Projects</Link>
              <Link to="/resume" className="hover:underline">Resume</Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>© 2025 Manuel Olmos. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
