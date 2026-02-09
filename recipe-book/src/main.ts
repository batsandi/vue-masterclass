import './assets/main.css';
import localStoragePlugin from '@/plugins/pinia/localStoragePlugin';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();
pinia.use(localStoragePlugin);

app.use(pinia);
app.use(router);

app.mount('#app');
