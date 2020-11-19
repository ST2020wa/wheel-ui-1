import { createApp } from 'vue'  // 引入createApp，用来创建app实例的重要函数
import App from './App.vue'  // 引入App.vue组件
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import St from './components/St.vue'
import St2 from './components/St2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path:'/', component: St},
        {path: '/xxx', component: St2}
    ]
})

const app = createApp(App)
  app.use(router)
  app.mount('#app')  //  createApp接受了App组件，并把它挂载在w r了当前的div.app上
