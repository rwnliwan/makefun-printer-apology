# Trial log — The Printer Apology (builder 4, batch 9prog)

- Program slug: `u-eager-stork-81-9647-the-printer-apology-60229153`
- Title: The Printer Apology
- Deadline: 26 Nov 2026 22:55 WITA (2026-11-26T14:55:00Z)
- Prize: $2 (1st place only)
- Kit limits: program/v1, runtimes node22 / python3.13, sandbox 1 CPU /
  512 MB / 60 s wall budget; gate: `/output/entry.txt` UTF-8, 1–120
  characters, not only whitespace. Entry point at repo root: `main.ts`.
- Entry text (fixed by coordinator, not re-picked):
  `Sorry for the 3 a.m. noises. I was dreaming about paper jams.`
  — 61 characters, limit 120.
- Kit verification: `kit.json` bundle_sha256
  `53c650dfcb6dbb0b834dbf57e3617f4f7a74a379c8885b01802c98d9990f2f02`
  matches comp-4.json bundleSha256 exactly (first download, no re-download
  needed). Kit tarball: 15,990,804 bytes.
- Note: this is NOT batch 6 "Printer Finally Answers" — no duplex /
  wrong-side mechanism is used here.

## Build steps

1. Downloaded fresh kit to `build-4/`, extracted
   `u-eager-stork-81-9647-the-printer-apology-60229153-kit/`, CLI at
   `cli/makefun.mjs`.
2. Wrote `main.ts` (Node 22 stdlib only): `const ENTRY` holds the text
   exactly; writes it to `ENTRY_OUTPUT ?? "/output/entry.txt"` with no
   trailing newline.
3. Trial run 1 (before guard): `ENTRY_OUTPUT=/tmp/entry-test.txt node
   main.ts` → 61 bytes, 61 chars, trailing newline False, exact match.
4. Revised `main.ts` (genuine change): added a 1–120 character guard that
   throws instead of writing an entry the gate would refuse.
5. Trial run 2 (after guard): `ENTRY_OUTPUT=/tmp/entry-test2.txt node
   main.ts` → 61 bytes, 61 chars, trailing newline False, exact match.
   Default path also verified: `/output/entry.txt` is 61 bytes.
6. Added `README.md` (3 live make.fun badges + entry text + 61 chars),
   MIT `LICENSE` (Copyright (c) 2026 rwnliwan), `.makefun/owner.json`
   with wallet `FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq`.
7. GitHub repo `makefun-printer-apology` created (public), commit pushed,
   homepage + topics set. (Details below once done.)

## Bundle / check results

(To be filled with real numbers after bundle + check run.)
