import { ProfileData } from "../data";

const Profile = () => {
  return (
    <>
      <div className={"flex flex-col align-center justify-center"}>Profile</div>
      <div className={"flex flex-col align-center justify-center"}>
        {Object.entries(ProfileData).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
