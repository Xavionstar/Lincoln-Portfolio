import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";

//this is the header component that will be rendered on every page
// it will contain the navbar and the page label button
// the navbar is static but the page label button will change based on the current page by updating the state
const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  function handleClick(e) {
    let currentPath = e.target.hash;
    setActiveLink(currentPath);
    
  }

  return (
    <header>
      <Navbar bg="primary-subtle border border-dark border-3" expand="lg">
        <Container>
          <Navbar.Brand href="#/" >Lincoln's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" onClick={handleClick}>
              <Link
                className={"nav-link" + (activeLink === "#/aboutme" ? " active" : "")}
                to="/aboutme"
              >
                About Me!
              </Link>
              <Link
                className={
                  "nav-link" + (activeLink === "#/skills" ? " active" : "")
                }
                to="/skills"
              >
                Resume
              </Link>
              <Link
                className={
                  "nav-link" + (activeLink === "#/contact" ? " active" : "")
                }
                to="/contact"
              >
                Contact Me
              </Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <Link
                  className={
                    "dropdown-item" +
                    (activeLink === "#/foodle" ? " active" : "")
                  }
                  to="/foodle"
                >
                  Foodle
                </Link>
                <Link
                  className={
                    "dropdown-item" +
                    (activeLink === "#/takeahike" ? " active" : "")
                  }
                  to="/takeahike"
                >
                  Take A Hike
                </Link>
                <Link
                  className={
                    "dropdown-item" +
                    (activeLink === "#/weatherapp" ? " active" : "")
                  }
                  to="/weatherapp"
                >
                  Weather You're Ready or Not
                </Link>
                <Link
                  className={
                    "dropdown-item" +
                    (activeLink === "#/technically" ? " active" : "")
                  }
                  to="/technically"
                >
                  Technically Speaking
                </Link>
                <Link
                  className={
                    "dropdown-item" +
                    (activeLink === "#/dailygrind" ? " active" : "")
                  }
                  to="/dailygrind"
                >
                  Daily Grind
                </Link>
                <Link
                  className={
                    "dropdown-item" +
                    (activeLink === "#/mytwocents" ? " active" : "")
                  }
                  to="/mytwocents"
                >
                  My Two Cents
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
