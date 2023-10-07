<template>
    <div v-if="videosRef" class="relative">
        <AppContainer class="space-y-12">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8">
                <button type="button" v-for="(item, index) in activeVideos" :key="index" class="space-y-2"
                    @click="modalData = item">
                    <div class="relative">
                        <div class="absolute left-0 top-0 w-full h-full bg-white z-50 opacity-0"></div>
                        <div class="relative" v-if="item.googleDrive && item.googleDrive.includes('https://')">
                            <!-- <div class="hide-tooltip"></div> -->
                            <div class="w-full aspect-[16/9] relative rounded-xl bg-gradient-to-r from-gray-200 to-white overflow-hidden"
                                v-html="google_drive_iframe(item.googleDrive)">
                            </div>
                        </div>
                    </div>
                    <h4 class="text font-semibold text-start relative overflow-auto">{{ item.title }}</h4>
                </button>
            </div>
            <nav class="flex justify-center">
                <ul class="flex items-center -space-x-px h-10 text-base overflow-auto">
                    <li>
                        <button type="button" @click="() => { handlePageIndex(activePage - 1) }"
                            class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                            <span class="sr-only">Previous</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 1 1 5l4 4" />
                            </svg>
                        </button>
                    </li>
                    <li v-for="(item, index) in videosRef" :key="index">
                        <button type="button" @click="() => { handlePageIndex(index + 1) }" :class="[
                            'flex items-center justify-center px-4 h-10 leading-tight',
                            activePage === index + 1 ? 'text-orange-500 border border-orange-300 hover:bg-orange-100 hover:text-orange-700' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                        ]">
                            {{ index + 1 }}</button>
                    </li>
                    <li>
                        <button type="button" @click="() => { handlePageIndex(activePage + 1) }"
                            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                            <span class="sr-only">Next</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </AppContainer>
    </div>
    <Teleport to="body">
        <div v-if="modalData?.googleDrive"
            class="fixed left-0 top-0 w-full h-screen bg-black/30 z-[120] grid place-items-center">
            <div class="px-4 w-full max-w-7xl" ref="videoPlayer">
                <div class="relative w-full" v-if="modalData.googleDrive && modalData.googleDrive.includes('https://')">
                    <div class="hide-tooltip"></div>
                    <div class="w-full aspect-[16/9] relative rounded-xl bg-gradient-to-r from-gray-200 to-white overflow-hidden"
                        v-html="google_drive_iframe(modalData.googleDrive)">
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, Teleport } from 'vue';
import AppContainer from '../../components/layout/AppContainer.vue';
import { demoVideos } from '../../api/sanity';
import { google_drive_iframe } from '../../global/functions';
import { onClickOutside } from '@vueuse/core';

const videosRef = ref<any>();
const activeVideos = ref<any[]>([]);
const activePage = ref<number>(0);
const modalData = ref<any>();
const videoPlayer = ref<any>(null);

function splitArrayByLength(arr: any[], chunkSize: number) {
    let rslt = []
    for (let i = 0; i < arr.length; i = i + chunkSize) {
        rslt.push(arr.slice(i, i + chunkSize))
    }
    return rslt;
}

function handlePageIndex(index: number) {
    if (0 <= index && index <= videosRef.value.length) {
        if (index) {
            activePage.value = index
            activeVideos.value = videosRef.value[index - 1]
            window.scrollTo(0, 0)
        }
    }
}

onMounted(() => {
    demoVideos.get_videos(data => {
        if (data) {
            let splited = splitArrayByLength(data, 9);
            videosRef.value = splited;
            handlePageIndex(1);
        }
    })
})

onClickOutside(videoPlayer, () => {
    modalData.value = {}
})
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