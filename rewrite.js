const fs = require('fs');
let html = fs.readFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/index.html', 'utf8');

// 1. Remove poi-images.js script tag
html = html.replace('<script src="poi-images.js"></script>\n', '');

// 2. Replace dark CSS variables with white theme
const oldVars = `  :root {
    --bg: #0d1b2a;
    --surface: #1b2838;
    --surface2: #243447;
    --text: #e0e8f0;
    --text-muted: #8899aa;
    --accent: #f4a261;
    --gold: #e9c46a;
    --lake: #457b9d;
    --forest: #2a9d8f;
    --glacier: #a8dadc;
    --wedding: #e5989b;
    --day1: #e76f51;
    --day2: #f4a261;
    --day3: #e9c46a;
    --day4: #2a9d8f;
    --day5: #457b9d;
    --day6: #e5989b;
  }`;

const newVars = `  :root {
    --bg: #f5f5f5;
    --surface: #ffffff;
    --surface2: #f0f0f0;
    --text: #2d2d2d;
    --text-muted: #777777;
    --accent: #e76f51;
    --gold: #d4a017;
    --lake: #457b9d;
    --forest: #2a9d8f;
    --glacier: #a8dadc;
    --wedding: #e5989b;
    --day1: #e76f51;
    --day2: #f4a261;
    --day3: #e9c46a;
    --day4: #2a9d8f;
    --day5: #457b9d;
    --day6: #e5989b;
  }`;

html = html.replace(oldVars, newVars);

// 3. Update body background
html = html.replace('background: var(--bg);', 'background: var(--bg);');

// 4. Update sidebar border colors (dark → light)
html = html.replace(/border-right: 1px solid rgba\(255,255,255,0\.06\)/g, 'border-right: 1px solid rgba(0,0,0,0.08)');
html = html.replace(/border-bottom: 1px solid rgba\(255,255,255,0\.06\)/g, 'border-bottom: 1px solid rgba(0,0,0,0.08)');

// 5. Update day tabs
html = html.replace(
  /border: 1px solid rgba\(255,255,255,0\.08\);/g,
  'border: 1px solid rgba(0,0,0,0.1);'
);

// 6. Update route-info background
html = html.replace(
  /background: var\(--surface2\);\n    border-radius: 8px;\n    padding: 0\.8rem;\n    margin-top: 0\.8rem;/,
  'background: var(--surface2);\n    border: 1px solid rgba(0,0,0,0.06);\n    border-radius: 8px;\n    padding: 0.8rem;\n    margin-top: 0.8rem;'
);

// 7. Update popup styles to white
html = html.replace(
  /background: var\(--surface2\) !important;\n    color: var\(--text\) !important;\n    border-radius: 10px !important;\n    border: 1px solid rgba\(255,255,255,0\.1\) !important;\n    box-shadow: 0 4px 20px rgba\(0,0,0,0\.5\) !important;/,
  'background: #fff !important;\n    color: #333 !important;\n    border-radius: 10px !important;\n    border: 1px solid rgba(0,0,0,0.1) !important;\n    box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;'
);

html = html.replace(
  /background: var\(--surface2\) !important;/g,
  'background: #fff !important;'
);

// 8. Update legend to white
html = html.replace(
  /background: rgba\(27, 40, 56, 0\.92\);/,
  'background: rgba(255, 255, 255, 0.95);'
);
html = html.replace(
  /border: 1px solid rgba\(255,255,255,0\.08\);/g,
  'border: 1px solid rgba(0,0,0,0.1);'
);

// 9. Update date badge
html = html.replace(
  /background: rgba\(244, 162, 97, 0\.1\);/,
  'background: rgba(231, 111, 81, 0.08);'
);

// 10. Update scrollbar
html = html.replace(
  /background: var\(--surface2\); border-radius: 2px;/,
  'background: #ddd; border-radius: 2px;'
);

// 11. Remove gallery CSS block
html = html.replace(
  /  \/\* Image Gallery in Popup \*\/[\s\S]*?\/\* Responsive \*\//,
  '  /* Responsive */'
);

// 12. Remove lightbox CSS
html = html.replace(
  /  \/\* Lightbox \*\/[\s\S]*?  \/\* Wider popup for gallery \*\/[\s\S]*?  @media \(max-width:500px\) \{[\s\S]*?    \.popup-gallery img \{ height:65px; \}\n  \}\n\n/,
  ''
);

