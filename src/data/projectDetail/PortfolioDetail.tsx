import { ProjectDetail } from "../../utils/types";

export const PortfolioDetail: ProjectDetail = {
  slug: "portfolio",
  title: "포트폴리오",
  subtitle: "웹으로 만든 내가 만든 내 세상",
  period: "2025.04 ~ 진행중",
  image: "images/project/portfolio/main.PNG",
  overview: [
    {
      title: "프로젝트 기획 이유",
      content: ["나만의 사이트를 만들어 나의 프로젝트와 기술을 보여주기 위해 만들었습니다."]
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
        "라이브러리 : React Scroll Parallax, React Toastify"
      ]
    },
    {
      title: "특징",
      content: [
        "실제 주식 데이터 기반으로 모의주식투자 가능",
        "스마트폰으로 접속할 상황이 많을것으로 예상하여 모바일화면을 기준으로 제작중.",
        "주식의 현재 가격과 수량을 단순히 곱해 구매하여, 모의계좌에서 해당 금액만큼 빼는 단순한 방식으로 기획.",
        "Firebase 로 백엔드 구성 (추후 모의계좌, 채팅 기능 등 데이터베이스도 Firebase로 구성예정)",
        "토스 증권, Stock’er (모의 주식 투자 어플) 등의 어플을 참고하여 제작중."
      ]
    },
    {
      title: "아쉬운 점",
      content: [
        "데이터 호출의 지연과 정확도의 문제, API 호출 한도 존재, 주봉 이상의 데이터 불러오기 불가 등 Finhub, Twelve Data 의 무료 API 사용 제한",
        "실제 주식 시장에서 발생하는 수수료, 빠른 가격 변동, 매도/매수의 양에 따른 가격 차이 등을 반영하지 못한 점"
      ]
    },
    {
      title: "추후 추가할 내용",
      content: [
        "주식의 현재가를 기준으로 모의계좌의 잔액 내에서 주식을 구입하는 기능",
        "나의 총 자산, 잔고, 주식 등을 볼 수 있는 기능과 페이지",
        "총 자산을 기준으로 한 랭킹, 유저 간 채팅 기능, 커뮤니티 등",
        "세부적인 UI 개선"
      ]
    },
    {
      title: "추후 개선할 내용",
      content: [
        "현재 영어로 된 주식 심볼로만 검색이 가능하나, 추후 한글로 검색해도 자동으로 맞는 주식 심볼을 검색해주는 기능을 추가할 예정",
        "실제 주식 거래의 복잡한 요소들을 반영하여 더 현실감 있는 투자 환경이 되도록 개선할 예정"
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
