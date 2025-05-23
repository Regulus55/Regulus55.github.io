import React, { useEffect } from "react";
import { Parallax, useParallaxController } from "react-scroll-parallax";
import { useThemeStore } from "../../store/useThemeStore";

const ParallaxWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDayMode } = useThemeStore();

  return (
    <div className="relative min-h-screen scrollbar-none overflow-hidden">
      <div className="absolute inset-0 z-5 overflow-x-hidden">
        <div
          className={`w-full min-h-full 
            ${isDayMode ? "bg-day-sky" : "bg-sunset-sky"}
          `}
        />
      </div>

      <div className="absolute h-auto top-0 left-0 right-0 z-20 pointer-events-none">
        <Parallax speed={50}>
          <img
            src="/images/background/star1.png"
            alt=""
            draggable={false}
            className="w-full h-full object-cover   "
          />
        </Parallax>
      </div>

      <div className="absolute h-auto top-0 left-0 right-0 z-30 pointer-events-none      ">
        {/*   bg-red-700/20 border-4 border-red-500  */}
        <Parallax speed={-50}>
          <img
            src="/images/background/star2.png"
            alt=""
            draggable={false}
            className="w-full h-full object-cover     "           
          />
           {/*   bg-blue-700/20 border-4 border-blue-500 */}
        </Parallax>
      </div>

      <div className="relative z-45">{children}</div>
    </div>
  );
};

export default ParallaxWrapper;