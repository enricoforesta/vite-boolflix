import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faStar, faStarEmpty, faChevronRight, faChevronLeft, faMagnifyingGlass)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
