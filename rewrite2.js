const fs = require('fs');
let html = fs.readFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/index.html', 'utf8');

// Use \r\n for Windows line endings
const r = '\r\n';

// 1. Update scrollbar
html = html.replace(
  `background: var(--surface2); border-radius: 2px;`,
  `background: #ddd; border-radius: 2px;`
);

// 2. Remove gallery CSS block  
const galleryStart = html.indexOf('  /* Image Gallery in Popup */');
const responsiveStart = html.indexOf('  /* Responsive */', galleryStart);
if (galleryStart > 0 && responsiveStart > 0) {
  html = html.substring(0, galleryStart) + html.substring(responsiveStart);
}

// 3. Remove lightbox CSS
const lightboxStart = html.indexOf('  /* Lightbox */');
const widerStart = html.indexOf('  /* Wider popup for gallery */');
if (lightboxStart > 0) {
  // Find the end of the lightbox+wider block (before next major section)
  let end = html.indexOf('  /* Responsive */', lightboxStart);
  if (end < 0) end = html.indexOf('  @media (max-width: 900px)', lightboxStart);
  if (end > 0) {
    html = html.substring(0, lightboxStart) + html.substring(end);
  }
}

// 4. Remove gallery HTML from popup binding
const oldPopup = `  const images = poiImages[poi.id] || [];${r}${r}  const dayTag`;
html = html.replace(oldPopup, `  const dayTag`);

const oldGallery = `  let galleryHTML = '';${r}  if (images.length >= 3) {${r}    galleryHTML = '<div class=\"popup-gallery\">' +${r}      images.map((img, i) => \`<img src=\"\${img}\" loading=\"lazy\" onclick=\"event.stopPropagation();openLightbox('\${poi.id}',\${i})\" alt=\"\${poi.name}\" />\`).join('') +${r}      '</div>';${r}  }${r}${r}  const marker`;
html = html.replace(oldGallery, `  const marker`);

const oldPopupEnd = `      \${galleryHTML}${r}    \`, { maxWidth: 400, minWidth: 320 });`;
html = html.replace(oldPopupEnd, `    \`);`);

// 5. Remove popup image click handler
const handlerStart = html.indexOf('// ===== POPUP IMAGE CLICK HANDLER =====');
const routeStart = html.indexOf('// ===== ROUTE POLYLINES =====');
if (handlerStart > 0 && routeStart > handlerStart) {
  html = html.substring(0, handlerStart) + html.substring(routeStart);
}

// 6. Remove lightbox JS
const lbStart = html.indexOf('// ===== LIGHTBOX =====');
const initStart = html.indexOf('// ===== INITIAL STATE =====');
if (lbStart > 0 && initStart > lbStart) {
  html = html.substring(0, lbStart) + html.substring(initStart);
}

// 7. Change map tile to light
html = html.replace('dark_all', 'light_all');

// 8. Update map background
html = html.replace('background: #1a1a2e;', 'background: #f0f0f0;');

// 9. Update popup styles
html = html.replace(
  `    background: var(--surface2) !important;${r}    color: var(--text) !important;${r}    border-radius: 10px !important;${r}    border: 1px solid rgba(255,255,255,0.1) !important;${r}    box-shadow: 0 4px 20px rgba(0,0,0,0.5) !important;`,
  `    background: #fff !important;${r}    color: #333 !important;${r}    border-radius: 10px !important;${r}    border: 1px solid rgba(0,0,0,0.1) !important;${r}    box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;`
);

html = html.replace(
  `    background: var(--surface2) !important;`,
  `    background: #fff !important;`
);

// 10. Update legend
html = html.replace(
  `    background: rgba(27, 40, 56, 0.92);`,
  `    background: rgba(255, 255, 255, 0.95);`
);

// 11. Update date badge
html = html.replace(
  `    background: rgba(244, 162, 97, 0.1);`,
  `    background: rgba(231, 111, 81, 0.08);`
);

// 12. Update tag colors
html = html.replace(
  `  .tag-day1 { background: rgba(231,111,81,0.2); color: #e76f51; }`,
  `  .tag-day1 { background: rgba(231,111,81,0.12); color: #d35400; }`
);
html = html.replace(
  `  .tag-day2 { background: rgba(244,162,97,0.2); color: #f4a261; }`,
  `  .tag-day2 { background: rgba(244,162,97,0.12); color: #e67e22; }`
);
html = html.replace(
  `  .tag-day3 { background: rgba(233,196,106,0.2); color: #e9c46a; }`,
  `  .tag-day3 { background: rgba(233,196,106,0.15); color: #b8860b; }`
);
html = html.replace(
  `  .tag-day4 { background: rgba(42,157,143,0.2); color: #2a9d8f; }`,
  `  .tag-day4 { background: rgba(42,157,143,0.12); color: #1a7a6f; }`
);
html = html.replace(
  `  .tag-day5 { background: rgba(69,123,157,0.2); color: #457b9d; }`,
  `  .tag-day5 { background: rgba(69,123,157,0.12); color: #2c6e8a; }`
);
html = html.replace(
  `  .tag-day6 { background: rgba(229,152,155,0.2); color: #e5989b; }`,
  `  .tag-day6 { background: rgba(229,152,155,0.12); color: #c0392b; }`
);

// 13. Clean up any leftover popup-gallery references
html = html.replace(/\.popup-gallery img \{ height:65px; \}/g, '');

// 14. Remove leftover empty popup width CSS
html = html.replace(
  `  .leaflet-popup-content { min-width:320px !important; max-width:380px !important; }${r}  @media (max-width:500px) {${r}    .leaflet-popup-content { min-width:260px !important; max-width:300px !important; }${r}  }${r}`,
  ''
);

// 15. Remove leftover lightbox CSS if any
html = html.replace(/\.lightbox-overlay[\s\S]*?\.lightbox-counter[^}]*\}[^}]*\}/g, '');

fs.writeFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/index.html', html);
console.log('Done! Size:', html.length);
