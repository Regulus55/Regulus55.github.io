import { ProjectDetail } from "../../utils/types";

export const PortfolioDetail: ProjectDetail = {
  slug: "portfolio",
  title: "포트폴리오",
  subtitle: "웹으로 만들어진 내가 만든 내 세상",
  period: "2025.04 ~ 진행중",
  image: "images/project/portfolio/main.PNG",
  overview: [
    {
      title: "프로젝트 기획 이유",
      content: ["나만의 사이트를 만들어 나의 프로젝트와 기술을 보여주기 위함"]
    },
    {
      title: "프로젝트 기간",
      content: ["2024.11.30 ~ 현재 진행중"]
    },
    {
      title: "개발스택",
      content: [
        "프론트엔드 : React, JavaScript, TypeScript",
        "스타일링 : Tailwind CSS",
        "상태관리 : Zustand",
        "라이브러리 : React Scroll Parallax, Scroll Reveal, React Toastify"
      ]
    },
    {
      title: "특징",
      content: [
        "스크롤을 내리면 우주에서 땅으로 내려오는 느낌이 들 수 있도록 레이아웃 제작",
        "React Scroll Parallax, ScrollReveal, Glassmorphism 등의 라이브러리를 활용해 시각적 완성도를 높임",
        "프로젝트 카드를 클릭하면 상세 페이지로 이동 가능"
      ]
    },
    {
      title: "아쉬운 점",
      content: [
        "초기 기획 단계에서 항성, 인공위성 등 다양한 배경 이미지를 적용하려 했지만 반영하지 못한 점"
      ]
    },
    {
      title: "추후 추가할 내용",
      content: [
        "반응형 UI 지원",
        "Footer 영역의 산과 구름 이미지에도 Parallax 효과 적용",
        "Hero Section에 들어갈 커버 이미지 제작",
        "전체적인 UI 세부 개선"
      ]
    },
    {
      title: "추후 개선할 내용",
      content: [
        "ScrollReveal이 적용된 컴포넌트가 원위치로 돌아오기 전까지 Parallax가 정상 작동하지 않는 문제",
        "고정된 배경 이미지가 스크롤 시 밀려나는 현상"
      ]
    }
  ],
  preview: [
    {
      title: "메인페이지",
      image: ["/images/project/narak/나락메인.png"],
      content: ["포폴"]
    }
  ]
};
