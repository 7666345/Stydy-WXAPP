// components/my-properties/my-properties.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //title:String  //这种写法，不能设置默认值。
    title:{
      type:String,
      value:'组件默认值',
      observer:function(newVal,oldVal){ //用于监控值的变化情况
        console.log(newVal,oldVal);
      }
    }

  },

  externalClasses:['titleclass'], //传递样式用的数组

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
