// const API_KEY= 'AIzaSyC4Dsp8YZjUX5Al03lrGN5TsPNvFBOvWvc'
const API_KEY= 'AIzaSyCf4Cy6HG1TuUIpziTFMy8YWWbHrPZaAsw'

import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { vfmPlugin } from 'vue-final-modal'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import './styles/style.scss'
import VueSocialSharing from 'vue-social-sharing'



const app = createApp(App)

app.use(VueGoogleMaps, {
    load: {
        key: API_KEY,
        language: 'en',
    }
}),

app.component('Datepicker', Datepicker)
app.use(router)
app.use(store)
app.use(vfmPlugin)
app.use(ElementPlus)
app.use(VueSocialSharing)

app.mount('#app')
