import { createApp } from 'vue'
//import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
//import Club from './components/Club.vue'
//import Plantilla from './components/Plantilla.vue'
//import Partido from './components/Partido.vue'
import '@/assets/bootstrap.min.css'
import '@/assets/bootstrap.bundle.min.js'

/* const routes = [
    { path: '/', redirect: { name: 'Club' } },
    { path: '/fcrayovicareno.github.io/', name: 'Club', component: Club },
    { path: '/', name: 'Plantilla', component: Plantilla, props: true },
    { path: '/', name: 'Partido', component: Partido, props: true }
] *7

/* const router = createRouter({
    history: createWebHistory('/fcrayovicareno.github.io/'),
    routes
}) */

//createApp(App).use(router).mount('#app')
createApp(App).mount('#app')
