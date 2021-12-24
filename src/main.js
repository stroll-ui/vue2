
import Vue from 'vue'
import App from './App'
import router from './router'
// import './assets/style/_common.scss'
import components from './components/main'
Vue.use(components)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
