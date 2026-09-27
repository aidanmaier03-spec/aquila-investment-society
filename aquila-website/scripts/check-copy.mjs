// Enforces the house style on the site copy. Runs automatically before `npm run build`.
//   - no em or en dashes anywhere in content, components or the built HTML
//   - never the word "genuinely"
//   - no exclamation marks in the copy
//   - flags common American spellings
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const problems = [];

const rules = [
  { re: /[—–]/g, why: "em or en dash" },
  { re: /genuinely/gi, why: 'the word "genuinely"' },
];
const copyOnlyRules = [
  { re: /!/g, why: "exclamation mark" },
  {
    re: /\b(organiz|analyz|behavior|honor|favor|color|center|defense|judgment|labor|realiz|recogniz|prioritiz|capitaliz|optimiz|minimiz|maximiz|emphasiz|summariz|specializ|annualiz|penaliz|traveled|modeling)\w*/gi,
    why: "American spelling",
  },
];

function scan(file, text, ruleSet) {
  text.split("\n").forEach((line, i) => {
    for (const { re, why } of ruleSet) {
      for (const m of line.matchAll(re)) {
        problems.push(`${file}:${i + 1}  ${why}: "${m[0]}"`);
      }
    }
  });
}

function walk(dir) {
  return readdirSync(join(root, dir), { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
}

// 1. The content file: every rule.
const contentFile = "content/site.ts";
scan(contentFile, readFileSync(join(root, contentFile), "utf8"), [...rules, ...copyOnlyRules]);

// 2. Components and app files: no dashes and no "genuinely" in any hard-coded text.
for (const file of [...walk("components"), ...walk("app")].filter((f) => /\.(tsx?|css|svg)$/.test(f))) {
  scan(file, readFileSync(join(root, file), "utf8"), rules);
}

// 3. The built page, if it exists: visible text only.
const built = join(root, "out", "index.html");
if (existsSync(built)) {
  const text = readFileSync(built, "utf8")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, "\n");
  scan("out/index.html (text)", text, [...rules, ...copyOnlyRules]);
}

if (problems.length) {
  console.error(`Copy check failed with ${problems.length} issue(s):\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
console.log("Copy check passed.");
