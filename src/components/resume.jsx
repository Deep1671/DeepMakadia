import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 bg-gray-50 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">
          Download My Resume
        </h2>
        <p className="mb-8 text-gray-700">
          Feel free to download my latest resume for more details on my skills and experience.
        </p>
        <a
          href="/Deep_Resume.pdf" // Put your resume PDF in public/resume folder
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
