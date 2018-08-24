global.wx = function () {}

global.wx.request = function ({ success }) {
  setTimeout(() => {
    success()
  }, 0)
}
