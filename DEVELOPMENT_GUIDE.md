# TripPick v5.0.0 - 개발 구조 가이드

## 📋 프로젝트 개요
- **프로젝트명**: TripPick (한국 여행 상품 사전 예약 쇼핑몰)
- **버전**: v5.0.0
- **기술 스택**: Next.js 14, TypeScript, Tailwind CSS
- **배포**: Vercel (trippick.link)
- **저장소**: https://github.com/dasgddadqw231/trippcik

## 🛠 기술 스택 & 의존성

### 핵심 프레임워크
- **Next.js 14.2.5** - React 기반 풀스택 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크

### 주요 라이브러리
```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.38.0",        // 백엔드 (현재 미사용)
    "class-variance-authority": "^0.7.0",       // 컴포넌트 variant 관리
    "clsx": "^2.0.0",                           // 클래스명 조건부 처리
    "lucide-react": "^0.294.0",                 // 아이콘 라이브러리
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.47.0",               // 폼 관리 (현재 미사용)
    "tailwind-merge": "^2.0.0",                 // Tailwind 클래스 병합
    "tailwindcss-animate": "^1.0.7",            // CSS 애니메이션
    "zod": "^3.22.4",                          // 스키마 검증 (현재 미사용)
    "zustand": "^4.4.6"                        // 상태 관리 (현재 미사용)
  }
}
```

## 📁 프로젝트 구조

```
trippick/
├── package.json                 # 프로젝트 설정 및 의존성
├── next.config.js              # Next.js 설정
├── tailwind.config.js          # Tailwind CSS 설정
├── tsconfig.json               # TypeScript 설정
├── postcss.config.js           # PostCSS 설정
├── .gitignore                  # Git 무시 파일
│
├── src/
│   ├── app/                    # Next.js App Router (페이지)
│   ├── components/             # 재사용 가능한 컴포넌트
│   ├── lib/                    # 유틸리티 라이브러리
│   ├── stores/                 # 상태 관리 (Zustand)
│   └── types/                  # TypeScript 타입 정의
│
├── diagrams/                   # 프로젝트 다이어그램
├── database/                   # 데이터베이스 스키마
└── TRIPPICK_PROJECT_PLAN.md   # 프로젝트 기획서
```

## 🎯 페이지 구조 (App Router)

### 메인 페이지
```
src/app/
├── layout.tsx                  # 루트 레이아웃
├── page.tsx                    # 홈페이지
├── globals.css                 # 글로벌 스타일
│
├── shop/
│   └── page.tsx               # 쇼핑 페이지 (상품 목록)
│
├── cart/
│   └── page.tsx               # 장바구니 페이지
│
├── mypage/
│   ├── page.tsx               # 마이페이지 메인
│   ├── profile/page.tsx       # 프로필 편집
│   ├── wishlist/page.tsx      # 위시리스트
│   ├── recent/page.tsx        # 최근 본 상품
│   └── points/page.tsx        # 포인트 관리
│
├── notifications/
│   └── page.tsx               # 알림 페이지
│
├── orders/
│   └── page.tsx               # 주문 내역
│
├── order/
│   └── page.tsx               # 주문/결제 페이지
│
├── auth/
│   ├── login/page.tsx         # 로그인
│   └── signup/page.tsx        # 회원가입
│
└── settings/                   # 설정 페이지들
    ├── page.tsx               # 설정 메인
    ├── profile/page.tsx       # 프로필 설정
    ├── password/page.tsx      # 비밀번호 변경
    ├── address/page.tsx       # 배송지 관리
    ├── language/page.tsx      # 언어 설정
    ├── currency/page.tsx      # 화폐 단위
    ├── privacy/page.tsx       # 개인정보처리방침
    ├── terms/page.tsx         # 이용약관
    ├── update/page.tsx        # 업데이트 확인
    ├── license/page.tsx       # 오픈소스 라이선스
    ├── support/page.tsx       # 고객센터
    ├── feedback/page.tsx      # 피드백 보내기
    └── rating/page.tsx        # 앱 평가하기
```

### 하단 네비게이션 구조
- **Shop** (`/shop`) - 상품 쇼핑
- **Home** (`/`) - 홈페이지  
- **My Page** (`/mypage`) - 마이페이지

### 상단 헤더 기능
- **알림** - 빨간 점 표시, `/notifications`로 이동
- **장바구니** - 카트 아이콘, `/cart`로 이동

## 🧩 컴포넌트 구조

### Layout 컴포넌트
```
src/components/layout/
├── TopHeader.tsx              # 상단 헤더
└── BottomNav.tsx              # 하단 네비게이션
```

**TopHeader 주요 Props:**
- `title?: string` - 페이지 제목
- `showBack?: boolean` - 뒤로가기 버튼 표시
- `showNotifications?: boolean` - 알림 아이콘 표시 (기본: true)
- `hasNotifications?: boolean` - 알림 빨간 점 표시
- `showCart?: boolean` - 장바구니 아이콘 표시 (기본: true)

