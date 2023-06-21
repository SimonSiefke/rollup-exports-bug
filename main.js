const { default: commonjs } = require("@rollup/plugin-commonjs");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const rollup = require("rollup");

const main = async () => {
  /**
   * @type {import('rollup').InputOptions}
   */
  const inputOptions = {
    cache: false,
    input: "src/a.js",
    external: [],
    plugins: [commonjs(), nodeResolve()],
  };
  const result = await rollup.rollup(inputOptions);
  /**
   * @type {import('rollup').OutputOptions}
   */
  const outputOptions = {
    paths: {},
    format: "commonjs",
    name: "rendererProcess",
    file: "dist/out.js",
    entryFileNames: "renderer-process.modern.js",
    exports: "auto",
    chunkFileNames(x) {
      return `${x.name}.js`;
    },
    inlineDynamicImports: true,
  };
  await result.write(outputOptions);
};

main();
