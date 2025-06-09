import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useThemeStore } from "../../store/useThemeStore";

const ParallaxWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDayMode } = useThemeStore();

  return (
    <div className="relative min-h-[150vh] overflow-hidden">
      <div className="absolute inset-0 z-5">
        <div
          className={`w-full min-h-full 
            ${isDayMode ? "bg-day-sky" : "bg-sunset-sky"}
          `}
        />
      </div>

      <div className="absolute h-auto top-0 left-0 right-0 z-20 pointer-events-none">
        <Parallax speed={50}>
          <img
            src="/images/background/star44.png"
            alt=""
            draggable={false}
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>

      <div className="absolute h-auto top-0 left-0 right-0 z-20 pointer-events-none">
        <Parallax speed={-50}>
          <img
            src="/images/background/star33.png"
            alt=""
            draggable={false}
            className="w-full h-full object-cover"           
          />
        </Parallax>
      </div>
      <div className="relative z-45">{children}</div>
    </div>
  );
};

export default ParallaxWrapper;