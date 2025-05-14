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
  portfolio: {
    link: "regulus55.github.io",
    github: "github.com/Regulus55/Regulus55.github.io",
    blog: "velog.io/@regulus/portfolio-post",
  },
  narak: {
    link: "narak-9a858.web.app",
    github: "github.com/Regulus55/narak",
    blog: "",
  },
  gushop: {
    link: "",
    github: "github.com/Regulus55/gu-shop",
    blog: "",
  },
} as const;


export const FloatingDetailData = (slug: string) => {
  const project = projectLinks[slug as keyof typeof projectLinks];

  if (!project) return [];

  const data = [
    ...(project.link ? [{
      key: "link",
      title: "링크",
      value: project.link,
      type: "url",
    }] : []),
    ...(project.github ? [{
      key: "github",
      title: "깃허브",
      value: project.github,
      type: "url",
    }] : []),
    ...(project.blog ? [{
      key: "blog",
      title: "블로그",
      value: project.blog,
      type: "url",
    }] : []),
  ];

  return data;
};



export const FloatingHomeData = [
    { key: "blog", title: "블로그", value: "velog.io/@regulus", type: "url" },
    { key: "github", title: "깃허브", value: "github.com/Regulus55", type: "url" },
    { key: "top", title: "맨위로", value: "regulus55.github.io", type: "scroll" },
]