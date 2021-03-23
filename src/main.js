import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import queryHandler from "./queryHandler";
import {coreQueryParams} from "./config";

Vue.config.productionTip = false;

router.onReady(queryHandler(Object.keys(coreQueryParams), router, store));

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


