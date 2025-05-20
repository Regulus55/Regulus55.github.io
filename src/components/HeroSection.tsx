import { SectionName } from "../hooks/useScrollToSection";
import { useThemeStore } from "../store/useThemeStore";


interface HeroSectionProps {
  scrollToSection: (section: SectionName) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const { toggleTheme } = useThemeStore();

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <img
        // src="/images/background/moon.jpg"
        src="/images/background/galaxy.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="relative flex items-center justify-center w-full h-full z-10">
        <div className="relative flex items-center justify-center w-full h-full z-10 p-20">
          <img
            src="/images/background/moonsample.png"
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
