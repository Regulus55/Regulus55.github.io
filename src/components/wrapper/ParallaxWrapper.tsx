import React from "react";
import { Parallax } from "react-scroll-parallax";
import { HeroSection } from "../../pages";

const ParallaxWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <section className="h-[100vh] z-0 relative bg-gray-500">
        <HeroSection />
      </section>

      <div className="relative h-[700vh]">
        <div className="absolute inset-0 z-10 overflow-hidden">
          <Parallax speed={0}>
            <div className="w-full h-[700vh] flex justify-center overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(
                      to bottom,
                      #010037 0%,    
                      #0D0C59 17%,  
                      #201E8D 31%,
                      #3863DA 48%,
                      #73AEE2 64%,
                      #AFD9FF 75%,
                      #DBEEFF 87%,
                      #DBEEFF 100%
                    )`,
                }}
              />
            </div>
          </Parallax>
        </div>

        <div className="absolute left-0 right-0 z-20">
          <Parallax speed={80}>
            <img
              src="/images/star1.png"
              alt="stars1"
              draggable={false}
              className="w-full h-full object-cover"
            />
          </Parallax>
        </div>

        <div className="absolute top-[150vh] left-0 right-0 z-30">
          <Parallax speed={-80}>
            <img
              src="/images/star2.png"
              alt="stars2"
              draggable={false}
              className="w-full h-full object-cover"
            />
          </Parallax>
        </div>

        <div className="relative z-50">{children}</div>
      </div>
    </div>
  );
};

export default ParallaxWrapper;
