import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <div className="link shop">
          <h3>shop</h3>
          <ul>
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">Apparel</a>
            </li>
            <li>
              <a href="#">Perfume</a>
            </li>
            <li>
              <a href="#">Shoes</a>
            </li>
          </ul>
        </div>
        <div className="link pages">
          <h3>pages</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="link service">
          <h3>service</h3>
          <ul>
            <li>
              <a href="#">Search Results</a>
            </li>
            <li>
              <a href="#">404 Page</a>
            </li>
            <li>
              <a href="#">Protected Page</a>
            </li>
          </ul>
        </div>
        <div className="link template">
          <h3>template</h3>
          <ul>
            <li>
              <a href="#">Style Guide</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
            <li>
              <a href="#">Licenses</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="newsletter">
        <h4>Newsletter</h4>
        <form id="newsletter" method="post">
          <img src="/images/at.svg" alt="at symbol" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <button type="submit">
            <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
          </button>
        </form>
        <small>
          We never share your info. View our <a href="#">Privacy Policy</a>
        </small>
      </div>
    </div>
  );
};

export default Footer;
