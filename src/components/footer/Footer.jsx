import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Immerse yourself in a captivating world of cinema with our
          comprehensive selection of critically-praised films. Tailored for your
          viewing preference, we offer options for both the cinematic experience
          and the comfort of your home. Whether you favor traditional television
          broadcasts, subscribe to popular streaming services like Netflix,
          Prime Video, Hotstar or Jio Cinema, we've curated a diverse list of
          acclaimed titles to guide you towards your next cinematic adventure.
        </div>
        <div className="socialIcons">
          <a
            href="https://github.com/pranavashish"
            target="_blank"
            title="Pranav's Github Profile"
            className="namez"
          >
            <span className="icon">
              <FaGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/pranavashish/"
            target="_blank"
            title="Pranav's Linkedin Profile"
            className="namez"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>

          <a
            href="https://twitter.com/pranavintouch"
            target="_blank"
            title="Pranav's Twitter Profile"
            className="namez"
          >
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
        </div>
        <div className="madewith">
          {" "}
          Made with ❤️ by{" "}
          <a
            href="https://pranavashish.netlify.app/"
            target="_blank"
            title="Pranav's Portfolio"
            className="namez"
          >
            Pranav Ashish
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
