import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home-section">
      <img src="/Deep_Photo.jpg" alt="Deep Makadia" className="profile-photo" />
      <div className="home-content">
        <h1 className="home-title">Hi, I'm <span className="highlight">Deep Makadia</span></h1>
        <p className="home-description">
          A passionate data enthusiast focused on analysis, visualization, and storytelling using Python.
        </p>
        <a href="/projects" className="view-work-button">View My Work</a>
      </div>
    </section>
  );
};

export default Home;
