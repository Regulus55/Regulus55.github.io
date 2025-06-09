import { ContentsTitleProps } from "../../utils/types";

// 컨텐츠  제목
const ContentsTitle = ({ children, className }: ContentsTitleProps) => {
  return (
    <h1
      className={`text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-grayShadow ${className}`}
    >
      {children}
    </h1>
  );
};

export default ContentsTitle;
