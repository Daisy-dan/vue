import Vue from 'vue'
import App from './App.vue'

//使用MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);

//使用ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入插件并使用 npm install vue-resource --save
import VueResource from 'vue-resource'

Vue.use(VueResource);

//引入VueRouter
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//创建组件
import Index from './components/Index.vue';
import HelloWorld from './components/HelloWorld.vue';
import TodoList from './components/TodoList.vue';
import TodoList2 from './components/TodoList2.vue';
import Detail from './components/Detail.vue';
import RouteJs from './components/RouteJs.vue';

//配置路由
const routes = [
  {path: '/home', component: Index},
  {path: '/hello', component: HelloWorld},
  {path: '/todoList', component: TodoList},
  {path: '/todoList2', component: TodoList2},
  {path: '/todoList2/detail/:aid', component: Detail, name: 'detail'},
  {path: '/todoList2/detail', component: Detail },
  {path: '/routejs', component: RouteJs,children:[{path: 'detail', component: Detail }]},
  {path: '*', redirect: '/home'}
]
//实例化VueRouter
const router = new VueRouter({
  //mode: 'history',  //hash模式改完history
  routes  //缩写 相当于routes:routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
