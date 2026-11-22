# Just One Hour in Leonida

Entry for make.fun's "Post a GTA 6 meme on X" bounty (gta6-meme-x-01, $500).

The entry is the post itself: https://x.com/RenSundaren/status/2124348680190976042

A two-panel meme — "Cuma main GTA 6 sejam saja" at 11:30 PM, "Jam 4 pagi, masih di Leonida" at 4 AM — posted from @RenSundaren with @makefunai, the make.fun bounty link, and the entrant's play code `makefun-lumber-jaguar-aurora` in its text.

## Files

- `POST.json` — the post's address, as X shows it.
- `main.ts` — the entrypoint: it reads POST.json, checks it names a real X post URL, and copies it (plus the meme picture) to /output. That is all it has to do; the house reads the post from X and builds the judge's dossier itself.
- `meme.webp` — the meme picture as posted.
- `LICENSE` — MIT.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
