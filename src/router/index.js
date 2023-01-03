import { createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/pages/Home.vue')
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    routes
})

export default router