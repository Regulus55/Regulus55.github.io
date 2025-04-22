import { ProfileData, ProfileIcon } from "../data/ProfileData";

const Profile = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full w-full max-w-7xl h-full p-10 rounded-3xl mt-40">
      <h1
        className="text-7xl font-bold text-white ml-8 mb-4"
        style={{
          color: "white",
          WebkitTextStroke: "2px gray",
          textShadow: "5px 5px 5px rgba(0, 0, 0, 1)",
        }}
      >
        PROFILE
      </h1>
      <div
        className="flex items-center justify-start w-full p-8 rounded-3xl"
        style={{ backgroundColor: "rgba(117, 117, 117, 0.43)" }}
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
              const Icon = ProfileIcon[key];

              return (
                <div
                  key={key}
                  className="flex items-center gap-2 mb-2 text-white"
                >
                  {typeof Icon === "function" && <Icon size={24} />}
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
