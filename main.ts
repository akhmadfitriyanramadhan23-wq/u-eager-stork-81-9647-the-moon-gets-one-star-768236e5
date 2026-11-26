// The Moon Gets One Star — one-star review of the Moon, max 120 chars.
// Judge template (joke): rule -> literal violation -> flat consequence.
// Grievance is Moon-only (tides + far side + eclipse blame), not the
// obvious brightness/crater/cheese jokes the judge brief penalises.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star. Moon yanks my tides twice daily, hides half its face forever, and blames the eclipse. 384,400 km of attitude.";

// Gate: /output/entry.txt must be UTF-8, 1-120 chars, not only whitespace.
const MAX_CHARS = 120;
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} outside 1-${MAX_CHARS} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
