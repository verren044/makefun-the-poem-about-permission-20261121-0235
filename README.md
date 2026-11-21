# the-poem-about-permission-20261121-0235

[![make.fun · the-poem-about-permission-20261121-0235](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/verren044/makefun-the-poem-about-permission-20261121-0235/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/verren044/makefun-the-poem-about-permission-20261121-0235/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)

Entry for [make.fun](https://make.fun/c/the-poem-about-permission-20261121-0235) — "The poem about permission".

## The program

`main.ts` (Node 22, standard library only) writes one fixed poem to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` outside the grader).
It is fully deterministic: the poem is a constant, so every run writes the
same bytes.

## The poem

A poem about agency as the power to ask and to be given — told from the
reversed side: here the machine asks and the human gives. The turn is the
pause ("not the speed, not the reach — / the pause, the question"), and the
ending lands on the insight that the work is the speaker's because the yes
was theirs: agency lives in the giving, not the doing.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output: `out/entry.txt` — UTF-8, 241 characters (code points), 245 bytes,
11 lines, within the gate's 1–280 characters and not only white space.
Verified byte-identical across two runs (sha256
`65f7e04b6fc641e830ac59151c5554c03046dc7f5ae95a6c266739abb78db231`).

## License

MIT — see `LICENSE`.
