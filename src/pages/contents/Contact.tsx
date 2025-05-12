import React from "react";
import { toast } from "react-toastify";
import { ProfileData, ProfileIcon } from "../../data/ProfileData";
import Glassmorphism from "../../components/wrapper/Glassmorphism";

type IconProps = {
  size?: number;
  className?: string;
};

const Contact = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mb-96">
      <Glassmorphism className="w-auto h-full px-20 pt-12 pb-20">
        <h1 className="text-7xl font-bold text-white mb-4 text-grayShadow">
          CONTACT
        </h1>

        {ProfileData.slice(1, 3).map(({ key, value, title }) => {
          const Icon = ProfileIcon[key] as React.ComponentType<IconProps>;

          const handleClick = () => {
            navigator.clipboard.writeText(value);
            toast("클립보드에 복사되었습니다");
          };

          return (
            <div
              key={key}
              className="flex items-center justify-center gap-2 mb-2 text-xl text-gray-600"
            >
              <Icon size={24} className="mr-4" />
              <button onClick={handleClick} title={title} className="hover:text-gray-500">
                {value}
              </button>
            </div>
          );
        })}
      </Glassmorphism>
    </div>
  );
};

export default Contact;
