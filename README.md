# 👨‍💻 개발자 포트폴리오 웹사이트

현대적이고 반응형 웹 디자인의 프론트엔드 개발자 포트폴리오 사이트입니다.

## 🎯 프로젝트 개요

개인 이력서와 포트폴리오를 소개하는 단일 페이지 웹사이트(SPA)로, 다음과 같은 기능을 제공합니다:

- ✨ 모던하고 반응형인 사용자 인터페이스
- 🎨 Tailwind CSS 기반의 깔끔한 디자인
- ⚡ Vanilla JavaScript로 구현된 인터랙티브한 기능
- 📱 모바일, 태블릿, 데스크톱 모두 최적화
- 🔍 SEO 친화적 마크업

## 📦 기술 스택

| 분야 | 기술 |
|------|------|
| **마크업** | HTML5 |
| **스타일링** | Tailwind CSS (CDN), CSS3 |
| **인터랙션** | Vanilla JavaScript (ES6+) |
| **아이콘** | Font Awesome 6.4 |
| **폰트** | Google Fonts (Noto Sans KR) |
| **배포** | GitHub Pages / Netlify |

## 📂 폴더 구조

```
claude-code-mastery/
├── index.html              # 메인 HTML (8개 섹션)
├── css/
│   └── style.css          # 커스텀 스타일
├── js/
│   └── script.js          # 10개 기능 모듈 (Vanilla JS)
├── assets/
│   └── images/            # 이미지 디렉토리
├── .gitignore             # Git 제외 설정
├── README.md              # 프로젝트 문서
├── CLAUDE.md              # 개발 가이드
├── ROADMAP.md             # 6단계 개발 로드맵
└── resume.pdf             # 이력서 (선택사항)
```

## 🎨 8개 주요 섹션

### 1. **Header (네비게이션)**
- Sticky 네비게이션
- 스크롤 시 배경 전환
- 모바일 햄버거 메뉴

### 2. **Hero (히어로)**
- 프로필 사진
- 이름 & 직책 (타이핑 애니메이션)
- CTA 버튼 (포트폴리오, 연락처)

### 3. **About (소개)**
- 프로필 이미지
- 자기소개 텍스트
- **경력 타임라인** (2개 경력사항)

### 4. **Skills (기술)**
- 기술 배지 그리드
- **카테고리 필터** (Frontend, Backend, Tools)
- 8개 기술 항목

### 5. **Portfolio (포트폴리오)**
- 프로젝트 카드 (3개)
- **기술 필터** (React, Node.js, 모두보기)
- 카드 호버 오버레이

### 6. **Contact (연락처)**
- 이메일 폼 (FormSubmit 연동)
- 폼 유효성 검사
- 정규식 기반 검증

### 7. **Social (소셜)**
- 4개 SNS 플랫폼 카드 (GitHub, YouTube, Instagram, LinkedIn)
- 브랜드 색상 아이콘
- 호버 애니메이션 (scale-105, shadow)

### 8. **Footer (푸터)**
- 저작권 정보

## 🚀 시작하기

### 필수 조건
- 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- 로컬 HTTP 서버 (선택사항)

### 설치 및 실행

#### 방법 1: Python 3 사용
```bash
python -m http.server 8000
# 브라우저: http://localhost:8000
```

#### 방법 2: Node.js Live Server
```bash
npx live-server
# 자동으로 브라우저에서 http://localhost:8080 열림
```

#### 방법 3: VSCode Live Server 확장
1. VSCode에서 "Live Server" 확장 설치
2. `index.html` 우클릭
3. "Open with Live Server" 선택

## ⚙️ 기능 상세

### JavaScript 모듈 (10개)

