import React from "react";
import "./About.css"; // Make sure to link the updated CSS file

const About = () => {
  return (
    <div className="about-section">
     <div className="card-glow">
      <div className="about-container">
        <h2 className="about-title">👨‍💻 About Me</h2>
        <p className="about-text">
          Hi, I’m <span className="about-highlight">Deep Makadia</span> — a passionate and driven Computer Science Engineering student at <span className="about-highlight">Nirma University</span>, specializing in <span className="about-highlight">Data Science</span> and <span className="about-highlight">Web Development</span>. I’m currently pursuing a minor in Marketing at IMNU, which enhances my understanding of how technology meets consumer behavior and business strategies.
        </p>
        <p className="about-text">
          Over the past few years, I’ve built a solid foundation in both technical and analytical skills, solving over <span className="about-highlight">500+ coding problems</span> on LeetCode and Codeforces. My key projects include <span className="about-highlight">BrainBoost</span>, an AI-powered learning system, a <span className="about-highlight">Malware Classification model</span> (Mined Hackathon), and insightful analyses of <span className="about-highlight">Netflix Titles</span>, <span className="about-highlight">Amazon Sales</span>, and <span className="about-highlight">E-commerce Customer Behavior</span>.
        </p>
        <p className="about-text">
          Professionally, I’m gaining hands-on experience through internships in <span className="about-highlight">Data Science</span> (Innobyte Technologies) and <span className="about-highlight">React Web Development</span> (Brainybeam Technologies). I also serve as <span className="about-highlight">Treasurer</span> of the ACM Student Chapter, managing finances and organizing expert sessions. 
         </p>
         <p className="about-text">
          Outside of tech, I’m a huge cricket fan, and I love exploring new tools, trends, and ideas that challenge me to grow.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
