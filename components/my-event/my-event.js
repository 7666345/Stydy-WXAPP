// components/my-event/my-event.js
Component({
 
  /**
   * 组件的方法列表
   */
  methods: {

    handleClick(){
      this.triggerEvent('jiajia',{},{})  //当组件被点击时，出发handleClick函数，向页面发射一个方法jiajia
    }

  }
})
