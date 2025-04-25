import { toast } from "react-toastify";
import { ProfileData, ProfileIcon } from "../data/ProfileData";
import { IconBaseProps } from "react-icons";
import React from "react";

type IconProps = {
  size?: number;
  className?: string;
};


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

      {ProfileData.slice(1, 3).map(({ key, value }) => {
        const Icon = ProfileIcon[key] as React.ComponentType<IconProps>;

        const handleClick = () => {
          navigator.clipboard.writeText(value);
          toast("클립보드에 복사되었습니다")
        };

        return (
          <div key={key} className="flex items-center justify-center gap-2 mb-2 text-xl text-white">
            <Icon size={24} className="mr-4" />
            <button onClick={handleClick} className="hover:underline">
              {value}
            </button>
          </div>
        )
      })}
    </div>
  );
};

export default Contact;


