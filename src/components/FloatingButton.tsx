import React from "react";
import { useLocation } from "react-router-dom";
import BaseIconButton from "./common/BaseIconButton";
import { FloatingDetailData, FloatingHomeData, FloatingIcon, } from "../data/FloatingData";
import { ReactIconProps } from "../utils/types";


const FloatingButton = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const slug = pathname.replace("/", "");

  const floatingData = isHome ? FloatingHomeData : FloatingDetailData(slug);

  return (
    <div
      className={`fixed flex flex-col z-48 gap-3
      ${pathname === "/" ? "bottom-8 right-6" : "top-20 right-6"}
    `}
    >
      {floatingData.map(({ key, value, title, type }) => {
        const Icon = FloatingIcon[key] as React.ComponentType<ReactIconProps>;
        if (!Icon) return null;

        const props =
          type === "scroll"
            ? { onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) }
            : {
              href: `https://${value}`,
              target: "_blank",
              rel: "noopener noreferrer",
            };

        return (
          <BaseIconButton key={key} title={title} {...props}>
            <Icon className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6" />
          </BaseIconButton>
        );
      })}
    </div>
  );
};

export default FloatingButton;
