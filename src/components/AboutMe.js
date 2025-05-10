import React from "react";

const AboutMe = () => {
  return (
    <section id="aboutme" className="p-6 text-center bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6 justify-center">
        I am a sixth-semester student at the Instituto Tecnológico de Estudios
        Superiores de Monterrey, passionate about technology and programming. I
        excel in teamwork and collaborative projects, maintaining a high
        performance under pressure. My ease of interacting with new colleagues
        allows me to integrate seamlessly into any team. I am creative and
        organized, capable of leading successful projects. My enthusiasm and
        desire to learn are always greater. I love the idea of using programming
        to optimize and automate solutions for the benefit of the project.
      </p>
      <div className="flex justify-center gap-6 text-gray-600 text-2xl">
        {/* GitHub */}
        <a
          href="https://github.com/molmos14"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.387.6.113.82-.262.82-.582 0-.288-.01-1.052-.015-2.065-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.73.082-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.932 0-1.31.467-2.381 1.236-3.221-.124-.302-.536-1.52.117-3.166 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405 11.5 11.5 0 0 1 3 .405c2.29-1.552 3.297-1.23 3.297-1.23.655 1.646.243 2.864.12 3.166.77.84 1.236 1.911 1.236 3.221 0 4.61-2.805 5.628-5.475 5.922.43.37.823 1.096.823 2.21 0 1.595-.015 2.878-.015 3.27 0 .323.217.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://mx.linkedin.com/in/manuelolmos?trk=people-guest_people_search-card"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.2c-1 0-1.8-.8-1.8-1.8S5.5 4.2 6.5 4.2s1.8.8 1.8 1.8c0 1-.8 1.8-1.8 1.8zm13.5 11.2h-3v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.8v5.6h-3s.1-9.1 0-10h3v1.4c.4-.7 1.3-1.6 3-1.6 2.2 0 3.8 1.4 3.8 4.3v5.9z" />
          </svg>
        </a>

        {/* Email */}
        <button
          onClick={() => {
            navigator.clipboard.writeText("manuel.olmos004@gmail.com");
            alert("Email copied to clipboard!");
          }}
          className="hover:text-red-600"
          aria-label="Email"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 13.065L.012 6h23.976L12 13.065zM0 6.992V18h24V6.992L12 14.061 0 6.992z" />
          </svg>
        </button>

        {/* Phone */}
        <button
          onClick={() => {
            navigator.clipboard.writeText("+524141403437");
            alert("Phone number copied to clipboard!");
          }}
          className="hover:text-green-600"
          aria-label="Phone"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2.002 2.002 0 0 1-2.18 1.995C10.626 21.348 2.652 13.374.086 4.18A2.002 2.002 0 0 1 2.08 2h3a2 2 0 0 1 2 1.72c.2 1.38.63 2.71 1.28 3.94a2 2 0 0 1-.45 2.3l-1.27 1.27a16.2 16.2 0 0 0 7.29 7.29l1.27-1.27a2 2 0 0 1 2.3-.45c1.23.65 2.56 1.07 3.94 1.28A2 2 0 0 1 22 16.92z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
