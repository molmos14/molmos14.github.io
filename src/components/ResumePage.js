import React from "react";
import { Viewer, SpecialZoomLevel, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ResumePage = () => {
  // Initialize the default layout plugin
  const defaultLayout = defaultLayoutPlugin();

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
      <div className="w-full max-w-4xl mx-auto h-[600px] border">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl="/MOAResume_4.1.pdf"
            plugins={[defaultLayout]}
            defaultScale={SpecialZoomLevel.PageWidth} // Fit the PDF to the page width
          />
        </Worker>
      </div>
    </section>
  );
};

export default ResumePage;