import { IconType } from "react-icons";
import { FaGithub, FaChevronUp } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

export const FloatingIcon: Record<string, IconType> = {
    github: FaGithub,
    blog: SiVelog,
    top: FaChevronUp,
};

export const FloatingData = [
    { key: "blog", name: "블로그", value: "velog.io/@regulus", type: "url" },
    { key: "github", name: "깃허브", value: "github.com/Regulus55", type: "url" },
    { key: "top", name: "맨위로", value: "regulus55.github.io", type: "scroll" },
]
