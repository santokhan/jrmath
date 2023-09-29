<template>
    <AppContainer>
        <Heading></Heading>

        <div v-for="(item, index) in blogsData" :key="index" class="w-full bg-white rounded-xl overflow-hidden relative"
            title="card">
            <div class="">
                <img :src="builder.image(item.thumbnail.asset._ref).url()" alt="c"
                    class="w-full object-cover bg-white aspect-[2/1]">
            </div>
            <div class="relative p-4 space-y-3">
                <div class="flex gap-2 items-center justify-between">
                    <div class="flex gap-2 items-center">
                        <Clock />
                        <span class="text-gray-700">{{ new Date(item.createdAt).toLocaleDateString() }}</span>
                    </div>
                    <CountDown v-if="item.expairyDate" :expiryDate="item.expairyDate" />
                </div>
                <h4 class="text-xl font-semibold whitespace-nowrap text-ellipsis" :title="item.title">{{
                    item.title.slice(0, 32) }}
                </h4>
                <p class="whitespace-pre-wrap">{{ item.description }}</p>
                <div class="flex justify-between items-center py-2">
                    <RouterLink :to="`blogs/${item._id}`"
                        class="text-white bg-orange-500 font-medium rounded-lg text- sm px-4 py-2 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none">
                        Read more</RouterLink>
                </div>
            </div>
        </div>
    </AppContainer>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { useRoute } from 'vue-router';
import AppContainer from '../components/layout/AppContainer.vue';
import Heading from '../components/section/Heading.vue';
import { blogs } from '../api/sanity';
import imageUrlBuilder from '@sanity/image-url'
import { client } from "../sanity/sanityClient";
import CountDown from "../components/timer/CountDown.vue";

const builder = imageUrlBuilder(client)
const blogsData = ref<any[]>([])

const route = useRoute()
const blogId = route.params.blogId

blogs.get_blogs((data) => {
    if (data) {
        if (typeof blogId === 'string') {
            blogsData.value = data.filter((e: any) => e._id === blogId)
        }
    }
})
</script>

