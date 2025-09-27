// scripts/render-nunjucks.js
const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');

const templatesDir = path.join(__dirname, '..', 'src', 'templates');
const outDir = path.join(__dirname, '..', 'dist');

nunjucks.configure(templatesDir, { autoescape: false, trimBlocks: true, lstripBlocks: true });

const pages = [
  { tpl: 'index.njk', out: 'index.html', context: { title: 'Home' } },
  { tpl: 'about.njk', out: 'about.html', context: { title: 'About' } },
  { tpl: 'contact.njk', out: 'contact.html', context: { title: 'Contact' } }
];

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

pages.forEach(page => {
  try {
    const result = nunjucks.render(page.tpl, page.context || {});
    fs.writeFileSync(path.join(outDir, page.out), result, 'utf8');
    console.log('Rendered', page.out);
  } catch (err) {
    console.error('Error rendering', page.tpl, err);
  }
});
