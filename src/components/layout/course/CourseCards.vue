<template>
    <section v-if="Array.isArray(coursesData) && coursesData.length > 0">
        <AppContainer>
            <TitleBox>
                <Tag>FIND A COURSE</Tag>
                <Heading>Pick A Course To Get Started</Heading>
            </TitleBox>

            <div class="flex flex-wrap justify-center gap-8 py-8">
                <CCard v-for="(item, index) in coursesData" :key="index" :data="item" />
            </div>
        </AppContainer>
    </section>
    <NotFound v-else>This course was not added in database.</NotFound>
</template>

<script setup lang="ts">
/**
 * Developed for courses page 
 * Not for home page
 */
import { useRoute } from 'vue-router';
import Heading from '../../section/Heading.vue';
import Tag from '../../section/Tag.vue';
import TitleBox from '../../section/TitleBox.vue';
import AppContainer from '../AppContainer.vue';
import sanityAPI from '../../../api/sanity';
import { ref, watch, reactive } from 'vue'
import NotFound from '../../NotFound.vue';
import { valid } from '../../../global/functions'
import CCard from './element/CCard.vue';

const coursesData = ref<any[]>([])

const route = useRoute()
const { course, year } = route.params
const params = reactive<{ course: string, year: string }>({
    course: valid(course),
    year: valid(year)
})

/**
 * To make this function re-useable pass `university` and `year` as parameter with type string
 * Invoke it initially
 * Call again inside watcher when `route.params` change
 * 
 * @param course 
 * @param year 
 */
function readCourseData(course: string, year: string) {
    if (course && year) {
        sanityAPI.getCourses(course, parseInt(year), (data) => {
            coursesData.value = data
        })
    }
}
readCourseData(params.course, params.year)

watch(() => route.params, () => {
    const { course, year } = route.params
    if (typeof course === 'string' && typeof year === 'string') {
        params.course = course
        params.year = year

        readCourseData(params.course, params.year)
    }
})
</script>

