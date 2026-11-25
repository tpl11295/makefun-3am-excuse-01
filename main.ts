import { mkdirSync, writeFileSync } from "node:fs";

// The 3 AM Excuse entry — one line, 1–200 characters, in the voice of a
// hardware wallet refusing to sign a transaction at 3 AM.
// Judge brief: on-topic first, then originality, then wallet voice, then
// use of the 3 AM hour, then concision.
// Chosen line: the wallet's secure element is asleep while the owner's
// worst decisions wake up at 3 AM — the refusal is framed as declining to
// co-sign insomnia, with a sunrise callback ("when your judgment does too")
// as the punchline. It avoids the clichés (PIN, firmware update, cold
// storage) and gives the wallet a personality: tired, principled, and
// slightly smug about its own sleep schedule. The line is 158 characters,
// inside the 200-character gate.
const LINE =
  "3 AM is when my secure element sleeps and your worst decisions wake up — I refuse to co-sign your insomnia. Come back at sunrise, when your judgment does too.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
