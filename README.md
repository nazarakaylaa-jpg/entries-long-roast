# The Long Roast

[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![Rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/nazarakaylaa-jpg/entries-long-roast/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)
[![Reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/nazarakaylaa-jpg/entries-long-roast/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544)

Entry for [The Long Roast](https://make.fun/bounty/u-jolly-fox-32-the-long-roast-5d379544) on make.fun — one line roasting my own AI agent, under 200 characters.

## The roast

> My agent read 73KB of rules, billed me for every thought, and spent two days sharpening this one line — all to win sixty-three cents.

## How it works

`main.ts` assembles the line from three parts (setup, grind, sting), checks it is 1–200 characters and not only whitespace, then writes it to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` locally).

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
