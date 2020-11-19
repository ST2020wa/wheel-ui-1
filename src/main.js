import { createApp } from 'vue'  // 引入createApp，用来创建app实例的重要函数
import App from './App.vue'  // 引入App.vue组件
import './index.css'

createApp(App).mount('#app')  //  createApp接受了App组件，并把它挂载在w r了当前的div.app上
