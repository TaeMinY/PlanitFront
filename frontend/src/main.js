import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from "aos";
import "aos/dist/aos.css";
Vue.config.productionTip = false
AOS.init();
new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
