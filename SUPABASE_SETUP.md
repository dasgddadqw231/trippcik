# TripPick Supabase 설정 가이드

## 1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com) 로그인
2. "New Project" 클릭
3. 프로젝트 이름: `trippick`
4. 데이터베이스 비밀번호 설정
5. 리전 선택 (Korea는 없으므로 Singapore 추천)

## 2. 데이터베이스 스키마 설정

1. Supabase 대시보드에서 "SQL Editor" 이동
2. `database/schema.sql` 파일의 내용을 복사하여 실행
3. 모든 테이블, 인덱스, RLS 정책이 생성되었는지 확인

## 3. 환경변수 설정

프로젝트 루트에 `.env.local` 파일 생성:

```env
# Supabase 설정
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
SUPABASE_JWT_SECRET=your-jwt-secret-here
NODE_ENV=development
```

### 키 찾는 방법:
- **Project URL**: Settings → API → Project URL
- **Anon Key**: Settings → API → Project API keys → anon public
- **Service Role Key**: Settings → API → Project API keys → service_role
- **JWT Secret**: Settings → API → JWT Settings → JWT Secret

## 4. 인증 설정

### 4.1 이메일 인증 설정
1. Authentication → Settings
2. "Enable email confirmations" 체크 해제 (개발용)
3. "Enable email change confirmations" 체크 해제 (개발용)

### 4.2 소셜 로그인 설정

#### Google OAuth:
1. [Google Cloud Console](https://console.cloud.google.com) 이동
2. 새 프로젝트 생성 또는 기존 프로젝트 선택
3. APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client IDs
4. Application type: Web application
5. Authorized redirect URIs에 추가:
   ```
   https://your-project-id.supabase.co/auth/v1/callback
   ```
6. Client ID와 Client Secret을 Supabase에 등록:
   - Authentication → Providers → Google
   - Enable Google provider
   - Client ID와 Client Secret 입력

#### Facebook OAuth:
1. [Facebook Developers](https://developers.facebook.com) 이동
2. 새 앱 생성
3. Facebook Login 제품 추가
4. Valid OAuth Redirect URIs에 추가:
   ```
   https://your-project-id.supabase.co/auth/v1/callback
   ```
5. App ID와 App Secret을 Supabase에 등록:
   - Authentication → Providers → Facebook
   - Enable Facebook provider
   - App ID와 App Secret 입력

## 5. RLS (Row Level Security) 정책 확인

다음 정책들이 올바르게 설정되었는지 확인:

- **profiles**: 사용자는 자신의 프로필만 조회/수정 가능
- **cart_items**: 사용자는 자신의 장바구니만 관리 가능
- **wishlist**: 사용자는 자신의 위시리스트만 관리 가능
- **orders**: 사용자는 자신의 주문만 조회 가능
- **reviews**: 사용자는 자신의 리뷰만 관리 가능, 모든 리뷰 조회 가능
- **categories**: 모든 사용자가 활성 카테고리 조회 가능
- **products**: 모든 사용자가 활성 상품 조회 가능

## 6. 테스트 데이터 삽입

### 카테고리 데이터:
```sql
INSERT INTO categories (name, slug, description, is_active, sort_order) VALUES
('Fashion', 'fashion', 'Korean fashion items', true, 1),
('Beauty', 'beauty', 'K-beauty products', true, 2),
('Food', 'food', 'Korean snacks and foods', true, 3),
('Electronics', 'electronics', 'Korean electronics', true, 4),
('Lifestyle', 'lifestyle', 'Korean lifestyle products', true, 5);
```

### 상품 데이터:
```sql
INSERT INTO products (category_id, name, description, price, images, is_active, is_featured) 
SELECT 
  c.id,
  'Sample Product',
  'This is a sample Korean product',
  29900,
  '["https://via.placeholder.com/300"]',
  true,
  true
FROM categories c 
LIMIT 1;
```

## 7. 개발 환경 실행

```bash
npm run dev
```

## 8. 기능 테스트

1. **회원가입/로그인**: `/auth/signup`, `/auth/login`
2. **상품 조회**: `/shop`
3. **장바구니**: 상품 클릭 → 장바구니 추가
4. **위시리스트**: 하트 아이콘 클릭
5. **주문**: 장바구니에서 주문하기

## 9. 배포 시 주의사항

1. **환경변수**: Vercel 등 배포 플랫폼에 환경변수 설정
2. **도메인 설정**: Supabase 인증 설정에서 사이트 URL 업데이트
3. **CORS**: 필요 시 Supabase에서 CORS 설정 확인

## 10. 추가 설정 (선택사항)

### 이메일 템플릿 커스터마이징:
- Authentication → Email Templates
- 회원가입, 비밀번호 재설정 등 이메일 템플릿 수정

### 데이터베이스 백업:
- Settings → Database → Backups
- 자동 백업 설정 확인

### 모니터링:
- Reports → API 사용량, 성능 모니터링

## 문제 해결

### 자주 발생하는 오류:

1. **"Invalid JWT"**: JWT Secret 확인
2. **"Row Level Security 위반"**: RLS 정책 확인
3. **"Provider not enabled"**: 소셜 로그인 설정 확인
4. **연결 오류**: URL과 키 값 재확인

### 로그 확인:
- Supabase 대시보드 → Logs → Auth/Database 로그 확인

---

설정 완료 후 TripPick 애플리케이션의 모든 기능을 사용할 수 있습니다! 🚀