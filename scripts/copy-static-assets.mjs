import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const staticAssetDirs = [
  'education/ai-conversation-level-0/assets',
  'education/claude-code-n8n-workflow/assets',
  'education/ai-data-training/assets',
  'company/codex-plugin-guide/assets',
];

for (const assetDir of staticAssetDirs) {
  const source = resolve(root, assetDir);
  const target = resolve(root, 'dist', assetDir);

  if (!existsSync(source)) {
    continue;
  }

  rmSync(target, { recursive: true, force: true });
  mkdirSync(dirname(target), { recursive: true });
  cpSync(source, target, { recursive: true });
}
