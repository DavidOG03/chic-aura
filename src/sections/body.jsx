import React from "react";
import Blog from "../components/blog";
import InstagramPage from "../components/instagramPage";
import Promo from "../components/promo";
import Services from "../components/services";
import Subscribe from "../components/subscribe";

const Body = () => {
  return (
    <div className="body">
      <Services />
      <Promo />
      <Subscribe />
      <Blog />
      <section className="sponsors">
        <div className="sponsors-logo">
          <img src="/images/aven-logo.svg" alt="sponsor logo" />
        </div>
        <div className="sponsors-logo">
          <img src="/images/earth-2.0-dark.svg" alt="sponsor logo" />
        </div>
        <div className="sponsors-logo">
          <img src="/images/ideaa-dark.svg" alt="sponsor logo" />
        </div>
        <div className="sponsors-logo">
          <img src="/images/zoo-tv-dark.svg" alt="sponsor logo" />
        </div>
        <div className="sponsors-logo">
          <img src="/images/code-lab-dark.svg" alt="sponsor logo" />
        </div>
        <div className="sponsors-logo">
          <img src="/images/circle-dark.svg" alt="sponsor logo" />
        </div>
      </section>
      <InstagramPage/>
    </div>
  );
};

export default Body;
