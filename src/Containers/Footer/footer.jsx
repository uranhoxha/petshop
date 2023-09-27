import React from "react";
import "./footer.css";
import logo from "./logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container" id="contact">
      <div className="first-footer-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <p>Find your perfect companion and create a forever bond</p>
        </div>
        <div className="socials-container">
          <h3>Follow Us</h3>
          <div className="socials">
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaTiktok />
            </a>
          </div>
        </div>
        <div className="contact-container">
          <h3>Call Us</h3>
          <p>02 8541 9786</p>
        </div>
      </div>
      <div className="second-footer-container">
        <p>
          © 2023 Pawfect Pals. Pet Adoption Center California, USA. All Right
          Reserved
        </p>
        <div className="terms-container">
          <p>Privacy Policy</p>
          <div></div>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
