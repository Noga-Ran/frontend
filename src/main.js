import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import './styles/style.scss'

const app = createApp(App)

app.component('Datepicker', Datepicker);
app.use(router)
app.use(store)
app.mount('#app')
 