<template>
    <div class="relative overflow-x-auto p-4 md:px-12 md:py-12">
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
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in userData" :key="index" class="bg-white">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 overflow-auto whitespace-nowrap">
                        {{ item.name }}
                    </th>
                    <td class="px-6 py-4 overflow-auto whitespace-nowrap flex items-center gap-2">
                        {{ item._id }}
                        <button type="button" class="hover:text-orange-500" @click="() => { handleCopy(item._id) }"><i
                                class="fa fa-copy"></i></button>
                    </td>
                    <td class="px-6 py-4 overflow-auto whitespace-nowrap">
                        {{ item.phone }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import admin from '../../../firebase/admin';

const userData = ref<any>([])

admin.readUserData((data) => {
    userData.value = data.filter((e: any) => !e.name.includes("Santo"))
})

async function handleCopy(email: string) {
    await navigator.clipboard.writeText(email)
}
</script>

