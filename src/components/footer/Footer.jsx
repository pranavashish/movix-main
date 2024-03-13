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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
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
