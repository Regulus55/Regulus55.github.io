import { useThemeStore } from "../store/useThemeStore";

const HeroSection = () => {
  const { toggleTheme } = useThemeStore();

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <img
        src="/images/background/nat.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1
          className="text-5xl font-bold text-white mb-60 hover:cursor-pointer"
          onClick={toggleTheme}
        >
          프론트엔드 개발자 김학준 입니다
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
