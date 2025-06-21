import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Resume from "./pages/resume";
import Experience from "./pages/experience";
import Skills from "./pages/skills";
import Personal from "./pages/personal";
import Footer from "./pages/footer";
import Education from "./pages/Education";
const App = () => {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/Education" element={<Education/>}/>
            
          </Routes>
          
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
