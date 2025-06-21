import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-primary">
          Deep Makadia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className="mx-1">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="mx-1">
              About
            </Nav.Link>
            <Nav.Link href="#projects" className="mx-1">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="mx-1">
              Contact
            </Nav.Link>
            <Nav.Link href="#resume" className="mx-1">
              Resume
            </Nav.Link>
             <Nav.Link href="#Experience" className="mx-1">
              Experience
            </Nav.Link>
            <Nav.Link href="#skills" className="mx-1">
              Skills
            </Nav.Link>
            <Nav.Link href="#personal" className="mx-1">
            Personal Information 
            </Nav.Link>
            <Nav.Link href="#Education" className="mx-1"> 
            Education</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar;
