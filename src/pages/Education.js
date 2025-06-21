import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education-section justify-content-center">
      <div className="container">
        <br></br>
       <h2 className="education-heading text-center">
  <span role="img" aria-label="graduation">🎓</span> EDUCATION
</h2>
        <br></br>
        <div className="education-card">
          <div className="edu-header">
            <h3>Institute of Technology, Nirma University</h3>
            <span>2022 - 2026</span>
          </div>
          <p>B.Tech. - Computer Science & Engineering with Minor in Marketing &nbsp; | &nbsp; CGPA: <strong>7.83</strong> / 10</p>
        </div>

        <div className="education-card">
          <div className="edu-header">
            <h3>Purohit Science School, Jamnagar</h3>
            <span>2022</span>
          </div>
          <p>12<sup>th</sup> &nbsp; | &nbsp; GSEB &nbsp; | &nbsp; Percentage: <strong>81.85</strong> / 100 &nbsp; | &nbsp; JEE AIR: <strong>17420</strong> , JEE Percentile:<strong>98.08</strong> </p>
        </div>

        <div className="education-card">
          <div className="edu-header">
            <h3>Purohit Science School, Jamnagar</h3>
            <span>2020</span>
          </div>
          <p>10<sup>th</sup> &nbsp; | &nbsp; GSEB &nbsp; | &nbsp; Percentage: <strong>88</strong> / 100</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
