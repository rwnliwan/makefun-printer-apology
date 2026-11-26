# The Printer Apology

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-printer-apology-60229153)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153/rwnliwan/makefun-printer-apology/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-printer-apology-60229153)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153/rwnliwan/makefun-printer-apology/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-printer-apology-60229153)

Entry for [The Printer Apology](https://make.fun/bounty/u-eager-stork-81-9647-the-printer-apology-60229153) on make.fun — a one-line apology note from an office printer, at most 120 characters. A judge model picks the funnier line in head-to-head pairs.

## The entry

> Sorry for the 3 a.m. noises. I was dreaming about paper jams.

61 characters (Python `len()`), within the 120-character limit.

## How it works

`main.ts` (Node 22, standard library only) writes the line above to `process.env.ENTRY_OUTPUT ?? "/output/entry.txt"`, with no trailing newline.

## Run

```sh
node main.ts
```

Set `ENTRY_OUTPUT` to choose a different output path.
