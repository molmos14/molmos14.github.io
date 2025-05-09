import React, { useEffect, useRef } from "react";

const projects = [
  {
    title: "Server Llama3",
    description: "A server implementation for Llama3.",
    link: "https://github.com/molmos14/Server-Llama3",
  },
  {
    title: "Zazil App – Fundación Todas Brillamos",
    description: "Android app using LLaMA 3 to answer menstruation-related questions via chatbot.",
    link: "",
  },
  {
    title: "Administrative Web Platform for Verqor",
    description: "Web platform with Unity-based game integration for real-time analytics.",
    link: "",
  },
  {
    title: "HackMx 5 – Dacompass Contest Winner",
    description: "Mental health app using Django, GPT-4 API, and Plotly to visualize student wellness.",
    link: "",
  },
  {
    title: "ICPC Programming Contest",
    description: "Participated in a national programming contest solving advanced algorithmic problems.",
    link: "",
  },
  {
    title: "Personal Medical History App",
    description: "App to store and access medical history for elderly patients securely.",
    link: "",
  },
];

const ProjectsPage = () => {
  const scrollRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section id="projects" className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Projects</h2>
      <div className="relative">
        {/* Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-200"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-200"
        >
          →
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 px-6 py-4 scroll-smooth"
        >
          {projects.map((project, index) => (
            <div
              className="min-w-[300px] bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow flex-shrink-0"
              key={index}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              ) : (
                <p className="text-gray-500 italic">Repository link not available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;