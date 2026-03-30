import { execSync } from 'child_process';
import { rmSync } from 'fs';
import { join } from 'path';

const projectRoot = process.cwd();

console.log('[v0] Cleaning corrupted dependencies...');
try {
  rmSync(join(projectRoot, 'node_modules'), { recursive: true, force: true });
  console.log('[v0] Removed node_modules');
} catch (error) {
  console.log('[v0] node_modules already clean');
}

console.log('[v0] Installing fresh dependencies...');
execSync('npm install', { stdio: 'inherit', cwd: projectRoot });

console.log('[v0] Dependencies fixed successfully!');
