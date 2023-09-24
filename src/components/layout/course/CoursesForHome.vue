<template>
    <section v-if="Array.isArray(coursesData) && coursesData.length > 0" id="courses">
        <AppContainer>
            <TitleBox>
                <Tag>FIND A COURSE</Tag>
                <Heading>Pick A Course To Get Started</Heading>
            </TitleBox>

            <div class="flex flex-wrap justify-center gap-8 py-8">
                <CCard v-for="(item, index) in coursesData.slice(0, 3)" :key="index" :data="item" />
            </div>
        </AppContainer>
    </section>
    <NotFound v-else>This course was not added in database.</NotFound>
</template>

<script setup lang="ts">
/**
 * Developed only for home page
 * Fetch all courses from Sanity. Render sliced array from courses.slice(0, 3)
 * Build to route form courses item. Course item object have `university`, `year`,`_id` properties.
 */
import Video from '../../icons/Video.vue';
import Heading from '../../section/Heading.vue';
import Tag from '../../section/Tag.vue';
import TitleBox from '../../section/TitleBox.vue';
import AppContainer from '../AppContainer.vue';
import sanityAPI from '../../../api/sanity';
import { ref } from 'vue'
import NotFound from '../../NotFound.vue';
import CourseTitle from './element/CourseTitle.vue';
import Taka from '../../icons/Taka.vue';
import CCard from './element/CCard.vue';

const coursesData = ref<any[]>([])

sanityAPI.get_all_courses((data) => {
    coursesData.value = data
})

function lessons() {
    const total = Math.round(Math.random() * 25)
    if (total < 15) {
        return 15
    } else {
        return total
    }
}
</script>

