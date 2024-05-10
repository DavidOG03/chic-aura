import React from "react";
import InstagramPage from "../components/instagramPage";
import Navbar from "../components/navbar";
import Subscribe from "../components/subscribe";
import Footer from "../sections/footer";
import twitter from "../../public/images/twitter-logo.svg";
import facebook from "../../public/images/facebook-logo.svg";
import instagram from "../../public/images/instagram-logo.svg";
import pinterest from "../../public/images/pinterest-logo.svg";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <main className="contact-page">
        <header className="contact-page-header">
          <div className="title">
            <span className="title-span">
              <span>Contact</span> Us
            </span>
            <h1>Let's get in touch</h1>
          </div>
          <div className="page-check">
            <Link to="/">Home</Link>
            <span className="material-symbols-outlined">chevron_right</span>
            <span className="page">contact</span>
          </div>
        </header>
        <section className="contact-form">
          <h2>Contact Us</h2>

          <form action="submit">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Your Username"
            />
            <input type="email" placeholder="Email Address" />
            <textarea
              name="mesage"
              id="maessage"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button type="submit">Subscribe</button>
          </form>
        </section>
        <section className="address">
          <h3>Address</h3>
          <div className="address-info">
            <span>Unit 286, Elastic Themes Campus,</span>
            <span>2091 Mission Street,</span>
            <span>San Francisco, CA 94110</span>
          </div>
          <a href="#">on the map</a>
          <div className="details">
            <strong>Email us:</strong> bella@template.com
            <br />
            <strong>Call us:</strong> +1 213 974-3898
          </div>
          <div className="socials">
            <h4>Follow Us</h4>
            <div className="icons">
              <div className="socials-icon">
                <img src={twitter} alt="twitter logo" />
              </div>
              <div className="socials-icon">
                <img src={facebook} alt="facebook logo" />
              </div>
              <div className="socials-icon">
                <img src={instagram} alt="instagram logo" />
              </div>
              <div className="socials-icon">
                <img src={pinterest} alt="pinterest logo" />
              </div>
            </div>
          </div>
        </section>
        <section className="map">
          <span className="title">
            <span>Easy</span>to find
          </span>
          <h3>Our Store Location</h3>
        </section>
        <Subscribe />
        <InstagramPage />
      </main>
    </>
  );
}
