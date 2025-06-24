import About_Page from "../pages/About_Page";
import Hero_Page from "../components/Hero_Page";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import CountUp from "../components/CountUp";
import Skills from "../components/Skills";
import Portfolio from "../pages/Portfolio";

const Home = () => {
  return (
    <div>
      <Hero_Page />
      <About_Page />
      <Skills />
      <CountUp target={5000} duration={3000} />
      <Testimonials />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
