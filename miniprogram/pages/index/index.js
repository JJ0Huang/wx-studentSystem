const app = getApp()
const globalData = getApp().globalData
Page({
  data: {
    pswIcon: 'closed-eye',
    pswType: 'password',
    user: {
      // id: undefined,
      id:'2014082001',
      password: undefined,
    }
  },
  onLoad() {

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
  /**------------------------------------------------------------------------------------
   * login
   * 待验证完毕后再进行跳转，
   * 将student information赋值到globalData.user变量中
   * 测试账号 id=2014082001
   */
  login() {
    let _this = this;
    new Promise((resolve, reject) => {
      app.showLoading()
      wx.request({
        url:'https://129.211.49.112/getStuScore?id='+_this.data.user.id,
        success(res){
          console.log('student information:',res.data)
          if(res.data.success){
            globalData.user = res.data
            resolve()
          }else{
            reject()
          }
        }
      })
    }).then(() => {
      wx.navigateTo({
        url: '../stuIndex/index?id=' + globalData.user.id,
      })
      console.log(getApp().globalData.user)
      wx.hideLoading();
    }).catch(() => {
      wx.hideLoading()
      wx.showToast({
        title: '账号密码错误，请重试',
        icon: 'none'
      })
    })
  },
  // login end ------------------------------------------------------------------------
  changeId(e) {
    this.setData({
      ['user.id']: e.detail
    })
  },
  changePassword(e) {
    this.setData({
      ['user.password']: e.detail
    })
  }
})