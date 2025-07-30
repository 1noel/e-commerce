import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import Home from '@/main/Home.vue'
import ProductDetails from '@/products/ProductDetails.vue'
import ContactUs from '@/components/ContactUs.vue'
import Checkout from '@/products/Checkout.vue'
import DashboardLayout from '@/dashboard/DashboardLayout.vue'
import Dashboard from '@/dashboard/Dashboard.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/detail/:id',
        name: 'ProductDetails',
        component: ProductDetails
    },
    {
        path: '/contact',
        name: 'ContactUs',
        component: ContactUs
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },
    {
        path: '/dashboard',
        name: 'DashboardLayout',
        component: DashboardLayout,
        children: [
            {
                path: '', // This matches /dashboard
                name: 'Dashboard',
                component: Dashboard
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router