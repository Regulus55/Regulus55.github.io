import React, { useEffect } from "react";
import { Parallax, useParallaxController } from "react-scroll-parallax";
import { useThemeStore } from "../../store/useThemeStore";

const ParallaxWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDayMode } = useThemeStore();

  return (
    <div className="relative min-h-[150vh] scrollbar-none">
      <div className="absolute inset-0 z-5 overflow-x-hidden">
        <div
          className={`w-full min-h-full 
            ${isDayMode ? "bg-day-sky" : "bg-sunset-sky"}
          `}
        />
      </div>

      <div className="absolute h-full top-0 left-0 right-0 z-20 pointer-events-none">
        <Parallax speed={50}>
          <img
            src="/images/background/star1.png"
            alt=""
            draggable={false}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>

      <div className="absolute h-full top-0 left-0 right-0 z-30 pointer-events-none">
        <Parallax speed={-50}>
          <img
            src="/images/background/star2.png"
            alt=""
            draggable={false}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>

      <div className="relative z-45">{children}</div>
    </div>
  );
};

export default ParallaxWrapper;