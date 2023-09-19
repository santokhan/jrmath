<template>
    <div v-if="!courseObject" class="text-center h-20">Loading...</div>
    <AppContainer v-else>
        <div class="flex flex-wrap">
            <CourseHeader :data="courseObject" />
            <Overview />
        </div>
        <CourseInstructions :iframeSrc="courseObject.coursePreview" />
        <PlayListWIthHeader :videoData="[]" :courseId="courseObject._id" />
        <WhatYouWillLearn :list="courseObject.whatYouWillLearn || []" />
    </AppContainer>
</template>

<script setup lang="ts">
/**
 * This component will take /:university/:year/:id to render individual course view
 * Render inividual course view by courseId
 * Show pricing details, show playlist
 */
import { reactive, ref } from 'vue';
import AppContainer from '../../components/layout/AppContainer.vue';
import { useRoute } from 'vue-router';
import Overview from '../../components/courses/common/Overview.vue'
import CourseHeader from '../../components/courses/common/CourseHeader.vue'
import CourseInstructions from '../../components/courses/common/CourseInstructions.vue'
import WhatYouWillLearn from '../../components/courses/common/WhatYouWillLearn.vue'
import sanityAPI from '../../api/sanity';
import PlayListWIthHeader from '../../components/courses/playlist/PlayListWIthHeader.vue';
import { type CourseType } from '../../components/courses/types.course'

const route = useRoute()
const requirement = reactive({
    course: typeof route.params.course === 'string' ? route.params.course : "",
    year: typeof route.params.year === 'string' ? parseInt(route.params.year) : parseInt(route.params.year[0]),
})

// watch(() => route.params, () => {
//     requirement.course = typeof route.params.course === 'string' ? route.params.course : "";
//     requirement.year = typeof route.params.year === 'string' ? parseInt(route.params.year) : 0;
//     // assignVideoData(requirement.course, requirement.year)
// })


// Main course data object
const courseObject = ref<CourseType>()

// id will comes from api parameter
sanityAPI.getCourseById(1, (data) => {
    courseObject.value = data[0]
})
</script>
