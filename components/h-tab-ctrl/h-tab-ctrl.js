// components/h-tab-ctrl/h-tab-ctrl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    //设置一个默认值，用来标记第一个item的样式
    itemindex:0

  },

  /**
   * 组件的方法列表
   */
  methods: {

    handleTabItemClick(event){
      //通过data-变量名=“值”的方式传递过来的参数，可以在event中取得
      const index=event.currentTarget.dataset.index; 

      //根据点击的item，改变样式
      this.setData({
        itemindex:index
      })

      //向组件外传递自定义事件，进行相应操作
      this.triggerEvent('itemClick',{index:index,title:this.data.titles[index]},{})

      
    }

  }
})
