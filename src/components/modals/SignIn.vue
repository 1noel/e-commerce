<template>
     <button @click="openModal" class="border rounded-2xl px-3 py-1 text-sm cursor-pointer text-blue-900 hover:text-blue-800 font-medium" >
        <i class="fa-regular fa-user"></i> Sign In</button>
    <div class="fixed flex justify-center items-center w-full inset-0 bg-black/50 transition-opacity z-50" v-if="isOpen">
        <div class="w-[25%] bg-white p-5   rounded-md">
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-lg font-medium text-blue-900">Login</h1>
                <button @click="closeModal" class="text-sm cursor-pointer  text-gray-500"><i class="fa-solid fa-xmark"></i></button>
            </div>

            <form action="">
                  <div class="mt-3">
                    <label for="" class="text-sm">Phone Number</label>
                    <input type="text" name="" placeholder="Enter your names" class="w-full mt-1 border rounded px-3 py-1 text-sm focus:outline-none">
                </div>
                  <div class="mt-3">
                    <label for="" class="text-sm">Password</label>
                    <input type="text" name="" placeholder="Enter your names" class="w-full mt-1 border rounded px-3 py-1 text-sm focus:outline-none">
                </div>
                <div class="mt-5 text-center">
                    <div class="flex justify-center gap-5 items-center">
                    <button type="submit" class="px-10 py-2 rounded-xl cursor-pointer text-sm bg-blue-900  text-white">Login</button>
                    </div>
                    <span class="block text-xs mt-3">Don't have account please <span class="text-blue-900 font-medium cursor-pointer">Create Account</span>?</span>
                </div>
            </form>

            <div class="flex gap-5 items-center mt-5">
                <div class="bg-gray-200 h-0.5 w-[25%]" ></div>
                <span class="text-blue-900 text-xs">Continue With</span>
                <div class="bg-gray-200 h-0.5 w-[25%]" ></div>
            </div>

             <div class="flex gap-2 items-center justify-center mt-5"> 
                <button class="border px-5 lg:w-1/2 w-full text-xs  py-2 cursor-pointer rounded-2xl text-blue-900 hover:bg-blue-900 hover:text-white" > <i class="fa-brands fa-google"></i> Google</button>
                <button class="border px-5 lg:w-1/2 w-full  text-xs py-2 cursor-pointer rounded-2xl text-blue-900 hover:bg-blue-900 hover:text-white" > <i class="fa-brands fa-facebook"></i> Facebook</button>
            </div>
            
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const openModal = () =>{
    isOpen.value = true;
}
const closeModal = () =>{
    isOpen.value = false;
}

</script>