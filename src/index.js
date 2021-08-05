import Vue from 'vue'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.css'

import index from './index.vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
    render: h => h(index),
}).$mount('#app')
