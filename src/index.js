require('./index.scss');
require('./prefixfree.min');

import Vue from 'vue';
import Home from './components/home/home.vue'  ;
import Portfolio from './components/portfolio/portfolio.vue'  ;
import LogoCilinder from './components/logo-cilinder/logo-cilinder.vue'  ;
import VueRouter from  'vue-router';

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/portfolio',
        component: Portfolio,
        name: 'portfolio'
    },
    {
        path: '/cilinder',
        component: LogoCilinder,
        name: 'cilinder'
    },
    // {
    //     path: '/contact',
    //     component: Contact,
    //     name: 'contact'
    // }
];

let router = new VueRouter({
    routes
});

new Vue({
    router,
    components: {
        Home,
        Portfolio
    },

}).$mount('#r-boot');
