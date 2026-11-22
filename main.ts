// gta6-meme-x-01 entrypoint (Node 22, standard library only).
// The entry is the X post itself: this program only hands its address to the
// gate. It reads POST.json from the repository root, checks that it names a
// real X post URL, and copies it to /output/POST.json. It also checks the
// posted meme picture is present and copies it alongside, so the run's
// outputs show the exact picture the post carries. Nothing written here is
// judged: the house reads the post from X and builds the judge's dossier
// itself.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_URL = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/(?:i\/web\/)?status\/\d+$/;
// Magic bytes of the picture formats X accepts for a post's first picture.
const isPicture = (head: Buffer): boolean =>
  (head.length >= 12 && head.toString('ascii', 0, 4) === 'RIFF' && head.toString('ascii', 8, 12) === 'WEBP') ||
  (head.length >= 4 && head[0] === 0x89 && head[1] === 0x50 && head[2] === 0x4e && head[3] === 0x47) ||
  (head.length >= 3 && head[0] === 0xff && head[1] === 0xd8 && head[2] === 0xff);

const raw = readFileSync(join(BOT_DIR, 'POST.json'), 'utf8');
if (raw.length > 16384) throw new Error('POST.json is over the 16384-byte cap');
const post = JSON.parse(raw);
const url = post?.url;
if (typeof url !== 'string' || !POST_URL.test(url)) {
  throw new Error(`POST.json does not name an X post URL: ${String(url)}`);
}
const image = join(BOT_DIR, 'meme.webp');
if (!existsSync(image) || statSync(image).size === 0) {
  throw new Error('meme.webp is missing or empty');
}
if (!isPicture(readFileSync(image).subarray(0, 12))) {
  throw new Error('meme.webp is not a WebP, PNG or JPEG picture');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'POST.json'), raw);
copyFileSync(image, join(OUTPUT_DIR, 'meme.webp'));
console.log(`handed in ${url}`);
