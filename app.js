App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('onLaunch只会在小程序被加载时执行一次')
    //此处可以执行判断用户进入小程序场景等相关操作，具体函数可以查阅官方开发文档
    //但是此处的回调只会被执行一次
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //此处可以执行判断用户进入小程序场景等相关操作，具体函数可以查阅官方开发文档
    //但是此处的回调只会被执行一次
    //获取用户信息有2个方式：
    //方式1： wx.getUserInfo()函数,此函数可以直接获取用户信息，无须用户授权。有传言此接口会被禁用
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
    //自从微信接口有了新的调整之后 这个wx.getUserInfo()便不再出现授权弹窗了，需要使用button做引导


  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
