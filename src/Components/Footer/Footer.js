import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import footerLogo from "../../assets/images/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer-container ">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <img
              src={footerLogo}
              className="footer-logo"
              alt="footer logo"
              title="footer logo"
            ></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore
              smod tempor incididunt ut labore et.
            </p>
            <div className="footer-contact">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="footer-text">
                <h6>Contact Us</h6>
                <h5>+01 123 456 7890</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Out Team</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Our Service</h2>
            <ul>
              <li>
                <a href="/about">Health Care</a>
              </li>
              <li>
                <a href="#">Cardiac Pharmacy</a>
              </li>
              <li>
                <a href="/about">Health Care</a>
              </li>
              <li>
                <a href="#">Cardiac Pharmacy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Subscribe</h2>
            <input
              className="footer-input"
              type="email"
              placeholder="Email Address"
            />
            <button className="footer-btn" type="submit">
              Subscribe Now
            </button>
            <div className="social-icons">
              <a
                href="your-facebook-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="your-twitter-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="your-instagram-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="your-linkedin-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-hr" />
        <span className="footer-copyright">
          Copyright © 2023 Design & Developed by ThemeTrades
        </span>
      </div>
    </footer>
  );
}

export default Footer;
