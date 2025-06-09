import { SectionName } from "../hooks/useScrollToSection";
import { useThemeStore } from "../store/useThemeStore";


interface HeroSectionProps {
  scrollToSection: (section: SectionName) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const { isDayMode, toggleTheme } = useThemeStore();

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <img
        src="/images/background/galaxy.webp"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <img
        src={isDayMode ? "/images/background/mars.webp" : "/images/background/earth.webp"}
        alt="mars"
        onClick={toggleTheme}
        className={`absolute top-8 right-8 w-4 h-4 opacity-70 z-20
                    md:top-10 md:right-12 md:w-5 md:h-5
                    xl:top-12 xl:right-16 xl:w-6 xl:h-6
          `}
      />

      <div className="relative flex items-center justify-center w-full h-full z-10">
        <div className="relative flex items-center justify-center w-full h-full z-10 p-12">
          <img
            src="/images/background/moon.webp"
            alt="moon"
            onClick={() => scrollToSection("profile")}
            className={`w-[350px] h-auto mt-2 object-contain rounded-full cursor-pointer mb-40 sm:mb-0
                        md:w-[400px] lg:w-[550px] xl:w-[650px]
              `}
          />
        </div>

        <h1
          className={`absolute text-2xl font-bold text-white mb-60 hover:cursor-pointer z-20 text-center break-keep
                 sm:text-3xl  lg:text-5xl
            `}
          onClick={() => scrollToSection("profile")}
        >
          프론트엔드&nbsp;개발자 김학준&nbsp;입니다
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
