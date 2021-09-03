const esbuild = require("esbuild");
// Automatically exclude all node_modules from the bundled version
const { nodeExternalsPlugin } = require("esbuild-node-externals");

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    outdir: "dist",
    mainFields: ["module"],
    outExtension: { ".js": ".mjs" },
    bundle: true,
    sourcemap: true,
    minify: true,
    splitting: true,
    format: "esm",
    target: ["esnext"],
    plugins: [nodeExternalsPlugin()]
  })
  .catch(() => process.exit(1));
