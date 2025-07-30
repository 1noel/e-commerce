<template>
  <main>
    <navigation />
    <h1 class="text-lg font-medium">Our products</h1>
    <div  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
      <div v-for="product in products" :key="product.id" class=" shadow rounded cursor-pointer">
        <router-link :to="`/detail/${product.id}`" class="block">
          <div class="flex justify-center">
            <img :src="product.image" alt="" class="w-45 h-45 rounded mt-1 ">
          </div>
          <div class="p-4">
            <h1 class="text-sm">{{ product.name }}</h1>
            <h1 class="text-xs font-bold text-blue-900 ">RWF {{ product.price }}</h1>
            <h1 class="flex justify-between items-center ">
              <div>
                <span class="text-yellow-500 text-[10px]" v-for="n in 4" :key="n">
                  <i class="fa-solid fa-star"></i>
                </span>
                <span class="text-yellow-500 text-[10px]">
                  <i class="fa-solid fa-star-half-stroke"></i>
                </span>
                <span class="text-yellow-500 font-bold text-[10px]"> 4.5</span>
              </div>
              <button class="w-5 h-5 hover:text-blue-900 text-gray-700 cursor-pointer rounded-full flex justify-center items-center">
                <i class="fa-solid fa-cart-plus text-xl"></i>
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
  { id: 1, name: 'Mac Book Desktop All in One', price: '800,000', image: '/images/mac2.jpg' },
  { id: 2, name: 'iPhone 14 Pro Max cover', price: '1500,000', image: '/images/iphco.jpg' },
  { id: 3, name: 'Men and Women sport clothes', price: '12,000', image: '/images/jo2.jpg' },
  { id: 4, name: 'Short shirts for all', price: '90,000', image: '/images/j2.jpg' },
  { id: 5, name: 'Macbook Laptop ', price: '120,000', image: '/images/mac1.jpg' },
  { id: 6, name: 'Jacket for all', price: '12,000', image: '/images/jack.jpg' },
  { id: 7, name: 'Men Shirt', price: '12,000', image: '/images/sht.jpg' },
  { id: 8, name: 'Canon Camera', price: '1,500,000', image: '/images/cam2.jpg' },
  { id: 9, name: 'Game Controller', price: '12,000', image: '/images/game.jpg' }
]);
</script>
