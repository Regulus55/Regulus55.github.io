import ParallaxWrapper from "../components/wrapper/ParallaxWrapper";
import ScrollReveal from "../components/wrapper/ScrollReveal";
import AboutMe from "./contents/AboutMe";
import Contact from "./contents/Contact";
import Profile from "./contents/Profile";
import Project from "./contents/Project";
import Skills from "./contents/Skills";
import FloatingButton from "./FloatingButton";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

const section = [
  { id: 1, component: <Profile />, direction: "up" },
  { id: 2, component: <AboutMe />, direction: "left" },
  { id: 3, component: <Skills />, direction: "up" },
  { id: 4, component: <Project />, direction: "down" },
  { id: 5, component: <Contact />, direction: "up" },
];

const Home = () => {
  return (
    <div className="relative w-full h-full">
      <div className="relative h-[100vh] z-0 ">
        <HeroSection />
      </div>

      <ParallaxWrapper>
        <div className="flex flex-col justify-center items-center gap-60 text-white">
          {section.map(({ id, component, direction }) => (
            <div key={id} className="w-full max-w-7xl">
              <ScrollReveal
                direction={direction as "up" | "down" | "left" | "right"}
              >
                {component}
              </ScrollReveal>
            </div>
          ))}
        </div>
      </ParallaxWrapper>

      <FloatingButton />
      <Footer />
    </div>
  );
};

export default Home;
