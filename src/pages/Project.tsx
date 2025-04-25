import { ProjectData } from "../data";

const Project = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full w-full max-w-7xl h-full p-10">
      <h1
        className="text-7xl font-bold text-white ml-8 mb-4"
        style={{
          textShadow: "6px 6px #757575",
        }}
      >
        PROJECT
      </h1>

      {ProjectData.map((project) => (
        <div className="flex items-center justify-start w-auto p-8 my-8 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg">
          <div>{project.title}</div>
          <div>{project.subtitle}</div>
          <div>{project.period}</div>
          <div>{project.content}</div>
          <div>
            {project.skills.map((skill) => (
              <>{skill}</>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
