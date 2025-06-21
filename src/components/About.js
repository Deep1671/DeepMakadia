import React from "react";
import "./Home.css"; // optional if separating styles

const Home = () => {
  return (
    <>
      <div className="hero-section d-flex flex-column align-items-center justify-content-center text-center text-white">
        <img
          src="./public/photo.jpg"
          alt="Deep Makadia"
          className="profile-image mb-4"
        />
        <h1 className="fw-bold display-5 glow-text">Hi, I'm Deep Makadia</h1>
        <p className="lead text-light-emphasis w-75 mx-auto">
          A passionate data enthusiast focused on analysis, visualization, and
          storytelling using Python.
        </p>
        <a href="#projects" className="btn btn-primary btn-lg mt-4 shadow-sm">
          View My Work
        </a>
      </div>
    </>
  );
};

export default Home;
