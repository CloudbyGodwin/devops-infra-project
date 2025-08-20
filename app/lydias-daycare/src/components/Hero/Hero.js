
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <Container fluid className="hero-section">
      <Row className="justify-content-center align-items-center h-100">
        <Col md={8} className="text-center">
          <div className="hero-content">
            <h1>Welcome to Lydia's Daycare</h1>
            <p>Where <span style={{ color: 'var(--primary-color)' }}>little stars</span> shine bright and <span style={{ color: 'var(--light-color)' }}>big adventures</span> begin!</p>
            <p>
              <Button variant="primary">Enroll Now</Button>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
