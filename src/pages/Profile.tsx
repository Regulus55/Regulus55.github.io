import { toast } from "react-toastify";
import { ProfileData, ProfileIcon } from "../data/ProfileData";

type IconProps = {
  size?: number;
  className?: string;
};

const Profile = () => {
  return (
    <div className="relative flex flex-col items-start justify-center w-full max-w-7xl h-full p-10 rounded-3xl mt-52">
      <h1 className="text-7xl font-bold text-white ml-6 mb-6 text-grayShadow">
        PROFILE
      </h1>
      <div className="relative flex items-center justify-start w-auto pr-60 py-10 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg p-6">
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
              const Icon = ProfileIcon[key] as React.ComponentType<IconProps>;

              const handleClick = () => {
                if (type === "copy") {
                  navigator.clipboard.writeText(value);
                  toast("클립보드에 복사되었습니다");
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
              } else {
                content = (
                  <button onClick={handleClick} className="hover:underline">
                    {value}
                  </button>
                );
              }

              return (
                <div
                  key={key}
                  className="flex items-center gap-2 mb-2 text-white"
                >
                  <Icon size={24} className="mr-4" />
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white/20 blur-2xl pointer-events-none" />
      </div>
    </div>
  );
};

export default Profile;
