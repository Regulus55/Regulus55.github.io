import React from "react";
import { Parallax } from "react-scroll-parallax";

const ParallaxWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-[300vh]">
      <div className="absolute inset-0 z-10">
        <Parallax speed={0}>
          <img
            src="/images/space.png"
            alt="space"
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>

      <div className="absolute inset-0 z-20">
        <Parallax speed={100}>
          <img
            src="/images/star1.png"
            alt="stars1"
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>

      <div className="absolute inset-0 z-30">
        <Parallax speed={-100}>
          <img
            src="/images/star2.png"
            alt="stars2"
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>

      <div className="relative z-50">{children}</div>
    </div>
  );
};

export default ParallaxWrapper;
