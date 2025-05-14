import { IconType } from "react-icons";
import { FaGithub, FaChevronUp ,FaLink} from "react-icons/fa";
import { SiVelog } from "react-icons/si";

export const FloatingIcon: Record<string, IconType> = {
    github: FaGithub,
    blog: SiVelog,
    top: FaChevronUp,
    link: FaLink
};

export const projectLinks = {
  portfolio: "regulus55.github.io",
  narak: "narak-9a858.web.app",
  gushop: "",
} as const;

export const FloatingDetailData = (slug: string) => {
  const url = projectLinks[slug as keyof typeof projectLinks];

  const data = [
    ...(url ? [{
      key: "link",
      title: "링크",
      value: url,
      type: "url",
    }] : []),
    { key: "github", title: "깃허브", value: "github.com/Regulus55", type: "url" },
    { key: "blog", title: "블로그", value: "velog.io/@regulus", type: "url" },
  ];

  return data;
};


export const FloatingHomeData = [
    { key: "blog", title: "블로그", value: "velog.io/@regulus", type: "url" },
    { key: "github", title: "깃허브", value: "github.com/Regulus55", type: "url" },
    { key: "top", title: "맨위로", value: "regulus55.github.io", type: "scroll" },
]