import { ProjectData } from "../data";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10">
      <h1
        className="w-full text-7xl text-center font-bold text-white ml-8 mb-4"
        style={{
          textShadow: "6px 6px #757575",
        }}
      >
        PROJECT
      </h1>

      {ProjectData.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={index} className={`relative flex items-center ${
            isEven ? "justify-start" : "justify-end"
          } w-full my-8 max-w-4xl`}>
          <div className="flex flex-col w-full max-w-3xl my-8">
  
            <div className="flex p-8 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg">
              <img src="/images/내달사진.jpg" alt="" className="w-60 h-60" />
              <div className="flex flex-col ml-8 p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold">{project.title}</h2>
                  <div className="text-gray-300 text-md">{project.subtitle}</div>
                </div>
                <div className="text-md">{project.period}</div>
                <div className="text-md">{project.content}</div>
                <div>
                  {project.skills.map((skill) => (
                    <>{skill}</>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Project;
