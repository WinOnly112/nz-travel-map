// POI Images - LoremFlickr real photos, each with unique search terms
// 3 different search angles per POI to ensure unique, scenery-focused photos
const poiImages = {
  // Day 1-2: Lake Tekapo area
  church: [
    'https://loremflickr.com/600/400/church,good,shepherd,lake,tekapo',
    'https://loremflickr.com/600/400/tekapo,stone,church,lupin,flowers',
    'https://loremflickr.com/600/400/new,zealand,church,lake,turquoise'
  ],
  tekaposprings: [
    'https://loremflickr.com/600/400/tekapo,springs,hot,pool,star',
    'https://loremflickr.com/600/400/hot,spring,mountain,view,relax',
    'https://loremflickr.com/600/400/night,sky,stars,tekapo,dark'
  ],
  mtjohn: [
    'https://loremflickr.com/600/400/mount,john,observatory,tekapo,lake',
    'https://loremflickr.com/600/400/mountain,summit,panorama,new,zealand',
    'https://loremflickr.com/600/400/alpine,viewpoint,turquoise,lake,tekapo'
  ],
  astrocafe: [
    'https://loremflickr.com/600/400/astro,cafe,mount,john,coffee',
    'https://loremflickr.com/600/400/mountain,cafe,view,landscape,scenic',
    'https://loremflickr.com/600/400/cafe,with,view,lake,tekapo,mountain'
  ],
  tekapo: [
    'https://loremflickr.com/600/400/lake,tekapo,turquoise,new,zealand',
    'https://loremflickr.com/600/400/tekapo,lupin,flowers,summer,landscape',
    'https://loremflickr.com/600/400/lake,tekapo,sunset,mountain,reflection'
  ],
  // Day 3: Wanaka
  wanaka: [
    'https://loremflickr.com/600/400/lake,wanaka,mountain,new,zealand',
    'https://loremflickr.com/600/400/wanaka,town,lakeside,autumn,scenic',
    'https://loremflickr.com/600/400/lake,wanaka,sunset,reflection,alps'
  ],
  wanakatree: [
    'https://loremflickr.com/600/400/wanaka,tree,willow,lake,reflection',
    'https://loremflickr.com/600/400/lone,tree,lake,wanaka,sunrise,water',
    'https://loremflickr.com/600/400/that,wanaka,tree,sunset,silhouette'
  ],
  crownrange: [
    'https://loremflickr.com/600/400/crown,range,road,mountain,scenic',
    'https://loremflickr.com/600/400/alpine,highway,panorama,new,zealand',
    'https://loremflickr.com/600/400/mountain,pass,drive,landscape,valley'
  ],
  // Day 4-7: Queenstown area
  arrowtown: [
    'https://loremflickr.com/600/400/arrowtown,historic,street,autumn,color',
    'https://loremflickr.com/600/400/arrowtown,gold,mining,town,heritage',
    'https://loremflickr.com/600/400/arrowtown,autumn,leaves,new,zealand'
  ],
  arrowriver: [
    'https://loremflickr.com/600/400/arrow,river,trail,forest,walking',
    'https://loremflickr.com/600/400/river,woodland,path,nature,hike',
    'https://loremflickr.com/600/400/forest,stream,arrowtown,green,peaceful'
  ],
  skyline: [
    'https://loremflickr.com/600/400/skyline,gondola,queenstown,view,lake',
    'https://loremflickr.com/600/400/queenstown,gondola,mountain,panorama',
    'https://loremflickr.com/600/400/birds,eye,queenstown,lake,wakatipu'
  ],
  luge: [
    'https://loremflickr.com/600/400/skyline,luge,queenstown,fun,ride',
    'https://loremflickr.com/600/400/mountain,luge,track,adventure,scenic',
    'https://loremflickr.com/600/400/queenstown,activity,outdoor,summer,fun'
  ],
  earnslaw: [
    'https://loremflickr.com/600/400/tss,earnslaw,steamship,queenstown,lake',
    'https://loremflickr.com/600/400/vintage,steam,boat,wakatipu,lake',
    'https://loremflickr.com/600/400/historic,ship,queenstown,mountain,water'
  ],
  walterpeak: [
    'https://loremflickr.com/600/400/walter,peak,farm,queenstown,sheep',
    'https://loremflickr.com/600/400/high,country,farm,new,zealand,lake',
    'https://loremflickr.com/600/400/farm,garden,lakeside,queenstown,scenic'
  ],
  onsen: [
    'https://loremflickr.com/600/400/onsen,hot,pool,queenstown,gorge',
    'https://loremflickr.com/600/400/outdoor,hot,tub,mountain,view,relax',
    'https://loremflickr.com/600/400/japanese,hot,spring,valley,queenstown'
  ],
  glenorchy: [
    'https://loremflickr.com/600/400/glenorchy,lagoon,mountain,reflection',
    'https://loremflickr.com/600/400/glenorchy,new,zealand,alps,scenery',
    'https://loremflickr.com/600/400/middle,earth,glenorchy,lord,rings,landscape'
  ],
  lagoon: [
    'https://loremflickr.com/600/400/glenorchy,lagoon,walkway,boardwalk',
    'https://loremflickr.com/600/400/lagoon,reflection,mountain,mirror,water',
    'https://loremflickr.com/600/400/wetland,walk,glenorchy,snow,capped,peak'
  ],
  queenstown: [
    'https://loremflickr.com/600/400/queenstown,wakatipu,lake,mountain,view',
    'https://loremflickr.com/600/400/queenstown,new,zealand,alps,waterfront',
    'https://loremflickr.com/600/400/queenstown,sunset,lake,remarkables,mountain'
  ],
  // Day 8: Te Anau
  gibbston: [
    'https://loremflickr.com/600/400/gibbston,valley,winery,vineyard,grape',
    'https://loremflickr.com/600/400/wine,tasting,vineyard,queenstown,cellar',
    'https://loremflickr.com/600/400/winery,garden,lunch,grapevine,outdoor'
  ],
  birds: [
    'https://loremflickr.com/600/400/takahe,bird,rare,new,zealand,native',
    'https://loremflickr.com/600/400/bird,sanctuary,te,anau,wildlife,forest',
    'https://loremflickr.com/600/400/new,zealand,native,bird,conservation'
  ],
  glowworm: [
    'https://loremflickr.com/600/400/glowworm,caves,te,anau,blue,light',
    'https://loremflickr.com/600/400/cave,glowworm,underground,new,zealand',
    'https://loremflickr.com/600/400/te,anau,cave,boat,tour,dark,glowing'
  ],
  teanau: [
    'https://loremflickr.com/600/400/te,anau,lake,mountain,fiordland',
    'https://loremflickr.com/600/400/lake,te,anau,sunset,reflection,peace',
    'https://loremflickr.com/600/400/te,anau,town,lakeside,new,zealand'
  ],
  // Day 9: Milford Sound
  mirror: [
    'https://loremflickr.com/600/400/mirror,lakes,reflection,fiordland,calm',
    'https://loremflickr.com/600/400/lake,reflection,mountain,mirror,perfect',
    'https://loremflickr.com/600/400/milford,road,mirror,lake,still,water'
  ],
  chasm: [
    'https://loremflickr.com/600/400/the,chasm,waterfall,fiordland,rock',
    'https://loremflickr.com/600/400/waterfall,gorge,rock,formation,forest',
    'https://loremflickr.com/600/400/creek,rapids,fiordland,national,park'
  ],
  milfordcruise: [
    'https://loremflickr.com/600/400/milford,sound,cruise,boat,waterfall',
    'https://loremflickr.com/600/400/fiord,cruise,cliff,waterfall,dolphin',
    'https://loremflickr.com/600/400/milford,sound,boat,tour,fiord,scenic'
  ],
  milford: [
    'https://loremflickr.com/600/400/milford,sound,fiord,waterfall,cliff',
    'https://loremflickr.com/600/400/milford,sound,mitre,peak,majestic',
    'https://loremflickr.com/600/400/fiordland,milford,rainforest,mist,peak'
  ],
  // Day 10-11: Dunedin
  railway: [
    'https://loremflickr.com/600/400/dunedin,railway,station,architecture,historic',
    'https://loremflickr.com/600/400/victorian,railway,station,new,zealand,train',
    'https://loremflickr.com/600/400/dunedin,train,station,interior,heritage'
  ],
  baldwin: [
    'https://loremflickr.com/600/400/baldwin,street,steepest,dunedin,world',
    'https://loremflickr.com/600/400/steep,street,dunedin,houses,slope',
    'https://loremflickr.com/600/400/world,steepest,street,new,zealand,record'
  ],
  larnach: [
    'https://loremflickr.com/600/400/larnach,castle,dunedin,garden,historic',
    'https://loremflickr.com/600/400/castle,new,zealand,tower,garden,flower',
    'https://loremflickr.com/600/400/larnach,castle,interior,heritage,otago'
  ],
  albatross: [
    'https://loremflickr.com/600/400/royal,albatross,flying,otago,peninsula',
    'https://loremflickr.com/600/400/albatross,bird,sea,cliff,coastal,ocean',
    'https://loremflickr.com/600/400/otago,peninsula,coastline,cliff,sea,view'
  ],
  penguin: [
    'https://loremflickr.com/600/400/yellow,eyed,penguin,new,zealand,beach',
    'https://loremflickr.com/600/400/penguin,wildlife,otago,coast,endangered',
    'https://loremflickr.com/600/400/penguin,beach,dune,conservation,otago'
  ],
  dunedin: [
    'https://loremflickr.com/600/400/dunedin,new,zealand,city,heritage',
    'https://loremflickr.com/600/400/dunedin,octagon,scottish,architecture',
    'https://loremflickr.com/600/400/dunedin,otago,harbour,hill,view'
  ],
  // Day 12: Oamaru
  oamaru: [
    'https://loremflickr.com/600/400/oamaru,victorian,stone,building,historic',
    'https://loremflickr.com/600/400/oamaru,whitestone,architecture,street,heritage',
    'https://loremflickr.com/600/400/oamaru,steampunk,historic,precinct,new,zealand'
  ],
  // Day 13-14: Christchurch
  avon: [
    'https://loremflickr.com/600/400/avon,river,punting,christchurch,boat',
    'https://loremflickr.com/600/400/punting,boat,christchurch,river,garden',
    'https://loremflickr.com/600/400/avon,river,willow,tree,christchurch,park'
  ],
  gardens: [
    'https://loremflickr.com/600/400/christchurch,botanic,gardens,flower,rose',
    'https://loremflickr.com/600/400/botanical,garden,christchurch,bloom,spring',
    'https://loremflickr.com/600/400/garden,conservatory,christchurch,greenhouse'
  ],
  tram: [
    'https://loremflickr.com/600/400/christchurch,tram,heritage,street,historic',
    'https://loremflickr.com/600/400/vintage,tram,christchurch,city,tour',
    'https://loremflickr.com/600/400/heritage,tram,new,zealand,christchurch,city'
  ],
  christchurch: [
    'https://loremflickr.com/600/400/christchurch,new,zealand,garden,city',
    'https://loremflickr.com/600/400/christchurch,cathedral,square,city,centre',
    'https://loremflickr.com/600/400/christchurch,avon,river,city,skyline'
  ],
};
