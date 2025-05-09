import Glassmorphism from "../../components/wrapper/Glassmorphism";
import ScrollReveal from "../../components/wrapper/ScrollReveal";
import { ProjectData, SkillsData } from "../../data";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10    mb-80">
      <h1 className="w-full text-7xl text-center font-bold text-white ml-8 mb-8 text-grayShadow">
        PROJECT
      </h1>

      {ProjectData.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className="relative items-center justify-center flex flex-col w-full max-w-4xl mb-16"
          >
            <ScrollReveal direction={isEven ? "left" : "right"}>
              <Glassmorphism className="flex p-8">
                {/* <div className="flex p-8 bg-gray-500 rounded-xl shadow-lg"> */}
                <img
                  src={`${process.env.PUBLIC_URL}/${project.image}`}
                  alt=""
                  className="w-60 h-60 object-cover rounded-xl"
                />
                <div className="flex flex-col ml-8 p-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                    <div className="text-gray-400 text-lg font-bold">
                      {project.subtitle}
                    </div>
                  </div>
                  <div className="text-gray-400 text-lg font-bold mb-2">
                    {project.period}
                  </div>
                  <div className="text-lg text-gray-100">{project.content}</div>
                  <div className="flex mt-4 gap-4">
                    {project.skills.map((name) => {
                      const skill = SkillsData.find((s) => s.name === name);

                      return skill ? (
                        <img
                          key={name}
                          src={skill.src}
                          alt={skill.alt}
                          className="h-8 w-8"
                        />
                      ) : null;
                    })}
                  </div>
                </div>
              </Glassmorphism>
            </ScrollReveal>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
