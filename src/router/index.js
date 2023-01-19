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
        path: '/tutorial/0',
        name: 'Variable',
        component: () => import('../pages/tutorial/00Variable.vue')
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
    },
    {
        path: '/tutorial/3',
        name: 'Components',
        component: () => import('../pages/tutorial/03Components.vue')
    },
    {
        path: '/tutorial/4',
        name: 'Lifecycle',
        component: () => import('../pages/tutorial/04Lifecycle.vue')
    },
    {
        path: '/tutorial/5',
        name: 'Computed',
        component: () => import('../pages/tutorial/05computed.vue')
    },
    {
        path: '/tutorial/6',
        name: 'Watch',
        component: () => import('../pages/tutorial/06watch.vue')
    },
    {
        path: '/movie',
        name: 'Movie Home',
        component: () => import('../pages/movies/Home.vue')
    },
    {
        path: '/movie/:id',
        name: 'Movie Detail',
        component: () => import('../pages/movies/Show.vue')
    }
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes
})

export default router