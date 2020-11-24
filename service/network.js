export default function(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: optionis.url,
      method: options.method || 'get',
      data: options.data || {},
      success:resolve,
      fail:reject
    })

  })
}