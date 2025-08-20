
import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './Gallery.css';

const images = [
  { src: '/images/gallery1.jpg' },
  { src: '/images/about-daycare.jpg' },
  { src: '/images/about-lydia.jpg' },
  { src: '/images/infant-program.jpg' },
  { src: '/images/toddler-program.jpg' },
  { src: '/images/preschool-program.jpg' },
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <Container className="gallery-section">
      <h2>Gallery</h2>
      <Row>
        {images.map((image, idx) => (
          <Col md={4} key={idx}>
            <Image
              src={image.src}
              thumbnail
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
            />
          </Col>
        ))}
      </Row>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        currentIndex={index}
      />
    </Container>
  );
};

export default Gallery;
