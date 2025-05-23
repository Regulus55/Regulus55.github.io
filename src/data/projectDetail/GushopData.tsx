import { ProjectDetail } from "../../utils/types";

export const GushopData: ProjectDetail = {
  slug: "gushop",
  title: "GU-Shop",
  subtitle: "대학생을 위한 갤럭시 제품 판매 사이트",
  period: "2024.10 ~ 2025.01",
  image: "/images/project/gushop/main.webp",
  overview: [
    {
      title: "프로젝트 기획 이유",
      content: [
        "쇼핑몰 사이트에 주로 들어가는 정렬, 필터링 기능 구현과 RESTfulAPI 연동 연습을 하기 위함",
      ],
    },
    {
      title: "프로젝트 기간",
      content: ["2024.10 ~ 2025.01"],
    },
    {
      title: "개발스택",
      content: [
        "프론트엔드 : React, JavaScript, TypeScript",
        "스타일링 : Tailwind CSS",
        "폼관리 : React Hook Form",
        "라이브러리 : Swiper, React Lazy Load Image Component",
      ],
    },
    {
      title: "특징",
      content: [
        "삼성 제품들 중 대학생들에게 필요한 제품만 진열",
        "일반 사용자와 관리자 기능을 구분하여 제작 (관리자는 상품 등록/수정/삭제 가능)",
        "RESTful API 기반으로 백엔드 개발자와 협업하여 로그인, 회원가입, 프로필 관리, 상품 검색 등 다양한 기능 구현",
        "페이지네이션 및 필터 기능 구현",
        "비밀번호 찾기 시 이메일 인증 기능 포함",
      ],
    },
    {
      title: "추후 추가할 내용",
      content: [
        "관리자 페이지 UI 개선",
        "장바구니 및 결제기능",
        "상품의 특징을 더 세세히 구현 필요",
      ],
    },
  ],
  preview: [
    {
      title: "메인페이지",
      image: ["/images/project/gushop/home.png"],
      content: [""],
    },
    {
      title: "네비게이션 바",
      image: ["/images/project/gushop/header.png"],
      content: ["Headless UI 를 이용한 navbar 구현"],
    },
    {
      title: "슬라이드",
      image: [
        "/images/project/gushop/newitems2.png",
        "/images/project/gushop/swiper.gif",
      ],
      content: ["Swiper 를 이용한 슬라이드 기능"],
    },
    {
      title: "메인 이미지 슬라이드",
      image: ["/images/project/gushop/home.gif"],
      content: ["(드래그하여 넘기기, 자동 넘김, 순환 슬라이드)"],
    },
    {
      title: "회원가입",
      image: [
        "/images/project/gushop/signup.png",
        "/images/project/gushop/signup2.png",
      ],
      content: ["회원가입 시 이메일 인증 기능"],
    },
    {
      title: "이메일 인증 완료 후 회원가입 가능",
      image: ["/images/project/gushop/signup3.png"],
      content: [""],
    },
    {
      title: "Swagger 기반 API 연동",
      image: [
        "/images/project/gushop/api.png",
        "/images/project/gushop/api2.png",
        "/images/project/gushop/api3.png",
      ],
      content: ["API 명세서를 기반으로 axios를 활용한 서버 통신 및 기능 구현"],
    },
    {
      title: "상품 관리 페이지",
      image: ["/images/project/gushop/productlist2.png"],
      content: ["admin page 의 제품 리스트"],
    },
    {
      title: "상품 페이지 (관리자)",
      image: [
        "/images/project/gushop/addproduct.png",
        "/images/project/gushop/editproduct.png",
      ],
      content: ["admin 계정의 제품 등록페이지와 제품 수정페이지"],
    },
    {
      title: "상품 페이지 (일반 사용자)",
      image: [
        "/images/project/gushop/shopall.png",
        "/images/project/gushop/pagination.png",
      ],
      content: [
        "한 페이지에 표시할 아이템 수를 설정하는 기능과 페이지네이션 구현",
      ],
    },
    {
      title: "상품 상세페이지",
      image: ["/images/project/gushop/detail.png"],
      content: [""],
    },
    {
      title: "프로필 페이지",
      image: [
        "/images/project/gushop/profile.png",
        "/images/project/gushop/editmyprofile.png",
      ],
      content: ["로그인 이후 프로필 페이지에서 유저정보 확인 가능"],
    },
  ],
};
