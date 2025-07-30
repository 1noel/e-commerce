<template>
<div class="flex flex-col bg-white">
    <div class="flex-1 overflow-y-auto">
        <slot></slot>
    </div>
</div>
</template>
<script setup lang="ts">
import { MenuItems } from '@/types';

const props = defineProps<{
    items: MenuItems[]
}>();

</script>