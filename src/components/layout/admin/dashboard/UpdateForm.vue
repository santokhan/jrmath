<template>
    <form 
        class="bg-white mt-6 px-4 py-4 rounded-lg grid grid-cols-1 md:grid-cols-2 max-w-4xl relative"
        @submit="">
        <div class="absolute top-4 right-4"><button @click="props.hideUpdateForm" type="button"
                class="w-8 h-8 rounded-lg hover:bg-gray-100 focus:bg-orange-500 focus:text-white"><i
                    class="fa fa-plus rotate-45"></i></button></div>
        <h3 class="col-span-2 text-2xl font-semibold text-center mt-2 mb-3">Video Update Form</h3>
        <div class="w-full px-2 py-3">
            <label for="vdoid" class="block mb-2 text-sm font-medium text-gray-900">Video Id</label>
            <input type="text" id="vdoid" v-model="formData.vdoChiperId"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                placeholder="" required>
        </div>
        <div class="w-full px-2 py-3">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Title</label>
            <input type="text" id="title" v-model="formData.title"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                required>
        </div>
        <div class="w-full px-2 py-3">
            <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Category</label>
            <input type="text" id="category" v-model="formData.category"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                required>
        </div>
        <div class="w-full px-2 py-3">
            <label for="courseName" class="block mb-2 text-sm font-medium text-gray-900">Course Name</label>
            <select name="courseName" id="courseName" v-model="formData.courseName" required
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
                <option value="nuh">NUH</option>
                <option value="duac">DUAC</option>
            </select>
        </div>
        <div class="w-full px-2 py-3">
            <label for="lesson" class="block mb-2 text-sm font-medium text-gray-900">Lesson</label>
            <input type="number" id="lesson" v-model="formData.lesson"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                required>
            <div class="col-span-2 pt-6">
                <button type="submit"
                    class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 text-center">Update
                    Data</button>
            </div>
        </div>
        <div class="px-2 py-3">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Description</label>
            <textarea id="message" rows="4" v-model="formData.description" required
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>
    </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import admin, { type VideoData } from '../../../firebase/admin';
import { useUpdateFormStore } from '../../../../store/updateForm';

const updateStore = useUpdateFormStore()

const props = defineProps<{ renderVideoData: () => void, hideUpdateForm: () => void }>()

const formData = reactive<VideoData>({
    _id: "",
    category: "",
    lesson: -1,
    description: "",
    title: "",
    vdoChiperId: "",
    courseName: "",
})

formData._id = updateStore.vdoData._id
formData.category = updateStore.vdoData.category
formData.lesson = updateStore.vdoData.lesson
formData.description = updateStore.vdoData.description
formData.title = updateStore.vdoData.title
formData.vdoChiperId = updateStore.vdoData.vdoChiperId
formData.courseName = updateStore.vdoData.courseName
</script>

<style scoped></style>