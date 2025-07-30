<template>
    <div class="flex items-center  md:flex-nowrap flex-wrap lg:mt-10 mt-5">
        <div class="md:w-1/2 w-full flex justify-center items-center">
            <img src="/images/logo-png.png" alt="" class=" w-[80%]">
        </div>
        <div class=" p-5 md:w-1/2 w-full">
            <h1 class="text-center text-xl mb-5">Get in touch with us</h1>
               <form class="space-y-4">
            <div>
              <label for="name" class="block text-sm  text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="name" 
                class="w-full px-4 py-1 border text-sm border-gray-300 rounded-md focus:outline-none  " 
                placeholder="Full name"
              >
            </div>
            
            
            <div>
              <label for="email" class="block text-sm text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                class="w-full px-4 py-1 border text-sm border-gray-300 rounded-md focus:outline-none  " 
                placeholder="eg: example@gmail.com"
              >
            </div>
            
            <div>
              <label for="address" class="block text-sm  text-gray-700 mb-1">Suggestion</label>
              <textarea 
                id="address" 
                rows="3" 
                class="w-full px-4 py-1 border text-sm border-gray-300 rounded-md focus:outline-none  " 
                placeholder="Enter you suggestion here ...."
              ></textarea>
            </div>
            
            <div class="pt-2">
              <button 
                type="submit" 
                class="w-full bg-blue-900 hover:bg-blue-800 text-white text-lg py-2 px-4 rounded-xl transition-colors duration-200"
              >
                Send
              </button>
            </div>
          </form>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>