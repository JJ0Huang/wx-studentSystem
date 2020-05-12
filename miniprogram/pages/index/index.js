Page({
  data: {
    pswIcon: 'closed-eye',
    pswType: 'password'
  },
  /**
   * pswVisiable  改变密码可见状态
   * login  登录
   */
  pswVisiable() {
    this.setData({
      pswIcon: this.data.pswIcon === 'closed-eye' ? 'eye-o' : 'closed-eye',
      pswType: this.data.pswType === 'password' ? 'text' : 'password'
    })
  },
  login(){
    wx.navigateTo({
      url: '../stuIndex/index',
    })
  }
})