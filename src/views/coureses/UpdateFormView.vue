<template>
    <AppContainer>
        <TitleBox>
            <Heading>Update Video Information</Heading>
        </TitleBox>
        <form class="mx-auto bg-white mt-6 px-4 py-4 rounded-lg grid grid-cols-1 md:grid-cols-2 max-w-4xl" @submit="handleSubmit">
        <h3 class="col-span-2 text-2xl font-semibold text-center mt-2 mb-3">Update Form</h3>
        <div class="w-full px-2 py-3">
            <label for="courseName" class="block mb-2 text-sm font-medium text-gray-900">Course Name</label>
            <select name="courseName" id="courseName" v-model="formData.courseName" required
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
                <option value="nuh">NUH</option>
                <option value="duac">DUAC</option>
            </select>
        </div>
        <div class="w-full px-2 py-3">
            <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Category</label>
            <select name="vdoStorage" id="vdoStorage" v-model="formData.category" required
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
            </select>
        </div>
        <div class="w-full px-2 py-3">
            <label for="vdoStorage" class="block mb-2 text-sm font-medium text-gray-900">Video Storage</label>
            <select name="vdoStorage" id="vdoStorage" v-model="formData.vdoStorage" required
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
                <option value="youtube">YouTube</option>
                <option value="vdoChiper">VdoChiper</option>
            </select>
        </div>
        <div v-if="formData.vdoStorage === 'youtube'" class="w-full px-2 py-3">
            <label for="vdoid" class="block mb-2 text-sm font-medium text-gray-900">Link</label>
            <input type="url" id="vdoid" v-model="formData.vdoChiperId" required
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
        </div>
        <div v-else class="w-full px-2 py-3">
            <label for="vdoid" class="block mb-2 text-sm font-medium text-gray-900">VdoChiperId</label>
            <input type="text" id="vdoid" v-model="formData.vdoChiperId" required
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
        </div>
        <div class="w-full px-2 py-3">
            <label for="lesson" class="block mb-2 text-sm font-medium text-gray-900">Lesson</label>
            <input type="number" id="lesson" v-model="formData.lesson" required
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
        </div>
        <div class="w-full px-2 py-3">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Title</label>
            <input type="text" id="title" v-model="formData.title" required
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
        </div>
        <div class="w-full px-2 py-3">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Price</label>
            <input type="number" id="title" v-model="formData.price" required
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
        </div>
        <div class="w-full px-2 py-3">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Discount Price</label>
            <input type="number" id="title" v-model="formData.discountPrice" required
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
        </div>
        <div class="px-2 py-3 md:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Description</label>
            <textarea id="message" rows="4" v-model="formData.description" required
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>
        <div class="col-span-2 p-2">
            <button type="submit"
                class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 text-center">Submit</button>
        </div>
    </form>
    </AppContainer>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import admin, { VideoDataWith_Id } from '../../components/firebase/admin';
import AppContainer from '../../components/layout/AppContainer.vue';
import TitleBox from '../../components/section/TitleBox.vue';
import Heading from '../../components/section/Heading.vue';
import Tag from '../../components/section/Tag.vue';
import { useRoute, useRouter } from 'vue-router';

const formData = reactive<VideoDataWith_Id>({
    _id: "",
    category: 0, // category = year
    lesson: -1,
    description: "",
    title: "",
    vdoChiperId: "",
    courseName: "",
    vdoStorage: "",
    price: 0,
    discountPrice:0
})

const route = useRoute()
const id = typeof route.params.id === 'string' ? route.params.id : route.params.id[0]
admin.watchSingleVideo(id, (data) => {
    formData._id = id
    formData.category = data.category
    formData.lesson = data.lesson
    formData.description = data.description
    formData.title = data.title
    formData.vdoChiperId = data.vdoChiperId
    formData.courseName = data.courseName
    formData.vdoStorage = data.vdoStorage
    formData.price = data.price
    formData.discountPrice = data.discountPrice
})

const router = useRouter()

function handleSubmit(e: any) {
    e.preventDefault();

    admin.updateVideo(formData, () => {
        router.push("/admin")
    })
}
</script>

<style scoped></style>