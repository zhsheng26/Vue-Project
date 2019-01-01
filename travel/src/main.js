import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false;
FastClick.attach(document.body);

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
