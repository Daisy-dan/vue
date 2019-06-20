import Vue from 'vue'
// 路由模块化
//引入VueRouter
import VueRouter from 'vue-router'

Vue.use(VueRouter);



//创建组件
import Index from '../components/Index.vue';
import HelloWorld from '../components/HelloWorld.vue';
import TodoList from '../components/TodoList.vue';
import TodoList2 from '../components/TodoList2.vue';
import Detail from '../components/Detail.vue';
import RouteJs from '../components/RouteJs.vue';

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

export default router;