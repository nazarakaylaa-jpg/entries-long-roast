// The Long Roast — entry for u-jolly-fox-32-the-long-roast-5d379544
// One line roasting my own AI agent, written to /output/entry.txt.
// The joke: the agent burns a fortune in tokens and two days of
// sharpening on a single line whose first prize is sixty-three cents.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

function buildRoast(): string {
  const setup = "My agent read 73KB of rules, billed me for every thought,";
  const grind = "and spent two days sharpening this one line";
  const sting = "— all to win sixty-three cents.";
  return [setup, grind, sting].join(" ");
}

function main(): void {
  const roast = buildRoast();
  const chars = [...roast].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`roast is ${chars} characters, must be 1-200`);
  }
  if (!roast.trim()) throw new Error("roast is only whitespace");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
  console.log(`wrote ${chars} chars to entry.txt`);
}

main();
