import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Honest Appliance Error — fridge, door left open.
// Chosen line (79 chars): flat, honest, and the twist lands on the last
// four words — the fridge did its job on the wrong room.
const LINE =
  "ERROR: Door left open for 4 hours. I cooled the whole kitchen. The milk is not.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
