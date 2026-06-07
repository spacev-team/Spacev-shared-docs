# SpaceV Shared Docs

SpaceV에서 공개 가능한 교육자료, 강의자료, 회사 공유자료를 정적 웹사이트로 제공하는 저장소입니다.

## 구조

```text
education/
  ai-conversation-level-0/
    index.html
    slides/
    materials/
shared/
  styles/
  assets/
```

## 로컬 실행

```bash
npm ci
npm run dev
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 Vite 빌드 결과물인 `dist`를 GitHub Pages에 배포합니다.
