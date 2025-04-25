import { AboutMeData } from "../data";

const AboutMe = () => {
  return (
    <div className="relative flex flex-col items-start justify-center w-full max-w-7xl h-full p-10 rounded-3xl">
      <h1
        className="text-7xl font-bold text-white ml-8 mb-4"
        style={{
          color: "white",
          textShadow: "6px 6px #757575",
        }}
      >
        ABOUT ME
      </h1>
      <div className="flex items-center justify-start w-auto p-4">
        <div className={"flex flex-col align-center justify-center gap-10"}>
          {AboutMeData.map((data, index) => (
            <div
              key={index}
              className="rounded-xl p-8 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg"
            >
              <h4 className="text-3xl font-bold mb-2">{data.title}</h4>
              <div className="text-gray-300">{data.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
