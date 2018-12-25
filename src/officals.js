/**
 * fetch from https://mp.weixin.qq.com/debug/wxadoc/dev/api/
 */

export const PATTERN = {
  ASYNC: Symbol('ASYNC'),
  EVENT: Symbol('EVENT'),
  SYNC: Symbol('SYNC'),
}

export const APIS = {
  wx: {
    // - 网络
    //   - 发起请求
    request: {
      pattern: PATTERN.ASYNC,
    },
    //   - 上传下载
    uploadFile: {
      pattern: PATTERN.ASYNC,
    },
    downloadFile: {
      pattern: PATTERN.ASYNC,
    },
    //   - WebSocket
    connectSocket: {
      pattern: PATTERN.ASYNC,
    },
    onSocketOpen: {
      pattern: PATTERN.EVENT,
    },
    onSocketError: {
      pattern: PATTERN.EVENT,
    },
    sendSocketMessage: {
      pattern: PATTERN.ASYNC,
    },
    onSocketMessage: {
      pattern: PATTERN.EVENT,
    },
    closeSocket: {
      pattern: PATTERN.ASYNC,
    },
    onSocketClose: {
      pattern: PATTERN.EVENT,
    },
    // TODO
    //   - WebSocket
    //     - (return) SocketTask
    //       - *

    // - 媒体
    //   - 图片
    chooseImage: {
      pattern: PATTERN.ASYNC,
    },
    previewImage: {
      pattern: PATTERN.ASYNC,
    },
    getImageInfo: {
      pattern: PATTERN.ASYNC,
    },
    saveImageToPhotosAlbum: {
      pattern: PATTERN.ASYNC,
    },
    //   - 录音
    startRecord: {
      pattern: PATTERN.ASYNC,
    },
    stopRecord: {
      pattern: PATTERN.SYNC,
    },
    //   - 录音管理
    getRecorderManager: {
      pattern: PATTERN.SYNC,
    },
    //   - 音频播放控制
    playVoice: {
      pattern: PATTERN.ASYNC,
    },
    pauseVoice: {
      pattern: PATTERN.SYNC,
    },
    stopVoice: {
      pattern: PATTERN.SYNC,
    },
    //   - 音乐播放控制
    getBackgroundAudioPlayerState: {
      pattern: PATTERN.ASYNC,
    },
    playBackgroundAudio: {
      pattern: PATTERN.ASYNC,
    },
    pauseBackgroundAudio: {
      pattern: PATTERN.SYNC,
    },
    seekBackgroundAudio: {
      pattern: PATTERN.ASYNC,
    },
    stopBackgroundAudio: {
      pattern: PATTERN.SYNC,
    },
    onBackgroundAudioPlay: {
      pattern: PATTERN.EVENT,
    },
    onBackgroundAudioPause: {
      pattern: PATTERN.EVENT,
    },
    onBackgroundAudioStop: {
      pattern: PATTERN.EVENT,
    },
    //   - 背景音频播放管理
    getBackgroundAudioManager: {
      pattern: PATTERN.SYNC,
    },
    //   - 音频组件控制
    createAudioContext: {
      pattern: PATTERN.SYNC,
    },
    createInnerAudioContext: {
      pattern: PATTERN.SYNC,
    },
    //   - 视频
    chooseVideo: {
      pattern: PATTERN.ASYNC,
    },
    saveVideoToPhotosAlbum: {
      pattern: PATTERN.ASYNC,
    },
    //   - 视频组件控制
    createVideoContext: {
      pattern: PATTERN.SYNC,
    },
    //   - 相机组件控制
    createCameraContext: {
      pattern: PATTERN.SYNC,
    },
    // TODO
    //   - 相机组件控制
    //     - (return) cameraContext
    //       - *

    // - 文件
    saveFile: {
      pattern: PATTERN.ASYNC,
    },
    getFileInfo: {
      pattern: PATTERN.ASYNC,
    },
    getSavedFileList: {
      pattern: PATTERN.ASYNC,
    },
    getSavedFileInfo: {
      pattern: PATTERN.ASYNC,
    },
    removeSavedFile: {
      pattern: PATTERN.ASYNC,
    },
    openDocument: {
      pattern: PATTERN.ASYNC,
    },

    // - 数据缓存
    setStorage: {
      pattern: PATTERN.ASYNC,
    },
    setStorageSync: {
      pattern: PATTERN.SYNC,
    },
    getStorage: {
      pattern: PATTERN.ASYNC,
    },
    getStorageSync: {
      pattern: PATTERN.SYNC,
    },
    getStorageInfo: {
      pattern: PATTERN.ASYNC,
    },
    getStorageInfoSync: {
      pattern: PATTERN.SYNC,
    },
    removeStorage: {
      pattern: PATTERN.ASYNC,
    },
    removeStorageSync: {
      pattern: PATTERN.SYNC,
    },
    clearStorage: {
      pattern: PATTERN.SYNC,
    },
    clearStorageSync: {
      pattern: PATTERN.SYNC,
    },

    // - 位置
    //   - 获取位置
    getLocation: {
      pattern: PATTERN.ASYNC,
    },
    chooseLocation: {
      pattern: PATTERN.ASYNC,
    },
    //   - 查看位置
    openLocation: {
      pattern: PATTERN.ASYNC,
    },
    //   - 地图组件控制
    createMapContext: {
      pattern: PATTERN.SYNC,
    },
    // TODO
    //   - 地图组件控制
    //     - (return) mapContext
    //       - *

    // - 设备
    //   - 系统信息
    getSystemInfo: {
      pattern: PATTERN.ASYNC,
    },
    getSystemInfoSync: {
      pattern: PATTERN.SYNC,
    },
    canIUse: {
      pattern: PATTERN.SYNC,
    },
    //   - 网络状态
    getNetworkType: {
      pattern: PATTERN.ASYNC,
    },
    onNetworkStatusChange: {
      pattern: PATTERN.EVENT,
    },
    //   - 加速度计
    onAccelerometerChange: {
      pattern: PATTERN.EVENT,
    },
    startAccelerometer: {
      pattern: PATTERN.ASYNC,
    },
    stopAccelerometer: {
      pattern: PATTERN.ASYNC,
    },
    //   - 罗盘
    onCompassChange: {
      pattern: PATTERN.EVENT,
    },
    startCompass: {
      pattern: PATTERN.ASYNC,
    },
    stopCompass: {
      pattern: PATTERN.ASYNC,
    },
    //   - 拨打电话
    makePhoneCall: {
      pattern: PATTERN.SYNC,
    },
    //   - 扫码
    scanCode: {
      pattern: PATTERN.ASYNC,
    },
    //   - 剪贴板
    setClipboardData: {
      pattern: PATTERN.ASYNC,
    },
    getClipboardData: {
      pattern: PATTERN.ASYNC,
    },
    //   - 蓝牙
    openBluetoothAdapter: {
      pattern: PATTERN.ASYNC,
    },
    closeBluetoothAdapter: {
      pattern: PATTERN.ASYNC,
    },
    getBluetoothAdapterState: {
      pattern: PATTERN.ASYNC,
    },
    onBluetoothAdapterStateChange: {
      pattern: PATTERN.EVENT,
    },
    startBluetoothDevicesDiscovery: {
      pattern: PATTERN.ASYNC,
    },
    stopBluetoothDevicesDiscovery: {
      pattern: PATTERN.ASYNC,
    },
    getBluetoothDevices: {
      pattern: PATTERN.ASYNC,
    },
    getConnectedBluetoothDevices: {
      pattern: PATTERN.ASYNC,
    },
    onBluetoothDeviceFound: {
      pattern: PATTERN.EVENT,
    },
    createBLEConnection: {
      pattern: PATTERN.ASYNC,
    },
    closeBLEConnection: {
      pattern: PATTERN.ASYNC,
    },
    getBLEDeviceServices: {
      pattern: PATTERN.ASYNC,
    },
    getBLEDeviceCharacteristics: {
      pattern: PATTERN.ASYNC,
    },
    readBLECharacteristicValue: {
      pattern: PATTERN.ASYNC,
    },
    writeBLECharacteristicValue: {
      pattern: PATTERN.ASYNC,
    },
    notifyBLECharacteristicValueChange: {
      pattern: PATTERN.ASYNC,
    },
    onBLEConnectionStateChange: {
      pattern: PATTERN.EVENT,
    },
    onBLECharacteristicValueChange: {
      pattern: PATTERN.EVENT,
    },
    //   - iBeacon
    startBeaconDiscovery: {
      pattern: PATTERN.ASYNC,
    },
    stopBeaconDiscovery: {
      pattern: PATTERN.ASYNC,
    },
    getBeacons: {
      pattern: PATTERN.ASYNC,
    },
    onBeaconUpdate: {
      pattern: PATTERN.EVENT,
    },
    onBeaconServiceChange: {
      pattern: PATTERN.EVENT,
    },
    //   - 屏幕亮度
    setScreenBrightness: {
      pattern: PATTERN.ASYNC,
    },
    getScreenBrightness: {
      pattern: PATTERN.ASYNC,
    },
    setKeepScreenOn: {
      pattern: PATTERN.ASYNC,
    },
    //   - 用户截屏事件
    onUserCaptureScreen: {
      pattern: PATTERN.EVENT,
    },
    //   - 震动
    vibrateLong: {
      pattern: PATTERN.ASYNC,
    },
    vibrateShort: {
      pattern: PATTERN.ASYNC,
    },
    //   - 手机联系人
    addPhoneContact: {
      pattern: PATTERN.ASYNC,
    },

    // - 界面
    //   - 交互反馈
    showToast: {
      pattern: PATTERN.ASYNC,
    },
    showLoading: {
      pattern: PATTERN.ASYNC,
    },
    hideToast: {
      pattern: PATTERN.SYNC,
    },
    hideLoading: {
      pattern: PATTERN.SYNC,
    },
    showModal: {
      pattern: PATTERN.ASYNC,
    },
    showActionSheet: {
      pattern: PATTERN.ASYNC,
    },
    //   - 设置导航条
    setNavigationBarTitle: {
      pattern: PATTERN.ASYNC,
    },
    showNavigationBarLoading: {
      pattern: PATTERN.SYNC,
    },
    hideNavigationBarLoading: {
      pattern: PATTERN.SYNC,
    },
    setNavigationBarColor: {
      pattern: PATTERN.ASYNC,
    },
    //   - 设置置顶信息
    setTopBarText: {
      pattern: PATTERN.ASYNC,
    },
    //   - 导航
    navigateTo: {
      pattern: PATTERN.ASYNC,
    },
    redirectTo: {
      pattern: PATTERN.ASYNC,
    },
    switchTab: {
      pattern: PATTERN.ASYNC,
    },
    navigateBack: {
      pattern: PATTERN.SYNC,
    },
    reLaunch: {
      pattern: PATTERN.ASYNC,
    },
    //   - 动画
    createAnimation: {
      pattern: PATTERN.SYNC,
    },
    //   - 位置
    pageScrollTo: {
      pattern: PATTERN.SYNC,
    },
    // createSelectorQuery 归类于 <WXML 节点信息>
    //   - 绘图
    createCanvasContext: {
      pattern: PATTERN.SYNC,
    },
    createContext: {
      pattern: PATTERN.SYNC,
    },
    drawCanvas: {
      pattern: PATTERN.SYNC,
    },
    canvasToTempFilePath: {
      pattern: PATTERN.ASYNC,
    },
    canvasGetImageData: {
      pattern: PATTERN.ASYNC,
    },
    //   - 下拉刷新
    startPullDownRefresh: {
      pattern: PATTERN.ASYNC,
    },
    stopPullDownRefresh: {
      pattern: PATTERN.SYNC,
    },
    // TODO
    //   - 动画
    //     - (return) animation
    //       - *
    //   - 绘图
    //     - (return) canvasContext
    //       - *

    // - WXML 节点信息
    createSelectorQuery: {
      pattern: PATTERN.SYNC,
    },
    // TODO
    //   - (return) selectorQuery
    //     - *
    //   - (return) nodesRef
    //     - *

    // - 第三方平台
    getExtConfig: {
      pattern: PATTERN.ASYNC,
    },
    getExtConfigSync: {
      pattern: PATTERN.SYNC,
    },

    // - 开放接口
    //   - 登录
    login: {
      pattern: PATTERN.ASYNC,
    },
    checkSession: {
      pattern: PATTERN.ASYNC,
    },
    //   - 授权
    authorize: {
      pattern: PATTERN.ASYNC,
    },
    //   - 用户信息
    getUserInfo: {
      pattern: PATTERN.ASYNC,
    },
    //   - 微信支付
    requestPayment: {
      pattern: PATTERN.ASYNC,
    },
    //   - 转发
    showShareMenu: {
      pattern: PATTERN.ASYNC,
    },
    hideShareMenu: {
      pattern: PATTERN.ASYNC,
    },
    updateShareMenu: {
      pattern: PATTERN.ASYNC,
    },
    getShareInfo: {
      pattern: PATTERN.ASYNC,
    },
    //   - 收货地址
    chooseAddress: {
      pattern: PATTERN.ASYNC,
    },
    //   - 卡券
    addCard: {
      pattern: PATTERN.ASYNC,
    },
    openCard: {
      pattern: PATTERN.ASYNC,
    },
    //   - 设置
    openSetting: {
      pattern: PATTERN.ASYNC,
    },
    getSetting: {
      pattern: PATTERN.ASYNC,
    },
    //   - 微信运动
    getWeRunData: {
      pattern: PATTERN.ASYNC,
    },
    //   - 打开小程序
    navigateToMiniProgram: {
      pattern: PATTERN.ASYNC,
    },
    navigateBackMiniProgram: {
      pattern: PATTERN.ASYNC,
    },
    //   - 获取发票抬头
    chooseInvoiceTitle: {
      pattern: PATTERN.ASYNC,
    },
    //   - 生物认证
    checkIsSupportSoterAuthentication: {
      pattern: PATTERN.ASYNC,
    },
    startSoterAuthentication: {
      pattern: PATTERN.ASYNC,
    },
    checkIsSoterEnrolledInDevice: {
      pattern: PATTERN.ASYNC,
    },

    // - 数据
    //   - 自定义分析
    reportAnalytics: {
      pattern: PATTERN.SYNC,
    },

    // - 调试接口
    //   - 打开 / 关闭调试
    setEnableDebug: {
      pattern: PATTERN.ASYNC,
    },
  },
}
