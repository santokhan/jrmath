<template>
    <div class="relative overflow-x-auto p-4 md:px-12 md:py-12">
        <table v-if="userData.length > 0" class="w-full text-sm text-left text-gray-500 overflow-auto">
            <thead class="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        <div class="w-full flex justify-between items-center">
                            Name
                            <SortB @click="() => { userData = sort_by_name(userData, 'name') }" />
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        <div class="w-full flex justify-between items-center">
                            Email
                            <SortB @click="() => { userData = sort_by_id(userData, '_id') }" />
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Phone
                    </th>
                    <th scope="col" class="px-6 py-3 whitespace-nowrap">
                        Actions
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
                    <td class="px-6 py-4 overflow-auto whitespace-nowrap">
                        <Delete @click="() => { }" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, watch, onBeforeMount } from 'vue';
import admin from '../../../firebase/admin';
import Delete from '../../../dashboard/video/Delete.vue';
import SortB from '../../../buttons/SortB.vue';

const userData = ref<any[]>([])

onBeforeMount(async () => {
    admin.readUserData((data) => {
        userData.value = data.filter((e: any) => !e.name.includes("Santo"))
    })
})
async function handleCopy(email: string) {
    await navigator.clipboard.writeText(email)
}

type Order = 'ascending' | 'descending'
type Property = 'name' | '_id'

// can be sort only `name` & (`_id` means email)
function sorting() {
    let order: Order = 'ascending'

    return (list: any[], property: Property) => {
        function sort_algo(a: any, b: any) {
            const x = a[property].trim().toLowerCase()
            const y = b[property].trim().toLowerCase()

            if (x > y) {
                return 1
            } else if (x < y) {
                return -1
            } else {
                return 0
            }
        }
        function reverse_algo(a: any, b: any) {
            const x = a[property].trim().toLowerCase()
            const y = b[property].trim().toLowerCase()

            if (x < y) {
                return 1
            } else if (x > y) {
                return -1
            } else {
                return 0
            }
        }

        if (order === "ascending") {
            order = "descending"
            return list.sort(sort_algo)
        } else {
            order = "ascending"
            return list.sort(reverse_algo)
        }
    }
}

const sort_by_name = sorting()
const sort_by_id = sorting()

watch(userData, () => {
    userData.value = sorting()(userData.value, 'name')
})
</script>

