import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "3 AM is when my secure element sleeps and your worst decisions wake up — I refuse to co-sign your insomnia. Come back at sunrise, when your judgment does too.";

mkdirSync("/output", { recursive: true });
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry must be 1-200 chars, got ${LINE.length}`);
}
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
