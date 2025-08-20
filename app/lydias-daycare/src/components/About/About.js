
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <Container className="about-section">
      <Row>
        <Col md={6}>
          <h2>About Lydia's Daycare</h2>
          <p>
            At Lydia's Daycare, we believe that every child is a <span style={{ color: 'var(--primary-color)' }}>unique little star</span> with a great potential to learn and grow. We provide a <span style={{ color: 'var(--primary-color)' }}>super fun, safe, and stimulating</span> environment where children can explore their interests, develop their skills, and build a strong foundation for a lifetime of <span style={{ color: 'var(--primary-color)' }}>awesome adventures</span>. Our curriculum is based on the principles of the Montessori method, which emphasizes hands-on learning, self-directed activity, and collaborative play. We also incorporate elements of the Reggio Emilia approach, which values the child as a protagonist, a collaborator, and a communicator.
          </p>
          <h3>Our Mission: Spreading Joy and Knowledge!</h3>
          <p>
            Our mission is to provide the <span style={{ color: 'var(--primary-color)' }}>highest quality of care and education</span> for our little ones. We are committed to creating a <span style={{ color: 'var(--primary-color)' }}>warm, loving, and supportive wonderland</span> where children can feel safe, secure, and happy. We strive to foster a <span style={{ color: 'var(--primary-color)' }}>love of learning</span> in every child and to help them develop the skills and knowledge they need to succeed in school and in life.
          </p>
          <h3>Our Philosophy: Play, Learn, and Grow!</h3>
          <p>
            We believe that children learn best through <span style={{ color: 'var(--primary-color)' }}>play and exciting exploration</span>. Our curriculum is designed to be <span style={{ color: 'var(--primary-color)' }}>fun, engaging, and super challenging</span>. We provide a variety of activities and materials that allow children to learn at their own pace and in their own way. We also believe in the importance of social-emotional development. We help children to develop <span style={{ color: 'var(--primary-color)' }}>self-confidence, self-esteem, and a positive sense of self</span>. We also teach them how to interact with others in a respectful and cooperative way.
          </p>
        </Col>
        <Col md={6}>
          <Image src="/images/about-daycare.jpg" />
        </Col>
      </Row>
      <Row>
        <Col md={6} className="order-md-2">
          <h2>About the Founder</h2>
          <p>
            Lydia Okucha is the heart and soul of Lydia's Daycare. A dedicated and passionate early childhood educator with over 15 years of experience, Lydia has a deep understanding of the needs of young children. She holds a Bachelor's degree in Early Childhood Education and is a certified Montessori teacher. Lydia's warmth, patience, and genuine love for children create a welcoming and nurturing environment where every child feels valued and supported. She is a true advocate for children and is committed to making a positive and lasting impact on their lives.
          </p>
        </Col>
        <Col md={6} className="order-md-1">
          <Image src="/images/about-lydia.jpg" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
