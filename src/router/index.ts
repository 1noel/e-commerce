import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/main/Home.vue'
import ProductDetails from '@/products/ProductDetails.vue'
import ContactUs from '@/components/ContactUs.vue'
import Checkout from '@/products/Checkout.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/detail/:id',
        name:'ProductDetails',
        component: ProductDetails
    },
    {
        path:'/contact',
        name:'ContactUs',
        component: ContactUs
    },
    {
        path:'/checkout',
        name:'Checkout',
        component: Checkout
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
