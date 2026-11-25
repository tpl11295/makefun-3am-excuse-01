import * as fs from "node:fs";
import * as path from "node:path";

// The 3 AM Excuse: one line, in the voice of a hardware wallet refusing
// to sign a transaction at 3 AM. 158 chars, inside the 1-200 gate.
// The entry must stay a single line: no battery, firmware-update or
// cold-storage cliches — the joke lives in the secure element refusing
// to co-sign a 3 AM decision made on no sleep.
const entry =
  "3 AM is when my secure element sleeps and your worst decisions wake up — I refuse to co-sign your insomnia. Come back at sunrise, when your judgment does too.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry + "\n");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
