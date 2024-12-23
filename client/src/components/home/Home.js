import React from "react";
import About from "../articles/About";
import Cards from "../articles/Cards";
import Banner from "../articles/Banner";
import Contact from "../articles/Contact";
import ParticleBackground from "../articles/Part";
import Testimonials from "../articles/Testimonials";

const Home = () => {
  return (
    <div>
      {/* <ParticleBackground /> */}
      <Banner />
      <About />
      <Cards />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
