<template>
    <AppContainer v-if="vdoToPlay">
        <div class="mt-8" v-if="vdoToPlay.vdoStorage === 'google-drive'">
            <div class="w-full h-[260px] md:h-[650px] relative" v-html="iframe(vdoToPlay.vdoChiperId)"></div>
        </div>
        <div v-if="vdoToPlay.vdoStorage === 'vdoChiper'" class="w-full">
            <iframe v-if="otp.otp" :src="`https://player.vdocipher.com/v2/?otp=${otp.otp}&playbackInfo=${otp.playbackInfo}`"
                class="w-full h-[260px] md:h-[650px] relative" allow="encrypted-media" allowfullscreen></iframe>
        </div>

        <div class=" flex flex-wrap">
            <div class="w-full md:w-2/3 mt-4">
                <div class="flex items-center gap-8 justify-between">
                    <h3 class="my-4 text-2xl font-semibold">{{ vdoToPlay.title }}</h3>
                    <Share />
                </div>
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
import { useRoute } from 'vue-router';
import Play from '../../components/icons/Play.vue'
import Share from '../../components/buttons/Share.vue';

interface OTP { otp: string, playbackInfo: string }

const videoData = ref<VideoDataWith_Id[]>([])
const vdoToPlay = ref<VideoDataWith_Id | null>()
const route = useRoute()
const otp = reactive<OTP>({ otp: "", playbackInfo: "" })

const requirement = reactive({
    course: typeof route.params.course === 'string' ? route.params.course : "",
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
    requirement.course = typeof route.params.course === 'string' ? route.params.course : "";
    requirement.year = typeof route.params.year === 'string' ? parseInt(route.params.year) : 0;
    assignVideoData(requirement.course, requirement.year)
})

function iframe(src: string) {
    return `<iframe src="${src}" class="w-full h-[260px] md:h-[650px] relative]" allow="autoplay" onload="()=> {document.querySelector("[aria-label='Pop out']").style.display = 'none'}"></iframe>`
}

function handleVideoPlay(index: number) {
    if (videoData.value.length > 0) {
        vdoToPlay.value = videoData.value[index]
    }
}

async function otpPlayBackInfo(vdoChiperId: string) {
    // https://jrmath.goxupport.com/?vdoChiperId=4595b6ed1298443e9dd97dee7e407e66 
    // http://localhost/jrmath/?vdoChiperId=4595b6ed1298443e9dd97dee7e407e66
    const url = `${import.meta.env.VDO_CHIPER_API}?vdoChiperId=${vdoChiperId}`
    await fetch(url).then(res => res.json()).then((data) => {
        // console.log(data)
        otp.otp = data.otp
        otp.playbackInfo = data.playbackInfo
    }).catch(err => { console.log(err) })
}

watch(vdoToPlay, () => {
    if (vdoToPlay.value) {
        otpPlayBackInfo(vdoToPlay.value.vdoChiperId)
    }
})
</script>

<style scoped>
[aria-label="Pop out"],
[aria-tooltip="Pop out"] {
    display: none;
}
</style>