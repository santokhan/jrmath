<template>
    <div class="relative overflow-x-auto p-4 md:px-12 md:pt-12 pb-28">
        <div class="mb-4">
            <Add />
        </div>
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Video Chiper Id*
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Title
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Description
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Course Name
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in videoSchema.filter(e => e.vdoId)" :key="index" class="bg-white">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 overflow-auto whitespace-nowrap">
                        {{ item.vdoId }}
                    </th>
                    <td class="px-6 py-4 overflow-auto whitespace-nowrap overflow-ellipsis">
                        {{ item.title }}
                    </td>
                    <td class="px-6 py-4 overflow-auto whitespace-nowrap">
                        {{ item.desc }}
                    </td>
                    <td class="px-6 py-4 overflow-auto whitespace-nowrap">
                        {{ item.courseName }}
                    </td>
                    <td class="px-6 py-4 relative flex gap-2 items-center">
                        <Edit />
                        <Delete />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import Add from '../../../dashboard/video/Add.vue';
import Delete from '../../../dashboard/video/Delete.vue';
import Edit from '../../../dashboard/video/Edit.vue';
import { videoSchema } from './dummyData'
</script>

<style scoped></style>