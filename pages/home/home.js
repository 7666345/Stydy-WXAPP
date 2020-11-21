// pages/home/home.js
Page({

  data:{
    title:"哈哈"
  },

  //Toast弹窗
  handleShowToast(){
    wx.showToast({
      title: '我是Toast弹窗',
      duration:5000, //弹窗展示的时间，默认1500毫秒
      icon:'loading', //loding/none/success三个备选值，加载中、不显示图标、成功三种意思
      mask:true       //当mask为true时，弹出窗口会自带遮罩，页面上其他组件不能交互
    })
  },

  //Modal弹窗
  handleShowModal(){
    wx.showModal({
      title:'弹窗标题',
      content:'弹窗内容',
      cancelColor: 'red', //取消按钮上文字内容的颜色
      cancelText:'退出',   //取消按钮上的文字内容
      success:function(res){
        //根据res返回的内容，可以判断用户点击了哪个按钮。
        console.log(res)
        if(res.cancel){
          //如果点击了取消按钮，相应操作
          console.log('点击了取消按钮')
        }
        if(res.confirm){
          //点击确定按钮所作操作
          console.log('点击了确定按钮')
        }
      }
    })
  },

  //Loding弹窗
  handleShowLoding(){
    wx.showLoading({
      title: 'Loding.....',
      mask:true
    })
    //Loding弹窗不会自动消失，需要在操作完成后手动调用 hideLoding（），此处加定时器只作演示
    setTimeout(()=>{
      wx.hideLoading()
    },2000)
  },

  //页面底部的弹窗
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['菜单项1','菜单项2','菜单项3'],
      success:function(res){
        //同Modal弹窗，可以通过res判断用户选择的内容
      }
    })
  }

})