### Modal 컴포넌트
```
src/components/modals/
├── ProductDetailModal.tsx     # 상품 상세 모달
├── WishFinderModal.tsx        # Wish Finder (사진 검색) 모달
├── FilterModal.tsx            # 필터 모달 (현재 미사용)
└── SortModal.tsx              # 정렬 모달 (현재 미사용)
```

**ProductDetailModal 주요 Props:**
- `product?: Product` - 상품 정보 객체
- `isOpen: boolean` - 모달 열림/닫힘 상태
- `onClose: () => void` - 모달 닫기 콜백

## 🎨 스타일링 가이드

### Tailwind CSS 설정
- **기본 너비**: `max-w-sm mx-auto` (모바일 퍼스트)
- **기본 컨테이너**: `.app-container` 클래스 사용
- **페이지 콘텐츠**: `.page-content` 클래스 사용

### 커스텀 CSS 클래스 (globals.css)
```css
.app-container {
  @apply bg-gray-50 min-h-screen max-w-sm mx-auto relative;
}

.page-content {
  @apply pb-20 pt-16;
}

.btn-primary {
  @apply bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors;
}

.btn-secondary {
  @apply bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors;
}

.form-input {
  @apply w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent;
}

.product-card {
  @apply bg-white rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer;
}

.modal-content {
  @apply bg-white rounded-t-3xl w-full max-w-sm mx-auto max-h-[90vh] overflow-y-auto;
}
```

### 컬러 팔레트
```javascript
// tailwind.config.js
colors: {
  primary: {
    25: '#f8fafc',
    600: '#3b82f6',  // 메인 파란색
    700: '#1d4ed8'
  }
}
```

## 🔧 주요 기능 상세

### 1. 상품 검색 (Wish Finder)
- **위치**: 쇼핑 페이지 검색바 우측
- **아이콘**: 카메라 아이콘 (📷)
- **기능**: 사진 업로드 + 브랜드명 입력을 통한 상품 검색

### 2. 상품 상세 모달
- **트리거**: 상품 카드 클릭
- **기능**: 상품 정보, 옵션 선택, 수량 조절, 장바구니 추가
- **사이즈**: 모바일 최적화 (`max-w-sm`)

### 3. 네비게이션 플로우
```
홈페이지 "Pick here" 버튼 → 쇼핑 페이지
상품 카드 클릭 → 상품 상세 모달
모달 "Add to Cart" → 장바구니 페이지
```

### 4. 알림 시스템
- **표시**: 상단 헤더 빨간 점 (숫자 아님)
- **종류**: 주문, 이벤트, 포인트, 위시리스트, 시스템

## 🌐 다국어 지원
- **현재 언어**: 영어 (English)
- **이전 언어**: 한국어에서 v5.0.0에서 영어로 번역 완료
- **번역 범위**: 모든 UI 텍스트, 버튼, 메뉴, 알림 등

## 📱 반응형 디자인
- **타겟**: 모바일 퍼스트 (모바일 앱 스타일)
- **최대 너비**: `max-w-sm` (384px)
- **레이아웃**: 중앙 정렬, 세로 스크롤

## 🚀 배포 정보
- **플랫폼**: Vercel
- **도메인**: trippick.link
- **자동 배포**: main 브랜치 푸시 시
- **빌드 명령어**: `npm run build`

## 📝 개발 시 주의사항

### 1. 컴포넌트 개발
- 모든 컴포넌트는 TypeScript로 작성
- Props 인터페이스 정의 필수
- 재사용성을 고려한 설계

### 2. 스타일링
- Tailwind CSS 유틸리티 클래스 우선 사용
- 커스텀 CSS는 globals.css에 정의
- 모바일 퍼스트 접근법

### 3. 네비게이션
- Next.js App Router 사용
- `useRouter`, `usePathname` 훅 활용
- `Link` 컴포넌트로 클라이언트 사이드 라우팅

### 4. 상태 관리
- 현재는 로컬 상태 (`useState`) 사용
- 추후 Zustand 도입 예정
- 복잡한 상태는 컴포넌트 레벨에서 관리

### 5. 데이터 관리
- 현재는 더미 데이터 사용
- 추후 Supabase 연동 예정
- 타입 안정성을 위한 인터페이스 정의

## 🔄 향후 개발 계획
1. **백엔드 연동**: Supabase 데이터베이스 연결
2. **상태 관리**: Zustand 도입
3. **인증 시스템**: 로그인/회원가입 기능 구현
4. **결제 시스템**: 실제 결제 로직 구현
5. **PWA**: 앱 설치 기능 추가

---

**개발 문의**: GitHub Issues 또는 dasgddadqw231/trippcik 저장소