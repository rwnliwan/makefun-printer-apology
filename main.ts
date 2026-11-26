import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = "Sorry for the 3 a.m. noises. I was dreaming about paper jams.";

// The gate only accepts 1–120 characters, so refuse to write an entry that
// could never be judged instead of silently producing an invalid file.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-120 gate`);
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
