import { AboutMeData } from "../data";

const AboutMe = () => {
  return (
    <div className="relative flex flex-col items-start justify-center w-full max-w-7xl h-full p-10 rounded-3xl">
      <h1 className="text-7xl font-bold text-white ml-8 mb-4"
        style={{
          color: "white",
          textShadow: "6px 6px #757575",
        }}>
        ABOUT ME
      </h1>
      <div
        className="flex items-center justify-start w-auto p-8 rounded-3xl"
       
      >
        <div className={"flex flex-col align-center justify-center gap-8"}>
          {AboutMeData.map((data, index) => (
            <div key={index}  style={{ backgroundColor: "#333354" }} className="rounded-xl p-8">
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
