# Portfolio Website

나의 프로젝트와 기술을 소개하는 포트폴리오 사이트입니다.  
우주에서 지상으로 내려오는 듯한 스크롤 레이아웃과 시각적 완성도를 높인 효과들이 특징입니다.

<br />

## Overview

### 1. 프로젝트 기획 이유
- 나만의 사이트를 만들어 나의 프로젝트와 기술을 소개하고자 기획했습니다.

### 2. 프로젝트 기간
- 2024.11.30 ~ 현재 진행중

### 3. 개발 스택
- **Frontend**: React, JavaScript, TypeScript  
- **Styling**: Tailwind CSS  
- **State Management**: Zustand  
- **Libraries**: React Scroll Parallax, ScrollReveal, React Toastify

### 4. 주요 특징
- 스크롤 시 우주 → 지상으로 이동하는 듯한 자연스러운 레이아웃 연출
- Parallax, ScrollReveal, Glassmorphism 등 다양한 시각 효과 사용
- 프로젝트 카드를 클릭하면 상세 페이지로 이동 가능

### 5. 아쉬운 점
- 초기 기획 단계에서 항성, 인공위성 등 다양한 배경 이미지를 반영하지 못함

### 6. 추후 추가할 내용
- Hero Section에 들어갈 커버 이미지 제작  
- 반응형 UI 지원  
- Footer 영역 산/구름 이미지에 Parallax 효과 적용  
- 전체적인 UI 세부 개선

### 7. 추후 개선할 내용
- ScrollReveal 적용 컴포넌트가 원위치 복귀 전까지 Parallax가 정상 작동하지 않는 문제  
- 고정된 배경 이미지가 스크롤 시 밀려나는 현상 해결

<br />

## Preview

### 배경 이미지  
<img src="./public/images/project/portfolio/back.png" alt="배경 이미지" width="600" />

### 메인 화면 (Hero Section)  
<img src="./public/images/project/portfolio/main.png" alt="메인 화면" width="600" />

### 프로파일  
- 이름, 전화번호, 이메일 클릭 시 클립보드 복사  
<img src="./public/images/project/portfolio/profile.png" alt="프로파일" width="600" />

### 어바웃미  
<img src="./public/images/project/portfolio/aboutme.png" alt="어바웃미" width="600" />

### 프로젝트 리스트  
- 프로젝트 클릭 시 상세 페이지 이동  
<img src="./public/images/project/portfolio/project.png" alt="프로젝트" width="600" />

### 컨택트 섹션  
- 하단 배경에 산과 구름 이미지 사용  
<img src="./public/images/project/portfolio/contact.png" alt="컨택트" width="600" />

### 프로젝트 상세 페이지  
<img src="./public/images/project/portfolio/detail.png" alt="상세 페이지" width="600" />

<br />

## 실행 방법

```bash
git clone https://github.com/your-username/your-portfolio-repo.git

cd your-portfolio-repo

npm install

npm run dev
