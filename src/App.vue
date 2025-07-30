<template>
  <div class="lg:mx-30 mx-5 mb-5" id="app">
   <navigation />
    <router-view />

  <button class="bg-blue-900 animate-bounce shadow-md shadow-blue-200 text-white text-sm font-medium flex items-center h-12 justify-center w-12 rounded-full fixed bottom-5 right-5 z-50 cursor-pointer" @click="$router.push('/contact')">
      Help 
    </button>
  </div>
</template>

<script setup lang="ts">
import navigation from '@/components/navigation.vue';
// Your app logic here
</script>
