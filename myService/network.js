// 使用promise方式封装和调用，可以有效避免回调地狱的产生
export default function request(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: options.url,
      method:options.method || 'get',  //接受外部传入的请求方式，如不传入则使用默认值get方式
      data:options.data || {}, //传入的参数，默认为空
      success:function(res){resolve(res)},
      fail:function(err){reject(err)}
    })
  })
}

//简洁写法：
// export default function request(options){
//   return new Promise((resolve,reject)=>{
//     wx.request({
//       url: options.url,
//       method:options.method || 'get',  //接受外部传入的请求方式，如不传入则使用默认值get方式
//       data:options.data || {}, //传入的参数，默认为空
//       success:resolve,  //success需要传入一个回调函数，resolve本身就是函数，所以可以直接写
//       fail:reject       //同上
//     })
//   })
// }