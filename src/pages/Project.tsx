import { ProjectData } from "../data";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10">
      <h1
        className="w-full text-7xl text-center font-bold text-white ml-8 mb-8"
        style={{
          textShadow: "6px 6px #757575",
        }}
      >
        PROJECT
      </h1>

      {ProjectData.map((project, index) => (
        <div key={index} className="relative items-center justify-center flex flex-col w-full max-w-4xl mb-16">
          <div className="flex p-8 backd/rop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg">
            {/* <div className="flex p-8 bg-gray-700 rounded-xl shadow-lg"> */}
            <img src="/images/내달사진.jpg" alt="" className="w-60 h-60" />
            <div className="flex flex-col ml-8 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <div className="text-gray-400 text-lg font-bold">{project.subtitle}</div>
              </div>
              <div className="text-gray-400 text-lg font-bold mb-2">{project.period}</div>
              <div className="text-lg">{project.content}</div>
              <div>
                {project.skills.map((skill) => (
                  <>{skill}</>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
