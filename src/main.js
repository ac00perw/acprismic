import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrismicVue from '@prismicio/vue'
import linkResolver from './linkResolver'; // Update this path

// const accessToken = '' // Add if necessary
Vue.use(PrismicVue, {
  endpoint: "https://acdubs.cdn.prismic.io/api/v2",
  linkResolver,
  // access token for private repos
  // apiOptions: { accessToken } 
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