| 모듈 | 설명 |
|------|------|
| `initNavbar()` | 스크롤 시 네비게이션 배경 전환 |
| `initMobileMenu()` | 모바일 햄버거 메뉴 토글 |
| `initSmoothScroll()` | 앵커 링크 부드러운 이동 |
| `initScrollAnimations()` | Intersection Observer로 진입 애니메이션 |
| `initScrollToTop()` | 스크롤 300px+ 시 상단 이동 버튼 표시 |
| `initSkillsFilter()` | 기술 카테고리 필터링 |
| `initPortfolioFilter()` | 프로젝트 기술 필터링 |
| `initTypingEffect()` | Hero 섹션 타이핑 애니메이션 |
| `initContactForm()` | 폼 유효성 검사 (이메일 정규식) |
| `initLazyLoading()` | 이미지 지연 로딩 |

### CSS 애니메이션
- `fadeInUp` - 스크롤 진입 애니메이션
- `blink` - 타이핑 커서 깜빡임
- `float` - 부상 효과
- `.delay-100/200/300` - 순차 애니메이션 딜레이

## 📊 성능 최적화

✅ **Throttling**: 스크롤 이벤트 최적화 (100ms)
✅ **IntersectionObserver**: 효율적인 애니메이션 감지
✅ **Lazy Loading**: 필요 시 이미지 로드
✅ **Smooth Scrolling**: 하드웨어 가속
✅ **모바일 First**: 반응형 디자인

## 🎯 Lighthouse 성능 목표

- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 95+

## 📱 반응형 디자인

Tailwind CSS의 반응형 접두사 사용:
- `sm:` (640px 이상)
- `md:` (768px 이상)
- `lg:` (1024px 이상)
- `xl:` (1280px 이상)

## 🔧 커스터마이징

### 색상 변경
`index.html`의 Tailwind 색상 클래스 변경:
- `indigo-600` → 다른 색상으로 변경 (예: `blue-600`)

### 콘텐츠 수정
1. `index.html`에서 텍스트 직접 편집
2. 이미지는 `assets/images/`에 저장 후 경로 업데이트
3. SNS 링크는 본인의 채널 URL로 변경

### 폼 설정
`index.html`의 `<form action="">` 속성을 수정:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
[Formspree](https://formspree.io)에서 무료 폼 ID 생성

## 📧 연락처 폼 설정 가이드

1. [Formspree.io](https://formspree.io) 접속
2. 이메일 주소로 가입
3. 새 폼 생성
4. 받은 `YOUR_FORM_ID` 복사
5. `index.html`의 form action 수정

## 🚀 배포

### GitHub Pages
1. GitHub 리포지토리 생성
2. 파일들을 main 브랜치로 push
3. Settings → Pages → main 브랜치 선택
4. `https://username.github.io/repository-name` 배포 완료

### Netlify
1. 리포지토리를 Netlify에 연결
2. Build command: (비워둠 - 정적 사이트)
3. Publish directory: `/` 또는 루트 디렉토리
4. Deploy 완료

## 🛠️ 개발 팁

### 섹션 추가
1. HTML에 새 섹션 추가
2. CSS에 필요한 스타일 작성
3. JavaScript에서 필요하면 이벤트 리스너 추가

### 필터 버튼 추가
```html
<!-- 필터 버튼 -->
<button class="skill-filter" data-category="new-category">New</button>

<!-- 필터 대상 -->
<div class="skill-badge" data-category="new-category">...</div>
```

### 폰트 변경
`index.html`의 Google Fonts 링크 수정:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

## 📄 라이선스

이 프로젝트는 개인 학습 및 포트폴리오 목적으로 자유롭게 사용할 수 있습니다.

## 📝 주의사항

- FormSubmit 연동 시 실제 이메일 주소 설정 필수
- 프로필 이미지는 `assets/images/`에 저장 권장
- 모바일 테스트는 Chrome DevTools에서 수행 (F12 → Toggle Device Toolbar)

## 🎓 학습 포인트

이 프로젝트에서 배울 수 있는 내용:
- HTML5 시맨틱 마크업
- Tailwind CSS 유틸리티 클래스
- Vanilla JavaScript (ES6+ 문법)
- 반응형 웹 디자인
- 성능 최적화 (Throttling, IntersectionObserver)
- 폼 유효성 검사
- SEO 최적화

---

**마지막 업데이트**: 2026-03-03
**버전**: 1.0.0
