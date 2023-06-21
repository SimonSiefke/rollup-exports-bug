# Rollup exports bug

## Setup

```sh
git clone git@github.com:SimonSiefke/rollup-exports-bug.git &&
cd rollup-exports-bug &&
npm ci &&
node main.js
```

### Output

```
/node_modules/rollup/dist/shared/rollup.js:17839
                        chunk.exports.add(variable);
                              ^

TypeError: Cannot read properties of undefined (reading 'exports')
    at Chunk.setUpChunkImportsAndExportsForModule (node_modules/rollup/dist/shared/rollup.js:17839:31)
    at Chunk.link (node_modules/rollup/dist/shared/rollup.js:17176:18)
    at Bundle.generateChunks (node_modules/rollup/dist/shared/rollup.js:19139:19)
    at async Bundle.generate (node_modules/rollup/dist/shared/rollup.js:19039:28)
    at async node_modules/rollup/dist/shared/rollup.js:26577:27
    at async catchUnfinishedHookActions (node_modules/rollup/dist/shared/rollup.js:25754:16)
    at async main (main.js:32:3)

Node.js v20.3.0
```
