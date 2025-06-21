import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const footerStyle = {
  backgroundColor: "#f8f9fa",
  color: "#333",
  borderTop: "1px solid #dee2e6",
  width: "100%",
  fontSize: "14px",
  padding: "16px 0",
  textAlign: "center",
};


  return (
    <footer style={footerStyle}>
      <Container>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Deep Makadia. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
