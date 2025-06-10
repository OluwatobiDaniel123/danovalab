import About_Page from "../articles/About_Page";
import Hero_Page from "../articles/Hero_Page";
import Contact from "../articles/Contact";
import Testimonials from "../articles/Testimonials";
import CountUp from "../articles/CountUp";
import Skills from "../articles/Skills";
import Portfolio from "../articles/Portfolio";

const Home = () => {
  return (
    <div>
      <Hero_Page />
      <About_Page />
      <Skills />
      <CountUp />
      <Testimonials />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
