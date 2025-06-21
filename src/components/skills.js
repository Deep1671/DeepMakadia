import React from "react";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Python", level: 80 },
  { name: "Data Analysis", level: 85 },
  { name: "Machine Learning", level: 70 },
  { name: "Tailwind CSS", level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-black text-white min-h-screen text-center ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto text-align-center">
          {skills.map(({ name, level }) => (
            <div key={name}>
              <h3 className="text-lg font-semibold mb-2 text-white">{name}</h3>
              <div className="w-full bg-gray-600 rounded-full h-5">
                <div
                  className="bg-blue-600 h-5 rounded-full"
                  style={{ width: `${level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
