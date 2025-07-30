<template>
    <nav class="bg-white">
        <div>
            <img src="/images/logo-png.png" alt="" class="w-18">
        </div>

        <NavigationMenu :items="menuItems">
            <NavigationItems :sidebarItems="menuItems" @item-clicked="handleItemClick" />
        </NavigationMenu>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import NavigationItems from './NavigationItems.vue';
import NavigationMenu from './NavigationMenu.vue';
import { MenuItems } from '@/types';
import { it } from 'node:test';
const router = useRouter()

const menuItems = ref<MenuItems[]>([
    {
        id: 1,
        name: 'dashboard',
        route: '/dashboard',
        icon: 'fas fa-tachometer-alt',
        active: false,
        isOpen: false,
    },
])

const handleItemClick = (item: MenuItems) => {
    menuItems.value.forEach(menuItem => {
        menuItem.active = menuItem.id === item.id;
    });

    if (item.route) {
        router.push(item.route);
    }
}
</script>