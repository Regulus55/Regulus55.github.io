
# 포트폴리오

나만의 프로젝트와 기술을 시각적으로 보여주는 포트폴리오 웹사이트입니다.  
Parallax와 그라데이션 효과를 활용하여 우주에서 지상으로 내려오는 듯한 흐름을 연출했습니다.



## 프로젝트 개요

- **프로젝트명**: 포트폴리오 웹사이트
- **개발 기간**: 2024.11.30 ~ 현재 진행중
- **기획 의도**: 나의 프로젝트, 기술 역량, 정보를 시각적으로 소개할 수 있는 사이트 제작



## 주요 기능

- 스크롤에 따라 우주 → 지상으로 내려오는 느낌을 주는 레이아웃 구성  
- React Scroll Parallax를 활용해 배경의 별 이미지가 서로 다른 속도로 움직이는 시각 효과 구현
- ScrollReveal을 사용해 스크롤 시 요소들이 자연스럽게 등장하고, Glassmorphism 기법을 적용해 반투명 배경과 블러 효과 구현
- Zustand를 사용해 테마 배경 색상을 전역 상태로 관리 (예: day sky, sunset sky)  
- 프로필 섹션에서 이메일, 전화번호 클릭 시 Clipboard API (`navigator.clipboard.writeText()`)를 이용한 클립보드 복사 기능 제공  



## 기술 스택

| 구분            | 사용 기술                                                            |
|-----------------|----------------------------------------------------------------------|
| **Frontend**     | React, JavaScript, TypeScript                                        |
| **Styling**      | Tailwind CSS                                                        |
| **State**        | Zustand                                                              |
| **Library**      | React Scroll Parallax, ScrollReveal, React Toastify                |



## 향후 계획 및 아쉬운 점

### 향후 계획
- Hero Section에 들어갈 커버 이미지 제작
- 반응형 UI 구현
- Footer 영역의 산/구름 이미지에 Parallax 효과 적용
- 전체적인 UI 세부 개선

###  아쉬운 점
- 기획 단계에서 계획했던 항성, 인공위성 등 배경 이미지 적용 미흡
- ScrollReveal이 적용된 컴포넌트가 원위치로 돌아오기 전까지 Parallax가 정상 작동하지 않는 문제
- 고정된 배경 이미지가 스크롤 시 밀려나는 현상


## 실행 방법

```bash
git clone https://github.com/your-username/your-portfolio-repo.git

cd your-portfolio-repo

npm install

npm run dev
