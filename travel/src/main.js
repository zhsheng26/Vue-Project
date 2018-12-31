import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import FastClick from "fastclick"

Vue.config.productionTip = false;
FastClick.attach(document.body);

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
