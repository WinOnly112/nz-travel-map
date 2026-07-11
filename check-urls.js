const https = require('https');
const http = require('http');
const fs = require('fs');

// Read poi-images.js and extract all URLs
const js = fs.readFileSync('C:/Users/28306/aionclaw/project/nz-travel-map/detailed/poi-images.js', 'utf8');
const urlPattern = /"([^"]+)"/g;
const allUrls = [];
let match;
while ((match = urlPattern.exec(js)) !== null) {
  allUrls.push(match[1]);
}

console.log(`Checking ${allUrls.length} image URLs...\n`);

function checkUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { timeout: 15000 }, (res) => {
      // Follow redirects (max 5)
      if ([301, 302, 303, 307, 308].includes(res.statusCode)) {
        const redirectUrl = res.headers.location;
        if (redirectUrl) {
          checkUrl(redirectUrl).then(resolve);
          return;
        }
      }
      resolve({
        url: url.substring(0, 100),
        status: res.statusCode,
        contentType: res.headers['content-type'],
        ok: res.statusCode === 200
      });
    });
    req.on('error', (e) => {
      resolve({ url: url.substring(0, 100), status: 0, error: e.message, ok: false });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ url: url.substring(0, 100), status: 0, error: 'timeout', ok: false });
    });
  });
}

async function main() {
  const results = [];
  for (let i = 0; i < allUrls.length; i++) {
    const url = allUrls[i];
    const result = await checkUrl(url);
    results.push(result);
    const icon = result.ok ? '✓' : '✗';
    console.log(`[${(i+1).toString().padStart(3)}/${allUrls.length}] ${icon} ${result.url}... (${result.status})`);
    // Small delay to not hammer servers
    await new Promise(r => setTimeout(r, 200));
  }
  
  const ok = results.filter(r => r.ok).length;
  const failed = results.filter(r => !r.ok);
  
  console.log(`\n=== RESULTS ===`);
  console.log(`OK: ${ok}/${allUrls.length}`);
  console.log(`Failed: ${failed.length}`);
  
  if (failed.length > 0) {
    console.log('\nFailed URLs:');
    failed.forEach(f => console.log(`  ${f.url} - ${f.status} ${f.error || ''}`));
  }
  
  // Also check for duplicate actual image content by comparing redirect URLs
  const wikimediaUrls = results.filter(r => r.url.includes('wikimedia'));
  const unsplashUrls = results.filter(r => r.url.includes('unsplash'));
  console.log(`\nWikimedia: ${wikimediaUrls.length}, Unsplash: ${unsplashUrls.length}`);
}

main().catch(console.error);
