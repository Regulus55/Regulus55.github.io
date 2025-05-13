import { ProjectDetail } from "../../utils/types";

export const GushopDetail: ProjectDetail = {
  slug: "gushop",
  title: "GU-Shop",
  subtitle: "대학생을 위한 갤럭시 제품 판매 사이트",
  period: "2024.10 ~ 2025.01",
  image: "images/project/gushop/main.png",
  overview: [
    {
      title: "프로젝트 기획 이유",
      content: ["쇼핑몰 사이트에 주로 들어가는 정렬, 필터링 기능 구현과 RESTfulAPI 연동 연습을 하기 위함"]
    },
    {
      title: "프로젝트 기간",
      content: ["2024.10 ~ 2025.01"]
    },
    {
      title: "개발스택",
      content: [
        "프론트엔드 : React, JavaScript, TypeScript",
        "스타일링 : Tailwind CSS",
        "폼관리 : React Hook Form",
        "라이브러리 : Swiper, React Lazy Load Image Component"
      ]
    },
    {
      title: "특징",
      content: [
        "삼성 제품들 중 대학생들에게 필요한 제품만 진열",
        "일반 사용자와 관리자 기능을 구분하여 제작 (관리자는 상품 등록/수정/삭제 가능)",
        "RESTful API 기반으로 백엔드 개발자와 협업하여 구현 – 로그인, 회원가입, 프로필 관리, 상품 검색 등 다양한 기능 구현",
        "페이지네이션 및 필터 기능 구현",
        "비밀번호 찾기 시 이메일 인증 기능 포함",
      ],

    },
    {
      title: "추후 추가할 내용",
      content: [
        "관리자 페이지에서 UI 개선",
        "장바구니 및 결제기능",
        "상품의 특징을 더 세세히 구현 필요"
      ]
    },
  ],
  preview: [
    {
      title: "",
      image: [],
      content: []
    }
  ]
};
