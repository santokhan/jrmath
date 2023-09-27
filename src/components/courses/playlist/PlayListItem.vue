<template>
    <RouterLink :to="props.to" :class="[
        'block w-full hover:bg-orange-100 rounded-lg bg-gray-50',
        props.active && 'bg-orange-500 text-white hover:text-gray-700'
    ]">
        <div class="h-14 flex items-center gap-2 px-3 font-medium">
            <Play class="w-8 h-8" />{{ props.title }}
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import Play from '../../icons/Play.vue';
const props = defineProps<{ active: boolean, title: string, to: string }>()
</script>

