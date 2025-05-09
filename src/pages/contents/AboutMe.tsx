import Glassmorphism from "../../components/wrapper/Glassmorphism";
import ScrollReveal from "../../components/wrapper/ScrollReveal";
import { AboutMeData } from "../../data";

const AboutMe = () => {
  return (
    <div className="relative flex flex-col items-start justify-center w-full h-full max-w-7xl p-10 rounded-3xl">
      <h1 className="text-7xl font-bold text-white ml-8 mb-4 text-grayShadow">
        ABOUT ME
      </h1>
      <div className="flex items-center justify-start w-auto p-4">
        <div className={"flex flex-col align-center justify-center gap-10"}>
          {AboutMeData.map((data, index) => (
            <ScrollReveal key={index} direction="left">
              <Glassmorphism className="p-10">
                <h4 className="text-3xl font-bold mb-2">{data.title}</h4>
                <div className="text-lg text-gray-300">{data.content}</div>
              </Glassmorphism>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
