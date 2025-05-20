import { ContentsTitle, Glassmorphism } from "../../components";
import { SkillsData } from "../../data";

const Skills = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-full p-10 rounded-3xl mt-40 mb-52">
      <ContentsTitle className="ml-8 mb-8">SKILLS</ContentsTitle>
      <Glassmorphism className="flex flex-nowrap items-center justify-center w-full p-6">
        {SkillsData.slice(0, 8).map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start gap-2 m-4 mt-10 w-full h-28"
          >
            <img src={skill.src} alt={skill.alt} className="w-12 h-12" />
            <span className="text-lg text-center text-gray-200">
              {skill.name}
            </span>
          </div>
        ))}
        <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white/20 blur-2xl pointer-events-none" />
      </Glassmorphism>
    </div>
  );
};

export default Skills;
