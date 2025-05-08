import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useThemeStore } from "../../store/useThemeStore";

const ParallaxWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDayMode } = useThemeStore();

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <div
          className={`w-full min-h-full 
                ${isDayMode ? "bg-day-sky" : "bg-sunset-sky"
            }`}
        />
      </div>

      <div className="absolute left-0 right-0 z-20">
        <Parallax speed={40}>
          <img
            src="/images/background/star4.png"
            alt="stars1"
            draggable={false}
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>

      <div className="absolute top-[150vh] left-0 right-0 z-30">
        <Parallax speed={-40}>
          <img
            src="/images/background/star5.png"
            alt="stars2"
            draggable={false}
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>

      <div className="relative z-50">{children}</div>
    </div>
  );
};

export default ParallaxWrapper;

