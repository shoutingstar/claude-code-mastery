# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 프로젝트 개요

**개발자 웹 이력서** - 개인 포트폴리오 및 이력서를 소개하는 현대적이고 반응형 웹사이트

---

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어 (모든 설명, 질문, 피드백은 한국어로)
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

---

## 기술 스택

- **마크업**: HTML5
- **스타일링**: CSS3, Tailwind CSS
- **인터랙션**: JavaScript (Vanilla)
- **버전 관리**: Git
- **배포**: GitHub Pages / Netlify

---

## 프로젝트 구조

```
claude-code-mastery/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/
│   └── resume.pdf
├── README.md
├── CLAUDE.md
├── ROADMAP.md
└── .gitignore
```

---

## 개발 명령어

### 로컬 개발 서버 실행
```bash
# Python 3 사용
python -m http.server 8000

# 또는 Node.js Live Server 사용
npx live-server

# 또는 VSCode Live Server 확장 사용
# 우클릭 -> Open with Live Server
```

### Tailwind CSS 빌드 (선택: npm 설정 시)
```bash
# 설치
npm install -D tailwindcss

# 개발 모드 (파일 변경 감지)
npx tailwindcss -i ./css/input.css -o ./css/style.css --watch

# 프로덕션 빌드
npx tailwindcss -i ./css/input.css -o ./css/style.css --minify
```

### 배포
```bash
# 로컬에서 빌드된 파일 확인
# GitHub Pages: main 브랜치의 루트 또는 docs 폴더에 파일 배포
# Netlify: 리포지토리 연결 후 자동 배포
```

---

## 개발 워크플로우

### 1단계: 구조 설계
- HTML 마크업 작성
- 시맨틱 HTML5 요소 사용

### 2단계: 레이아웃 개발
- Tailwind CSS로 스타일링
- 반응형 디자인 (Mobile-first)

### 3단계: 인터랙션 추가
- Vanilla JavaScript로 기능 구현
- 부드러운 애니메이션 추가

### 4단계: 최적화 및 배포
- 이미지 최적화
- 성능 체크 (Lighthouse)
- SEO 검토

---

## 프로젝트 아키텍처

### HTML 구조
- **Header**: 네비게이션, 로고
- **Hero Section**: 자기소개
- **About Section**: 약력, 경력
- **Skills Section**: 기술 스택
- **Portfolio Section**: 프로젝트 목록
- **Contact Section**: 연락처 폼
- **Footer**: 소셜 미디어 링크

### CSS 조직
- Tailwind CSS 유틸리티 클래스 활용
- 커스텀 스타일은 `style.css`에 작성
- 일관된 색상 팔레트 사용

### JavaScript 구조
- 모듈화된 함수 (기능별 정리)
- 이벤트 리스너 관리
- DOM 조작 최소화

---

## 주요 개발 포인트

### 반응형 디자인
- Tailwind의 반응형 접두사 활용 (`sm:`, `md:`, `lg:`, `xl:`)
- 모바일 우선 접근법

### 성능 최적화
- 이미지 Lazy Loading (Intersection Observer)
- 불필요한 라이브러리 최소화
- CSS/JS 파일 최소화

### 접근성 (A11y)
- 시맨틱 HTML 사용
- ARIA 속성 적절히 활용
- 키보드 네비게이션 지원

### SEO
- 메타 태그 설정
- OG 태그 추가
- 구조화된 데이터 (Schema.org)

---

## 자주 수정되는 부분

### 이력서 콘텐츠 (`index.html`)
- 개인정보
- 경력사항
- 기술 스택
- 프로젝트 정보
- 연락처

### 스타일링 (`css/style.css`)
- 색상 팔레트
- 타이포그래피
- 애니메이션 효과
- 커스텀 컴포넌트

### 기능 (`js/script.js`)
- 네비게이션 토글
- 스크롤 애니메이션
- 폼 검증
- 동적 콘텐츠

---

## Git 커밋 메시지 규칙

```
[타입]: 설명

예시:
feat: 히어로 섹션 추가
fix: 모바일 메뉴 토글 버그 수정
style: Tailwind 클래스 정렬
docs: README 업데이트
```

---

## 성공 기준

✅ 모든 주요 섹션이 포함된 완전한 웹 이력서
✅ 모든 기기에서 완벽하게 표시되는 반응형 디자인
✅ 부드러운 사용자 경험과 인터랙션
✅ 검색 엔진 최적화
✅ 빠른 로딩 속도 (Lighthouse 점수 90 이상)

---

**마지막 업데이트**: 2026-03-03
