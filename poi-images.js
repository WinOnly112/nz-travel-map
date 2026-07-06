// POI Images - LoremFlickr (Flickr real photos by search terms)
// Each POI gets 3 unique images via different cache-busting seeds
const poiImages = {
  // Day 1-2: Lake Tekapo area
  church: [
    'https://loremflickr.com/600/400/church,good,shepherd,tekapo?random=1',
    'https://loremflickr.com/600/400/church,good,shepherd,tekapo?random=2',
    'https://loremflickr.com/600/400/church,good,shepherd,tekapo?random=3'
  ],
  tekaposprings: [
    'https://loremflickr.com/600/400/tekapo,springs,hot,pool?random=1',
    'https://loremflickr.com/600/400/tekapo,springs,hot,pool?random=2',
    'https://loremflickr.com/600/400/tekapo,springs,hot,pool?random=3'
  ],
  mtjohn: [
    'https://loremflickr.com/600/400/mount,john,observatory,tekapo?random=1',
    'https://loremflickr.com/600/400/mount,john,observatory,tekapo?random=2',
    'https://loremflickr.com/600/400/mount,john,observatory,tekapo?random=3'
  ],
  astrocafe: [
    'https://loremflickr.com/600/400/astro,cafe,mount,john?random=1',
    'https://loremflickr.com/600/400/astro,cafe,mount,john?random=2',
    'https://loremflickr.com/600/400/astro,cafe,mount,john?random=3'
  ],
  tekapo: [
    'https://loremflickr.com/600/400/lake,tekapo,new,zealand?random=1',
    'https://loremflickr.com/600/400/lake,tekapo,new,zealand?random=2',
    'https://loremflickr.com/600/400/lake,tekapo,new,zealand?random=3'
  ],
  // Day 3: Wanaka
  wanaka: [
    'https://loremflickr.com/600/400/lake,wanaka,new,zealand?random=1',
    'https://loremflickr.com/600/400/lake,wanaka,new,zealand?random=2',
    'https://loremflickr.com/600/400/lake,wanaka,new,zealand?random=3'
  ],
  wanakatree: [
    'https://loremflickr.com/600/400/wanaka,tree,lake,willow?random=1',
    'https://loremflickr.com/600/400/wanaka,tree,lake,willow?random=2',
    'https://loremflickr.com/600/400/wanaka,tree,lake,willow?random=3'
  ],
  crownrange: [
    'https://loremflickr.com/600/400/crown,range,road,scenic?random=1',
    'https://loremflickr.com/600/400/crown,range,road,scenic?random=2',
    'https://loremflickr.com/600/400/crown,range,road,scenic?random=3'
  ],
  // Day 4-7: Queenstown area
  arrowtown: [
    'https://loremflickr.com/600/400/arrowtown,historic,new,zealand?random=1',
    'https://loremflickr.com/600/400/arrowtown,historic,new,zealand?random=2',
    'https://loremflickr.com/600/400/arrowtown,historic,new,zealand?random=3'
  ],
  arrowriver: [
    'https://loremflickr.com/600/400/arrow,river,trail,forest?random=1',
    'https://loremflickr.com/600/400/arrow,river,trail,forest?random=2',
    'https://loremflickr.com/600/400/arrow,river,trail,forest?random=3'
  ],
  skyline: [
    'https://loremflickr.com/600/400/skyline,gondola,queenstown?random=1',
    'https://loremflickr.com/600/400/skyline,gondola,queenstown?random=2',
    'https://loremflickr.com/600/400/skyline,gondola,queenstown?random=3'
  ],
  luge: [
    'https://loremflickr.com/600/400/skyline,luge,queenstown?random=1',
    'https://loremflickr.com/600/400/skyline,luge,queenstown?random=2',
    'https://loremflickr.com/600/400/skyline,luge,queenstown?random=3'
  ],
  earnslaw: [
    'https://loremflickr.com/600/400/tss,earnslaw,steamship,queenstown?random=1',
    'https://loremflickr.com/600/400/tss,earnslaw,steamship,queenstown?random=2',
    'https://loremflickr.com/600/400/tss,earnslaw,steamship,queenstown?random=3'
  ],
  walterpeak: [
    'https://loremflickr.com/600/400/walter,peak,farm,queenstown?random=1',
    'https://loremflickr.com/600/400/walter,peak,farm,queenstown?random=2',
    'https://loremflickr.com/600/400/walter,peak,farm,queenstown?random=3'
  ],
  onsen: [
    'https://loremflickr.com/600/400/onsen,hot,pool,queenstown?random=1',
    'https://loremflickr.com/600/400/onsen,hot,pool,queenstown?random=2',
    'https://loremflickr.com/600/400/onsen,hot,pool,queenstown?random=3'
  ],
  glenorchy: [
    'https://loremflickr.com/600/400/glenorchy,new,zealand,mountains?random=1',
    'https://loremflickr.com/600/400/glenorchy,new,zealand,mountains?random=2',
    'https://loremflickr.com/600/400/glenorchy,new,zealand,mountains?random=3'
  ],
  lagoon: [
    'https://loremflickr.com/600/400/glenorchy,lagoon,walkway?random=1',
    'https://loremflickr.com/600/400/glenorchy,lagoon,walkway?random=2',
    'https://loremflickr.com/600/400/glenorchy,lagoon,walkway?random=3'
  ],
  queenstown: [
    'https://loremflickr.com/600/400/queenstown,new,zealand,lake?random=1',
    'https://loremflickr.com/600/400/queenstown,new,zealand,lake?random=2',
    'https://loremflickr.com/600/400/queenstown,new,zealand,lake?random=3'
  ],
  // Day 8: Te Anau
  gibbston: [
    'https://loremflickr.com/600/400/gibbston,valley,winery,vineyard?random=1',
    'https://loremflickr.com/600/400/gibbston,valley,winery,vineyard?random=2',
    'https://loremflickr.com/600/400/gibbston,valley,winery,vineyard?random=3'
  ],
  birds: [
    'https://loremflickr.com/600/400/takahe,bird,sanctuary,te,anau?random=1',
    'https://loremflickr.com/600/400/takahe,bird,sanctuary,te,anau?random=2',
    'https://loremflickr.com/600/400/takahe,bird,sanctuary,te,anau?random=3'
  ],
  glowworm: [
    'https://loremflickr.com/600/400/glowworm,caves,te,anau?random=1',
    'https://loremflickr.com/600/400/glowworm,caves,te,anau?random=2',
    'https://loremflickr.com/600/400/glowworm,caves,te,anau?random=3'
  ],
  teanau: [
    'https://loremflickr.com/600/400/te,anau,lake,new,zealand?random=1',
    'https://loremflickr.com/600/400/te,anau,lake,new,zealand?random=2',
    'https://loremflickr.com/600/400/te,anau,lake,new,zealand?random=3'
  ],
  // Day 9: Milford Sound
  mirror: [
    'https://loremflickr.com/600/400/mirror,lakes,reflection,milford?random=1',
    'https://loremflickr.com/600/400/mirror,lakes,reflection,milford?random=2',
    'https://loremflickr.com/600/400/mirror,lakes,reflection,milford?random=3'
  ],
  chasm: [
    'https://loremflickr.com/600/400/the,chasm,waterfall,fiordland?random=1',
    'https://loremflickr.com/600/400/the,chasm,waterfall,fiordland?random=2',
    'https://loremflickr.com/600/400/the,chasm,waterfall,fiordland?random=3'
  ],
  milfordcruise: [
    'https://loremflickr.com/600/400/milford,sound,cruise,boat?random=1',
    'https://loremflickr.com/600/400/milford,sound,cruise,boat?random=2',
    'https://loremflickr.com/600/400/milford,sound,cruise,boat?random=3'
  ],
  milford: [
    'https://loremflickr.com/600/400/milford,sound,fiord,waterfall?random=1',
    'https://loremflickr.com/600/400/milford,sound,fiord,waterfall?random=2',
    'https://loremflickr.com/600/400/milford,sound,fiord,waterfall?random=3'
  ],
  // Day 10-11: Dunedin
  railway: [
    'https://loremflickr.com/600/400/dunedin,railway,station,architecture?random=1',
    'https://loremflickr.com/600/400/dunedin,railway,station,architecture?random=2',
    'https://loremflickr.com/600/400/dunedin,railway,station,architecture?random=3'
  ],
  baldwin: [
    'https://loremflickr.com/600/400/baldwin,street,steepest,dunedin?random=1',
    'https://loremflickr.com/600/400/baldwin,street,steepest,dunedin?random=2',
    'https://loremflickr.com/600/400/baldwin,street,steepest,dunedin?random=3'
  ],
  larnach: [
    'https://loremflickr.com/600/400/larnach,castle,dunedin,garden?random=1',
    'https://loremflickr.com/600/400/larnach,castle,dunedin,garden?random=2',
    'https://loremflickr.com/600/400/larnach,castle,dunedin,garden?random=3'
  ],
  albatross: [
    'https://loremflickr.com/600/400/royal,albatross,otago,peninsula?random=1',
    'https://loremflickr.com/600/400/royal,albatross,otago,peninsula?random=2',
    'https://loremflickr.com/600/400/royal,albatross,otago,peninsula?random=3'
  ],
  penguin: [
    'https://loremflickr.com/600/400/yellow,eyed,penguin,new,zealand?random=1',
    'https://loremflickr.com/600/400/yellow,eyed,penguin,new,zealand?random=2',
    'https://loremflickr.com/600/400/yellow,eyed,penguin,new,zealand?random=3'
  ],
  dunedin: [
    'https://loremflickr.com/600/400/dunedin,new,zealand,city?random=1',
    'https://loremflickr.com/600/400/dunedin,new,zealand,city?random=2',
    'https://loremflickr.com/600/400/dunedin,new,zealand,city?random=3'
  ],
  // Day 12: Oamaru
  oamaru: [
    'https://loremflickr.com/600/400/oamaru,victorian,stone,building?random=1',
    'https://loremflickr.com/600/400/oamaru,victorian,stone,building?random=2',
    'https://loremflickr.com/600/400/oamaru,victorian,stone,building?random=3'
  ],
  // Day 13-14: Christchurch
  avon: [
    'https://loremflickr.com/600/400/avon,river,punting,christchurch?random=1',
    'https://loremflickr.com/600/400/avon,river,punting,christchurch?random=2',
    'https://loremflickr.com/600/400/avon,river,punting,christchurch?random=3'
  ],
  gardens: [
    'https://loremflickr.com/600/400/christchurch,botanic,gardens,flower?random=1',
    'https://loremflickr.com/600/400/christchurch,botanic,gardens,flower?random=2',
    'https://loremflickr.com/600/400/christchurch,botanic,gardens,flower?random=3'
  ],
  tram: [
    'https://loremflickr.com/600/400/christchurch,tram,heritage?random=1',
    'https://loremflickr.com/600/400/christchurch,tram,heritage?random=2',
    'https://loremflickr.com/600/400/christchurch,tram,heritage?random=3'
  ],
  christchurch: [
    'https://loremflickr.com/600/400/christchurch,new,zealand,city?random=1',
    'https://loremflickr.com/600/400/christchurch,new,zealand,city?random=2',
    'https://loremflickr.com/600/400/christchurch,new,zealand,city?random=3'
  ],
};
