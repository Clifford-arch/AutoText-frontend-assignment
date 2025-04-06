import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <Navbar
      bg="purple"
      data-bs-theme="dark"
      expand="lg"
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-style">
          Auto_Text_Frontend_task
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
              active={location.pathname === "/"}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/post"
              className={`nav-item ${
                location.pathname === "/post" ? "active" : ""
              }`}
              active={location.pathname === "/post"}
            >
              Post
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/weather"
              className={`nav-item ${
                location.pathname === "/weather" ? "active" : ""
              }`}
              active={location.pathname === "/weather"}
            >
              Weather
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
