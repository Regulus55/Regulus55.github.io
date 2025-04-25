import { SkillsData } from "../data";
import { SkillsIcons } from "../data/SkillsData";

const Skills = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full w-full max-w-7xl h-full p-10 rounded-3xl mb-20">
      <h1
        className="text-7xl font-bold text-white ml-8 mb-4"
        style={{
          textShadow: "6px 6px #757575",
        }}
      >
        SKILLS
      </h1>
      <div
        className="flex flex-wrap items-center justify-start p-8 rounded-3xl"
        style={{ backgroundColor: "#333354" }}
      >
        {SkillsData.map((line, rowIndex) => (
          <div key={rowIndex} className="flex w-full justify-center">
            {line.map((skill, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-2 m-4 w-1/4 h-28">
                {SkillsIcons[rowIndex][index]}
                <span className="text-lg text-center text-gray-200">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
