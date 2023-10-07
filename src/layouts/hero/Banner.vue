<template>
    <div class="w-full grid grid-cols-2 lg:grid-cols-4 place-items-center divide-x">
        <div class="w-full h-full text-center text-white py-5">
            <h2 class="text-2xl lg:text-3xl font-semibold">{{ studentsRef || 0 }}</h2>
            <p class="text-sm">Students</p>
        </div>
        <div class="w-full h-full text-center text-white py-5">
            <h2 class="text-2xl lg:text-3xl font-semibold">{{ mentorsRef || 0 }}</h2>
            <p class="text-sm">Mentors</p>
        </div>
        <div class="w-full h-full text-center text-white py-5 border-t lg:border-0">
            <h2 class="text-2xl lg:text-3xl font-semibold">{{ courseRef || 0 }}</h2>
            <p class="text-sm">Courses</p>
        </div>
        <div class="w-full h-full text-center text-white py-5 border-t lg:border-0">
            <h2 class="text-2xl lg:text-3xl font-semibold">{{ videosRef || 0 }}</h2>
            <p class="text-sm">Videos</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import sanityAPI from '../../api/sanity';
const studentsRef = ref();
const mentorsRef = ref(2);
const courseRef = ref();
const videosRef = ref();

sanityAPI.totalUser(data => {
    if (data) {
        studentsRef.value = data.length
    }
})

sanityAPI.getVideos(data => {
    if (data) {
        videosRef.value = data.result.length
    }
})

sanityAPI.get_all_courses(data => {
    if (data) {
        courseRef.value = data.length
    }
})
</script>

<style scoped></style>