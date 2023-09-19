<template>
    <button type="button" @click="props.handleFacebookSignIn"
        class="bg-blue-600 rounded-lg text-white h-11 font-medium px-3 flex items-center gap-2">
        <Facebook class="h-5"/>
        <span class="whitespace-nowrap">Signin with Facebook</span>
    </button>
</template>

<script setup lang="ts">
import Facebook from '../icons/Facebook.vue';

const props = defineProps<{ handleFacebookSignIn: () => void }>()
</script>

