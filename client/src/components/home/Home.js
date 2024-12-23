import React from "react";
import About from "../articles/About";
import Cards from "../articles/Cards";
import Banner from "../articles/Banner";
import Contact from "../articles/Contact";

import Testimonials from "../articles/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Cards />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
