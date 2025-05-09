import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProjectsPage from "./components/ProjectsPage.js";
import ResumePage from "./components/ResumePage.js";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Manuel Olmos</h1>
            <nav className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/projects" className="hover:underline">Projects</Link>
              <Link to="/resume" className="hover:underline">Resume</Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <section className="p-6 text-center">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className="text-gray-700 max-w-xl mx-auto">
                    I'm a software developer passionate about building user-friendly applications,
                    solving real-world problems, and leveraging modern AI tools like LLaMA and GPT.
                    I enjoy working in collaborative teams and leading innovation-driven projects.
                  </p>
                </section>
              }
            />
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
