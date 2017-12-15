import Cancelable from 'p-cancelable'

export default function promisify (api) {
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
