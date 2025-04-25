import React from "react";
import { toast } from "react-toastify";
import { ProfileData, ProfileIcon } from "../data/ProfileData";

type IconProps = {
  size?: number;
  className?: string;
};

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-auto h-full p-10 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg">
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
          toast("클립보드에 복사되었습니다");
        };

        return (
          <div
            key={key}
            className="flex items-center justify-center gap-2 mb-2 text-xl text-white"
          >
            <Icon size={24} className="mr-4" />
            <button onClick={handleClick} className="hover:underline">
              {value}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
