<template>
    <div class="relative p-4 md:px-8 md:pt-8 pb-28">
        <div class="mb-6">
            <Add @click="addForm = !addForm" />
            <AddVideoForm v-if="addForm" :renderVideoData="renderVideoData" :hideForm="() => { addForm = false }" />
        </div>
        <table v-if="videoData" class="w-full text-sm text-left text-gray-500 overflow-auto">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="w-4 px-4 py-3 whitespace-nowrap">
                        SL
                    </th>
                    <th scope="col" class="px-4 py-3 whitespace-nowrap">
                        Video Chiper Id*
                    </th>
                    <th scope="col" class="px-4 py-3 whitespace-nowrap">
                        Title
                    </th>
                    <th scope="col" class="px-4 py-3 whitespace-nowrap">
                        Lesson
                    </th>
                    <th scope="col" class="px-4 py-3 whitespace-nowrap">
                        Description
                    </th>
                    <th scope="col" class="w-20 px-4 py-3 whitespace-nowrap">
                        Course Name
                    </th>
                    <th scope="col" class="w-20 px-4 py-3 whitespace-nowrap">
                        Video Storage
                    </th>
                    <th scope="col" class="w-20 px-4 py-3 whitespace-nowrap">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in videoData" :key="index" class="bg-white">
                    <td scope="row" class="px-4 py-4 font-medium text-gray-900 overflow-auto whitespace-nowrap">
                        {{ index + 1 }}
                    </td>
                    <td scope="row" class="px-4 py-4 overflow-hidden whitespace-nowrap max-w-[10rem] overflow-ellipsis"
                        :title="item.vdoChiperId">
                        {{ item.vdoChiperId }}
                    </td>
                    <td class="px-4 py-4 overflow-hidden whitespace-nowrap max-w-[10rem] overflow-ellipsis">
                        {{ item.title }}
                    </td>
                    <td class="px-4 py-4 overflow-auto whitespace-nowrap">
                        {{ item.lesson }}
                    </td>
                    <td class="px-4 py-4 overflow-hidden whitespace-nowrap max-w-[10rem] overflow-ellipsis">
                        {{ item.description }}
                    </td>
                    <td class="px-4 py-4 overflow-auto whitespace-nowrap">
                        {{ item.courseName }}
                    </td>
                    <td class="px-4 py-4 overflow-auto whitespace-nowrap">
                        {{ item.vdoStorage }}
                    </td>
                    <td class="px-4 py-4 relative flex gap-2 items-center">
                        <Edit :to="`/update-video/${item._id}`" />
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
import AddVideoForm from './AddVideoForm.vue'

const videoData = ref<any[]>([])

function renderVideoData() {
    admin.watchVideo((data) => {
        videoData.value = data
    })
}
renderVideoData()

const addForm = ref(false)
// const updateStore = useUpdateFormStore()
// function hideUpdateForm() {
//     // set empty
//     updateStore.handleVdoData({
//         _id: "",
//         category: "",
//         lesson: -1,
//         description: "",
//         title: "",
//         vdoChiperId: "",
//         courseName: "",
//         vdoStorage: ""
//     })
// }
</script>

