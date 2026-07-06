// POI Images - Multiple free image sources with fallback
// Using Picsum (Lorem Picsum) as reliable fallback with unique seeds per POI
const poiImages = {
  // Day 1-2: Lake Tekapo
  church: [
    'https://picsum.photos/seed/tekapochurch1/600/400',
    'https://picsum.photos/seed/tekapochurch2/600/400',
    'https://picsum.photos/seed/tekapochurch3/600/400'
  ],
  tekaposprings: [
    'https://picsum.photos/seed/hotsprings1/600/400',
    'https://picsum.photos/seed/hotsprings2/600/400',
    'https://picsum.photos/seed/hotsprings3/600/400'
  ],
  mtjohn: [
    'https://picsum.photos/seed/mtjohn1/600/400',
    'https://picsum.photos/seed/mtjohn2/600/400',
    'https://picsum.photos/seed/mtjohn3/600/400'
  ],
  astrocafe: [
    'https://picsum.photos/seed/astrocafe1/600/400',
    'https://picsum.photos/seed/astrocafe2/600/400',
    'https://picsum.photos/seed/astrocafe3/600/400'
  ],
  tekapo: [
    'https://picsum.photos/seed/laketekapo1/600/400',
    'https://picsum.photos/seed/laketekapo2/600/400',
    'https://picsum.photos/seed/laketekapo3/600/400'
  ],
  // Day 3: Wanaka
  wanaka: [
    'https://picsum.photos/seed/wanaka1/600/400',
    'https://picsum.photos/seed/wanaka2/600/400',
    'https://picsum.photos/seed/wanaka3/600/400'
  ],
  wanakatree: [
    'https://picsum.photos/seed/wanakatree1/600/400',
    'https://picsum.photos/seed/wanakatree2/600/400',
    'https://picsum.photos/seed/wanakatree3/600/400'
  ],
  crownrange: [
    'https://picsum.photos/seed/crownrange1/600/400',
    'https://picsum.photos/seed/crownrange2/600/400',
    'https://picsum.photos/seed/crownrange3/600/400'
  ],
  // Day 4-7: Queenstown
  arrowtown: [
    'https://picsum.photos/seed/arrowtown1/600/400',
    'https://picsum.photos/seed/arrowtown2/600/400',
    'https://picsum.photos/seed/arrowtown3/600/400'
  ],
  arrowriver: [
    'https://picsum.photos/seed/arrowriver1/600/400',
    'https://picsum.photos/seed/arrowriver2/600/400',
    'https://picsum.photos/seed/arrowriver3/600/400'
  ],
  skyline: [
    'https://picsum.photos/seed/skylineq1/600/400',
    'https://picsum.photos/seed/skylineq2/600/400',
    'https://picsum.photos/seed/skylineq3/600/400'
  ],
  luge: [
    'https://picsum.photos/seed/lugeq1/600/400',
    'https://picsum.photos/seed/lugeq2/600/400',
    'https://picsum.photos/seed/lugeq3/600/400'
  ],
  earnslaw: [
    'https://picsum.photos/seed/earnslaw1/600/400',
    'https://picsum.photos/seed/earnslaw2/600/400',
    'https://picsum.photos/seed/earnslaw3/600/400'
  ],
  walterpeak: [
    'https://picsum.photos/seed/walterpeak1/600/400',
    'https://picsum.photos/seed/walterpeak2/600/400',
    'https://picsum.photos/seed/walterpeak3/600/400'
  ],
  onsen: [
    'https://picsum.photos/seed/onsenqp1/600/400',
    'https://picsum.photos/seed/onsenqp2/600/400',
    'https://picsum.photos/seed/onsenqp3/600/400'
  ],
  glenorchy: [
    'https://picsum.photos/seed/glenorchy1/600/400',
    'https://picsum.photos/seed/glenorchy2/600/400',
    'https://picsum.photos/seed/glenorchy3/600/400'
  ],
  lagoon: [
    'https://picsum.photos/seed/lagoon1/600/400',
    'https://picsum.photos/seed/lagoon2/600/400',
    'https://picsum.photos/seed/lagoon3/600/400'
  ],
  queenstown: [
    'https://picsum.photos/seed/queenstown1/600/400',
    'https://picsum.photos/seed/queenstown2/600/400',
    'https://picsum.photos/seed/queenstown3/600/400'
  ],
  // Day 8: Te Anau
  gibbston: [
    'https://picsum.photos/seed/gibbston1/600/400',
    'https://picsum.photos/seed/gibbston2/600/400',
    'https://picsum.photos/seed/gibbston3/600/400'
  ],
  birds: [
    'https://picsum.photos/seed/birdsanct1/600/400',
    'https://picsum.photos/seed/birdsanct2/600/400',
    'https://picsum.photos/seed/birdsanct3/600/400'
  ],
  glowworm: [
    'https://picsum.photos/seed/glowwormc1/600/400',
    'https://picsum.photos/seed/glowwormc2/600/400',
    'https://picsum.photos/seed/glowwormc3/600/400'
  ],
  teanau: [
    'https://picsum.photos/seed/teanau1/600/400',
    'https://picsum.photos/seed/teanau2/600/400',
    'https://picsum.photos/seed/teanau3/600/400'
  ],
  // Day 9: Milford Sound
  mirror: [
    'https://picsum.photos/seed/mirrorlake1/600/400',
    'https://picsum.photos/seed/mirrorlake2/600/400',
    'https://picsum.photos/seed/mirrorlake3/600/400'
  ],
  chasm: [
    'https://picsum.photos/seed/thechasm1/600/400',
    'https://picsum.photos/seed/thechasm2/600/400',
    'https://picsum.photos/seed/thechasm3/600/400'
  ],
  milfordcruise: [
    'https://picsum.photos/seed/milfordc1/600/400',
    'https://picsum.photos/seed/milfordc2/600/400',
    'https://picsum.photos/seed/milfordc3/600/400'
  ],
  milford: [
    'https://picsum.photos/seed/milfords1/600/400',
    'https://picsum.photos/seed/milfords2/600/400',
    'https://picsum.photos/seed/milfords3/600/400'
  ],
  // Day 10-11: Dunedin
  railway: [
    'https://picsum.photos/seed/dunedinrail1/600/400',
    'https://picsum.photos/seed/dunedinrail2/600/400',
    'https://picsum.photos/seed/dunedinrail3/600/400'
  ],
  baldwin: [
    'https://picsum.photos/seed/baldwinst1/600/400',
    'https://picsum.photos/seed/baldwinst2/600/400',
    'https://picsum.photos/seed/baldwinst3/600/400'
  ],
  larnach: [
    'https://picsum.photos/seed/larnachc1/600/400',
    'https://picsum.photos/seed/larnachc2/600/400',
    'https://picsum.photos/seed/larnachc3/600/400'
  ],
  albatross: [
    'https://picsum.photos/seed/albatross1/600/400',
    'https://picsum.photos/seed/albatross2/600/400',
    'https://picsum.photos/seed/albatross3/600/400'
  ],
  penguin: [
    'https://picsum.photos/seed/penguin1/600/400',
    'https://picsum.photos/seed/penguin2/600/400',
    'https://picsum.photos/seed/penguin3/600/400'
  ],
  dunedin: [
    'https://picsum.photos/seed/dunedin1/600/400',
    'https://picsum.photos/seed/dunedin2/600/400',
    'https://picsum.photos/seed/dunedin3/600/400'
  ],
  // Day 12: Oamaru
  oamaru: [
    'https://picsum.photos/seed/oamaru1/600/400',
    'https://picsum.photos/seed/oamaru2/600/400',
    'https://picsum.photos/seed/oamaru3/600/400'
  ],
  // Day 13-14: Christchurch
  avon: [
    'https://picsum.photos/seed/avonriver1/600/400',
    'https://picsum.photos/seed/avonriver2/600/400',
    'https://picsum.photos/seed/avonriver3/600/400'
  ],
  gardens: [
    'https://picsum.photos/seed/chchgarden1/600/400',
    'https://picsum.photos/seed/chchgarden2/600/400',
    'https://picsum.photos/seed/chchgarden3/600/400'
  ],
  tram: [
    'https://picsum.photos/seed/chchtram1/600/400',
    'https://picsum.photos/seed/chchtram2/600/400',
    'https://picsum.photos/seed/chchtram3/600/400'
  ],
  christchurch: [
    'https://picsum.photos/seed/christchurch1/600/400',
    'https://picsum.photos/seed/christchurch2/600/400',
    'https://picsum.photos/seed/christchurch3/600/400'
  ],
};
