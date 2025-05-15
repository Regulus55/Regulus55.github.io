import { useRef } from "react";

export type SectionName = "profile" | "about" | "skills" | "project" | "contact";

export const useScrollToSection = () => {
    const profileRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const sectionRefs: Record<SectionName, React.RefObject<HTMLDivElement | null>> = {
        profile: profileRef,
        about: aboutRef,
        skills: skillsRef,
        project: projectRef,
        contact: contactRef,
    };

    const scrollToSection = (section: SectionName) => {
        const ref = sectionRefs[section];
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return { sectionRefs, scrollToSection };
};

