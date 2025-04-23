import { ProfileData, ProfileIcon } from "../data/ProfileData";

type IconProps = {
  size?: number;
  className?: string;
};

const Profile = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full w-full max-w-7xl h-full p-10 rounded-3xl mt-40">
      <h1
        className="text-7xl font-bold text-white ml-8 mb-4"
        style={{
          color: "white",
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
          {Object.entries(ProfileData).map(([key, value]) => {
              const Icon = ProfileIcon[key] as React.ComponentType<IconProps>

              return (
                <div key={key} className="flex items-center gap-2 mb-2 text-white">
                <Icon size={24} className="mr-4"/>
                  <span>{value}</span>
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
