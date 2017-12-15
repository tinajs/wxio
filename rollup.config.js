import merge from 'deepmerge'
import base from './rollup.config.base.js'

export default merge(base, {
  output: {
    file: 'dist/wxio.js',
    format: 'umd',
    name: 'wxio',
  },
})
