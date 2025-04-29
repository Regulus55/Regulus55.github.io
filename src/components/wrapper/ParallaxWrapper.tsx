import React, { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { useThemeStore } from "../../store/useThemeStore";

const ParallaxWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDayMode } = useThemeStore();

  useEffect(() => {
    if (isDayMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDayMode]);

  return (
    <div className="relative h-[800vh]">
      <div className="absolute inset-0 z-10 overflow-hidden">
        <Parallax speed={0}>
          <div className="w-full h-[800vh] flex justify-center overflow-hidden">
            <div
              className={`w-full h-full ${
                isDayMode ? "bg-day-sky" : "bg-sunset-sky"
              }`}
            />
          </div>
        </Parallax>
      </div>

      <div className="absolute left-0 right-0 z-20">
        <Parallax speed={80}>
          <img
            src="/images/background/star1.png"
            alt="stars1"
            draggable={false}
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>

      <div className="absolute top-[150vh] left-0 right-0 z-30">
        <Parallax speed={-80}>
          <img
            src="/images/background/star3.png"
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
