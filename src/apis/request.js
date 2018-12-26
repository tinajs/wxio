import Cancelable, { CancelError } from 'p-cancelable'
import Queue from 'p-queue'
import timeout from 'p-timeout'
import globals from '../utils/globals'
import promisify from '../utils/promisify'

const CONCURRENCY = 10

const queue = new Queue({ concurrency: CONCURRENCY })
const request = promisify(globals.wx.request)

export default Cancelable.fn((onCancel, options = {}) => {
  let job, isCanceled
  onCancel(() => {
    if (job) {
      job.cancel()
    } else {
      isCanceled = true
    }
  })
  return queue.add(() => {
    if (isCanceled) {
      return Promise.reject(new CancelError())
    }
    job = request(options)
    if (options.timeout) {
      job = timeout(job, options.timeout)
    }
    return job
  })
})
