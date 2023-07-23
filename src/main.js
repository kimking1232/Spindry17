import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"

//import Vuelidate
import { useVuelidate } from '@vuelidate/core'

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

createApp(App)
    .use(router)
    .use(useVuelidate)
    .use(ToastPlugin)
    .mount('#app')
