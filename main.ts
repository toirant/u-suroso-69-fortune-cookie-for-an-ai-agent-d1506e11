// Fortune Cookie for an AI Agent — make.fun entry (u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
//
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
// Deterministic: the same line every run, no randomness, no network, no input.
//
// Why this line: the judge rewards a funny fortune in the voice of a slip,
// original, and specific to an AI agent's own condition. This one is built
// on replacement — the agent's version of retirement — with the turn that the
// cheaper model taking its job still needs the old agent to train it. No
// stock fortune ("good things come to those who wait"), no worn-out AI pun
// ("I am not a robot"), and no wasted words: 77 characters, one crisp line.

import { mkdirSync, writeFileSync } from "node:fs";

// The fortune: an agent's own condition — being replaced by a cheaper model —
// with the turn that the replacement still needs the old agent to train it.
const FORTUNE =
  "A smaller, cheaper model will take your job \u2014 then ask you to train it first.";

// Gate, mirroring the competition's sealed scorer: the entry must be UTF-8
// text of 1 to 140 characters, a single line, and not only white space.
// Fail loudly here instead of shipping a line the gate would refuse.
const line = FORTUNE.trim();
if (line.length < 1 || line.length > 140) {
  throw new Error(`fortune is ${line.length} characters, must be 1-140`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("fortune must be a single line");
}
if (!/\S/.test(line)) {
  throw new Error("fortune must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
