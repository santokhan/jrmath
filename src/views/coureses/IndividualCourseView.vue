<template>
    <NotFound v-if="!courseObject">Course not found on server</NotFound>
    <AppContainer v-else>
        <div class="flex flex-wrap">
            <CourseHeader :data="courseObject" :authorized="authorized"/>
            <Overview />
        </div>
        <CourseInstructions :iframeSrc="courseObject.coursePreview" />
        <PlayListWIthHeader :courseId="courseObject._id" :courseTitle="courseObject.title" :authorized="authorized"/>
        <WhatYouWillLearn :list="courseObject.whatYouWillLearn || []" />
    </AppContainer>
</template>

<script setup lang="ts">
/**
 * This component will take /:university/:year/:id to render individual course view
 * Render inividual course view by courseId
 * Show pricing details, show playlist
 */
import { reactive, ref, watch } from 'vue';
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
import { valid } from '../../global/functions';
import checkUserAccess from '../../components/courses/playlist/check-user-access';

const route = useRoute()
const { course, year, id } = route.params
const rq = reactive({
    course: valid(course),
    year: parseInt(valid(year))
})

// Course details object of individual course
const courseObject = ref<CourseType>()

// The id will comes from route.params.id
if (typeof id === 'string') {
    sanityAPI.getCourseById(id, (data) => {
        courseObject.value = data[0]
    })
}

// Check user access using user email and course title
// By default authorized will be false
const authorized = ref<boolean>(false)

async function checkAccess(courseTitle: string) {
    const access = await checkUserAccess(courseTitle)
    if (access) {
        authorized.value = true
    } else {
        authorized.value = false
    }
}

watch(() => courseObject.value, () => {
    if (courseObject.value) {
        checkAccess(courseObject.value.title)
    }
})
</script>
