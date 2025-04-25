import ParallaxWrapper from "../components/wrapper/ParallaxWrapper";
import ScrollReveal from "../components/wrapper/ScrollReveal";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import Profile from "./Profile";
import Project from "./Project";
import Skills from "./Skills";

const section = [
  { id: 1, component: <Profile />, direction: "up" },
  { id: 2, component: <AboutMe />, direction: "up" },
  { id: 3, component: <Skills />, direction: "up" },
  { id: 4, component: <Project />, direction: "left" },
  { id: 5, component: <Contact />, direction: "up" },
];

const Home = () => {
  return (
    <div className="relative w-full">
      <ParallaxWrapper>
        <div className="flex flex-col justify-center items-center gap-60 text-white">
          {section.map(({ id, component, direction }) => (
            <div className="w-full max-w-7xl">
              <ScrollReveal
                key={id}
                direction={direction as "up" | "down" | "left" | "right"}
              >
                {component}
              </ScrollReveal>
            </div>
          ))}
          <Footer />
        </div>
      </ParallaxWrapper>
    </div>
  );
};

export default Home;
