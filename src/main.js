import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局样式
import './styles/index.less'
// 导入字体图标库
import './font/iconfont.css'
// 加载vant组件库
import Vant from 'vant';
import 'vant/lib/index.css'
// 引入rem适配器
import 'amfe-flexible'
createApp(App).use(store).use(router).use(Vant).mount('#app')
