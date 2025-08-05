# TripPick Supabase 연결 설정 가이드

## 🔧 단계별 설정

### 1. 환경변수 파일 생성

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```env
# Supabase 설정
NEXT_PUBLIC_SUPABASE_URL=https://ggcsczwjlicbfixilyoe.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
SUPABASE_JWT_SECRET=your-jwt-secret-here

# 데이터베이스 직접 연결 (선택사항)
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.ggcsczwjlicbfixilyoe.supabase.co:5432/postgres

# 개발 환경
NODE_ENV=development
```

### 2. Supabase 키 찾기

1. [Supabase 대시보드](https://supabase.com/dashboard) 로그인
2. 프로젝트 선택 (ID: ggcsczwjlicbfixilyoe)
3. **Settings** → **API** 이동
4. 다음 값들을 복사:

   - **Project URL**: `https://ggcsczwjlicbfixilyoe.supabase.co`
   - **Anon Key**: `eyJ...` (공개 키)
   - **Service Role Key**: `eyJ...` (비밀 키, 서버에서만 사용)

5. **Settings** → **API** → **JWT Settings**:
   - **JWT Secret**: 긴 문자열

### 3. 데이터베이스 스키마 설정

1. Supabase 대시보드에서 **SQL Editor** 이동
2. `scripts/setup-supabase.sql` 파일의 내용을 복사
3. SQL Editor에 붙여넣기 후 **RUN** 실행
4. "TripPick 데이터베이스 스키마 설정이 완료되었습니다!" 메시지 확인

### 4. 연결 테스트

```bash
# 의존성 설치 (dotenv 추가)
npm install dotenv

# 연결 테스트 실행
node scripts/test-connection.js
```

### 5. 애플리케이션 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 접속하여 확인

## 🔐 인증 설정 (선택사항)

### Google OAuth 설정:

1. [Google Cloud Console](https://console.cloud.google.com) 이동
2. OAuth 2.0 클라이언트 ID 생성
3. Authorized redirect URIs 추가:
   ```
   https://ggcsczwjlicbfixilyoe.supabase.co/auth/v1/callback
   ```
4. Supabase에서 Google Provider 활성화

### Facebook OAuth 설정:

1. [Facebook Developers](https://developers.facebook.com) 이동
2. 앱 생성 후 Facebook Login 제품 추가
3. Valid OAuth Redirect URIs 추가:
   ```
   https://ggcsczwjlicbfixilyoe.supabase.co/auth/v1/callback
   ```
4. Supabase에서 Facebook Provider 활성화

## 🔍 트러블슈팅

### 일반적인 오류:

1. **"Invalid API key"**: ANON_KEY 재확인
2. **"Database connection failed"**: URL과 비밀번호 확인
3. **"Table doesn't exist"**: SQL 스크립트 재실행
4. **CORS 오류**: Supabase 사이트 URL 설정 확인

### 연결 확인 명령어:

```bash
# 환경변수 확인
echo $NEXT_PUBLIC_SUPABASE_URL

# Supabase 연결 테스트
node scripts/test-connection.js

# 개발 서버 실행
npm run dev
```

## ✅ 설정 완료 체크리스트

- [ ] `.env.local` 파일 생성
- [ ] Supabase 키 설정
- [ ] 데이터베이스 스키마 설정
- [ ] 연결 테스트 성공
- [ ] 애플리케이션 정상 실행
- [ ] 샘플 데이터 확인
- [ ] 인증 시스템 테스트 (선택사항)

설정이 완료되면 TripPick의 모든 기능을 사용할 수 있습니다! 🚀