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
                        <div class="flex gap-2 items-center">
                            <Clock /><span class="text-gray-700">{{ new Date(item.createdAt).toLocaleDateString() }}</span>
                        </div>
                        <h4 class="text-xl font-semibold whitespace-nowrap text-ellipsis" :title="item.title">{{
                            item.title.slice(0, 32) }}
                        </h4>
                        <div class="flex justify-between items-center py-2"><a :href="item.url"
                                class="text-white bg-orange-500 font-medium rounded-lg text- sm px-4 py-2 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none">Read
                                more</a>
                        </div>
                    </div>
                </div>
            </div>
        </AppContainer>
    </section>
    {{ countDown.hrs }}
    {{ countDown.min }}
    {{ countDown.sec }}
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import Tag from "../../section/Tag.vue"
import Clock from "../../icons/Clock.vue"
import Heading from "../../section/Heading.vue"
import TitleBox from "../../section/TitleBox.vue"
import AppContainer from "../AppContainer.vue"
import { blogs } from "../../../api/sanity"
import { client } from "../../../sanity/sanityClient"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
const blogsData = ref<any[]>([])

blogs.get_blogs((data) => {
    blogsData.value = data
    console.log(data);
})

const blogsList = [
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

interface Timer {
    hrs: string | number,
    min: string | number,
    sec: string | number
}

const countDown = reactive<Timer>({ hrs: "", min: "", sec: "" })

function startCountDown() {
    let today = new Date();
    let target = new Date("January 1, 2019 00:00:00");
    let currentTime = today.getTime();
    let targetTime = target.getTime();

    let time = targetTime - currentTime;

    let sec = Math.floor(time / 1000);
    let min = Math.floor(sec / 60);
    let hrs = Math.floor(min / 60);
    let days = Math.floor(hrs / 24);

    hrs = hrs % 24;
    min = min % 60;
    sec = sec % 60;


    countDown.hrs = (hrs < 10) ? "0" + hrs : hrs;
    countDown.min = (min < 10) ? "0" + min : min;
    countDown.sec = (sec < 10) ? "0" + sec : sec;

    if (time > 0) {
        setTimeout(startCountDown, 1000);
    } else {
        countDown.hrs = ""
        countDown.min = ""
        countDown.sec = ""
    }
}
startCountDown() 
</script>

