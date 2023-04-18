import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

//this is the header component that will be rendered on every page
// it will contain the navbar and the page label button
// the navbar is static but the page label button will change based on the current page by updating the state
const Header = () => {
  
  let currentPage = window.location.pathname;
  const [state, setState] = useState(getPageLabel()); 

  function getPageLabel() {
    if (currentPage === '/') {
      return'About Me';   
    } else if (currentPage === '/skills') {
      return'Resume';
    } else if (currentPage === '/contact') {
      return'Contact'; 
    } else if (currentPage === '/foodle') {
      return'Foodle';
    } else if (currentPage === '/takeahike') {
      return'Take A Hike';
    } else if (currentPage === '/weatherapp') {
      return'Weather You\'re Ready or Not';
    } else if (currentPage === '/technically') {
      return'Technically Speaking';
    } else if (currentPage === '/dailygrind') {
      return'Daily Grind';
    } else if (currentPage === '/mytwocents') {
      return'My Two Cents';
    } else {
      return'About Me';
    }
  }


  
  return(
    <header>
  <Navbar bg="primary-subtle border border-dark border-3" expand="lg">
    <Container>
      <Navbar.Brand >Lincoln's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <p class="fs-3" >You are on the <Button variant="success">{state} </Button>{' '} page!</p>
          <Nav.Link href="/" >About Me!</Nav.Link>
          <Nav.Link href="/skills">Resume</Nav.Link>
          <Nav.Link href="/contact">Contact Me</Nav.Link>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="/foodle">Foodle</NavDropdown.Item>
            <NavDropdown.Item href="/takeahike">Take A Hike</NavDropdown.Item>  
            <NavDropdown.Item href="/weatherapp">Weather You're Ready or Not</NavDropdown.Item> 
            <NavDropdown.Item href="/technically">Technically Speaking</NavDropdown.Item>  
            <NavDropdown.Item href="/dailygrind">Daily Grind</NavDropdown.Item>  
            <NavDropdown.Item href="/mytwocents">My Two Cents</NavDropdown.Item>                 
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </header>)
};

export default Header;