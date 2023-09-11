<template>
    <AppContainer v-if="vdoToPlay">
        <TitleBox>
            <Tag>Welcome to</Tag>
            <Heading>JRMath Courses</Heading>
        </TitleBox>

        <div class="mt-8" v-if="vdoToPlay.vdoStorage === 'youtube'">
            <div class="h-[260px] md:h-[650px] relative" v-html="iframe(vdoToPlay.vdoChiperId)"></div>
        </div>
        <div v-else class="">
            <div style="padding-top:56%;position:relative;">
                <iframe
                    src="https://player.vdocipher.com/v2/?otp=20160313versASE323k93MHDCMZ5r1irIIAfRRSwjMVV3TeSXVHPBcSp9BhSy1rn&playbackInfo=eyJ2aWRlb0lkIjoiNDU5NWI2ZWQxMjk4NDQzZTlkZDk3ZGVlN2U0MDdlNjYifQ=="
                    style="border:0;max-width:100%;position:absolute;top:0;left:0;height:100%;width:100%;"
                    allowFullScreen="true" allow="encrypted-media"></iframe>
            </div>
        </div>

        <div class="flex flex-wrap">
            <div class="w-full md:w-2/3">
                <h3 class="my-4 text-2xl font-semibold">{{ vdoToPlay.title }}</h3>
                <p>{{ vdoToPlay.description }}</p>
            </div>
            <div class="w-full md:w-1/3" v-if="videoData.length > 0">
                <div class="space-y-2 max-w-md bg-white rounded-lg border p-3 mt-8">
                    <h4 class="font-semibold mb-4">Lessons</h4>
                    <RouterLink type="button" v-for="(item, index) in videoData" :key="index"
                        @click="() => { handleVideoPlay(index) }"
                        class="block w-full hover:bg-gray-100 rounded-lg bg-gray-50"
                        :class="vdoToPlay._id === item._id ? 'bg-orange-500 text-white hover:text-gray-700' : ''"
                        :to="`/courses/${requirement.course}/${requirement.year}/${item._id}`">
                        <div class="h-12 flex items-center gap-2 p-2 font-medium">
                            <Play class="w-8 h-8" />{{ item.title }}
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </AppContainer>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import admin, { VideoDataWith_Id } from '../../components/firebase/admin';
import AppContainer from '../../components/layout/AppContainer.vue';
import Heading from '../../components/section/Heading.vue';
import Tag from '../../components/section/Tag.vue';
import TitleBox from '../../components/section/TitleBox.vue';
import { useRoute } from 'vue-router';
import Play from '../../components/icons/Play.vue'

const videoData = ref<VideoDataWith_Id[]>([])
const vdoToPlay = ref<VideoDataWith_Id | null>()
const route = useRoute()

const requirement = reactive({
    course: typeof route.params.course === 'string' ? route.params.course : route.params.course[0],
    year: typeof route.params.year === 'string' ? parseInt(route.params.year) : parseInt(route.params.year[0]),
})

function assinInitial() {
    if (videoData.value.length > 0) {
        if (route.params.id) {
            videoData.value.forEach(e => {
                if (e._id == route.params.id) {
                    vdoToPlay.value = e
                }
            })
        } else {
            vdoToPlay.value = videoData.value[0]
        }
    } else {
        vdoToPlay.value = null
    }
}

function assignVideoData(course: string, year: number) {
    admin.watchVideo((data: VideoDataWith_Id[]) => {
        if (data) {
            videoData.value = data.filter((e: VideoDataWith_Id) => {
                if (e.courseName === course) {
                    if (e.category == year) {
                        // console.log(e.courseName, course);
                        return true;
                    }
                }
            })
            assinInitial()
        }
    })
}
assignVideoData(requirement.course, requirement.year)

watch(() => route.params, () => {
    requirement.course = typeof route.params.course === 'string' ? route.params.course : route.params.course[0];
    requirement.year = typeof route.params.year === 'string' ? parseInt(route.params.year) : parseInt(route.params.year[0]);
    assignVideoData(requirement.course, requirement.year)
})

function iframe(src: string) {
    return `<iframe class="w-full h-full" src="${src}" :title="vdoToPlay.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
}

function handleVideoPlay(index: number) {
    if (videoData.value.length > 0) {
        vdoToPlay.value = videoData.value[index]
    }
}
</script>

<style scoped></style>