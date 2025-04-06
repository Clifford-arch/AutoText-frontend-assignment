import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <Container>
        <Row className="py-4">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <div className="footer-logo">Auto_Text</div>
            <p className="footer-text">Your One Stop</p>
          </Col>

          <Col md={4} className="text-center mb-3 mb-md-0">
            <ul className="social-icons list-unstyled">
              <li>
                <p className="footer-link">Quick Links: </p>
              </li>
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/post" className="footer-link">
                  Posts
                </a>
              </li>
              <li>
                <a href="/weather" className="footer-link">
                  Weather
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="text-center text-md-start">
            <div className="social-icons">
              <p className="footer-link">Connect us: </p>

              <a href="/" className="social-icon">
                <BsFacebook />
              </a>
              <a href="/" className="social-icon">
                <BsTwitter />
              </a>
              <a href="#/" className="social-icon">
                <BsInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
