import { ContentsTitle, Glassmorphism } from "../../components";
import { SkillsData } from "../../data";

const Skills = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full p-10 rounded-3xl mt-40 mb-52">
      <ContentsTitle className="ml-4 mb-4 lg:ml-8 lg:mb-8">SKILLS</ContentsTitle>
      <Glassmorphism className="flex items-center justify-center flex-wrap gap-6 w-full p-3 sm:p-4 lg:p-6">
        {SkillsData.slice(0, 6).map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-start w-14 h-14 gap-1
                        sm:w-20 sm:h-20  sm:mt-4
                        lg:w-28 lg:h-28 lg:mx-4 lg:mt-10 lg:gap-2
          `}>
            <img
              src={skill.src}
              alt={skill.alt}
              loading="lazy"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            />
            <span className="text-sm sm:text-md lg:text-lg text-center text-gray-200">
              {skill.name}
            </span>
          </div>
        ))}
        <div className="absolute bottom-4 right-4 w-16 h-16 lg:w-32 lg:h-32 rounded-full bg-white/20 blur-2xl pointer-events-none" />
      </Glassmorphism>
    </div>
  );
};

export default Skills;
