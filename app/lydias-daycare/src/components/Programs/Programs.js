
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Programs.css';

const Programs = () => {
  return (
    <Container className="programs-section">
      <h2>Our Programs</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/infant-program.jpg" />
            <Card.Body>
              <Card.Text>
                Our infant care program provides a <span style={{ color: 'var(--primary-color)' }}>warm, nurturing, and stimulating wonderland</span> for your little one. We focus on developing a <span style={{ color: 'var(--primary-color)' }}>strong bond</span> with each child and providing <span style={{ color: 'var(--primary-color)' }}>individualized care</span> to meet their unique needs. Our experienced caregivers provide a variety of activities to stimulate your baby's senses and promote their physical, cognitive, and social-emotional development.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/toddler-program.jpg" />
            <Card.Body>
              <Card.Text>
                Our toddler program is designed to be a <span style={{ color: 'var(--primary-color)' }}>fun and engaging learning adventure</span> for your active toddler. We provide a variety of <span style={{ color: 'var(--primary-color)' }}>hands-on activities</span> that allow toddlers to explore their interests, develop their skills, and learn about the world around them. Our curriculum focuses on developing language, communication, and social skills, as well as fine and gross motor skills.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/preschool-program.jpg" />
            <Card.Body>
              <Card.Text>
                Our preschool program provides a <span style={{ color: 'var(--primary-color)' }}>comprehensive and exciting curriculum</span> that prepares your child for <span style={{ color: 'var(--primary-color)' }}>success in school and in life</span>. We focus on developing pre-reading, pre-writing, and pre-math skills, as well as critical thinking, problem-solving, and creativity. Our experienced teachers use a variety of teaching methods to meet the individual needs of each child.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Programs;
