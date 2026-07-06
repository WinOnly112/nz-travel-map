const fs = require('fs');
let html = fs.readFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/index.html', 'utf8');

// 1. Add poi-images.js script
html = html.replace(
  '<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>',
  '<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>\n<script src="poi-images.js"></script>'
);

// 2. Add gallery CSS
const galleryCSS = `
  /* Image Gallery in Popup */
  .popup-gallery { display:flex; gap:6px; margin-top:10px; flex-wrap:wrap; }
  .popup-gallery img { width:calc(33.33% - 4px); height:90px; object-fit:cover; border-radius:6px; cursor:pointer; transition:transform 0.2s, opacity 0.2s; border:1px solid rgba(255,255,255,0.1); }
  .popup-gallery img:hover { transform:scale(1.05); opacity:0.9; }

  /* Lightbox */
  .lightbox-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.92); z-index:9999; display:flex; align-items:center; justify-content:center; cursor:pointer; }
  .lightbox-overlay img { max-width:90vw; max-height:85vh; border-radius:8px; box-shadow:0 8px 40px rgba(0,0,0,0.6); }
  .lightbox-close { position:absolute; top:20px; right:30px; font-size:2rem; color:#fff; cursor:pointer; z-index:10000; background:none; border:none; }
  .lightbox-nav { position:absolute; top:50%; transform:translateY(-50%); font-size:2.5rem; color:#fff; cursor:pointer; background:rgba(255,255,255,0.1); border:none; border-radius:50%; width:50px; height:50px; display:flex; align-items:center; justify-content:center; transition:background 0.2s; }
  .lightbox-nav:hover { background:rgba(255,255,255,0.25); }
  .lightbox-prev { left:20px; }
  .lightbox-next { right:20px; }
  .lightbox-counter { position:absolute; bottom:20px; left:50%; transform:translateX(-50%); color:#aaa; font-size:0.85rem; }

  /* Wider popup for gallery */
  .leaflet-popup-content { min-width:320px !important; max-width:380px !important; }
  @media (max-width:500px) {
    .leaflet-popup-content { min-width:260px !important; max-width:300px !important; }
    .popup-gallery img { height:65px; }
  }
`;

html = html.replace('  /* Responsive */', galleryCSS + '\n  /* Responsive */');

// 3. Replace popup binding
const oldPopup = `pois.forEach(poi => {
  const isWedding = poi.id === 'queenstown';
  const icon = createIcon(poi.type, isWedding);

  const dayTag = \`<span class="popup-day-tag tag-day\${Math.min(poi.day, 6)}">Day \${poi.day}</span>\`;
  const marker = L.marker([poi.lat, poi.lng], { icon })
    .bindPopup(\`
      <div class="popup-title">\${poi.name}</div>
      <div class="popup-meta">\${poi.nameEn} \${dayTag}</div>
      <div class="popup-desc">\${poi.desc}</div>
    \`);

  marker.on('click', () => {
    showDayDetail(poi.day);
    highlightDayTab(poi.day);
  });

  marker.addTo(poiGroup);
  markerMap[poi.id] = marker;
});`;

const newPopup = `pois.forEach(poi => {
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
    \`, { maxWidth: 400, minWidth: 320 });

  marker.on('click', () => {
    showDayDetail(poi.day);
    highlightDayTab(poi.day);
  });

  marker.addTo(poiGroup);
  markerMap[poi.id] = marker;
});`;

if (html.includes(oldPopup)) {
  html = html.replace(oldPopup, newPopup);
  console.log('Popup replaced successfully');
} else {
  console.log('WARNING: old popup code not found!');
}

// 4. Add lightbox functions
const lightboxCode = `
// ===== LIGHTBOX =====
let lightboxData = null;
let lightboxIndex = 0;

function openLightbox(poiId, index) {
  const images = poiImages[poiId];
  if (!images || images.length === 0) return;
  lightboxData = { poiId, images };
  lightboxIndex = index;
  showLightboxImage();
}

function showLightboxImage() {
  const existing = document.querySelector('.lightbox-overlay');
  if (existing) existing.remove();

  const img = lightboxData.images[lightboxIndex];
  const total = lightboxData.images.length;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = \`
    <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
    \${total > 1 ? '<button class="lightbox-nav lightbox-prev" onclick="event.stopPropagation();lightboxPrev()">‹</button>' : ''}
    <img src="\${img}" onclick="event.stopPropagation();lightboxNext()" />
    \${total > 1 ? '<button class="lightbox-nav lightbox-next" onclick="event.stopPropagation();lightboxNext()">›</button>' : ''}
    <div class="lightbox-counter">\${lightboxIndex + 1} / \${total}</div>
  \`;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeLightbox(); });
  document.body.appendChild(overlay);
}

function closeLightbox() {
  const overlay = document.querySelector('.lightbox-overlay');
  if (overlay) overlay.remove();
  lightboxData = null;
}

function lightboxNext() {
  lightboxIndex = (lightboxIndex + 1) % lightboxData.images.length;
  showLightboxImage();
}

function lightboxPrev() {
  lightboxIndex = (lightboxIndex - 1 + lightboxData.images.length) % lightboxData.images.length;
  showLightboxImage();
}

document.addEventListener('keydown', (e) => {
  if (!lightboxData) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') lightboxNext();
  if (e.key === 'ArrowLeft') lightboxPrev();
});
`;

html = html.replace('// ===== INITIAL STATE =====', lightboxCode + '\n// ===== INITIAL STATE =====');

fs.writeFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/index.html', html, 'utf8');
console.log('Updated! New size:', html.length, 'bytes');
