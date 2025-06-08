import { useThemeStore } from "../store/useThemeStore";

const Footer = () => {
  const { isDayMode } = useThemeStore();

  return (
    <div className="relative bottom-0 left-0 right-0">
      <div className="absolute bottom-0 left-0 right-0 z-28">
        <img
          src={
            isDayMode
              ? "/images/background/daysky.png"
              : "/images/background/sunsetsky.png"
          }
          alt="ground"
          draggable={false}
          loading="lazy"
          className="w-full h-full object-cover max-w-screen"
        />
      </div>
      <div className="absolute z-47 flex justify-center items-end w-full h-full">
        <span className="text-white text-md px-4 py-1">
          ⓒ 2025 김학준 Portfolio | All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
