import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    output: {
      name: pkg.name,
      file: pkg.main,
      format: 'umd',
    },
    plugins: [
      resolve(),
      commonjs(),
      // compile all files (including dependencies) with `babel.config.js`
      babel(),
    ],
  },
]
