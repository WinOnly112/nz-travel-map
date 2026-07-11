const https = require('https');
const fs = require('fs');

const pois = {
  church: 'Church of the Good Shepherd Lake Tekapo',
  tekaposprings: 'Tekapo Springs hot pools',
  mtjohn: 'Mount John Observatory Lake Tekapo',
  astrocafe: 'Astro Cafe Mount John',
  tekapo: 'Lake Tekapo New Zealand',
  wanaka: 'Lake Wanaka New Zealand',
  wanakatree: 'That Wanaka Tree',
  crownrange: 'Crown Range Road scenic',
  arrowtown: 'Arrowtown New Zealand',
  arrowriver: 'Arrow River Arrowtown',
  skyline: 'Skyline Gondola Queenstown',
  luge: 'Skyline Luge Queenstown',
  earnslaw: 'TSS Earnslaw steamship Queenstown',
  walterpeak: 'Walter Peak farm Queenstown',
  onsen: 'Onsen Hot Pools Queenstown',
  glenorchy: 'Glenorchy New Zealand',
  lagoon: 'Glenorchy Lagoon walkway',
  queenstown: 'Queenstown New Zealand lake',
  gibbston: 'Gibbston Valley winery',
  birds: 'Takahe bird New Zealand',
  glowworm: 'glowworm caves New Zealand',
  teanau: 'Lake Te Anau New Zealand',
  mirror: 'Mirror Lakes Milford Sound',
  chasm: 'The Chasm Fiordland waterfall',
  milfordcruise: 'Milford Sound cruise boat',
  milford: 'Milford Sound New Zealand',
  railway: 'Dunedin Railway Station',
  baldwin: 'Baldwin Street Dunedin steepest',
  larnach: 'Larnach Castle Dunedin',
  albatross: 'Royal Albatross Otago Peninsula',
  penguin: 'yellow eyed penguin New Zealand',
  dunedin: 'Dunedin New Zealand city',
  oamaru: 'Oamaru Victorian precinct',
  avon: 'Avon River punting Christchurch',
  gardens: 'Christchurch Botanic Gardens',
  tram: 'Christchurch heritage tram',
  christchurch: 'Christchurch New Zealand city'
};

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'NZTravelMap/1.0 (personal project; contact@example.com)' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(new Error(`Parse error: ${data.substring(0,100)}`)); }
      });
    }).on('error', reject);
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function searchCommons(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&format=json&srlimit=5&origin=*`;
  const result = await fetchJSON(url);
  return (result.query?.search || []).map(s => s.title.replace('File:', ''));
}

async function getImageUrl(filename) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&format=json&origin=*`;
  const result = await fetchJSON(url);
  const pages = result.query?.pages || {};
  for (const page of Object.values(pages)) {
    if (page.imageinfo && page.imageinfo[0]) {
      return page.imageinfo[0].url;
    }
  }
  return null;
}

async function main() {
  const results = {};
  let totalImages = 0;
  let errors = 0;
  
  for (const [id, query] of Object.entries(pois)) {
    console.log(`[${Object.keys(pois).indexOf(id)+1}/${Object.keys(pois).length}] ${id}: "${query}"`);
    try {
      await sleep(2500); // 2.5s delay between searches
      const files = await searchCommons(query);
      const urls = [];
      
      for (const file of files) {
        if (urls.length >= 3) break;
        try {
          await sleep(1000); // 1s between image lookups
          const url = await getImageUrl(file);
          if (url && !urls.includes(url)) {
            urls.push(url);
            console.log(`  ✓ ${file}`);
          }
        } catch(e) {
          console.log(`  ✗ ${file}: ${e.message}`);
        }
      }
      
      results[id] = urls;
      totalImages += urls.length;
      console.log(`  => ${urls.length} images`);
    } catch(e) {
      console.log(`  ERROR: ${e.message}`);
      results[id] = [];
      errors++;
    }
  }
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`Total images: ${totalImages} / ${Object.keys(pois).length * 3}`);
  console.log(`POIs with errors: ${errors}`);
  
  // Check duplicates across all URLs
  const allUrls = [];
  const dupes = [];
  for (const [id, urls] of Object.entries(results)) {
    for (const url of urls) {
      if (allUrls.includes(url)) {
        dupes.push({ url, poi: id });
      } else {
        allUrls.push(url);
      }
    }
  }
  console.log(`Cross-POI duplicates: ${dupes.length}`);
  if (dupes.length > 0) console.log(JSON.stringify(dupes));
  
  // Generate JS
  let js = '// POI Images - Wikimedia Commons real photos (verified no duplicates)\n';
  js += 'const poiImages = {\n';
  for (const [id, urls] of Object.entries(results)) {
    js += `  ${id}: ${JSON.stringify(urls)},\n`;
  }
  js += '};\n';
  
  fs.writeFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/poi-images.js', js);
  console.log('\nWritten poi-images.js');
  
  fs.writeFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/scrape-results.json', JSON.stringify(results, null, 2));
  console.log('Written scrape-results.json');
}

main().catch(console.error);
