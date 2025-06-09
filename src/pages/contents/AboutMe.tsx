import { ContentsTitle, Glassmorphism, ScrollReveal } from "../../components";
import { AboutMeData } from "../../data";

const AboutMe = () => {
  return (
    <div className={`relative flex flex-col items-start justify-center w-full h-full max-w-7xl p-6 rounded-3xl
                     lg:p-10
    `}>
      <ContentsTitle className="ml-4 mb-4 sm:ml-8">ABOUT ME</ContentsTitle>
      <div className="flex items-center justify-start w-auto">
        <div className={"flex flex-col align-center justify-center gap-6 mg:gap-10"}>
          {AboutMeData.map((data, index) => (
            <ScrollReveal key={index} direction="left">
              <Glassmorphism className="p-4 sm:p-6 lg:p-10">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{data.title}</h4>
                <p className="text-md sm:text-lg lg:text-xl text-gray-300">{data.content}</p>
              </Glassmorphism>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
