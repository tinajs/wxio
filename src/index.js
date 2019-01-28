import map from 'map-obj'
import globals from './utils/globals'
import promisify from './utils/promisify'
import { APIS, PATTERN } from './officals'
import request from './apis/request'

function mapPatterns (original, rules) {
  return map(rules, (name, { pattern }) => {
    switch (pattern) {
      case PATTERN.SYNC:
      case PATTERN.EVENT:
        return [name, original[name]]

      case PATTERN.ASYNC:
        return [name, promisify(original[name])]

      default:
        throw new Error('Invalid pattern.')
    }
  })
}

const wechat = mapPatterns(globals.wx, APIS.wx)

wechat.request = request

export default wechat
