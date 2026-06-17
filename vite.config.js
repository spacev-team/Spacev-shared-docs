import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const base = process.env.BASE_PATH || '/';

export default defineConfig({
  base,
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        aiConversation: resolve(__dirname, 'education/ai-conversation-level-0/index.html'),
        aiConversationSlides: resolve(__dirname, 'education/ai-conversation-level-0/slides/index.html'),
        aiConversationMaterials: resolve(__dirname, 'education/ai-conversation-level-0/materials/index.html'),
        claudeCodeN8nWorkflow: resolve(__dirname, 'education/claude-code-n8n-workflow/index.html'),
        claudeCodePlaywrightCrawling: resolve(__dirname, 'education/claude-code-playwright-crawling/index.html'),
        aiDataTraining: resolve(__dirname, 'education/ai-data-training/index.html'),
        codingAiCloudflareDeploy: resolve(__dirname, 'education/coding-ai-cloudflare-deploy/index.html'),
        codingAiSetupGuide: resolve(__dirname, 'education/coding-ai-cloudflare-deploy/setup/index.html'),
        cloudflareDeployGuide: resolve(__dirname, 'education/coding-ai-cloudflare-deploy/cloudflare-deploy/index.html'),
        codexPluginGuide: resolve(__dirname, 'company/codex-plugin-guide/index.html'),
        claudePluginGuide: resolve(__dirname, 'company/claude-plugin-guide/index.html')
      }
    }
  }
});
