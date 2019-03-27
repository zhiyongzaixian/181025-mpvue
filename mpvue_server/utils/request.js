let Fly=require("flyio/src/node")
let fly=new Fly;


exports.get = function (url) {
  return new Promise((resolve, reject) => {
    // 1. pending 初始化
    fly.get(url)
      .then(function (response) {
        console.log(response);
        // 修改promise实例的状态成功
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  })
}