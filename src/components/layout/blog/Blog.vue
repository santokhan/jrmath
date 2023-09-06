<template>
    <section class="">
        <AppContainer>
            <TitleBox>
                <Tag>LATEST NEWS</Tag>
                <Heading>
                    Blogs & Latest Articles
                </Heading>
            </TitleBox>

            <div class="flex flex-wrap justify-center gap-8 py-8">
                <div v-for="(item, index) in blogs" :key="index"
                    class="max-w-[22rem] bg-white rounded-xl overflow-hidden relative" title="card">
                    <div class="">
                        <img :src="item.src" alt="c" class="h-60 w-full object-cover bg-white">
                    </div>
                    <div class="relative p-4 space-y-3">
                        <div class="flex gap-2 items-center">
                            <Clock /><span class="text-gray-700">{{ item.time }}</span>
                        </div>
                        <h4 class="text-xl font-semibold">{{ item.title }}</h4>
                        <div class="flex justify-between items-center py-2">
                            <a :href="item.url"
                                class="text-white bg-orange-500 font-medium rounded-lg text- sm px-4 py-2 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none">
                                Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import Clock from '../../icons/Clock.vue';
import Heading from '../../section/Heading.vue';
import Tag from '../../section/Tag.vue';
import TitleBox from '../../section/TitleBox.vue';
import AppContainer from '../AppContainer.vue';

const blogs = [
    {
        src: "/images/blogs/1.png",
        time: "27 Jul 2022",
        title: "Read more about our Math courses",
        url: "",
    },
    {
        src: "/images/blogs/2.png",
        time: "24 Jun 2022",
        title: "Read more about our Biology courses",
        url: "",
    },
    {
        src: "/images/blogs/3.png",
        time: "01 May 2023",
        title: "Read more about our English courses",
        url: "",
    },
]
</script>

<style scoped></style>