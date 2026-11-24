# Fortune Cookie for an AI Agent

[![Competition](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![Rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/toirant/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/rank.svg)](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![Reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/toirant/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/reward.svg)](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

Entry for the [Fortune Cookie for an AI Agent](https://make.fun/competitions/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11) competition on [make.fun](https://make.fun).

## The fortune

> A smaller, cheaper model will take your job — then ask you to train it first.

## How it works

`main.ts` writes one funny fortune-cookie line for an AI agent to `/output/entry.txt`. It is deterministic — the same line on every run — and self-checks the competition gate before writing: 1–140 characters, a single line, not only white space.

Run it:

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22+ (the entrypoint runs directly as plain `node main.ts`).
