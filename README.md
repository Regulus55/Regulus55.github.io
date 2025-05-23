
# 포트폴리오

나만의 프로젝트와 기술을 보여주는 포트폴리오 웹사이트입니다.  
Parallax와 그라데이션 효과를 활용하여 우주에서 지상으로 내려오는 듯한 느낌을 연출했습니다.

<br/>

## 프로젝트 개요

- **프로젝트명**: 포트폴리오 웹사이트
- **개발 기간**: 2024.11.30 ~ 현재 진행중
- **프로젝트 유형**: 개인프로젝트
- **기획 의도**: 나의 프로젝트, 기술 역량, 정보를 소개할 수 있는 사이트 제작

<br/>

## 주요 기능

- 스크롤에 따라 우주 → 지상으로 내려오는 느낌을 주는 레이아웃 구성  
- React Scroll Parallax를 활용해 배경의 별 이미지가 서로 다른 속도로 움직이는 시각 효과 구현
- ScrollReveal을 사용해 스크롤 시 요소들이 자연스럽게 등장하고, Glassmorphism 기법을 적용해 반투명 배경과 블러 효과 구현
- Zustand를 사용해 테마 배경 색상을 전역 상태로 관리  
- 프로필 섹션에서 이메일과 전화번호 클릭 시 Clipboard API (`navigator.clipboard.writeText()`)를 활용한 클립보드 복사 기능과, 복사 완료 시 Toastify를 이용한 알림 UI 제공

<br/>

## 기술 스택

| 구분            | 사용 기술                                                            |
|-----------------|----------------------------------------------------------------------|
| **Frontend**     | React, JavaScript, TypeScript                                        |
| **Styling**      | Tailwind CSS                                                        |
| **State**        | Zustand                                                              |
| **Library**      | React Scroll Parallax, ScrollReveal, React Toastify                |

<br/>

## 향후 계획

- [X] 배경 이미지가 보이지 않는 문제 해결
  - 해결 방법: `img`에 바로 `absolute`를 적용하지 않고, `div`로 감싸서 `div`에 `absolute`를 주는 방식으로 수정
  - 현재는 `img` 대신 `div`에 커스텀 그라데이션 효과를 적용하여 대체함
- [ ] Hero Section에 들어갈 커버 이미지 제작
- [X] 고정된 배경 이미지가 스크롤 시 밀려나는 현상 해결
  - 해결 방법: Parallax 컴포넌트에 에 적용되어있던 translate-y-[70vh] 제거
  - (translate-y 적용 시 내부 스크롤 계산과 충돌하여 레이아웃 문제가 발생한 것으로 추측되어, speed만 설정하고 위치 조정은 하지 않기로 함)
  - 상단 div 에 overflow-hidden 적용하여 hero section 으로 튀어나온 부분 보이지 않게 처리
  - Parallax 컴포넌트 div 의 h-full 을 h-auto 로 적용하여 컴포넌트의 높이를 불필요하게 늘리지 않고 이미지 높이에 맞게 조정함
- [ ] 반응형 UI 구현

<br/>

## 실행 방법

```bash
git clone https://github.com/Regulus55/Regulus55.github.io.git

cd Regulus55.github.io

npm install

npm start
