<template>
    <div v-if="props.videoData.length > 0" class="w-full space-y-2 max-w-md bg-white rounded-lg border p-3 mt-8">
        <h4 class="font-semibold mb-4">Lessons</h4>
        <RouterLink type="button" v-for="(item, index) in props.videoData" :key="index"
            class="block w-full hover:bg-orange-100 rounded-lg bg-gray-50" :to="`${route.fullPath}${item._id}`">
            <div class="h-12 flex items-center gap-2 p-2 font-medium">
                <Play class="w-8 h-8" />{{ item.title }}
            </div>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
// visit http://localhost:5173/#/playlist/nuh/1/89c4e26b-413f-42d3-b46f-13990edb4637/a7c1201a-6368-4c61-bc20-9e5344818140
import { useRoute } from 'vue-router';
import Play from '../../icons/Play.vue';

interface VideoData {
    university: string,
    vdeoChiperId: string | undefined,
    googleDrive: string | undefined,
    _rev: string,
    lecture: number,
    chapter: number,
    year: number,
    title: string,
    description: string,
    _id: string
}

const route = useRoute()

const props = defineProps<{ videoData: VideoData[] }>()
</script>

