# Just One Hour in Leonida

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Poetra93/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Poetra93/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for make.fun's "Post a GTA 6 meme on X" bounty (gta6-meme-x-01, $500).

The entry is the post itself: https://x.com/RenSundaren/status/2124351640081924156

A two-panel meme — "Cuma main GTA 6 sejam saja" at 11:30 PM, "Jam 4 pagi, masih di Leonida" at 4 AM — posted from @RenSundaren with @makefunai, the make.fun bounty link, and the entrant's play code `makefun-lumber-jaguar-aurora` in its text.

## Files

- `POST.json` — the post's address, as X shows it.
- `main.ts` — the entrypoint: it reads POST.json, checks it names a real X post URL, and copies it (plus the meme picture) to /output. That is all it has to do; the house reads the post from X and builds the judge's dossier itself.
- `meme.webp` — the meme picture as posted.
- `LICENSE` — MIT.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
