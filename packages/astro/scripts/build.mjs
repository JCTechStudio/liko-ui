import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import fs from "node:fs";
import path from "node:path";
import { build } from "vite";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "src");
const DIST_DIR = path.join(ROOT, "dist");

const EXTERNAL_PREFIXES = ["@vanilla-extract/recipes", "@vanilla-extract/css"];

const FROM_REGEX = /(from\s+["'])([^"']+)(["'])/g;
const IMPORT_REGEX = /(import\s+["'])([^"']+)(["'])/g;

function walk(dir) {
  const out = [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const abs = path.join(dir, e.name);

    if (e.isDirectory()) {
      out.push(...walk(abs));
    } else {
      out.push(abs);
    }
  }

  return out;
}

function normalizeRel(p) {
  return p.split(path.sep).join("/");
}

function isShouldRewriteImports(filePath) {
  return (
    filePath.endsWith(".astro") ||
    filePath.endsWith(".ts") ||
    filePath.endsWith(".js") ||
    filePath.endsWith(".mjs") ||
    filePath.endsWith(".cjs")
  );
}

function rewriteCssImports(source, fromFile, cssTsRelSet) {
  const fromDir = path.dirname(fromFile);

  const rewrite = (spec) => {
    if (!spec.endsWith(".css") || !spec.startsWith(".")) {
      return spec;
    }

    const candidate = path.resolve(fromDir, `${spec}.ts`);
    const rel = normalizeRel(path.relative(SRC_DIR, candidate));

    if (!cssTsRelSet.has(rel)) {
      return spec;
    }

    return `${spec}.js`;
  };

  const replaceFn = (_m, p1, spec, p3) => `${p1}${rewrite(spec)}${p3}`;

  return source
  .replace(FROM_REGEX, replaceFn)
  .replace(IMPORT_REGEX, replaceFn);
}

function external(id) {
  return EXTERNAL_PREFIXES.some(
    (prefix) => id === prefix || id.startsWith(`${prefix}/`),
  );
}

function assetFileNames(assetInfo) {
  const names = assetInfo.names?.length
    ? assetInfo.names
    : assetInfo.originalFileNames || [];

  const isHasCss = names.some((name) => name.endsWith(".css"));
  if (isHasCss) {
    return "styles.css";
  }

  return names[0] || "asset";
}

async function buildDist() {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });

  const files = walk(SRC_DIR);
  const cssTsFiles = files.filter((f) => f.endsWith(".css.ts"));
  const cssTsRelSet = new Set(
    cssTsFiles.map((f) => normalizeRel(path.relative(SRC_DIR, f))),
  );

  if (cssTsFiles.length > 0) {
    await build({
      root: ROOT,
      configFile: false,
      plugins: [vanillaExtractPlugin()],
      build: {
        outDir: "dist",
        cssCodeSplit: false,
        assetsDir: "",
        rollupOptions: {
          preserveEntrySignatures: "exports-only",
          input: cssTsFiles,
          external,
          output: {
            preserveModules: true,
            preserveModulesRoot: SRC_DIR,
            entryFileNames: "[name].js",
            assetFileNames,
          },
        },
      },
    });
  } else {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  for (const abs of files) {
    const relFromSrc = path.relative(SRC_DIR, abs);

    if (abs.endsWith(".css.ts")) {
      continue;
    }

    const outFile = path.join(DIST_DIR, relFromSrc);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });

    if (isShouldRewriteImports(abs)) {
      const contents = fs.readFileSync(abs, "utf8");
      const rewritten = rewriteCssImports(contents, abs, cssTsRelSet);
      fs.writeFileSync(outFile, rewritten, "utf8");
    } else {
      fs.copyFileSync(abs, outFile);
    }
  }

  console.log(`\n✅  Built lib files to ${path.relative(ROOT, DIST_DIR)}`);
}

buildDist().catch((err) => {
  console.error(err);
  process.exit(1);
});
