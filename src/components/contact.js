import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-600">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Interested in collaborating or want to say hello? Feel free to reach out to me.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href="mailto:deepmakadia20@gmail.com"
            className="text-lg text-blue-700 hover:underline"
          >
            📧 deepmakadia20@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/deep-makadia2012"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-700 hover:underline"
          >
            🔗 LinkedIn Profile
          </a>
          <a
            href="https://github.com/Deep1671"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-700 hover:underline"
          >
            💻 GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
