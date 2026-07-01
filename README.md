# SpaceV Shared Docs

SpaceV에서 공개 가능한 교육자료, 강의자료, 회사 공유자료를 정적 웹사이트로 제공하는 저장소입니다.

## 바로가기

- [SpaceV Shared Docs](https://spacev-team.github.io/Spacev-shared-docs/)

## 구조

```text
education/
  ai-conversation-level-0/
    index.html
    slides/     # 기존 공유 링크 유지용
    materials/  # 기존 공유 링크 유지용
    assets/
  ai-basics-claude-code/
    index.html
  claude-code-n8n-workflow/
    index.html
    assets/
  claude-code-playwright-crawling/
    index.html
  ai-data-training/
    index.html
    assets/
  coding-ai-cloudflare-deploy/
    index.html
    setup/
      index.html
    cloudflare-deploy/
      index.html
shared/
  styles/
  assets/
company/
  ai-basics-claude-code-self-study/
    index.html
  good-data/
    index.html
    assets/
  n8n-automation-handbook/
    index.html
    assets/
  playwright-crawling-automation/
    index.html
  codex-plugin-guide/
    index.html
    assets/
  claude-plugin-guide/
    index.html
    assets/
  skill-structure-overview/
    index.html
```

## 로컬 실행

```bash
npm ci
npm run dev
```

## 배포

`main` 브랜치에 push하면 GitHub Actions가 Vite 빌드 결과물인 `dist`를 GitHub Pages에 배포합니다.
