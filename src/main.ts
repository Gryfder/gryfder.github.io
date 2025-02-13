import { createPinia } from 'pinia';
import { createApp } from 'vue';

import './main.css';
import { router } from './router';

import App from './app/App.vue';

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
