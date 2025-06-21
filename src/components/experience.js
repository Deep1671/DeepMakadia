import React from "react";

const experiences = [
  {
    role: "Treasurer",
    company: "ACM Student Chapter, Nirma University",
    duration: "Jan 2025 - Present",
    description:
      "Managed financial records and budgeting for club events and workshops.",
  },
  {
    role: "Business Operations Intern",
    company: "IBM",
    duration: "Summer 2024",
    description:
      "Worked on streamlining operations and data analysis to improve team efficiency.",
  },
  {
    role: "Team Lead",
    company: "BrainBoost Project",
    duration: "Aug 2024 - Dec 2024",
    description:
      "Led a team to develop an AI-powered adaptive learning platform for children.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-600 text-center">
          Experience
        </h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map(({ role, company, duration, description }, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">{role}</h3>
              <p className="text-sm italic text-gray-600">{company} | {duration}</p>
              <p className="mt-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
