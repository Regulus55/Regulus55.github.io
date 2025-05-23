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
        src={isDayMode ? "/images/background/mars.png" : "/images/background/earth.png"}
        alt="mars"
        onClick={toggleTheme}
        className="absolute top-12 right-16 w-6 h-6 z-0 opacity-70 z-20"
      />

      <div className="relative flex items-center justify-center w-full h-full z-10">
        <div className="relative flex items-center justify-center w-full h-full z-10 p-20">
          <img
            src="/images/background/moon.webp"
            alt="moon"
            onClick={() => scrollToSection("profile")}
            className="w-[650px] h-[650px] mt-2 object-contain rounded-full cursor-pointer"
          />
        </div>

        <h1
          className="absolute text-5xl font-bold text-white mb-60 hover:cursor-pointer z-20"
          onClick={() => scrollToSection("profile")}
        >
          프론트엔드 개발자 김학준 입니다
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
