<template>
  <main>
    <navigation />
    <h1 class="text-lg font-medium">Our products</h1>
    <div  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 my-5">
      <div v-for="product in products" :key="product.id" class=" shadow rounded cursor-pointer">
        <router-link :to="`/detail/${product.id}`" class="block">
          <div class="flex justify-center">
            <img :src="product.image" alt="" class="w-50 h-47">
          </div>
          <div class="p-4">
            <h1 class="text-base">{{ product.name }}</h1>
            <h1 class="text-base text-blue-900 ">RWF {{ product.price }}</h1>
            <h1 class="flex justify-between items-center">
              <div>
                <span class="text-yellow-500 text-xs" v-for="n in 4" :key="n">
                  <i class="fa-solid fa-star"></i>
                </span>
                <span class="text-yellow-500 text-xs">
                  <i class="fa-solid fa-star-half-stroke"></i>
                </span>
                <span class="text-yellow-500 text-xs">4.5</span>
              </div>
              <button class="w-10 h-10 hover:text-blue-900 cursor-pointer rounded-full flex justify-center items-center">
                <i class="fa-solid fa-cart-plus text-2xl"></i>
              </button>
            </h1>
             <span class="text-gray-400">25 in Stock</span>
          </div>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const products = ref([
  { id: 1, name: 'Mac Book Desktop All in One', price: 100000, image: '/images/mac2.jpg' },
  { id: 2, name: 'iPhone 14 Pro Max cover', price: 150000, image: '/images/iphco.jpg' },
  { id: 3, name: 'Men and Women sport clothes', price: 120000, image: '/images/jo2.jpg' },
  { id: 4, name: 'Short shirts for all', price: 90000, image: '/images/j2.jpg' },
  { id: 5, name: 'Men Watch', price: 12000, image: '/images/cl1.jpg' }
]);
</script>
