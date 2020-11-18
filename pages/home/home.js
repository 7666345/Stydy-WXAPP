// pages/home/home.js
Page({

  /**
   * 页面分享方式1：用户点击右上角分享
   * 此方式要配置onShareAppMessage
   * 
   * 另有分享方式2： <button open-type='share'> 分享 </button>
   */
  onShareAppMessage: function () {
    return{
      title:'需要分享的标题内容',
      path:'/pages/about/about', //这里的地址是被分享者点开以后，会展示的页面的路径。
      imageUrl:''  //分享时显示的图片
    }

  }
})