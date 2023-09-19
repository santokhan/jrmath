<template>
    <div class="relative overflow-x-auto p-4 md:px-12 md:pt-12 pb-60">
        <table v-if="userData.length > 0" class="w-full text-sm text-left text-gray-500 overflow-auto">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Phone
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        TransectionId
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Course Access
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in userData" :key="index" class="bg-white">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 overflow-auto whitespace-nowrap">
                        {{ item.name }}
                    </th>
                    <td class="px-6 py-4 overflow-auto whitespace-nowrap">
                        {{ item.email }}
                    </td>
                    <td class="px-6 py-4 overflow-auto whitespace-nowrap">
                        {{ item.phone }}
                    </td>
                    <td class="px-6 py-4 overflow-auto whitespace-nowrap">
                        {{ item.role }}
                    </td>
                    <td class="px-6 py-4 relative flex justify-start">
                        <AccessButton :courses="item.courseAccess" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { dataSchema } from './dummyData'
import admin from '../../../firebase/admin';
import AccessButton from '../../../access/Button.vue'

const userData = ref<any>([])

admin.readUserData((data) => {
    userData.value = data
})
</script>

