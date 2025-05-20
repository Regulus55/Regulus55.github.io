
import { Profile, AboutMe, Skills, Project, Contact } from "./index";
import { HeroSection, ParallaxWrapper, ScrollReveal } from "../components";
import { useScrollToSection } from "../hooks/useScrollToSection";
import SectionNavigation from "../components/SectionNavigation";


const Home = () => {
  const { sectionRefs, scrollToSection } = useScrollToSection();

  const section = [
    { id: 1, name: "profile", component: <Profile />, direction: "up", ref: sectionRefs.profile },
    { id: 2, name: "about", component: <AboutMe />, direction: "left", ref: sectionRefs.about },
    { id: 3, name: "skills", component: <Skills />, direction: "up", ref: sectionRefs.skills },
    { id: 4, name: "project", component: <Project />, direction: "down", ref: sectionRefs.project },
    { id: 5, name: "contact", component: <Contact />, direction: "up", ref: sectionRefs.contact },
  ];

  return (
    <>
      <div className="relative w-full h-full overflow-x-hidden">
        <div className="relative h-[100vh] z-0">
          <HeroSection scrollToSection={scrollToSection} />
        </div>

        {/* <div className="fixed top-0 left-0 z-50">
        <SectionNavigation scrollToSection={scrollToSection} />
      </div> */}


        <ParallaxWrapper>
          <div className="flex flex-col justify-center items-center gap-40 text-white">
            {section.map(({ id, component, direction, ref }) => (
              <div key={id} ref={ref} className="w-full max-w-7xl">
                <ScrollReveal
                  direction={direction as "up" | "down" | "left" | "right"}
                >
                  {component}
                </ScrollReveal>
              </div>
            ))}
          </div>
        </ParallaxWrapper>
      </div>
    </>
  );
};

export default Home;
