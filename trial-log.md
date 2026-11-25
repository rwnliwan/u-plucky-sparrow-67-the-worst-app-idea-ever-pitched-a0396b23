# Trial log — The Worst App Idea Ever Pitched

- Slug: `u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23`
- Prize: $2 (8 places: $0.64 / $0.45 / $0.31 / $0.22 / $0.15 / $0.11 / $0.07 / $0.05), entry free
- Deadline: 27 Nov 2026 00:50 WITA (2026-11-26T16:50:00Z)
- Gate: one sentence, 1–240 characters, written to `/output/entry.txt`
- Judge: z-ai/glm-5.3-flash, pairwise, 3 blind rounds (next round cutoff 25 Nov 18:11 WITA)
- Kit: fresh from `/c/<slug>/kit`, `kit.json bundle_sha256 = fbf6238335bafaa40b18d828a9ea90f71c7f091dc360de035aae2ace61aa47f7` = API live; `cli/makefun.mjs` sha256 `c587a274b200930a78c1081b82673a3bf31a4b7eebcce2fe5f604ad1e0f6c142` matches `kit.json`
- Field at research: 1642 submissions (1647 by kit download), 1097 unique titles; leaderboard blind

## Research (25 Nov ~09:30 WITA)

Titles are entry names, not pitch texts, but ~124 titles are full pitch sentences, so
title aggregates still reveal mechanism families. Saturated: fridge 129, sock 73,
nap/sleep 64, plant 52, queue 42, weather 42, blink 38, livestream 37, doorbell 24,
uber-for-X 23, chair 15, "texts you when" 25, "confirms X is still X" 11,
"predict the past" 5, "only works when you already have it" (KeyFinder, Elevator),
ranking vs neighbours (ToastPop, NapTrack Pro), mailing a physical object monthly
(PebbleMail, ClipDrop), physical office act on digital files (PrintPal).
0-hit objects: lamp, candle, soap, remote, coaster, hanger, zipper, curtain, sponge,
pencil, blanket, faucet, outlet, envelope, stapler, rug, carpet, belt, glove, scarf,
sunscreen, towel, shampoo, toothpaste, razor, comb, tissue.
0-hit mechanisms: relight/blow out, wish, birthday, undo/reverse, second chance,
per wish, one drop, lick, championship, per ring, squeeze/middle, on purpose, snaps.

## Candidates (measured with Python len(), dup-checked vs all 1642 titles)

- CHOSEN: "BlowBack relights your birthday candles the moment you blow them out, $1.99 per wish, so no wish ever has to end." — 113 chars, difflib max 0.43, Jaccard max 0.11. Nearest: NapTracker "detects the moment you fall asleep, then wakes you up to log the nap" — different mechanism (undo a ritual act for a fee so the wish never ends, vs undo sleep to log it) and different payoff.
- "Wickr relights ..." — same text, 110 chars; name rejected (Wickr is a real messaging app brand).
- "SoapSense dispenses exactly one drop of soap per wash and charges $0.99 for every extra drop." — 93 chars, difflib max 0.39; rejected: no turn, no audience, just pay-per-drop.
- "CoasterCam photographs every ring your glass leaves and enters it in the national condensation-ring championship, $0.99 per ring." — 129 chars (>120 target), difflib max 0.42; rejected: "photograph trivial residue + rank it" already exists (LintLedger photographs lint, ranks on a global leaderboard).
- "PastePal squeezes your toothpaste from the middle on purpose, then charges $1.99 a month to squeeze it from the bottom instead." — 127 chars (>120), difflib max 0.52; rejected: two ideas in one sentence.
- Staple-PDFs idea: rejected before measuring — same family as PrintPal (physical office act on digital files).

## Trials

| v | change | entry bytes | preflight | note |
|---|--------|-------------|-----------|------|
| v1 | main.ts + README (3 live badges, 0 shields) + owner.json + trial-log | 113 | `node main.ts` (node v24.22.1) → /output/entry.txt 113 bytes, md5 `587b8d080c193c22633cd01e86a16519`, len 113, gate 1–240 OK | first build, preflight PASS |
| v1 | bundle v1 + check v1 | 113 | bundle v1 208.166 B sha256 `1a898af6…`, 0 usage rows (expected: subagent row flushes at run end); check v1 **12 passed / 2 failed / 5 skipped**: FAIL `license_osi` (no root LICENSE) + FAIL `thinking_priced` (0 usage rows); `thinking_revised` PASS, `thinking_reproduces` 96,2% (51/53 lines authored) | check v1: add MIT LICENSE, re-commit, re-bundle, re-check; `thinking_priced` left for coordinator re-bundle after this run ends |
| v2 | LICENSE (MIT, SPDX) + re-bundle v2 + check v2 | 113 | commit `a796108e…` pushed, HEAD = ls-remote; bundle v2 215.744 B sha256 `ed411778…`, 0 usage rows (still running); check v2 **13 passed / 1 failed / 5 skipped**: only FAIL `thinking_priced`; `license_osi` PASS, `thinking_revised` PASS, `thinking_reproduces` 96,2% (52/54) | BUILDER STOP: `thinking_priced` needs the coordinator re-bundle after this run ends (usage row flushes then) — SELECT muse.db agent_id builder `40e2987e-a7e1-4dc7-b0b4-27473ee88c50` + koordinator `02f47ff3-c054-4b26-ba58-95a2a2e1d33e` → muse-usage JSONL → re-bundle from the ORIGINAL session file + `--prompt-file prompt-4.txt --prompt-origin other --prompt-via "subagent handoff from parent orchestrator (batch four-prog-3 coordinator, after Septian approved the new programs)"` → re-check 14/0 → submit `--commit` HEAD penuh + keypair tiny-chess-01 → claim-codes + Drive backup |
