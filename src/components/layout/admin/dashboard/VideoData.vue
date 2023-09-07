<template>
    <div class="relative overflow-x-auto p-4 md:px-12 md:pt-12 pb-28">
        <div class="mb-6">
            <Add @click="addForm = !addForm" />
            <AddVideoForm v-if="addForm" :renderVideoData="renderVideoData" />
            <UpdateForm :data="vdoData" :renderVideoData="renderVideoData" :hideUpdateForm="hideUpdateForm"/>
        </div>
        <table v-if="videoData" class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="w-4 px-6 py-3 whitespace-nowrap">
                        SL
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Video Chiper Id*
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Title
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Lesson
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Description
                    </th>
                    <th scope="col" class="w-20 px-6 py-3 whitespace-nowrap">
                        Course Name
                    </th>
                    <th scope="col" class="w-20 px-6 py-3 whitespace-nowrap">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in videoData" :key="index" class="bg-white">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 overflow-auto whitespace-nowrap">
                        {{ index + 1 }}
                    </td>
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 overflow-auto whitespace-nowrap">
                        {{ item.vdoChiperId }}
                    </td>
                    <td class="px-6 py-4 overflow-auto whitespace-nowrap overflow-ellipsis">
                        {{ item.title }}
                    </td>
                    <td class="px-6 py-4 overflow-auto whitespace-nowrap">
                        {{ item.lesson }}
                    </td>
                    <td class="px-6 py-4 overflow-auto whitespace-nowrap">
                        {{ item.description }}
                    </td>
                    <td class="px-6 py-4 overflow-auto whitespace-nowrap">
                        {{ item.courseName }}
                    </td>
                    <td class="px-6 py-4 relative flex gap-2 items-center">
                        <Edit @click="() => { vdoData = item }" />
                        <Delete @click="() => {
                            admin.deleteVideo(item._id);
                            renderVideoData()
                        }" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Add from '../../../dashboard/video/Add.vue';
import Delete from '../../../dashboard/video/Delete.vue';
import Edit from '../../../dashboard/video/Edit.vue';
import admin, { VideoData } from '../../../firebase/admin';
import { videoSchema } from './dummyData'
import AddVideoForm from './AddVideoForm.vue'
import UpdateForm from './UpdateForm.vue';

const videoData = ref<any>([])

function renderVideoData() {
    admin.watchVideo((data) => {
        videoData.value = data
    })
}
renderVideoData()

const addForm = ref(false)

const vdoData = ref<VideoData>({
    _id: "",
    category: "",
    lesson: -1,
    description: "",
    title: "",
    vdoChiperId: "",
    courseName: "",
})

function hideUpdateForm() {
    vdoData.value._id = ""
}
</script>

<style scoped></style>