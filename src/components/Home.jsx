import React from "react";

import "../assets/scss/home.css";
import { BsGithub } from "react-icons/bs";

const HomePage = () => {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <h1>AutoText </h1>
        <p>Your OneStop solution</p>
        <BsGithub />
        <a
          href="https://github.com/Clifford-arch/AutoText-frontend-assignment"
          className="footer-link"
        >
          Project Github link
        </a>
      </div>
    </header>
  );
};

export default HomePage;
