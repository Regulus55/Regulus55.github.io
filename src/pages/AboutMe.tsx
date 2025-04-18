import { AboutMeData } from "../data";

const AboutMe = () => {
  return (
    <>
      <div className={"flex flex-col align-center justify-center"}>
        About Me
      </div>
      <div className={"flex flex-col align-center justify-center"}>
        {AboutMeData.map((a) => (
          <>
            <div>{a.title}</div>
            <div>{a.content}</div>
          </>
        ))}
      </div>
    </>
  );
};

export default AboutMe;
