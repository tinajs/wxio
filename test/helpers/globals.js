global.wx = function () {}

global.wx.request = function ({ success }) {
  setTimeout(() => {
    success()
  }, 0)
}

global.wx.setStorage = function () {}

global.wx.getFileSystemManager = function () {
  return {
    getFileInfo ({ success }) {
      success('GET_FILE_INFO_SUCCESS')
    },
  }
}
