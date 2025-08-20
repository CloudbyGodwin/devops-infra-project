
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <Container className="contact-section">
      <h2>Contact Us</h2>
      <Row>
        <Col md={6}>
          <Form action="https://formspree.io/f/your-form-id" method="POST">
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" name="name" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name="email" required />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h4>Lydia's Daycare</h4>
          <p>NO 1 Council obule street akoka yaba lagos nigeria</p>
          <p>+234 703 433 2573</p>
          <p>lydiaokucha@gmail.com</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.233434351358!2d3.389255314770539!3d6.52118899522799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d3b0f1b3e7b%3A0x7b1b3e7b0f1b3e7b!2sAkoka%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1662805490742!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
