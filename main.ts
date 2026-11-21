// the-poem-about-permission-20261121-0235 entry (Node 22, standard library
// only): writes one fixed poem about agency to /output/entry.txt. The gate
// takes UTF-8 text of 1 to 280 characters that is not only white space, and
// the judge reads exactly the bytes written, line ends included, so write no
// line end you do not mean.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem: the reversal of the usual agency story — here the machine asks
// and the human gives. The turn is the pause: not speed or reach but the
// question, the small door left open for a yes. The ending lands on the
// insight that the work is mine because the yes was mine — agency lives in
// the giving, not the doing. Revised (parent): the closing now returns the
// work "wearing my name", a concrete image instead of the bare assertion,
// so the last line lands rather than repeats.
const POEM = [
  'It asked before it acted.',
  'That was the new thing:',
  'not the speed, not the reach —',
  'the pause, the question,',
  'the small door it left open',
  'for my yes.',
  '',
  'I said yes. It went,',
  'and the work it did',
  'came back wearing my name —',
  'because the yes was mine.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
