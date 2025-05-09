import React from "react";

const ResumePage = () => {
  return (
    <section id="resume" className="p-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Resume</h2>
      <div className="flex justify-center mb-4">
        <a
          href="/MOAResume_4.1.pdf"
          download
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <iframe
          src="/MOAResume_4.1.pdf"
          title="Resume"
          className="w-full h-[700px] border rounded"
        ></iframe>
      </div>
    </section>
  );
};

export default ResumePage;