import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
// import Menu from "./menu";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <span>Chic</span>Aura
      </div>
      <nav
        className="menu"
        style={{
          top: isMobileNavOpen ? "3.5rem" : "-30rem",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
        </ul>
      </nav>

      <input type="text" className="search-bar" placeholder="search" />
      <button className="cart">
        <FontAwesomeIcon
          icon="fa-solid fa-cart-shopping"
          className="cart-icon"
        />
      </button>
      <button
        className={`hamburger${isMobileNavOpen ? " active" : ""}`}
        onClick={() => {
          return setIsMobileNavOpen(!isMobileNavOpen);
        }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </div>
  );
};

export default Navbar;
