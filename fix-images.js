const fs = require('fs');
let js = fs.readFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/poi-images.js', 'utf8');

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?w=600&h=400&fit=crop`;

// Fix tekaposprings (was PDFs)
js = js.replace(
  /tekaposprings: \[.*?\]/s,
  `tekaposprings: ["${unsplash('1518837695005-2083093ee35b')}","${unsplash('1500534623283-312aade485b7')}","${unsplash('1476514525535-07fb3b4ae5f1')}"]`
);

// Fix astrocafe (was PDFs)
js = js.replace(
  /astrocafe: \[.*?\]/s,
  `astrocafe: ["${unsplash('1414235077428-338989a2e8c0')}","${unsplash('1507699622108-4be3abd695ad')}","${unsplash('1469521669194-babb45599def')}"]`
);

// Fix crownrange (has PDFs)
js = js.replace(
  /crownrange: \[.*?\]/s,
  `crownrange: ["${unsplash('1506905925346-21bda4d32df4')}","${unsplash('1508193638397-1c4234db14d8')}","${unsplash('1465059409046-f745acf48efb')}"]`
);

// Fix onsen (empty)
js = js.replace(
  /onsen: \[\]/,
  `onsen: ["${unsplash('1518837695005-2083093ee35b')}","${unsplash('1500534623283-312aade485b7')}","${unsplash('1476514525535-07fb3b4ae5f1')}"]`
);

// Fix lagoon (empty)
js = js.replace(
  /lagoon: \[\]/,
  `lagoon: ["${unsplash('1508193638397-1c4234db14d8')}","${unsplash('1465059409046-f745acf48efb')}","${unsplash('1476514525535-07fb3b4ae5f1')}"]`
);

fs.writeFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/poi-images.js', js);
console.log('Fixed all entries!');
