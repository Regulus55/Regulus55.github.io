import { ProjectDetail } from "../../utils/types";

export const NarakDetail: ProjectDetail = {
  slug: "narak",
  title: "Narak - 나락",
  subtitle: "친구들과 주식투자 연습을 위한 모의주식투자 사이트",
  period: "2024.11 ~ 진행중",
  image: "images/project/narak/main.png",
  overview: [
    {
      title: "프로젝트 기획 이유",
      content: [
        "주식투자를 좋아하는 친구들과 함께 모의주식으로 투자 실력을 겨루기 위함",
      ],
    },
    {
      title: "프로젝트 기간",
      content: ["2024.11 ~ 현재 진행중"],
    },
    {
      title: "개발스택",
      content: [
        "프론트엔드 : React, JavaScript, TypeScript",
        "백엔드(현재 인증기능만) : Firebase",
        "스타일링 : Tailwind CSS",
        "상태관리 : Tanstack Query, Context API",
        "폼관리 : React Hook Form",
        "주식 데이터 API : Finhub, Twelve Data",
      ],
    },
    {
      title: "특징",
      content: [
        "실제 주식 데이터 기반으로 모의주식투자 가능",
        "스마트폰으로 접속할 상황이 많을것으로 예상하여 모바일화면을 기준으로 제작중.",
        "주식의 현재 가격과 수량을 단순히 곱해 구매하여, 모의계좌에서 해당 금액만큼 빼는 단순한 방식으로 기획.",
        "Firebase 로 백엔드 구성 (추후 모의계좌, 채팅 기능 등 데이터베이스도 Firebase로 구성예정)",
        "토스 증권, Stock’er (모의주식투자 어플) 등의 어플을 참고하여 제작중.",
      ],
    },
    {
      title: "아쉬운 점",
      content: [
        "데이터 호출의 지연과 정확도의 문제, API 호출 한도 존재, 주봉 이상의 데이터 불러오기 불가 등 Finhub, Twelve Data 의 무료 API 사용 제한",
        "실제 주식 시장에서 발생하는 수수료, 빠른 가격 변동, 매도/매수의 양에 따른 가격 차이 등을 반영하지 못한 점",
      ],
    },
    {
      title: "추후 추가할 내용",
      content: [
        "주식의 현재가를 기준으로 모의계좌의 잔액 내에서 주식을 구입하는 기능",
        "나의 총 자산, 잔고, 주식 등을 볼 수 있는 기능과 페이지",
        "총 자산을 기준으로 한 랭킹, 유저 간 채팅 기능, 커뮤니티 등",
        "전체적인 UI 세부 개선",
      ],
    },
    {
      title: "추후 개선할 내용",
      content: [
        "현재 영어로 된 주식 심볼로만 검색이 가능하나, 추후 한글로 검색해도 자동으로 맞는 주식 심볼을 검색해주는 기능을 추가할 예정",
        "실제 주식 거래의 복잡한 요소들을 반영하여 더 현실감 있는 투자 환경이 되도록 개선할 예정",
      ],
    },
  ],
  preview: [
    {
      title: "데스크탑 메인페이지",
      image: ["/images/project/narak/desktopmain.png"],
      content: [
        "Narak 은 방패에 나락 글자를 넣은것으로 나락을 방지한다는 뜻입니다",
      ],
    },
    {
      title: "메인페이지",
      image: ["/images/project/narak/home.png"],
      content: [""],
    },
    {
      title: "",
      image: ["/images/project/narak/stockpage.png"],
      content: ["주식 상세페이지"],
    },
    {
      title: "",
      image: ["/images/project/narak/exchangerate.png"],
      content: [
        "타 주식 사이트에서 해외 주식 거래 시, 현재 환율을 빠르게 볼 수 있는 방법이 없어 불편함을 느꼈고, 주식 상세 페이지에서 바로 환율을 확인 할 수 있도록 만들었습니다. (현재 환율은 목데이터 입니다)",
      ],
    },
    {
      title: "주식심볼 검색창",
      image: ["/images/project/narak/searchstock.png"],
      content: ["NVDA, TSLA 등 주식 심볼로 주식검색 가능합니다"],
    },
    {
      title: "유저",
      image: ["/images/project/narak/localstorage.png"],
      content: [
        "주식 검색 시 검색기록 란에 기록이 남습니다. localStorage (visitedPages) 와 연동하여 추후 사이트 방문시에도 유지됨",
      ],
    },
    {
      title: "유저",
      image: ["/images/project/narak/user.png"],
      content: ["파이어베이스로 만든 로그인, 로그아웃, 프로필 등 기능"],
    },
  ],
};
