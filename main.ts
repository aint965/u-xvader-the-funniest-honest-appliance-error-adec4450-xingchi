import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Honest Appliance Error — fridge, door left open.
// Chosen line (79 chars): flat, honest, and the twist lands on the last
// four words — the fridge did its job on the wrong room.
const LINE =
  "ERROR: Door left open for 4 hours. I cooled the whole kitchen. The milk is not.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Self-check against the sealed gate (RULES.txt): entry.txt must be
// UTF-8 text of 1 to 200 characters, not only whitespace, exactly one
// line. Fail loudly here instead of writing an entry that would be
// graded invalid with no warning.
const fail = (message: string): never => {
  console.error(`ERROR: refusing to write entry: ${message}`);
  process.exit(1);
};

if (LINE.trim().length === 0) fail("line is empty or only whitespace");
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line contains a newline character");
}
if (LINE.length > 200) {
  fail(`line is ${LINE.length} characters, over the 200-character limit`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
