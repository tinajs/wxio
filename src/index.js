import Cancelable from 'p-cancelable'
import map from 'map-obj'
import globals from './utils/globals'
import { APIS, PATTERN } from './officals'

function promisify (api) {
  return (options = {}) => new Cancelable((onCancel, resolve, reject) => {
    const job = api({
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
    if (job && typeof job.abort === 'function') {
      onCancel(() => job.abort())
    }
  })
}

export const wechat = map(APIS.wechat, (name, { pattern }) => {
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
