import Vue from 'vue'
    import BootstrapVue from "bootstrap-vue";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap-vue/dist/bootstrap-vue.min.css';

    import App from './pages/team/notebook';

    Vue.use(BootstrapVue);

    Vue.prototype.$isDev = true;
    Vue.config.productionTip = false;

    new Vue({
    render: h => h(App),
    }).$mount('#app')