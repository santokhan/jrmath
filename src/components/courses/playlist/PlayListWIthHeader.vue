<template>
    <div v-if="videoData.length > 0" class="grid grid-cols-1 gap-8 mt-16">
        <div class="md:mx-4">
            <div class="grid place-items-center w-12 h-12 rounded-full my-3 bg-green-100">
                <div class="text-green-700"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                        stroke-linecap="round" stroke-linejoin="round" height="25" width="25"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
                        <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
                        <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
                        <path d="M11 6l9 0"></path>
                        <path d="M11 12l9 0"></path>
                        <path d="M11 18l9 0"></path>
                    </svg></div>
            </div><span class="text-green-700  mb-3 inline-block font-medium md:font-semibold">A perfectly structured
                course</span>
            <h2 class="text-3xl">Course Content <span class="text-green-700">Purchase to get Started</span></h2>
            <p class="">{{ videoData.length }} Lessons</p>
            <div class="max-w-3xl space-y-2 bg-white p-4 mt-6 rounded-lg">
                <template v-for="item in videoData">
                    <PlayListItem v-if="authorized" :title="item.title" :to="to(route.params, item._id)" :active="false" />
                    <PlayListItemDisabled v-else :title="item.title" />
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
/** Command
 * 1. This component will read videos from Sanity database by using current `courseId` ✅
 * 2. This component will render video playlist ✅
 * 3. Only Authorized user will be able to click video button. Otherwise freeze ✅
 * 4. On click video item it will redirect to video page ✅
 */
import { ref } from "vue";
import { useRoute } from 'vue-router';
import PlayListItem from './PlayListItem.vue';
import PlayListItemDisabled from './PlayListItemDisabled.vue';
import sanityAPI from "../../../api/sanity";
import { to } from "./playlist-helper";

const videoData = ref<any[]>([])

const route = useRoute()
const props = defineProps<{ courseId: string }>()

// Make API requset with `courseId` to get videos for this course
sanityAPI.getVideos(data => {
    videoData.value = data.result
})

const authorized = ref<boolean>(true)
</script>

<style scoped></style>