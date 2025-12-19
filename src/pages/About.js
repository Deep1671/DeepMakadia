import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="card-glow">
        <div className="about-container">
          <h2 className="about-title">👨‍💻 About Me</h2>

          <p className="about-intro">
            I’m a <span>Computer Science student specializing in Data Analytics</span>,
            focused on turning real-world, messy data into insights that drive
            decisions — not decorative dashboards.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>What I Work With</h3>
              <p>
                I use <strong>Python (Pandas, NumPy)</strong> for data cleaning,
                transformation, and exploratory data analysis, and
                <strong> Power BI</strong> to build interactive dashboards that
                clearly communicate insights to stakeholders.
              </p>
            </div>

            <div className="about-card">
              <h3>Industry Experience</h3>
              <p>
                During my internship at <strong>Innobyte Technologies</strong>,
                I worked with business datasets to identify trends,
                inefficiencies, and performance gaps, delivering dashboards
                that enabled KPI tracking and data-backed decisions.
              </p>
            </div>

            <div className="about-card">
              <h3>How I Think</h3>
              <p>
                I treat data analysis as a structured process: understand the
                business objective, convert it into measurable questions,
                explore the data for patterns and anomalies, and communicate
                insights clearly.
              </p>
            </div>

            <div className="about-card">
              <h3>Projects & Growth</h3>
              <p>
                I’ve completed analytics projects involving
                <strong> sales analysis, job salary trends,</strong> and
                large-scale EDA, strengthening my ability to validate
                assumptions and present insights that drive action.
              </p>
            </div>
          </div>

          <p className="about-closing">
            I am actively seeking a <span>Data Analyst</span> role where depth of
            analysis, clarity of communication, and real business impact matter
            more than vanity metrics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
