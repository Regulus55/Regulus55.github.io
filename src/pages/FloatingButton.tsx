import BaseIconButton from "../components/common/BaseIconButton";
import { FloatingData, FloatingIcon } from "../data/FloatingData";
import React from "react";

type IconProps = {
  size?: number;
  className?: string;
};

const FloatingButton = () => {
  return (
    <div className="fixed bottom-8 right-4 flex flex-col z-50 gap-3">
      {FloatingData.map(({ key, value, name, type }) => {
        const Icon = FloatingIcon[key] as React.ComponentType<IconProps>;

        const props = {
          key,
          title: name,
          ...(type === "scroll"
            ? { onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) }
            : { href: `https://${value}` }),
        };

        return (
          <BaseIconButton {...props}>
            <Icon size={24} />
          </BaseIconButton>
        );
      })}
    </div>
  );
};

export default FloatingButton;
