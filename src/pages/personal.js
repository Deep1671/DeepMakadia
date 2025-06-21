import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./personal.css"; // Import external CSS
import { Link } from "react-router-dom";    
const Personal = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={8}>
          <Card className="personal-card text-white text-center">
            <div className="overlay p-4 rounded-4">
              <Card.Body>
                <h2 className="mb-4">👤 Personal Information</h2>
                <p><strong>Name:</strong> Deep Tusharbhai Makadia</p>
                <p><strong>Current Location:</strong> Ahmedabad, Gujarat, India</p>
                <p><strong>Languages:</strong> English, Hindi, Gujarati</p>
                <p><strong>Date of Birth:</strong> 20th December 2004</p>
                <p><strong>Nationality:</strong> Indian</p>
              </Card.Body>
              <Link to="/Education" smooth={true} duration={1} className="btn btn-primary btn-lg mt-3">
                View My Education Detail
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Personal;
