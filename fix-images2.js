const fs = require('fs');
let js = fs.readFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/poi-images.js', 'utf8');

const u = (id) => `https://images.unsplash.com/photo-${id}?w=600&h=400&fit=crop`;

// Fix onsen - use different Unsplash IDs than tekaposprings
js = js.replace(
  /onsen: \[.*?\]/s,
  `onsen: ["${u('1540555700478-4be6f2c1e5e7')}","${u('1571896349842-33c89424de2d')}","${u('1604537523558-2f3b5e3b1fe8')}"]`
);

// Fix lagoon - use different Unsplash IDs than wanaka
js = js.replace(
  /lagoon: \[.*?\]/s,
  `lagoon: ["${u('1501785888041-af3ef285b470')}","${u('1472396961693-2e9080849d22')}","${u('1441974231531-c6227db76b6e')}"]`
);

fs.writeFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/poi-images.js', js);
console.log('Fixed onsen and lagoon with unique Unsplash IDs');
