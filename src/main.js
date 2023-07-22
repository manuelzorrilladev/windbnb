// vue imports

import { createApp } from 'vue'

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faMagnifyingGlass,faLocationDot,faChevronUp,faStar} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

// project imports
import './style.css'
import App from './App.vue'

// ***************
library.add(
    faGithub,
    faMagnifyingGlass,
    faLocationDot,
    faChevronUp,
    faStar
)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')