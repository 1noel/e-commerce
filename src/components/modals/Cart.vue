<template>
     <div @click="openModal" class="relative">
                <i class="fa-solid cursor-pointer fa-cart-shopping text-2xl text-blue-900"></i>
                <span class="absolute -top-2 -right-3 bg-blue-900 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                    25
                </span>
            </div>
    <div class="fixed w-full h-full z-50 inset-0 bg-black/50 flex justify-center items-center" v-if="isOpen">
        <div class="bg-white p-5 rounded-lg lg:w-[30%] w-[90%]  ">
            <div class="flex justify-between items-center mb-4">
                <h1 class="text-lg font-medium text-blue-900">Proudcts in cart (25)</h1>
                <button @click="closeModal" class="text-lg text-gray-500 cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
            </div>
          <div class="space-y-5">
              <div class="h-[380px] overflow-hidden overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-scrollbar]:hidden">
                <div v-for="n in 5" class="flex justify-between mb-3 border-b border-gray-200 pb-2">
                    <div class="flex items-center gap-2">
                        <div class="flex justify-center items-center">
                            <img src="/public/images/mac1.jpg" alt="" class="w-20 h-18 object-cover rounded-lg">
                        </div>
                        <div>
                            <span class="block text-sm">Mac Book Pro 2019</span>
                            <span class="block text-xs font-bold text-blue-900">RWF 12000</span>
                            <span class="block text-sm text-gray-400">Quantity: 1</span>
                        </div>
                    </div>
                    <span class="text-lg text-red-950 cursor-pointer" title="Remove from cart">
                        <i class="fa-regular fa-circle-xmark"></i>
                    </span>
                </div>
              </div>          
            </div>
           
          <div class="flex justify-between items-center mb-3">
            <span class="font-medium">Total </span>
            <span class="text-blue-900 font-medium">RWF 48000</span>
          </div>

            <div class="flex flex-col gap-3">
             <router-link to="/checkout"> <button @click="closeModal" class="bg-blue-900 text-xs text-white px-4 py-2 rounded-lg w-full cursor-pointer">Checkout</button> </router-link>
           <button @click="closeModal" class="bg-gray-200 text-xs text-blue-900 px-4 py-2 rounded-lg w-full cursor-pointer">Continue Shopping</button>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

const openModal = () => {
    isOpen.value = true;
};

const closeModal = () => {
    isOpen.value = false;
};

</script>