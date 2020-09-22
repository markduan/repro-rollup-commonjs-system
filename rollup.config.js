import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'source.js',
  output: {
    format: 'system',
    preserveModules: true,
    dir: 'output'
  },
  plugins: [
    resolve({ browser: true }),
    commonjs(),
  ]
}
