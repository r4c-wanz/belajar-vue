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
    },
    {
        path: '/tutorial/1',
        name: 'Conditional',
        component: () => import('../pages/tutorial/01Conditional.vue')
    },
    {
        path: '/tutorial/2',
        name: 'Looping',
        component: () => import('../pages/tutorial/02Looping.vue')
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes
})

export default router