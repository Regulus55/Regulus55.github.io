import { toast } from "react-toastify";
import { ProfileData, ProfileIcon } from "../../data/ProfileData";
import { ContentsTitle, Glassmorphism } from "../../components";
import { ReactIconProps } from "../../utils/types";

const Profile = () => {
  return (
    <div className="relative flex flex-col items-start justify-center w-full h-full max-w-7xl p-10 rounded-3xl mt-52 mb-40">
      <ContentsTitle className="ml-6 mb-6">PROFILE</ContentsTitle>
      <Glassmorphism className="relative flex items-center justify-start w-auto pr-60 py-10 pl-6">
        <div className="flex items-left bg-white rounded-full ml-10 mr-20 border">
          <img
            src="/images/regulus.jpg"
            alt=""
            className="h-60 w-60 rounded-full p-4"
          />
        </div>
        <div className={"flex flex-col items-left justify-center text-3xl"}>
          {ProfileData.map(({ key, title, value, type }) => {
            const Icon = ProfileIcon[
              key
            ] as React.ComponentType<ReactIconProps>;

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
                  key={title}
                  href={`https://${value}`}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-200"
                >
                  {value}
                </a>
              );
            } else {
              content = (
                <button
                  key={title}
                  onClick={handleClick}
                  title={title}
                  className="hover:text-gray-200"
                >
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

        <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white/20 blur-2xl pointer-events-none" />
      </Glassmorphism>
    </div>
  );
};

export default Profile;
