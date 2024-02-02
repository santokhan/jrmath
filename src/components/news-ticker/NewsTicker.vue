<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { client } from '../../sanity/sanityClient';
const newsList = ref<string[]>([]);

onMounted(async () => {
    await client.fetch(``).then(res => res.json()).then(data => {
        newsList.value = data.data();
    });
});
</script>

<template>
    <div class="max-w-screen-xl mx-auto overflow-hidden bg-orange-50">
        <div class="news-ticker w-full">
            <h3 class="news-item text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci harum magnam commodi ab odit rem porro?
                Deleniti nemo est labore ipsum vel! Minus eum nostrum sunt saepe, odit debitis cum.
            </h3>
            <h3 class="news-item" v-for="(item, index) in newsList" :key="index">{{ item }}</h3>
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