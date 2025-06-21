// src/components/Home.jsx
import React from "react";

const Home = () => {
  return (
    <section className="relative flex justify-center items-center min-h-screen text-white overflow-hidden">
      {/* Animated gradient background blur overlay */}
      <div className="absolute inset-0 z-0 blur-xl opacity-70 animate-pulse bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600" />

      {/* Glassmorphism card */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 max-w-xl text-center border border-white border-opacity-20">
        <img
          src="/Deep_Photo.jpg" // ✅ correct public path
          alt="Deep Makadia"
          className="rounded-full w-32 h-32 mx-auto mb-6 border-4 border-white border-opacity-30 shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Deep Makadia</h1>
        <p className="text-lg mb-4">
          A passionate data enthusiast focused on analysis, visualization, and storytelling using Python.
        </p>
        <a href="#projects">
          <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-opacity-90 transition">
            View My Work
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;
