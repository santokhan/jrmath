<template>
    <button type="button"
        class="flex items-center focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm">
        <div class="w-8 h-8 flex justify-center items-center">
            <Plus class="w-6 h-6" />
        </div>
        <div class="pr-3">Add New</div>
    </button>
</template>

<script setup lang="ts">
import Plus from '../../icons/Plus.vue';
</script>

