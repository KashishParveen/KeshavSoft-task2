// scripts/copy-assets.js
const fs = require('fs');
const path = require('path');

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const srcAssets = path.join(__dirname, '..', 'src', 'assets');
const destAssets = path.join(__dirname, '..', 'dist', 'assets');

copyDirSync(srcAssets, destAssets);
console.log('Copied assets to dist/assets');
