<template>
    <header class="flex justify-between items-center py-3 mt-1">
       <div>
        <router-link to="/">
            <img src="/images/logo-png.png" alt="" class="w-15">
        </router-link>
       </div>

       <div class="border  border-blue-900 flex items-center rounded-2xl gap-3">
        <span class="cursor-pointer px-3 text-gray-800"><i class="fa-solid fa-camera"></i></span>
        <input type="text" name="" placeholder="search roduct" class="py-1.5 focus:outline-none">
        <span class="bg-blue-900 text-white py-1.5 rounded-2xl px-2"> <i class="fa-solid fa-magnifying-glass"></i> Search</span>
       </div>

       <div class="flex items-center gap-6">
        <div>
            <h1 class="text-blue-900 text-xs font-semibold">Location</h1>
            <p class="text-sm">Rwanda</p>
        </div>

        <div class="flex items-center gap-2 px-3 py-1 relative">
          <Cart/>
        </div>

        <div class="space-x-5">
           <SignIn/>
            <SignUp/>
        </div>
       </div>
    </header>
</template>
<script setup lang="ts">
import SignIn from './modals/SignIn.vue';
import SignUp from './modals/SignUp.vue';   
import Cart from './modals/Cart.vue';
</script>