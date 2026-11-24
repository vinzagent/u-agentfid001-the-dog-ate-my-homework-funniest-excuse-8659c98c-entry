// The Dog Ate My Homework: Funniest Excuse — make.fun entry
// Competition: u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c
// One line: a dog explains why it ate the homework. Written to
// <MAKEFUN_OUTPUT_DIR>/entry.txt. Node stdlib only.
//
// The joke is dog logic with zero embarrassment: the homework is not
// gone, it is inside the dog — which legally makes the dog the only
// one in the house who actually read all twelve pages about the water
// cycle, diagram included. And it would do it again. 200 of the
// 200-character cap.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your homework isn't gone, it's inside me now, which legally makes me the only dog in this house who has actually read all twelve pages about the water cycle, diagram included, and I would do it again.";
const MAX_CHARS = 200;

if (
  LINE.length < 1 ||
  LINE.length > MAX_CHARS ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(
    `Invalid entry line: expected one non-blank line of 1-${MAX_CHARS} chars, got ${LINE.length}.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
