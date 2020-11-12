// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myMessage:'Hello World!',
    n1:1,
    n2:3,
    myAge:12,
    nowTime:new Date().toLocaleString(),
    isActive:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
onLoad(){
  /* 设置定时器，每1000毫秒更新一次页面绑定的时间变量 */
  setInterval(()=>{
    this.setData({
      nowTime:new Date().toLocaleString()
    })
  },1000)

},

// 点击切换样式
toSwitchColor(){
  this.setData({
    isActive:!this.data.isActive  //给isActive赋一个与当前值相反的值
  })
}
})