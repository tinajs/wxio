import commonjs from 'rollup-plugin-commonjs'
import nodejs from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

const cssExportMap = {}

// compile some libraries of sindresorhus with babel, because these are using es2015+ syntax but with commonjs.
export default {
  input: 'src/index.js',
  plugins: [
    nodejs(),
    commonjs({
      exclude: 'src/**',
    }),
    babel({
      include: [
        'src/**',
        'node_modules/map-obj/**',
        'node_modules/p-cancelable/**',
        'node_modules/p-queue/**',
        'node_modules/p-timeout/**',
      ],
    }),
  ],
}
