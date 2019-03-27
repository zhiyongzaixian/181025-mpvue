import Vue from 'vue'
import App from './app.vue'

// 关闭提示功能
Vue.config.productionTip = false

// 声明当前组件的类型是整个应用
App.mpType = 'app'

// 生成实例对象
const app = new Vue(App)

// 挂载实例
app.$mount()