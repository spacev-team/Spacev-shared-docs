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
        claudeCodeN8nWorkflow: resolve(__dirname, 'education/claude-code-n8n-workflow/index.html')
      }
    }
  }
});
