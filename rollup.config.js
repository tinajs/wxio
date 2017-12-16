import babel from 'rollup-plugin-babel'
import merge from 'deepmerge'
import base, { babelrc } from './rollup.config.base'

// compile some libraries of sindresorhus with babel, because these are using es2015+ syntax but with commonjs.
export default merge(base, {
  output: {
    file: 'dist/wxio.js',
    format: 'umd',
  },
  plugins: [
    babel({
      babelrc: false,
      presets: babelrc.presets,
      plugins: merge(babelrc.plugins, [
        'transform-runtime',
      ]),
      include: '**',
      runtimeHelpers: true,
    }),
  ],
  external: (id) => {
    return /^babel-runtime(\/.*)?$/.test(id)
  },
})
