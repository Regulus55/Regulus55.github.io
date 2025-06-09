import { useNavigate } from "react-router-dom";
import { ProjectData, SkillsData } from "../../data";
import { ContentsTitle, Glassmorphism, ScrollReveal } from "../../components";

const Project = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10 mb-80">
      <ContentsTitle className="mb-4 lg:mb-8">PROJECT</ContentsTitle>

      {ProjectData.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            onClick={() => {
              navigate(`/${project.slug}`);
            }}
            className="relative items-center justify-center flex flex-col w-full max-w-4xl mb-16 hover:cursor-pointer"
          >
            <ScrollReveal direction={isEven ? "left" : "right"}>
              <Glassmorphism className="flex flex-col md:flex-row items-center p-4 md:p-8 hover:bg-white/20">
                <img
                  src={project.image}
                  alt=""
                  loading="lazy"
                  className="w-auto h-48 md:w-60 md:h-60 overflow-hidden md:object-cover rounded-xl"
                />
                <div className="flex flex-col items-center md:ml-8 p-2">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">{project.title}</h2>
                    <div className="text-gray-600 text-md lg:text-lg font-bold">
                      {project.subtitle}
                    </div>
                  </div>
                  <div className="text-gray-500 text-md font-bold mb-2">
                    {project.period}
                  </div>

                  <div className="text-sm md:text-lg text-gray-700 font-semibold">
                    {project.content}
                  </div>
                  <div className="flex mt-4 gap-2">
                    {project.skills.map((name) => {
                      const skill = SkillsData.find((s) => s.name === name);

                      return skill ? (
                        <div
                          key={name}
                          className="flex items-center justify-center h-12 w-12 bg-black/20 rounded-full overflow-hidden"
                        >
                          <img
                            key={name}
                            src={skill.src}
                            alt={skill.alt}
                            title={name}
                            loading="lazy"
                            className="h-10 w-10 object-contain"
                          />
                        </div>
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
