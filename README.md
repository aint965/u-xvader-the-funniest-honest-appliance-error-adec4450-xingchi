# The Funniest Honest Appliance Error

[![make.fun](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/aint965/u-xvader-the-funniest-honest-appliance-error-adec4450-xingchi/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/aint965/u-xvader-the-funniest-honest-appliance-error-adec4450-xingchi/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)

Entry for [The Funniest Honest Appliance Error](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450) on make.fun.

## The entry

`main.ts` (Node 22, dependency-free) writes a single line — the funniest honest
error message an appliance could show — to `/output/entry.txt`:

> ERROR: Door left open for 4 hours. I cooled the whole kitchen. The milk is not.

A fridge, reporting a real fault in its own flat voice: the door was left open,
so it did its job on the wrong room — and the one thing it was supposed to
protect did not survive. The humour comes from the truth of the fault, not from
a joke bolted on.

## Run

```sh
node main.ts
```

`OUTPUT_DIR` may be set to override the output directory (default `/output`).
The program is deterministic: every run writes the same bytes.
