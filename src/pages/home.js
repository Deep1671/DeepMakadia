import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="hero-section text-white d-flex align-items-center justify-content-center">
      <div className="text-center hero-content">
        {/* Glassmorphism Card */}
        <div className="glass-card">
          <img
            src="/Deep_Photo.jpg" // 
            alt="Deep Makadia"
            className="rounded-circle mb-6 border border-white border-opacity-100 shadow-lg"
            style={{ width: "100%", maxWidth:"200px", height: "100%", maxHeight:'300px', objectFit: "cover" }}
          />
          <h1 className="fw-bold display-4">Hi, I'm Deep Makadia</h1>
          <p className="lead text-light w-80 w-md-75  mx-auto">
            Aspiring data scientist and Computer Science student at Nirma University, combining analytical skills, leadership experience, and a marketing mindset to drive data-driven impact.
          </p>
          <Link to="projects" smooth={true} duration={500} className="btn btn-primary btn-lg mt-3">
  View My Work
</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
