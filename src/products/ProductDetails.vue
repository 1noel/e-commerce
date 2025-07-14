<template>
  <main>
    <div class="">
      <h1 class="text-xl  mb-4 ">Product {{ product.name }}</h1>
      <div v-if="product">
        <div class="flex md:flex-nowrap flex-wrap gap-5">
          <div class="p-5 md:w-[65%] w-full rounded-lg shadow-md">
            <div class="flex justify-center items-center">
              <img :src="product.image" :alt="product.name" class="w-full h-96 object-contain">
            </div>

            <div class="flex gap-5 mt-4 justify-center">
              <div v-for="n in 4" class="border border-gray-400 rounded-md p-2 cursor-pointer bg-white">
                <img :src="product.image" alt="" class="md:w-20 w-8  md:h-20 h-10  object-cover">
              </div>
            </div>
          </div>

          <div class="md:w-[35%] w-full ps-5  ">
             <h2 class="text-xl font-medium mb-2">{{ product.name }}</h2>

            <div class="flex justify-between items-center mb-4">
            <p class="text-xl font-medium text-blue-900 ">RWF {{ product.price }}</p>
            <div class="flex items-center">
              <span class="text-yellow-500 text-sm" v-for="n in 4" :key="n">
                <i class="fa-solid fa-star"></i>
              </span>
              <span class="text-yellow-500 text-sm">
                <i class="fa-solid fa-star-half-stroke"></i>
              </span>
              <span class="ml-2 text-sm">4.5</span>
            </div>
              <button class="w-10 h-10 hover:text-blue-900 cursor-pointer rounded-full flex justify-center items-center">
                <i class="fa-solid fa-cart-plus text-2xl"></i>
              </button>
            </div>

            <div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Quasi maiores minus, eligendi eius inventore unde explicabo 
                repellendus dolorum eos harum tempore itaque deserunt quas, sequi </p>
            </div>
            <!-- specification -->
            <div class="mt-5">
              <h3 class="text-lg font-medium mb-2">Product Specifications</h3>
              <ul class="list-disc pl-5" v-if="product.id === 1">
                <li><span>Brand: Apple</span></li>
                <li><span>Model: MacBook Pro 2021</span></li>
                <li><span>Processor: M1 Pro chip</span></li>
                <li><span>Memory: 16GB RAM</span></li>
                <li><span>Storage: 512GB SSD</span></li>
              </ul>
              <ul class="list-disc pl-5" v-if="product.id === 2">
                <li><span>Brand: Apple</span></li>
                <li><span>Material: Premium Silicone</span></li>
                <li><span>Color: Multiple options</span></li>
                <li><span>Protection: Drop-resistant</span></li>
                <li><span>Compatibility: iPhone 14 Pro Max</span></li>
              </ul>
              <ul class="list-disc pl-5" v-if="product.id === 3">
                <li><span>Material: Polyester blend</span></li>
                <li><span>Style: Athletic wear</span></li>
                <li><span>Size Range: XS-XXL</span></li>
                <li><span>Care: Machine washable</span></li>
                <li><span>Features: Moisture-wicking</span></li>
              </ul>
              <ul class="list-disc pl-5" v-if="product.id === 4">
                <li><span>Material: Cotton blend</span></li>
                <li><span>Style: Casual</span></li>
                <li><span>Size Range: S-XL</span></li>
                <li><span>Sleeve Type: Short sleeve</span></li>
                <li><span>Pattern: Solid colors</span></li>
              </ul>
              <ul class="list-disc pl-5" v-if="product.id === 5">
                <li><span>Type: Analog</span></li>
                <li><span>Band Material: Leather</span></li>
                <li><span>Case Material: Stainless steel</span></li>
                <li><span>Water Resistance: 30m</span></li>
                <li><span>Features: Date display</span></li>
              </ul>
              </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Product not found</p>
      </div>

      
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'

const route = useRoute()
const id = route.params.id

// You should ideally fetch this from a store or API
const products = ref([
  { id: 1, name: 'Mac Book Desktop All in One', price: 100000, image: '/images/mac2.jpg' },
  { id: 2, name: 'iPhone 14 Pro Max cover', price: 150000, image: '/images/iphco.jpg' },
  { id: 3, name: 'Men and Women sport clothes', price: 120000, image: '/images/jo2.jpg' },
  { id: 4, name: 'Short shirts for all', price: 90000, image: '/images/j2.jpg' },
  { id: 5, name: 'Men Watch', price: 12000, image: '/images/cl1.jpg' }
])

const product = computed(() => {
  return products.value.find(p => p.id === parseInt(id as string))
})
</script>
