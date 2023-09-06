import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router/router'
import { VueFire, VueFireAuth } from 'vuefire'
import firebaseApp from './components/firebase/config'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
        // we will see other modules later on
        VueFireAuth(),
    ],
})

const pinia = createPinia()
app.use(pinia)

app.use(router)

app.mount('#app')
