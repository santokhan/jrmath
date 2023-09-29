<template>
    <section class="">
        <AppContainer>
            <TitleBox>
                <Tag>LATEST NEWS</Tag>
                <Heading>Blogs & Latest Articles</Heading>
            </TitleBox>

            <div class="flex flex-wrap justify-center gap-8 py-8">
                <div v-for="(item, index) in blogsData" :key="index"
                    class="max-w-[22rem] bg-white rounded-xl overflow-hidden relative" title="card">
                    <div class="">
                        <img :src="builder.image(item.thumbnail.asset._ref).url()" alt="c"
                            class="h-60 w-full object-cover bg-white">
                    </div>
                    <div class="relative p-4 space-y-3">
                        <div class="flex gap-2 items-center justify-between">
                            <div class="flex gap-2 items-center">
                                <Clock />
                                <span class="text-gray-700">{{ new Date(item.createdAt).toLocaleDateString() }}</span>
                            </div>
                            <CountDown v-if="item.expairyDate" :expiryDate="item.expairyDate" />
                        </div>
                        <h4 class="text-xl font-semibold whitespace-nowrap text-ellipsis" :title="item.title">
                            {{ item.title.length > 28 ? item.title.slice(0, 28) + '...' : item.title }}
                        </h4>
                        <div class="flex justify-between items-center py-2">
                            <RouterLink :to="`blogs/${item._id}`"
                                class="text-white bg-orange-500 font-medium rounded-lg text- sm px-4 py-2 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none">
                                Read more</RouterLink>
                            <!-- <button type="button" class="hover:text-orange-500"
                                @click="() => { handleCopy(`blogs/${item._id}`) }"><i class="fa fa-share"></i></button> -->
                        </div>
                    </div>
                </div>
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Tag from "../../section/Tag.vue"
import Clock from "../../icons/Clock.vue"
import Heading from "../../section/Heading.vue"
import TitleBox from "../../section/TitleBox.vue"
import AppContainer from "../AppContainer.vue"
import { blogs } from "../../../api/sanity"
import { client } from "../../../sanity/sanityClient"
import imageUrlBuilder from '@sanity/image-url'
import CountDown from '../../timer/CountDown.vue'

const builder = imageUrlBuilder(client)
const blogsData = ref<any[]>([])

blogs.get_blogs((data) => {
    blogsData.value = data
})

async function handleCopy(path: string) {
    const url = location.href + path
    await navigator.clipboard.writeText(url)
}
</script>

