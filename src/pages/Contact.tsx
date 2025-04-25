import { toast } from "react-toastify";
import { ProfileData, ProfileIcon } from "../data/ProfileData";
import { IconBaseProps } from "react-icons";




const Contact = () => {
  const PhoneIcon = ProfileIcon.phone as React.ComponentType<IconBaseProps>;
  const EmailIcon = ProfileIcon.email as React.ComponentType<IconBaseProps>;

  return (
    <div className="flex flex-col items-center justify-center w-full w-full max-w-7xl h-full p-10 rounded-3xl">
      <h1
        className="text-7xl font-bold text-white  mb-4"
        style={{
          textShadow: "6px 6px #757575",
        }}
      >
        CONTACT
      </h1>

      <div className="flex items-center gap-4 text-xl"><PhoneIcon />
        <button
          className="hover:underline"
          onClick={() => {
            navigator.clipboard.writeText(ProfileData[1].value)
            toast("클립보드에 복사되었습니다")
          }}>
          {ProfileData[1].value}
        </button>
      </div>
      <div className="flex items-center gap-4 text-xl"><EmailIcon /> 
      <button
          className="hover:underline"
          onClick={() => {
            navigator.clipboard.writeText(ProfileData[1].value)
            toast("클립보드에 복사되었습니다")
          }}>
          {ProfileData[2].value}
        </button>
        </div>
    </div>
  );
};

export default Contact;

