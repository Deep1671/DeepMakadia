import React, { useEffect, useRef } from "react";
import "./skills.css";

const technicalSkills = [
  { name: "Python", level: 90 },
  { name: "Pandas, Matplotlib & Seaborn", level: 85 },
  { name: "Database Management & SQL", level: 85 },
  { name: "AI/ML", level: 70 },
  { name: "Data Visualization", level: 85 },
  { name: "OOPS", level: 70 },
  { name: "Data Analysis", level: 90 },
  { name: "DSA", level: 60 },
  { name: "Problem Solving", level: 80 },
  { name: "Operating System(Ubuntu)", level: 70 },
  { name: "Project Management", level: 70 },
];

const softSkills = [
  { name: "Time Management", level: 90 },
  { name: "Team Coordination", level: 90 },
  { name: "Communication and Collaboration", level: 80 },
  { name: "Strategic Planning", level: 85 },
  { name: "Decision Making", level: 80 },
  { name: "Team Leadership", level: 90 },
  { name: "Budget Management", level: 80 },
  { name: "Resource Management", level: 80 }
];

const Skills = () => {
  const progressRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const bar = entry.target;
          const level = bar.dataset.level;

          if (entry.isIntersecting) {
            bar.style.width = `${level}%`;
          } else {
            bar.style.width = `0%`; // Reset when out of view
          }
        });
      },
      {
        threshold: 0.3, // Adjust as needed
      }
    );

    progressRefs.current.forEach(bar => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-heading text-center">
          <span role="img" aria-label="lightbulb">💡</span> My Skills
        </h2>

        <div className="skills-columns">
          {/* Technical Skills Column */}
          <div className="skills-column">
            <h5 className="section-heading2 text-center">My Technical Skills</h5>
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-box">
                <div className="d-flex justify-content-between">
                  <strong>{skill.name}</strong>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    data-level={skill.level}
                    style={{ width: "0%" }}
                    ref={el => (progressRefs.current[index] = el)}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills Column */}
          <div className="skills-column">
            <h5 className="section-heading2 text-center">My Soft Skills</h5>
            {softSkills.map((skill, index) => (
              <div key={index} className="skill-box">
                <div className="d-flex justify-content-between">
                  <strong>{skill.name}</strong>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    data-level={skill.level}
                    style={{ width: "0%" }}
                    ref={el => (progressRefs.current[index + technicalSkills.length] = el)}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
