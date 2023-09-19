<template>
    <button type="button" @click="props.handleLogout"
        class="flex gap-2 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm pl-3 py-2.5 pr-4">
        <Logout class="h-5" /> Logout
    </button>
</template>

<script setup lang="ts">
import Logout from '../icons/Logout.vue';

const props = defineProps<{ handleLogout: () => void }>()
</script>

