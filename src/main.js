import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'boxicons/css/boxicons.min.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.min.css'
import './assets/css/style.css'

// import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.use(AOS)

app.mount('#app')
