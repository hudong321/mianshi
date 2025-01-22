import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';

const Vue = createApp(App)
Vue.use(Vant)

Vue.mount('#app')
