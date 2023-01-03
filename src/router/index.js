import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../pages/about.vue')
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes
})

export default router