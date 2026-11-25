// BlowBack — The Worst App Idea Ever Pitched (make.fun entry)
// One sentence, 113 characters. The program writes it to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "BlowBack relights your birthday candles the moment you blow them out, $1.99 per wish, so no wish ever has to end.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
