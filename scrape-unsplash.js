// Auto-scrape Unsplash photo IDs for each POI
// Run this in browser console on unsplash.com
const queries = {
  church: 'church of the good shepherd lake tekapo',
  tekaposprings: 'tekapo springs hot pools',
  mtjohn: 'mount john observatory lake tekapo',
  astrocafe: 'astro cafe mount john',
  tekapo: 'lake tekapo new zealand',
  wanaka: 'lake wanaka new zealand',
  wanakatree: 'that wanaka tree lake',
  crownrange: 'crown range road scenic',
  arrowtown: 'arrowtown new zealand historic',
  arrowriver: 'arrow river trail arrowtown',
  skyline: 'skyline gondola queenstown',
  luge: 'skyline luge queenstown',
  earnslaw: 'tss earnslaw steamship',
  walterpeak: 'walter peak farm queenstown',
  onsen: 'onsen hot pools queenstown',
  glenorchy: 'glenorchy new zealand',
  lagoon: 'glenorchy lagoon walkway',
  queenstown: 'queenstown lake wakatipu',
  gibbston: 'gibbston valley winery',
  birds: 'takahe bird new zealand',
  glowworm: 'glowworm caves new zealand',
  teanau: 'lake te anau new zealand',
  mirror: 'mirror lakes milford sound',
  chasm: 'the chasm fiordland',
  milfordcruise: 'milford sound cruise',
  milford: 'milford sound new zealand',
  railway: 'dunedin railway station',
  baldwin: 'baldwin street dunedin steepest',
  larnach: 'larnach castle dunedin',
  albatross: 'royal albatross otago peninsula',
  penguin: 'yellow eyed penguin new zealand',
  dunedin: 'dunedin city new zealand',
  oamaru: 'oamaru victorian precinct',
  avon: 'avon river punting christchurch',
  gardens: 'christchurch botanic gardens',
  tram: 'christchurch tram heritage',
  christchurch: 'christchurch city new zealand'
};

// This will be run in browser to collect all IDs
async function scrapeAll() {
  const results = {};
  for (const [id, query] of Object.entries(queries)) {
    const url = 'https://unsplash.com/s/photos/' + encodeURIComponent(query);
    window.location = url;
    await new Promise(r => setTimeout(r, 4000));
    const imgs = document.querySelectorAll('img[src*="photo-"]');
    const ids = [];
    imgs.forEach(img => {
      const m = img.src.match(/photo-([a-zA-Z0-9_-]+)/);
      if (m && !ids.includes(m[1])) ids.push(m[1]);
    });
    results[id] = ids.slice(0, 3);
    console.log(id, results[id]);
  }
  console.log(JSON.stringify(results));
}
console.log('Script loaded. Run scrapeAll() to start.');
