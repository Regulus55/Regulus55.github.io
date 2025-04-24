import { toast } from "react-toastify";
import { ProfileData, ProfileIcon } from "../data/ProfileData";

type IconProps = {
  size?: number;
  className?: string;
};

const Profile = () => {
  return (
    <div className="relative flex flex-col items-start justify-center w-full max-w-7xl h-full p-10 rounded-3xl mt-52">
      <h1
        className="text-7xl font-bold text-white ml-8 mb-4"
        style={{
          textShadow: "6px 6px #757575",
        }}
      >
        PROFILE
      </h1>
      <div
        className="flex items-center justify-start w-auto p-8 rounded-3xl"
        style={{ backgroundColor: "#333354" }}
      >
        <div className="flex items-left bg-white rounded-full ml-10 mr-20 border">
          <img
            src="/images/내달사진.jpg"
            alt="pic"
            className="h-60 w-60 rounded-full p-4"
          />
        </div>
        <div>
          <div className={"flex flex-col items-left justify-center text-3xl"}>
            {ProfileData.map(({ key, value, type }) => {
              const Icon = ProfileIcon[key] as React.ComponentType<IconProps>

              const handleClick = () => {
                if (type === "copy") {
                  navigator.clipboard.writeText(value);
                  toast.success("이메일이 클립보드에 복사되었습니다!");
                }
              };

              let content: React.ReactNode;

              if (type === "url") {
                content = (
                  <a
                    href={`https://${value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {value}
                  </a>
                );
              } else if (type === "copy") {
                content = (
                  <button onClick={handleClick} className="hover:underline">
                    {value}
                  </button>
                );
              } else {
                content = <span>{value}</span>;
              }

              return (
                <div key={key} className="flex items-center gap-2 mb-2 text-white">
                  {Icon && <Icon size={24} className="mr-4" />} 
                  {content}
                </div>
              );
            })}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;




