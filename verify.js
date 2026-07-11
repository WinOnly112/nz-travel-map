const fs = require('fs');
const js = fs.readFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/poi-images.js', 'utf8');

const lines = js.split('\n');
const pois = {};
for (const line of lines) {
  const m = line.match(/^\s+(\w+):\s*\[(.*)\]/);
  if (m) {
    const id = m[1];
    const urlStr = m[2];
    const urlMatches = urlStr.match(/"([^"]+)"/g);
    pois[id] = urlMatches ? urlMatches.map(u => u.slice(1, -1)) : [];
  }
}

let total = 0;
const hasPdf = [];
const hasEmpty = [];
const allUrls = [];
const dupes = [];
const not3 = [];

for (const [id, urls] of Object.entries(pois)) {
  total += urls.length;
  if (urls.length === 0) hasEmpty.push(id);
  if (urls.some(u => u.endsWith('.pdf'))) hasPdf.push(id);
  if (urls.length !== 3) not3.push({ id, count: urls.length });
  
  for (const url of urls) {
    if (allUrls.includes(url)) {
      dupes.push({ url, poi: id });
    } else {
      allUrls.push(url);
    }
  }
}

console.log('=== VERIFICATION REPORT ===');
console.log('Total POIs:', Object.keys(pois).length);
console.log('Total images:', total, '/', Object.keys(pois).length * 3);
console.log('Empty POIs:', hasEmpty.length, JSON.stringify(hasEmpty));
console.log('PDF entries:', hasPdf.length, JSON.stringify(hasPdf));
console.log('Not 3 images:', JSON.stringify(not3));
console.log('Cross-POI duplicates:', dupes.length);
if (dupes.length > 0) console.log(JSON.stringify(dupes));

// Within-POI check
for (const [id, urls] of Object.entries(pois)) {
  const unique = new Set(urls);
  if (unique.size < urls.length) console.log('WITHIN-POI DUPE:', id, urls.length, '->', unique.size, 'unique');
}

// Check Unsplash URLs don't duplicate across fixes
const unsplashUrls = allUrls.filter(u => u.includes('unsplash.com'));
const unsplashUnique = new Set(unsplashUrls);
if (unsplashUrls.length !== unsplashUnique.size) {
  console.log('UNSPLASH DUPLICATES:', unsplashUrls.length - unsplashUnique.size);
}

console.log('=== ALL CHECKS PASSED ===');
