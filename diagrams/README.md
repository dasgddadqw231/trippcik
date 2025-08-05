# TripPick 다이어그램 PDF 변환 가이드

## 📁 파일 구성

이 폴더에는 TripPick 웹앱의 다음 다이어그램들이 포함되어 있습니다:

- `sitemap.mmd` - 사이트맵 (메뉴 구조)
- `user-flow.mmd` - 사용자 플로우차트
- `admin-flow.mmd` - 관리자 플로우차트  
- `database-erd.mmd` - 데이터베이스 ERD
- `trippick-diagrams.html` - 모든 다이어그램이 포함된 HTML 파일

## 🔄 PDF 변환 방법

### 방법 1: HTML 파일을 브라우저에서 PDF로 변환 (가장 쉬움)

1. `trippick-diagrams.html` 파일을 브라우저에서 열기
2. `Ctrl+P` (또는 `Cmd+P`) 눌러서 인쇄 메뉴 열기
3. 대상을 "PDF로 저장" 선택
4. 용지 크기: A4 또는 A3 (다이어그램 크기에 따라)
5. 여백: 최소 또는 없음
6. 배경 그래픽 포함 체크
7. "저장" 클릭

### 방법 2: 온라인 Mermaid 에디터 사용

1. [Mermaid Live Editor](https://mermaid.live/) 접속
2. 각 `.mmd` 파일의 내용을 복사해서 붙여넣기
3. 우상단 "Actions" → "Download PNG/SVG/PDF" 선택
4. 원하는 형식으로 다운로드

### 방법 3: VS Code 확장 프로그램 사용

1. VS Code에서 "Mermaid Preview" 확장 프로그램 설치
2. `.mmd` 파일을 열고 `Ctrl+Shift+P`
3. "Mermaid: Preview" 명령 실행
4. 미리보기에서 우클릭 → "Save as PDF"

### 방법 4: 명령줄 도구 사용 (고급 사용자)

```bash
# Mermaid CLI 설치
npm install -g @mermaid-js/mermaid-cli

# 각 파일을 PDF로 변환
mmdc -i sitemap.mmd -o sitemap.pdf
mmdc -i user-flow.mmd -o user-flow.pdf
mmdc -i admin-flow.mmd -o admin-flow.pdf
mmdc -i database-erd.mmd -o database-erd.pdf
```

## 📋 권장 PDF 설정

- **용지 크기**: A3 (큰 다이어그램의 경우) 또는 A4
- **방향**: 가로 (Landscape)
- **여백**: 최소
- **배율**: 내용에 맞춤
- **품질**: 고품질/최고 해상도

## 💡 팁

- 다이어그램이 복잡한 경우 A3 크기로 출력하면 더 읽기 쉽습니다
- HTML 파일 방법이 가장 간단하고 모든 다이어그램을 한 번에 변환할 수 있습니다
- 인쇄 미리보기에서 페이지 나누기를 확인하고 필요시 조정하세요

## 🎨 다이어그램 설명

### 1. 사이트맵 (sitemap.mmd)
웹사이트의 전체 페이지 구조와 네비게이션 경로

### 2. 사용자 플로우차트 (user-flow.mmd)  
고객의 사이트 방문부터 구매 완료까지의 전체 여정

### 3. 관리자 플로우차트 (admin-flow.mmd)
관리자의 상품/주문/사용자 관리 업무 프로세스

### 4. 데이터베이스 ERD (database-erd.mmd)
데이터베이스 테이블 구조와 관계 정의

## 📞 지원

문제가 있으시면 프로젝트 담당자에게 문의해주세요!