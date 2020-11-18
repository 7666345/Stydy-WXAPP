import request from '../../myService/network' //引入自定义封装的网络请求函数request
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 网络请求，一般在页面加载时，
    // 使用系统API请求网络，wx:request
    //学习阶段可以使用httpbin.org进行网络请求的模拟

    //1. 普通get请求
    // wx:wx.request({
    //   url: 'http://httpbin.org/get',
    //   success: (result) => {
    //     console.log(result)
    //   },
    // })

    //2. 带参数的get请求
    // wx:wx.request({
    //   url: 'http://httpbin.org/get',
    //   data: {
    //     id:10002,
    //     title:'时代峰峻阿喀琉斯的'
    //   },
    //   success: (result) => {
    //     console.log(result)
    //   }
    // })

    //3. post请求
    // wx:wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   success: (result) => {
    //     console.log(result)
    //   }
    // })

    //4. post请求，带参数
    // wx:wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     id:11
    //   },
    //   success: (result) => {
    //     console.log(result)
    //   },
    //   fail: (res) => {},
    //   complete: (res) => {},
    // })

    // 5. 使用Promise方式调用自己封装的request函数，降低页面与系统API的耦合度：
 
    request({
      url:'http://httpbin.org/post',
      method:'post'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
        


  }
})