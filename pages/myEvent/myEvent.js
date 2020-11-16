// pages/myEvent/myEvent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:['白菜','西蓝花','西红柿']

  },

  handleBtnClick(event){
    console.log(event)
  },

  //事件传递参数,参数存放于event.currentTarget.dataset中。
  goodsClick(event){
    console.log(event);
    const goods_index=event.currentTarget.dataset.index;
    const goods_name=event.currentTarget.dataset.goodsname;
    console.log(goods_index,goods_name)
  }

})