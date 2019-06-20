import Vue from 'vue'
import App from './App.vue'

import router from './router/router.js'

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


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
