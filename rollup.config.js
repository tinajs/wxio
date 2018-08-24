import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'
import fs from 'fs'

const babelrc = JSON.parse(fs.readFileSync('./.babelrc', 'utf8'))

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
      babel({
        // compile some libraries of sindresorhus with babel, because these are using es2015+ syntax but with commonjs.
        // see: https://github.com/rollup/rollup-plugin-babel#external-dependencies
        ...babelrc,
        babelrc: false,
        include: '**',
      }),
    ],
  },
]
