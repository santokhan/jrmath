<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { client } from '../../sanity/sanityClient';

const title = ref<string[]>([]);

onMounted(async () => {
    const data = await client.fetch(`*[_type in path("news-ticker")][0]`);
    title.value = data.title;
});
</script>

<template>
    <div v-if="title" class="max-w-screen-xl mx-auto overflow-hidden bg-orange-50">
        <div class="news-ticker w-full">
            <h3 class="news-item text-xl">{{ title }}</h3>
        </div>
    </div>
</template>

<style scoped>
.news-ticker {
    white-space: nowrap;
    animation: ticker 15s linear infinite;
    /* Adjust the duration as needed */
}

@keyframes ticker {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

/* Optional styling */
.news-item {
    display: inline-block;
    padding: 10px;
    margin-right: 10px;
    white-space: nowrap;
    overflow: visible;
}
</style>