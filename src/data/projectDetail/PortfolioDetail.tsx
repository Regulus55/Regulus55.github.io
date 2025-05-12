import { ProjectDetail } from "../../utils/types";

export const PortfolioDetail: ProjectDetail = {
  slug: "portfolio",
  title: "포트폴리오",
  subtitle: "친구들과 주식투자 연습을 위한 모의주식투자 사이트 (개인프로젝트)",
  period: "2025.04 ~ 진행중",
  image: "images/project/portfolio/main.PNG",
  stacks: [
    {
      title: "프론트엔드",
      stack: ["React", "JavaScript", "TypeScript"],
    },
    {
      title: "스타일링",
      stack: ["Tailwind CSS"],
    },
    {
      title: "상태 관리",
      stack: ["Tanstack Query", "Firebase"],
    },
    {
      title: "폼 관리",
      stack: ["React Hook Form"],
    },
    {
      title: "라이브러리",
      stack: ["React Scroll Parallax", "React Toastify"]
    }
  ],

};
