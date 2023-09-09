<template>
    <section class="">
        <AppContainer>
            <TitleBox>
                <Tag>Welcome to</Tag>
                <Heading>National University (NUH) Course</Heading>
            </TitleBox>

            <div v-if="vdoToPlay" class="mt-8">
                <div class="h-[400px] md:h-[650px]" v-if="vdoToPlay.vdoChiperId"
                    v-html="generateIframe(vdoToPlay.vdoChiperId)"></div>
                <h3 class="my-4 text-2xl font-semibold">{{ vdoToPlay.title }}</h3>
            </div>

            <div class="space-y-2 max-w-md mt-12 bg-white rounded-lg border p-3">
                <h4 class="font-semibold mb-4">Lessons</h4>
                <RouterLink type="button" v-for="(item, index) in videoData" :key="index"
                    @click="() => { handleVideoPlay(index) }" class="block w-full hover:bg-gray-100"
                    :to="`/courses/nuh/${item._id}`">
                    <div class="border h-12 flex items-center gap-2 p-2 rounded-lg bg-white font-medium">
                        <Play class="w-8 h-8 text-gray-600" />{{ item.title }}
                    </div>
                </RouterLink>
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import admin from '../../components/firebase/admin';
import AppContainer from '../../components/layout/AppContainer.vue';
import Heading from '../../components/section/Heading.vue';
import Tag from '../../components/section/Tag.vue';
import TitleBox from '../../components/section/TitleBox.vue';
import { useRoute } from 'vue-router';
import Play from '../../components/icons/Play.vue'

const videoData = ref<any[]>([])
const vdoToPlay = ref<any>({})
const route = useRoute()

function assinInitial() {
    if (videoData.value.length > 0) {
        let filtered = {}
        videoData.value.forEach(e => {
            if (e._id === route.params.id) {
                filtered = e
            }
        })

        if (filtered) {
            vdoToPlay.value = filtered
        } else {
            vdoToPlay.value = videoData.value[0]
        }
        console.log(videoData.value[0]);
    }
}

onMounted(() => {
    setTimeout(() => {
        assinInitial()
    }, 1000);
})

admin.watchVideo((data) => {
    videoData.value = data
})

function generateIframe(src: string) {
    return `<iframe class="w-full h-full" src="${src}" :title="vdoToPlay.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}

function handleVideoPlay(index: number) {
    if (videoData.value.length > 0) {
        vdoToPlay.value = videoData.value[index]
    }
}
</script>

<style scoped></style>