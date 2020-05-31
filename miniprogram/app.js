//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env: 'my-env-id',
        traceUser: true,
      })
    }
    /**
     * 全局变量
     * user：object，用来存储学生的数据
     */
    this.globalData = {
      user: {},
    }
  },
  showLoading() {
    wx.showLoading()
    setTimeout(() => {
      wx.hideLoading()
    }, 5000)
  }
})
