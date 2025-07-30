<template>
  <main class="  min-h-screen py-8">
      <h1 class="text-3xl font-bold text-blue-900 mb-5">Checkout</h1>
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Cart Section -->
        <div class="bg-white rounded-lg shadow-md p-6 w-full lg:w-[35%]">
          <div class="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 class="text-lg font-medium text-blue-900">Your Cart</h2>
            <div class="relative">
              <i class="fa-solid fa-search absolute left-3 top-3 text-gray-400"></i>
              <input 
                type="text" 
                placeholder="Search product" 
                class="border border-gray-300 rounded-full px-4 py-1 pl-10 focus:outline-none  w-48"
              >
            </div>
          </div>

          <div class="space-y-4">
            <div class="">
              <div v-for="n in 4" :key="n" class="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <div class="flex items-center gap-4">
                  <div class="w-20 h-20 flex-shrink-0">
                    <img 
                      src="/public/images/mac1.jpg" 
                      alt="Mac Book Pro 2019" 
                      class="w-full h-full object-cover rounded-lg"
                    >
                  </div>
                  <div>
                    <span class="block text-sm text-gray-800">Mac Book Pro 2019</span>
                    <span class="block text-xs font-bold text-blue-900">RWF 120,000</span>
                    <div class="flex items-center mt-1">
                      <span class="text-xs text-gray-500 mr-3">Quantity: 1</span>
                      <div class="flex items-center border border-gray-300 rounded">
                        <button class="px-2 text-gray-500 hover:bg-gray-100">-</button>
                        <span class="px-2 text-sm">1</span>
                        <button class="px-2 text-gray-500 hover:bg-gray-100">+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-red-500 transition-colors duration-200" title="Remove from cart">
                  <i class="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>
            </div>

            <div class="border-t border-gray-200 pt-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-medium text-sm">RWF 480,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Tax</span>
                <span class="font-medium text-sm">RWF 0</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Shipping Information -->
        <div class="bg-white rounded-lg shadow-md p-6 w-full lg:w-[30%]">
          <h2 class="text-base font-medium text-blue-900 mb-6 pb-4 border-b border-gray-200 text-center">Shipping Information</h2>
          
          <form class="space-y-4">
            <div>
              <label for="name" class="block text-sm  text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="name" 
                class="w-full px-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none  " 
                placeholder="Full name"
              >
            </div>
            
            <div>
              <label for="phone" class="block text-sm text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                class="w-full px-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none  " 
                placeholder="eg: 078XXXXXXX"
              >
            </div>
            
            <div>
              <label for="email" class="block text-sm text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                class="w-full px-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none  " 
                placeholder="eg: example@gmail.com"
              >
            </div>
            
            <div>
              <label for="address" class="block text-sm  text-gray-700 mb-1">Shipping Address</label>
              <textarea 
                id="address" 
                rows="3" 
                class="w-full px-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none  " 
                placeholder="eg: Kigali, Gasabo, Kimironko KG 173 St"
              ></textarea>
            </div>
            
            <div class="pt-2">
              <button 
                type="submit" 
                class="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 text-sm px-4 rounded-xl transition-colors duration-200"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>

        <!-- Payment Methods -->
        <div class="bg-white rounded-lg shadow-md p-6 w-full lg:w-[30%]">
          <h2 class="text-base font-medium text-blue-900 mb-6 pb-4 border-b border-gray-200 text-center">Payment Methods</h2>
          
          <div class="space-y-6">
            <div class="bg-gray-50 hover:bg-gray-100 flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors duration-200">
              <span class="h-5 w-5 border-2 border-blue-900 rounded-full flex items-center justify-center">
                <span class="h-3 w-3 bg-blue-900 rounded-full hidden"></span>
              </span>
              <div class="flex-1 px-4">
                <p class="font-medium ">MTN MoMo</p>
                <span class="text-blue-900 text-sm">100,000 Frw</span>
              </div>
              <img src="/images/mtn.jpg" alt="MTN Mobile Money" class="w-12 h-8 object-contain">
            </div>
            
            <div class="bg-gray-50 hover:bg-gray-100 flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors duration-200">
              <span class="h-5 w-5 border-2 border-blue-900 rounded-full flex items-center justify-center">
                <span class="h-3 w-3 bg-blue-900 rounded-full hidden"></span>
              </span>
              <div class="flex-1 px-4">
                <p class="font-medium">Airtel Money</p>
                <span class="text-blue-900 text-sm">100,000 Frw</span>
              </div>
              <img src="/images/aitel.jpg" alt="Airtel Money" class="w-12 h-8 object-contain">
            </div>

            <div>
              <label for="payment-phone" class="block text-sm  text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="payment-phone" 
                class="w-full px-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none  " 
                placeholder="eg: 078XXXXXXX"
              >
            </div>

            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-gray-600 text-sm">Subtotal</span>
                <span class="font-medium text-sm">RWF 700,000</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600 text-sm">Delivery Fee</span>
                <span class="font-medium text-sm"> RWF 0</span>
              </div>
              <div class="flex justify-between items-center pt-3 border-t border-gray-200">
                <span class="text-sm font-medium">Amount to Pay</span>
                <span class="text-sm font-medium text-blue-900">FRW 700,000 </span>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center h-5 mt-1">
                <input 
                  id="terms" 
                  name="terms" 
                  type="checkbox" 
                  class="h-4 w-4 text-blue-900 focus:ring-blue-500 border-gray-300 rounded"
                >
              </div>
              <div class="ml-3">
                <label for="terms" class="text-sm text-gray-700">
                  I have read and accept the 
                  <a href="/terms" class="text-blue-900 font-medium hover:underline">Terms</a>, 
                  <a href="/fare-rules" class="text-blue-900 font-medium hover:underline">Fare Rules</a>, and 
                  <a href="/privacy-policy" class="text-blue-900 font-medium hover:underline">Privacy Policy</a>. 
                  I confirm all information is correct.
                </label>
              </div>
            </div>

            <button 
              class="w-full bg-blue-900 hover:bg-blue-800 text-sm text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>