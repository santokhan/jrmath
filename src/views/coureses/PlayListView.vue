<template>
    <AppContainer v-if="vdoToPlay">
        <div class="mt-8 relative" v-if="vdoToPlay.googleDrive?.includes('https://')">
            <div class="hide-tooltip"></div>
            <div class="w-full aspect-[16/9] relative" v-html="iframe(vdoToPlay.googleDrive)"></div>
        </div>
        <div v-if="vdoToPlay.vdeoChiperId" class="w-full">
            <iframe v-if="otp.otp" :src="`https://player.vdocipher.com/v2/?otp=${otp.otp}&playbackInfo=${otp.playbackInfo}`"
                class="w-full aspect-[16/9] relative" allow="encrypted-media" allowfullscreen></iframe>
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
                    <div class="space-y-2">
                        <PlayListItem v-for="(item, index) in videoData" :key="index" :title="item.title"
                            :to="to(requirement, item._id)" :active="vdoToPlay._id === item._id" />
                    </div>
                </div>
            </div>
        </div>
    </AppContainer>
</template>

<script setup lang="ts">
// visit http://localhost:5173/#/playlist/nuh/1/89c4e26b-413f-42d3-b46f-13990edb4637/a7c1201a-6368-4c61-bc20-9e5344818140
// Route must have /:courseId & /:videoId
import { reactive, ref, watch, onMounted } from 'vue';
import AppContainer from '../../components/layout/AppContainer.vue';
import { useRoute } from 'vue-router';
import Share from '../../components/buttons/Share.vue';
import sanityAPI from '../../api/sanity';
import PlayListItem from '../../components/courses/playlist/PlayListItem.vue';
import { type OTP, type VideoData } from '../../components/courses/types.course'

const videoData = ref<VideoData[]>([])
const vdoToPlay = ref<VideoData>()
const route = useRoute()
const otp = reactive<OTP>({ otp: "", playbackInfo: "" })

const requirement = reactive({
    course: typeof route.params.course === 'string' && route.params.course,
    year: typeof route.params.year === 'string' && parseInt(route.params.year),
    courseId: typeof route.params.courseId === 'string' && route.params.courseId,
    videoId: typeof route.params.videoId === 'string' && route.params.videoId,
})

function setActiveVideo(videoData: any[]) {
    if (videoData.length > 0) {
        if (route.params.videoId) {
            videoData.forEach((e: any) => {
                if (e._id == route.params.videoId) {
                    vdoToPlay.value = e
                }
            })
        }
    }
}

function assignVideoData() {
    if (!requirement.course && !requirement.year && !requirement.courseId && !requirement.videoId) return;

    sanityAPI.getVideos(data => {
        videoData.value = data.result
        setActiveVideo(videoData.value)
    })
} assignVideoData()

watch(() => route.params, () => {
    const { course, year, courseId, videoId } = route.params
    requirement.course = typeof course === 'string' && course;
    requirement.year = typeof year === 'string' && parseInt(year);
    requirement.courseId = typeof courseId === 'string' && courseId
    requirement.videoId = typeof videoId === 'string' && videoId
    assignVideoData()
})

function iframe(src: string) {
    // https://drive.google.com/file/d/1y-Tf7UFKiW8UVsSODscReupJrR_XrgXG/view?usp=drive_link
    // https://drive.google.com/file/d/1y-Tf7UFKiW8UVsSODscReupJrR_XrgXG/preview
    if (src.includes("view?usp=drive_link")) {
        src = src.replace("view?usp=drive_link", "preview");
    }

    return `<iframe src="${src}" class="w-full aspect-[16/9] relative]" allow="autoplay"></iframe>`;
}

async function otpPlayBackInfo(vdoChiperId: string) {
    // https://jrmath.goxupport.com/?vdoChiperId=4595b6ed1298443e9dd97dee7e407e66 
    // http://localhost/jrmath/?vdoChiperId=4595b6ed1298443e9dd97dee7e407e66
    const url = `https://jrmath.goxupport.com/?vdoChiperId=${vdoChiperId}`
    await fetch(url).then(res => res.json()).then((data) => {
        // console.log(data)
        otp.otp = data.otp
        otp.playbackInfo = data.playbackInfo
    }).catch(err => { console.log(err) })
}

watch(vdoToPlay, () => {
    if (vdoToPlay.value?.vdeoChiperId) {
        otpPlayBackInfo(vdoToPlay.value.vdeoChiperId)
    }
})

function to(params: any, videoId: string) {
    return `/playlist/${params.course}/${params.year}/${params.courseId}/${videoId}`
}
</script>

<style scoped>
.hide-tooltip {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 40px;
    min-width: 40px;
    max-width: 40px;
    height: 40px;
    min-height: 40px;
    max-height: 40px;
    background-color: rgb(255, 255, 255);
    z-index: 120;
}
</style>