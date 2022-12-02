import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//setting up font awesome
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//adding icons
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faInstagram,faLinkedin,faPinterest,faArrowRight)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
