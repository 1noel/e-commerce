<template>
<div class="py-2">
    <div v-for="item in sidebarItems" :key="item.id" class="">
        <div class="flex" @click="handleClick(item)">
            <i :class="[item.icon ,'text-blue-900',{'text-orange-600': item.active}]"></i>
            <span class="ml-3 font-sm text-blue-900" :class="{'text-orange-600': item.active}">
                {{ item.name }}
            </span>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { MenuItems } from '@/types';

const props = defineProps<{
    sidebarItems: MenuItems[]
}>();

const emit = defineEmits<{
    'item-clicked': [item: MenuItems] 
}>();


const handleClick = (item: MenuItems) => {
    emit('item-clicked', item);
}
</script>