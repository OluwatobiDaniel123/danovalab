import AboutPage from "../pages/AboutPage";
import HeroPage from "../components/HeroPage";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import CountUp from "../components/CountUp";
import Skills from "../components/Skills";
import Portfolio from "../pages/Portfolio";

const Home = () => {
    return (
        <div>
            <HeroPage />
            <AboutPage />
            <Skills />
            <CountUp target={5000} duration={3000} />
            <Testimonials />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default Home;
