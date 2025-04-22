import ParallaxWrapper from "../components/wrapper/ParallaxWrapper";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import Profile from "./Profile";
import Project from "./Project";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="relative">
      <ParallaxWrapper>
        <div className="flex flex-col justify-center items-center mt-8 gap-8 text-white">
          <Profile />
          <AboutMe />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </div>
      </ParallaxWrapper>
    </div>
  );
};

export default Home;
