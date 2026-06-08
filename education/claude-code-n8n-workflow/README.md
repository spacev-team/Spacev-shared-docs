# 매일 하는 반복 업무에서 탈출하는 가장 빠른 방법 (Claude Code + n8n)

삼삼엠투 마케팅팀 사내 자동화 워크플로우 발표 자료 (HTML 슬라이드, 16:9, 총 28장)
강사: 마케팅팀 박현웅

## 보기

- 브라우저에서 `index.html`을 열면 됩니다.
- 슬라이드 넘기기: **← / →** 방향키, `Space`(다음), 화면 좌·우 끝 클릭, 하단 화살표 버튼
- `Home` 처음으로 · `End` 마지막으로
- 주소창의 `#번호`로 특정 슬라이드 바로가기 (예: `index.html#14`)

## GitHub Pages 배포

1. 이 폴더(`index.html`, `assets/`, `README.md`)를 레포 최상단에 업로드
2. 레포 **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main` / 폴더 `/(root)` 선택 후 Save
3. 잠시 후 `https://<계정>.github.io/<레포이름>/` 에서 공개됩니다.

> 슬라이드를 레포 하위 폴더(예: `/docs`)에 둔다면 Pages 설정에서 해당 폴더를 지정하세요.

## 강의 전 채워야 할 빈칸

- 다운로드: 이미 반영됨 (https://claude.com/ko/download)
- n8n 서버 주소 · 계정(ID) — 슬라이드 13
- `N8N_API_URL` · `N8N_API_KEY` — 슬라이드 16 (API Key는 강사가 직접 입력)
- 실습 1: 구글 챗 스페이스 이름 — 슬라이드 21
- 실습 2: 경쟁사 RSS 주소 · 구글 시트 이름 — 슬라이드 24
- 강의 일자 — 표지

## 폰트

Pretendard 웹폰트를 CDN(jsDelivr)에서 불러옵니다. 인터넷이 없는 환경에서 발표한다면
Pretendard 정적 폰트를 `assets/`에 추가하고 `@font-face`로 교체하세요.

## 구성

```
index.html         # 슬라이드 28장 + 네비게이션 (단일 파일)
assets/
  logo_dark.png    # 밝은 슬라이드용 로고
  logo_white.png   # 어두운/그라데이션 슬라이드용 로고
  grad_*.png        # (예비) 그라데이션 이미지 — 현재 CSS 그라데이션 사용
  sshot6.png        # Claude Code 실행 화면 스크린샷
  icons/            # 아이콘 PNG
```
