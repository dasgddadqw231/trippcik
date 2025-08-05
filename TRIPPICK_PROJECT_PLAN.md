# TripPick 웹앱 프로젝트 기획서

## 📋 프로젝트 개요
**TripPick**은 여행자들을 위한 전문 쇼핑몰 웹앱입니다. 여행용품, 의류, 액세서리 등을 판매하며, 사용자가 쉽게 여행 준비를 할 수 있도록 돕는 플랫폼입니다.

## 🎯 핵심 기능

### 1. 사용자 관리
- 회원가입/로그인 (이메일, 소셜 로그인)
- 사용자 프로필 관리
- 주문 내역 조회

### 2. 상품 관리
- 상품 카테고리별 브라우징
- 상품 상세 정보 조회
- 상품 검색 및 필터링
- 상품 리뷰 시스템

### 3. 쇼핑 기능
- 장바구니 관리
- 위시리스트 (찜 목록)
- 주문/결제 시스템
- 배송 추적

### 4. 관리자 기능
- 상품 등록/수정/삭제
- 주문 관리
- 사용자 관리
- 통계 대시보드

## 🛠 기술 스택

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (스타일링)
- **Shadcn/ui** (UI 컴포넌트)
- **Zustand** (상태 관리)
- **React Hook Form** (폼 관리)

### Backend
- **Supabase**
  - Authentication (인증)
  - Database (PostgreSQL)
  - Storage (파일 저장)
  - Edge Functions (서버리스 함수)

### 결제
- **Stripe** 또는 **토스페이먼츠** (결제 시스템)

### 배포
- **Vercel** (프론트엔드)
- **Supabase** (백엔드)

## 📊 데이터베이스 설계

### 주요 테이블 구조

#### users (사용자)
```sql
- id: uuid (PK)
- email: varchar
- name: varchar
- phone: varchar
- address: text
- created_at: timestamp
- updated_at: timestamp
```

#### categories (카테고리)
```sql
- id: uuid (PK)
- name: varchar
- slug: varchar
- description: text
- image_url: varchar
- created_at: timestamp
```

#### products (상품)
```sql
- id: uuid (PK)
- category_id: uuid (FK)
- name: varchar
- description: text
- price: decimal
- discount_price: decimal
- stock_quantity: integer
- images: json
- specifications: json
- is_active: boolean
- created_at: timestamp
- updated_at: timestamp
```

#### cart_items (장바구니)
```sql
- id: uuid (PK)
- user_id: uuid (FK)
- product_id: uuid (FK)
- quantity: integer
- created_at: timestamp
```

#### wishlist (위시리스트)
```sql
- id: uuid (PK)
- user_id: uuid (FK)
- product_id: uuid (FK)
- created_at: timestamp
```

#### orders (주문)
```sql
- id: uuid (PK)
- user_id: uuid (FK)
- total_amount: decimal
- status: varchar
- shipping_address: json
- payment_method: varchar
- payment_status: varchar
- created_at: timestamp
- updated_at: timestamp
```

#### order_items (주문 상품)
```sql
- id: uuid (PK)
- order_id: uuid (FK)
- product_id: uuid (FK)
- quantity: integer
- price: decimal
- created_at: timestamp
```

#### reviews (리뷰)
```sql
- id: uuid (PK)
- user_id: uuid (FK)
- product_id: uuid (FK)
- rating: integer
- comment: text
- created_at: timestamp
```

## 🎨 UI/UX 설계

### 페이지 구조
1. **홈페이지** (`/`)
   - 히어로 섹션
   - 인기 상품
   - 카테고리 소개
   - 사용법 가이드

2. **쇼핑** (`/shop`)
   - 상품 리스트
   - 카테고리 필터
   - 검색 기능
   - 정렬 옵션

3. **상품 상세** (`/product/[id]`)
   - 상품 이미지 갤러리
   - 상품 정보
   - 리뷰 섹션
   - 관련 상품

4. **장바구니** (`/cart`)
   - 장바구니 아이템 목록
   - 수량 조절
   - 총 금액 계산
   - 결제 버튼

5. **위시리스트** (`/wishlist`)
   - 찜한 상품 목록
   - 장바구니 추가 기능

6. **사용자** 
   - 로그인 (`/auth/login`)
   - 회원가입 (`/auth/signup`)
   - 마이페이지 (`/profile`)
   - 주문내역 (`/orders`)

7. **관리자** (`/admin`)
   - 대시보드
   - 상품 관리
   - 주문 관리
   - 사용자 관리

### 디자인 컨셉
- **컬러 스킴**: 파란색 계열 (브랜드 컬러)
- **폰트**: 모던하고 읽기 쉬운 산세리프
- **레이아웃**: 미니멀하고 직관적인 디자인
- **반응형**: 모바일 퍼스트 접근법

## 🚀 개발 단계

### Phase 1: 기본 세팅 (1주)
- Next.js 프로젝트 초기화
- Supabase 세팅
- 기본 UI 컴포넌트 구축
- 인증 시스템 구현

### Phase 2: 핵심 기능 (2-3주)
- 상품 카탈로그 구현
- 장바구니 기능
- 사용자 대시보드
- 기본 주문 시스템

### Phase 3: 고급 기능 (2주)
- 결제 시스템 통합
- 리뷰 시스템
- 검색 및 필터링
- 관리자 패널

### Phase 4: 최적화 및 배포 (1주)
- 성능 최적화
- SEO 최적화
- 테스트 작성
- 배포 및 모니터링

## 📈 성능 고려사항
- 이미지 최적화 (Next.js Image)
- 코드 분할 (Dynamic Imports)
- 캐싱 전략 (Redis/Supabase Edge Functions)
- CDN 활용 (Supabase Storage)

## 🔒 보안 고려사항
- RLS (Row Level Security) 활용
- API 보안 (CORS, Rate Limiting)
- 사용자 입력 검증
- 결제 정보 보안

## 📱 반응형 대응
- 모바일 우선 설계
- 태블릿 최적화
- 데스크톱 확장 레이아웃

이 기획서를 바탕으로 TripPick 웹앱을 단계별로 개발해나가겠습니다!