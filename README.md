# mpvue
## 什么是mpvue 
  1. 比较火的框架: mpvue(美团), wepy(腾讯)
  2. 基于vue.js开发小程序
  
## mpvue特点
  1. 可以使用vue的语法进行开发
  2. 兼容小程序的生命周期函数，除非特殊情况，不建议使用小程序的生命周期函数
  3. 在mpvue中既可以使用vue.js的语法同时也可以使用原生小程序提供的组件以及api(swiper, 路由跳转)
  4. 在页面中定义json文件的时候: main.json
## mpvue启动流程
  1. app.json ---> app.json
  2. app.vue ---> app.js + app.wxss
  3. main.js ---> App() || Page() 挂载当前实例对象
  
## 发送ajax请求的方式
  1. 原生
  2. axios， fetch 在window的环境下
  3. flyio 支持很多平台