// 13. Remove gallery HTML from popup binding
const oldPopupBind = `pois.forEach(poi => {
  const isWedding = poi.id === 'queenstown';
  const icon = createIcon(poi.type, isWedding);
  const images = poiImages[poi.id] || [];

  const dayTag = \`<span class="popup-day-tag tag-day\${Math.min(poi.day, 6)}">Day \${poi.day}</span>\`;
  let galleryHTML = '';
  if (images.length >= 3) {
    galleryHTML = '<div class="popup-gallery">' +
      images.map((img, i) => \`<img src="\${img}" loading="lazy" onclick="event.stopPropagation();openLightbox('\${poi.id}',\${i})" alt="\${poi.name}" />\`).join('') +
      '</div>';
  }

  const marker = L.marker([poi.lat, poi.lng], { icon })
    .bindPopup(\`
      <div class="popup-title">\${poi.name}</div>
      <div class="popup-meta">\${poi.nameEn} \${dayTag}</div>
      <div class="popup-desc">\${poi.desc}</div>
      \${galleryHTML}
    \`, { maxWidth: 400, minWidth: 320 });`;

const newPopupBind = `pois.forEach(poi => {
  const isWedding = poi.id === 'queenstown';
  const icon = createIcon(poi.type, isWedding);

  const dayTag = \`<span class="popup-day-tag tag-day\${Math.min(poi.day, 6)}">Day \${poi.day}</span>\`;
  const marker = L.marker([poi.lat, poi.lng], { icon })
    .bindPopup(\`
      <div class="popup-title">\${poi.name}</div>
      <div class="popup-meta">\${poi.nameEn} \${dayTag}</div>
      <div class="popup-desc">\${poi.desc}</div>
    \`);`;

html = html.replace(oldPopupBind, newPopupBind);

// 14. Remove popup image click handler
html = html.replace(
  /\/\/ ===== POPUP IMAGE CLICK HANDLER =====[\s\S]*?\/\/ ===== ROUTE POLYLINES =====/,
  '// ===== ROUTE POLYLINES ====='
);

// 15. Remove lightbox JS functions
html = html.replace(
  /\/\/ ===== LIGHTBOX =====[\s\S]*?\/\/ ===== INITIAL STATE =====/,
  '// ===== INITIAL STATE ====='
);

// 16. Remove popup width constraints
html = html.replace(
  /  \/\* Wider popup for gallery \*\/[\s\S]*?  \}/,
  ''
);

// 17. Change map tile to light theme
html = html.replace(
  "L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'",
  "L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'"
);

// 18. Update map background
html = html.replace(
  'background: #1a1a2e;',
  'background: #f0f0f0;'
);

// 19. Update sidebar header gradient for white bg
html = html.replace(
  `    background: linear-gradient(135deg, var(--gold), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;`,
  `    color: #2d2d2d;`
);

// 20. Update day tab active style
html = html.replace(
  /background: rgba\(244, 162, 97, 0\.15\);/g,
  'background: rgba(231, 111, 81, 0.1);'
);
html = html.replace(
  /background: rgba\(229, 152, 155, 0\.15\);/g,
  'background: rgba(229, 152, 155, 0.1);'
);

// 21. Update tag colors for white bg (need slightly darker)
html = html.replace(
  /\.tag-day1 \{ background: rgba\(231,111,81,0\.2\); color: #e76f51; \}/,
  '.tag-day1 { background: rgba(231,111,81,0.12); color: #d35400; }'
);
html = html.replace(
  /\.tag-day2 \{ background: rgba\(244,162,97,0\.2\); color: #f4a261; \}/,
  '.tag-day2 { background: rgba(244,162,97,0.12); color: #e67e22; }'
);
html = html.replace(
  /\.tag-day3 \{ background: rgba\(233,196,106,0\.2\); color: #e9c46a; \}/,
  '.tag-day3 { background: rgba(233,196,106,0.15); color: #b8860b; }'
);
html = html.replace(
  /\.tag-day4 \{ background: rgba\(42,157,143,0\.2\); color: #2a9d8f; \}/,
  '.tag-day4 { background: rgba(42,157,143,0.12); color: #1a7a6f; }'
);
html = html.replace(
  /\.tag-day5 \{ background: rgba\(69,123,157,0\.2\); color: #457b9d; \}/,
  '.tag-day5 { background: rgba(69,123,157,0.12); color: #2c6e8a; }'
);
html = html.replace(
  /\.tag-day6 \{ background: rgba\(229,152,155,0\.2\); color: #e5989b; \}/,
  '.tag-day6 { background: rgba(229,152,155,0.12); color: #c0392b; }'
);

// 22. Remove leftover popup-gallery references
html = html.replace(/\.popup-gallery img \{ height:65px; \}/g, '');

fs.writeFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/index.html', html);
console.log('Done! New size:', html.length);
