<template>
    <button type="button" :disabled="true" :class="[
        'block w-full rounded-lg bg-gray-50',
    ]">
        <div class="h-12 flex items-center gap-2 p-2 font-medium">
            <Play class="w-8 h-8" />{{ props.title }}
        </div>
    </button>
</template>

<script setup lang="ts">
import Play from '../../icons/Play.vue';
const props = defineProps<{ title: string }>()
</script>

