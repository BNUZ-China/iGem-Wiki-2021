import Vue from 'vue'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

import index from './index.vue'
import animate from 'animate.css'

Vue.use(BootstrapVue)
Vue.use(animate)


Vue.config.productionTip = false

new Vue({
    render: h => h(index),
}).$mount('#app')
