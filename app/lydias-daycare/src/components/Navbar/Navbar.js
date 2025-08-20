
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Lydia's Daycare</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#programs">Our Programs</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
