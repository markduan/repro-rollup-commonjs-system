# Reproduction case

- https://github.com/rollup/plugins/issues/583
- https://github.com/rixo/rollup-plugin-svelte-hot/issues/9

## Usage

~~~bash
git clone git@github.com:rixo/repro-rollup-commonjs-system.git
cd repro-rollup-commonjs-system
npm install

npm run start
~~~

Open browser at http://localhost:5000

**Error**

~~~
TypeError: Cannot read property '__esModule' of undefined
    at getAugmentedNamespace (_commonjsHelpers.js:40)
    at Object.execute (parser.mjs_commonjs-proxy:12)
    at i (hmr-runtime.js:1)
    at e (hmr-runtime.js:1)
    at hmr-runtime.js:1
    at Array.forEach (<anonymous>)
    at e (hmr-runtime.js:1)
    at hmr-runtime.js:1
    at Array.forEach (<anonymous>)
    at e (hmr-runtime.js:1)
~~~

**Expected**

No error, gql lib should be logged in the console.

## Previous working version

~~~bash
npm i -D @rollup/plugin-commonjs@15.0
npm run start
~~~

In the browser: the gql lib is logged correctly.
