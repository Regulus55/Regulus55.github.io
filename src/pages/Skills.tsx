import { SkillsData } from "../data";
import { SkillsIcons } from "../data/SkillsData";

const Skills = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full w-full max-w-7xl h-full p-10 rounded-3xl">
      <h1
        className="text-7xl font-bold text-white ml-8 mb-4"
        style={{
          color: "white",
          textShadow: "6px 6px #757575",
        }}
      >
        SKILLS
      </h1>
      <div
        className="flex items-center justify-start w-auto p-8 rounded-3xl"
        style={{ backgroundColor: "#333354" }}
      >
        {SkillsIcons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center gap-2 mx-8">
            {icon}
            <span className="text-lg text-center text-gray-200">
              {SkillsData[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
