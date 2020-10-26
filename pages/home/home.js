// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    counter:0

  },

    // 按钮点击增加计数方法
    onClickPlus(){
      //console.log('+号被点击了')
      //不能直接使用this.data.counter=xx的方法改变计数器，小程序没有vue的相关机制，不会自动渲染页面变化
      //需要使用this.setData()方法,页面才会即时刷新
      this.setData({
        counter:this.data.counter + 1
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})