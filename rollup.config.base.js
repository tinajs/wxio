import commonjs from 'rollup-plugin-commonjs'
import nodejs from 'rollup-plugin-node-resolve'

export const babelrc = {
  presets: [
    [
      'env',
      {
        targets: {
          browsers: ['last 2 versions'],
        },
        modules: false,
      },
    ],
    'stage-0',
  ],
  plugins: [
    'external-helpers',
  ],
}

export default {
  input: 'src/index.js',
  output: {
    name: 'wxio',
  },
  plugins: [
    nodejs(),
    commonjs({
      exclude: 'src/**',
    }),
  ],
}
