<template>
    <button type="button" :class="[
        'block w-full rounded-lg bg-gray-50',
    ]" title="Click on Pay Now button to get access" @click="goToPayment">
        <div class="h-12 flex items-center gap-2 p-2 font-medium">
            <Play class="w-8 h-8" />{{ props.title }}
        </div>
    </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Play from '../../icons/Play.vue';
const props = defineProps<{ title: string }>()

const router = useRouter()

// Call when user does not have access on this course
function goToPayment() {
    router.push('/payment')
}
</script>

