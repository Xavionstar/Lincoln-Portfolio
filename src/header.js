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
    if (currentPage === 'https://xavionstar.github.io/Lincoln-Portfolio/') {
      return'About Me';   
    } else if (currentPage === 'https://xavionstar.github.io/Lincoln-Portfolio/skills') {
      return'Resume';
    } else if (currentPage === 'https://xavionstar.github.io/Lincoln-Portfolio/contact') {
      return'Contact'; 
    } else if (currentPage === 'https://xavionstar.github.io/Lincoln-Portfolio/foodle') {
      return'Foodle';
    } else if (currentPage === 'https://xavionstar.github.io/Lincoln-Portfolio/takeahike') {
      return'Take A Hike';
    } else if (currentPage === 'https://xavionstar.github.io/Lincoln-Portfolio/weatherapp') {
      return'Weather You\'re Ready or Not';
    } else if (currentPage === 'https://xavionstar.github.io/Lincoln-Portfolio/technically') {
      return'Technically Speaking';
    } else if (currentPage === 'https://xavionstar.github.io/Lincoln-Portfolio/dailygrind') {
      return'Daily Grind';
    } else if (currentPage === 'https://xavionstar.github.io/Lincoln-Portfolio/mytwocents') {
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
          <Nav.Link href="https://xavionstar.github.io/Lincoln-Portfolio/" >About Me!</Nav.Link>
          <Nav.Link href="https://xavionstar.github.io/Lincoln-Portfolio/skills">Resume</Nav.Link>
          <Nav.Link href="https://xavionstar.github.io/Lincoln-Portfolio/contact">Contact Me</Nav.Link>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://xavionstar.github.io/Lincoln-Portfolio/foodle">Foodle</NavDropdown.Item>
            <NavDropdown.Item href="https://xavionstar.github.io/Lincoln-Portfolio/takeahike">Take A Hike</NavDropdown.Item>  
            <NavDropdown.Item href="https://xavionstar.github.io/Lincoln-Portfolio/weatherapp">Weather You're Ready or Not</NavDropdown.Item> 
            <NavDropdown.Item href="https://xavionstar.github.io/Lincoln-Portfolio/technically">Technically Speaking</NavDropdown.Item>  
            <NavDropdown.Item href="https://xavionstar.github.io/Lincoln-Portfolio/dailygrind">Daily Grind</NavDropdown.Item>  
            <NavDropdown.Item href="https://xavionstar.github.io/Lincoln-Portfolio/mytwocents">My Two Cents</NavDropdown.Item>                 
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </header>)
};

export default Header;