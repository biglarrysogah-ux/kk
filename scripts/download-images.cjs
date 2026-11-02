const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, '../public/images/cars');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const vehicleImageMap = [
  { file: 'toyota-corolla-1.jpg', title: 'Toyota_Corolla' },
  { file: 'toyota-vitz-1.jpg', title: 'Toyota_Vitz' },
  { file: 'mazda-sedan-1.jpg', title: 'Mazda3' },
  { file: 'toyota-corolla-2.jpg', title: 'Toyota_Corolla_(E210)' },
  { file: 'toyota-corolla-2026-1.jpg', title: 'Toyota_Corolla' },
  { file: 'toyota-corolla-3.jpg', title: 'Toyota_Corolla' },
  { file: 'honda-civic-1.jpg', title: 'Honda_Civic' },
  { file: 'toyota-vios-2026-1.jpg', title: 'Toyota_Vios' },
  { file: 'kia-forte-1.jpg', title: 'Kia_Forte' },
  { file: 'land-cruiser-prado-1.jpg', title: 'Toyota_Land_Cruiser_Prado' },
  { file: 'toyota-rav4-1.jpg', title: 'Toyota_RAV4' },
  { file: 'prado-chauffeur-1.jpg', title: 'Toyota_Land_Cruiser_Prado' },
  { file: 'lexus-lx570-chauffeur-1.jpg', title: 'Lexus_LX' },
  { file: 'mitsubishi-outlander-1.jpg', title: 'Mitsubishi_Outlander' },
  { file: 'land-cruiser-prado-2.jpg', title: 'Toyota_Land_Cruiser_Prado' },
  { file: 'honda-crv-1.jpg', title: 'Honda_CR-V' },
  { file: 'toyota-highlander-1.jpg', title: 'Toyota_Highlander' },
  { file: 'toyota-rav4-2.jpg', title: 'Toyota_RAV4' },
  { file: 'haval-suv-1.jpg', title: 'Haval_H6' },
  { file: 'lexus-rx350-1.jpg', title: 'Lexus_RX' },
  { file: 'hyundai-santafe-1.jpg', title: 'Hyundai_Santa_Fe' },
  { file: 'mercedes-benz-1.jpg', title: 'Mercedes-Benz_E-Class' },
  { file: 'mercedes-benz-2.jpg', title: 'Mercedes-Benz_C-Class' },
  { file: 'toyota-30-bus-1.jpg', title: 'Toyota_Coaster' },
  { file: 'hyundai-minibus-1.jpg', title: 'Hyundai_County' },
  { file: 'toyota-hiace-1.jpg', title: 'Toyota_HiAce' },
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'PremiumCarRentalsGhana/1.0 (build-script; contact: ghana-rentals@example.com)' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, { headers: { 'User-Agent': 'PremiumCarRentalsGhana/1.0 (build-script)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(true);
      });
    }).on('error', reject);
  });
}

// Generate fallback SVG if needed
function createFallbackSvg(destPath, title) {
  const cleanTitle = title.replace(/_/g, ' ');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#101312"/>
      <stop offset="50%" stop-color="#181D1A"/>
      <stop offset="100%" stop-color="#0F1713"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#16803C" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#101312" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="500" fill="url(#bg)"/>
  <ellipse cx="400" cy="280" rx="360" ry="140" fill="url(#glow)"/>
  <g transform="translate(400, 240)" text-anchor="middle">
    <!-- Stylized car silhouette -->
    <path d="M-180 30 C-170 -10 -120 -30 -60 -40 L40 -40 C110 -40 150 -10 180 30 C190 45 190 60 170 65 L-170 65 C-190 60 -190 45 -180 30 Z" fill="#202A24" stroke="#16803C" stroke-width="2"/>
    <path d="M-100 -35 L-40 -80 L60 -80 L110 -35 Z" fill="#141A17" stroke="#2D4A38" stroke-width="2"/>
    <circle cx="-110" cy="65" r="28" fill="#0D0F0E" stroke="#16803C" stroke-width="3"/>
    <circle cx="110" cy="65" r="28" fill="#0D0F0E" stroke="#16803C" stroke-width="3"/>
    <text y="-110" font-family="system-ui, sans-serif" font-size="24" font-weight="700" fill="#FFFFFF" letter-spacing="1">${cleanTitle}</text>
    <text y="125" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#16803C" letter-spacing="2">PREMIUM CAR RENTALS • GHANA</text>
  </g>
</svg>`;
  fs.writeFileSync(destPath, svg, 'utf-8');
}

async function run() {
  console.log('Starting image acquisition for 26 vehicles...');
  for (const item of vehicleImageMap) {
    const dest = path.join(targetDir, item.file);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`Already exists: ${item.file}`);
      continue;
    }
    try {
      const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(item.title)}&prop=pageimages&format=json&pithumbsize=800`;
      const data = await fetchJson(apiUrl);
      const pages = data.query?.pages || {};
      const pageId = Object.keys(pages)[0];
      const thumbUrl = pages[pageId]?.thumbnail?.source;
      if (thumbUrl) {
        await downloadFile(thumbUrl, dest);
        console.log(`Downloaded ${item.file} from Wikipedia (${thumbUrl.slice(0, 40)}...)`);
      } else {
        console.warn(`No thumb for ${item.title}, creating fallback SVG`);
        createFallbackSvg(dest.replace('.jpg', '.svg'), item.title);
        // create matching jpg fallback
        createFallbackSvg(dest, item.title);
      }
    } catch (err) {
      console.warn(`Error for ${item.title}: ${err.message}. Creating fallback.`);
      createFallbackSvg(dest, item.title);
    }
  }

  // Create global fallback image
  createFallbackSvg(path.join(targetDir, 'fallback-car.svg'), 'Premium Vehicle');
  createFallbackSvg(path.join(targetDir, 'fallback-car.jpg'), 'Premium Vehicle');
  console.log('Finished image processing.');
}

run().catch(console.error);
