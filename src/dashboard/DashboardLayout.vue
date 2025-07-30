<template>
<div class="flex h-screen bg-red-50">
    <aside class="w-64 border-r-2">
        <SideNavigation />
    </aside>
    <div class="flex-1 flex flex-col">
        <main class="flex-1 p-6 overflow-y-auto">
            <router-view />
        </main>
    </div>
</div>
</template>

<script setup lang="ts">
import SideNavigation from '@/components/navigation/SideNavigation.vue';
</script>