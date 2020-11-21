// pages/detail/detail.js
Page({


  data: {

  },

  onLoad(options){
    console.log(options);
    const id=options.id;
    const cid=options.cid;

    console.log(id,cid)
  },

  // 如果需要在详细页面中返回一些内容到上一页，可以通过直接修改上一页内容的方式，完成
  // 一般在页面的unload声明周期中进行
  onUnload(){
    // 用getCurrentPages获取当前已经打开的所有页面
    const pages=getCurrentPages();
    const home=pages[pages.length-2];  // -1拿到的是最后一个页面（当前页），-2就是当前页的上一页。

    // 修改home的值
    home.setData({
      title:"修改了"
    })
  },

  handleBackHome(){
    wx.navigateBack({
      delta:2  //设定返回的层级数
    })
  }

})