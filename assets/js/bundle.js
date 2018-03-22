'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../components/App';

Vue.use(VueRouter);

const Home = { template: App };
const NotFound = { template: 'Страница не найдена' };

const Routes = [
    { path: '/', component: Home },
    { path: '/pages/', component: Home },
    { path: '/pages/index.html', component: Home }
];

const Router = new VueRouter({
    Routes
});

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        router: Router
        // template: '<App/>',
        // components: { App }
    });
});
