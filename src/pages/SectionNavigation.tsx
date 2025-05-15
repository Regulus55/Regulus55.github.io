import type { SectionName } from "../hooks/useScrollToSection";

interface SectionNavigationProps {
  scrollToSection: (section: SectionName) => void;
}

const SectionNavigation = ({ scrollToSection }: SectionNavigationProps) => {
  const sections: SectionName[] = ["profile", "about", "skills", "project", "contact"];

  return (
    <div className="flex flex-col items-start p-4">
      {sections.map((sectionName) => (
        <button
          key={sectionName}
          className="text-white text-lg font-bold bg-black/30 rounded-md p-2 my-0.5"
          onClick={() => scrollToSection(sectionName)}
        >
          {sectionName.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default SectionNavigation;
