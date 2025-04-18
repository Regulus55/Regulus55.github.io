import { SkillsData } from "../data";

const Skills = () => {
  return (
    <div>
      <div>Skills</div>
      {Object.values(SkillsData).map((row, index) => (
        <div key={index} className="flex gap-2 mb-2">
          {row.map((skill, index) => (
            <div key={index}>{skill}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
