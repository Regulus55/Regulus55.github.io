import { ReactNode } from "react";

interface BaseIconButtonProps {
  onClick?: () => void;
  href?: string;
  children: ReactNode;
  title?: string;
}

const BaseIconButton = ({
  onClick,
  href,
  children,
  title,
}: BaseIconButtonProps) => {
  const commonClass =
    "w-14 h-14 rounded-full flex items-center justify-center shadow-xl bg-white border-4 border-gray-700 hover:scale-105";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClass}
        title={title}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={commonClass} title={title}>
      {children}
    </button>
  );
};

export default BaseIconButton;
