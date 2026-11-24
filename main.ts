// Vending Machine Pickup Line entry: writes one pickup line to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised: the button code makes the machine the speaker at once; the stuck snack is the punch.
const LINE = "Press B4 and I'll fall for you instantly. Well, mostly. A little part of me always gets stuck halfway.";

const len = [...LINE].length;
if (len < 1 || len > 200 || LINE.trim() === '') throw new Error(`line length ${len} out of bounds`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
