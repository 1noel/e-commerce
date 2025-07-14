<template>
    <button @click="openModal" class="bg-blue-900 rounded-2xl text-white px-3 py-1 text-lg cursor-pointer" ><i class="fa-solid fa-user-plus"></i> Sign Up</button>
    <div class="fixed flex justify-center items-center w-full inset-0 bg-black/50 transition-opacity z-50" v-if="isOpen">
        <div class="w-[30%] bg-white p-10 rounded-2xl">
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-3xl font-bold text-blue-900">Sign Up</h1>
                <button @click="closeModal" class="text-lg cursor-pointer  text-gray-500"><i class="fa-solid fa-xmark"></i></button>
            </div>

            <form action="">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div class="mt-3">
                    <label for="" class="text-xl" >Fullname</label>
                    <input type="text" name="" placeholder="Fullnames" class="w-full mt-3 border rounded-lg px-3 py-2 focus:outline-none">
                </div>
                  <div class="mt-3">
                    <label for="" class="text-xl" >Email</label>
                    <input type="text" name="" placeholder="Eg: example@gmail.com" class="w-full mt-3 border rounded-lg px-3 py-2 focus:outline-none">
                </div> 
              </div>
                  <div class="mt-3">
                    <label for="" class="text-xl" >Phone Number</label>
                    <input type="text" name="" placeholder="Eg:078XXXXXXX" class="w-full mt-3 border rounded-lg px-3 py-2 focus:outline-none">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                     <div class="mt-3">
                    <label for="" class="text-xl" >Password</label>
                    <input type="text" name="" placeholder="Password" class="w-full mt-3 border rounded-lg px-3 py-2 focus:outline-none">
                </div>
                  <div class="mt-3">
                    <label for="" class="text-xl" >Confirm Pasword</label>
                    <input type="text" name="" placeholder="Confirm Password" class="w-full mt-3 border rounded-lg px-3 py-2 focus:outline-none">
                </div> 
                </div>

                  <div class="mt-10 text-center">
                    <div class="flex justify-center gap-5 items-center">
                    <button type="button" @click="closeModal" class="px-10 py-1 rounded-2xl cursor-pointer border text-blue-900 text-2xl">Cancel</button>
                    <button type="submit" class="px-10 py-1 rounded-2xl cursor-pointer text-2xl bg-blue-900  text-white">Login</button>
                    </div>
                    <span class="block text-lg mt-3">Have an account please <span class="text-blue-900 font-medium cursor-pointer">Login</span></span>
                </div>

            </form>

            
            <div class="flex gap-5 items-center mt-5">
                <div class="bg-gray-200 h-0.5 w-[30%]" ></div>
                <span class="text-blue-900">Continue With</span>
                <div class="bg-gray-200 h-0.5 w-[30%]" ></div>
            </div>

            <div class="flex gap-2 items-center justify-center mt-5"> 
                <button class="border px-5 lg:w-1/2 w-full  py-2 cursor-pointer rounded-2xl text-lg text-blue-900 hover:bg-blue-900 hover:text-white" > <i class="fa-brands fa-google"></i> Google</button>
                <button class="border px-5 lg:w-1/2 w-full  py-2 cursor-pointer rounded-2xl text-lg text-blue-900 hover:bg-blue-900 hover:text-white" > <i class="fa-brands fa-facebook"></i> Facebook</button>
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