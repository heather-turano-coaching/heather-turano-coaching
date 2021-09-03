const esbuild = require("esbuild");
// Automatically exclude all node_modules from the bundled version
const { nodeExternalsPlugin } = require("esbuild-node-externals");

esbuild
  .build({
    entryPoints: ["lib/index.ts"],
    outdir: "dist",
    mainFields: ["main"],
    outExtension: { ".js": ".cjs" },
    bundle: true,
    sourcemap: true,
    minify: true,
    format: "cjs",
    target: ["es2015"],
    plugins: [nodeExternalsPlugin()]
  })
  .catch(() => process.exit(1));
