import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'

import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { vfmPlugin } from 'vue-final-modal'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'v-calendar/dist/style.css'
// import VCalendar from 'v-calendar';
import './styles/style.scss'

const app = createApp(App)

app.component('Datepicker', Datepicker)
// app.use(VCalendar, {})
app.use(router)
app.use(store)
app.use(vfmPlugin)
app.use(ElementPlus)
app.mount('#app')
