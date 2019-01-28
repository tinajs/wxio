global.wx = function () {}

global.wx.request = function ({ success }) {
  setTimeout(() => {
    success()
  }, 0)
}

global.wx.setStorage = function () {}
