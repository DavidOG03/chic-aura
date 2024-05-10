import React from "react";
import Navbar from "../components/navbar";
import fashionstore from "../../public/images/fashion-store.jpg";
import Footer from "../sections/footer";
import InstagramPage from "../components/instagramPage";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <main className="about-page">
        <div className="about-page-header">
          <div className="title">
            <span className="title-span">
              <span>About</span> Us
            </span>
            <h1>Our Story</h1>
          </div>
          <div className="page-check">
            <Link to="/">Home</Link>
            <span className="material-symbols-outlined">chevron_right</span>
            <span className="page">About</span>
          </div>
        </div>
        <section className="sideblock">
          <div className="sideblock-image">
            <img src={fashionstore} alt="fashion store" />
          </div>
          <div className="sideblock-text">
            <p className="paragraph">
              Chic Aura was born out of a passion for fashion and a vision to
              create a haven for trendsetters seeking unique, sophisticated, and
              timeless pieces. Founded in 20XX, we have since evolved into a
              destination that transcends fashion norms, offering a diverse
              range of apparel and accessories that inspire confidence and
              allure.
            </p>
            <div className="join">
              <h2>Join the Chic Aura Experience</h2>
              <p>
                Whether you're a fashion maven or someone exploring your unique
                style, Chic Aura invites you to embark on a journey of elegance,
                confidence, and discovery. Explore our collections, embrace your
                individuality, and let Chic Aura be your trusted companion on
                your style evolution.
              </p>
              <span className="join-word">
                Thank you for choosing Chic Aura – Where Every Outfit Tells a
                Story!
              </span>
              <button className="cta-button">Drop Us a line</button>
            </div>
          </div>
        </section>
        <section className="ceo-testimony">
          <div className="testimony">
            <q>
              Elegance is not just about what you wear, but how confidently you
              wear it. Chic Aura - Where every outfit becomes a statement of
              your unique style.
            </q>
            <div className="role">
              <strong>Summer Adams</strong>
              <span>&nbsp;—&nbsp;CEO of Bella Store</span>
            </div>
          </div>
        </section>
        <section className="values-section">
          <h2>What Sets Us Apart</h2>
          <div className="values">
            <div className="value">
              <h3>Curated Collections</h3>
              <p>
                From casual wear to evening glam, each piece in our collection
                is chosen for its exceptional design, quality, and attention to
                detail.
              </p>
            </div>
            <div className="value">
              <h3>Quality Craftsmanship</h3>
              <p>
                At Chic Aura, we believe in offering not just fashion, but a
                statement of enduring style.
              </p>
            </div>
            <div className="value">
              <h3>Customer Experience</h3>
              <p>
                Our friendly customer support team is here to assist you with
                any inquiries, ensuring that your Chic Aura journey is
                delightful from start to finish.
              </p>
            </div>
          </div>
          <a href="#">Explore Our Store</a>
        </section>
        <InstagramPage />
      </main>
    </>
  );
}
