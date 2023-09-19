<template>
    <NotFound v-if="!courseObject">Course not found on server</NotFound>
    <AppContainer v-else>
        <div class="flex flex-wrap">
            <CourseHeader :data="courseObject" />
            <Overview />
        </div>
        <CourseInstructions :iframeSrc="courseObject.coursePreview" />
        <PlayListWIthHeader :courseId="courseObject._id" />
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
import NotFound from '../../components/NotFound.vue';

const route = useRoute()
const { id } = route.params
const requirement = reactive({
    course: typeof route.params.course === 'string' ? route.params.course : "",
    year: typeof route.params.year === 'string' ? parseInt(route.params.year) : parseInt(route.params.year[0]),
})

// Course details object of individual course
const courseObject = ref<CourseType>()

// The id will comes from route.params.id
if (typeof id === 'string') {
    sanityAPI.getCourseById(id, (data) => {
        courseObject.value = data[0]
    })
}
</script>
