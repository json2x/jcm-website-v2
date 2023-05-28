import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'boxicons/css/boxicons.min.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.min.css'
import './assets/css/style.css'

// import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Register the icons you want to use
library.add(fas, far, fab);


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia())
app.use(router)

// app.use(AOS)

app.mount('#app')
