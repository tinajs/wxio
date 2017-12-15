import map from 'map-obj'
import globals from './globals'
import { APIS, PATTERN } from './officals'

function promisify (api) {
  return (options = {}) => new Promise((resolve, reject) => {
    return api({
      ...options,
      success (...fulfilled) {
        resolve(...fulfilled)
      },
      fail (error) {
        if (error && error.errMsg) {
          return reject(new Error(error.errMsg))
        }
        if (error instanceof Error) {
          return reject(error)
        }
        reject(new Error(error))
      },
    })
  })
}

exports.wechat = map(APIS.wechat, (name, { pattern }) => {
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
