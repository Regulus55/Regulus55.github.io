
import { ReactNode } from "react";

interface BaseIconButtonProps {
  onClick?: () => void;
  href?: string; 
  children: ReactNode;
  title?: string;
}

const BaseIconButton = ({ onClick, href, children, title }: BaseIconButtonProps) => {
  const commonClass =
    "w-12 h-12 rounded-full flex items-center justify-center shadow-xl bg-white border-4 border-gray-700";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel=""
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
