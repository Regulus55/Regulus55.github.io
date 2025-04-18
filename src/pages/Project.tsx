import { ProjectData } from "../data";

const Project = () => {
  return (
    <div>
      {ProjectData.map((project) => (
        <>
          <div>{project.title}</div>
          <div>{project.subtitle}</div>
          <div>{project.period}</div>
          <div>{project.content}</div>
          <div>
            {project.skills.map((skill) => (
              <>{skill}</>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Project;
