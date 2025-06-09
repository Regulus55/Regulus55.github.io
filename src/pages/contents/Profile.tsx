import { toast } from "react-toastify";
import { ProfileData, ProfileIcon } from "../../data/ProfileData";
import { ContentsTitle, Glassmorphism } from "../../components";
import { ReactIconProps } from "../../utils/types";

const Profile = () => {
  return (
    <div className="relative flex flex-col items-center lg:items-start justify-center w-full h-full max-w-7xl p-6 rounded-3xl mt-52 mb-40">
      <div className="items-start">
        <ContentsTitle className="ml-3 sm:ml-6 mb-6">PROFILE</ContentsTitle>
        <Glassmorphism
          className={`relative flex flex-col items-center justify-start w-auto px-10 py-6
                                  sm:px-20 sm:py-10
                                  lg:flex-row lg:pl-6 lg:pr-60 lg:px-0 lg:py-10
        `}>
          <div
            className={`flex items-left bg-white rounded-full border mb-10
                         lg:ml-10 lg:mr-20 lg:mb-0
          `}>
            <img
              src="/images/regulus.webp"
              alt=""
              className={`h-44 w-44 rounded-full p-4
                          lg:w-52 lg:h-52
                          xl:h-60 xl:w-60
              `}
            />
          </div>
          <div className="flex flex-col items-left justify-center text-3xl">
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
                  className={`flex items-center sm:gap-2 mb-3 sm:mb-2 text-white text-xl
                            sm:text-2xl lg:text-3xl
                  `}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-4" />
                  {content}
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-white/20 blur-2xl pointer-events-none" />
        </Glassmorphism>
      </div>
    </div>
  );
};

export default Profile;
