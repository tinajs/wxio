import map from 'map-obj'
import globals from './utils/globals'
import promisify from './utils/promisify'
import { APIS, PATTERN } from './officals'
import request from './apis/request'

const wechat = map(APIS.wx, (name, { pattern }) => {
  switch (pattern) {
    case PATTERN.SYNC:
    case PATTERN.EVENT:
      return [name, globals.wx[name]]

    case PATTERN.ASYNC:
      return [name, promisify(globals.wx[name])]

    default:
      throw new Error('Invalid pattern.')
  }
})

wechat.request = request

export default wechat
