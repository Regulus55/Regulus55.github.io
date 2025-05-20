import React from "react";
import { toast } from "react-toastify";
import { ProfileData, ProfileIcon } from "../../data";
import { ContentsTitle, Glassmorphism } from "../../components";
import { ReactIconProps } from "../../utils/types";

const Contact = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mb-96">
      <Glassmorphism className="w-auto h-full px-20 pt-12 pb-20">
        <ContentsTitle className="mb-4">CONTACT</ContentsTitle>

        {ProfileData.slice(1, 3).map(({ key, value, title }) => {
          const Icon = ProfileIcon[key] as React.ComponentType<ReactIconProps>;

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
              <button
                onClick={handleClick}
                title={title}
                className="hover:text-gray-500"
              >
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
