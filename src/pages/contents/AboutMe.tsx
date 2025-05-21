import { ContentsTitle, Glassmorphism, ScrollReveal } from "../../components";
import { AboutMeData } from "../../data";

const AboutMe = () => {
  return (
    <div className="relative flex flex-col items-start justify-center w-full h-full max-w-7xl p-10 rounded-3xl mt-100">
      <ContentsTitle className="ml-8 mb-4">ABOUT ME</ContentsTitle>
      <div className="flex items-center justify-start w-auto p-4">
        <div className={"flex flex-col align-center justify-center gap-10"}>
          {AboutMeData.map((data, index) => (
            <ScrollReveal key={index} direction="left">
              <Glassmorphism className="p-10">
                <h4 className="text-3xl font-bold mb-2">{data.title}</h4>
                <p className="text-xl text-gray-300">{data.content}</p>
              </Glassmorphism>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
