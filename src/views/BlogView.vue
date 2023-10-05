<template>
    <AppContainer>
        <Heading></Heading>

        <div v-for="(item, index) in blogsData" :key="index" class="w-full bg-white rounded-xl overflow-hidden relative"
            title="card">
            <div class="">
                <img :src="builder.image(item.thumbnail.asset._ref).url()" alt="c"
                    class="w-full object-cover bg-white aspect-[2/1]">
            </div>
            <div class="relative p-4">
                <div class="flex gap-2 items-center justify-between">
                    <div class="flex gap-2 items-center">
                        <Clock />
                        <span class="text-gray-700 font-medium">{{ new Date(item.createdAt).toLocaleDateString() }}</span>
                    </div>
                    <CountDown v-if="item.expairyDate" :expiryDate="item.expairyDate" />
                </div>
                <h4 class="text-2xl font-semibold whitespace-nowrap text-ellipsis mt-3" :title="item.title">{{
                    item.title.slice(0, 32) }}
                </h4>
                <div class="p-4 border rounded-lg mt-6">
                    <h5 class="font-bold text-gray-700">Description</h5>
                    <hr class="my-3">
                    <pre class="whitespace-pre-wrap text-sm">{{ item.description }}</pre>
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
import Clock from "../components/icons/Clock.vue";

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

