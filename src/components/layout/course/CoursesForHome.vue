<template>
    <section v-if="Array.isArray(coursesData) && coursesData.length > 0">
        <AppContainer>
            <TitleBox>
                <Tag>FIND A COURSE</Tag>
                <Heading>Pick A Course To Get Started</Heading>
            </TitleBox>

            <div class="flex flex-wrap justify-center gap-8 py-8">
                <div v-for="(item, index) in coursesData.slice(0, 3)" :key="index"
                    class="max-w-[22rem] space-y-4 bg-white rounded-xl overflow-hidden relative" title="card">
                    <div class="">
                        <div class="">
                            <img src="/images/courses/1.png" alt="c" class="h-60 w-full object-cover bg-white">
                        </div>
                        <div class="relative px-4 py-4 space-y-3">
                            <div
                                class="bg-orange-500 text-white h-16 w-16 rounded-full font-bold absolute right-4 -top-6 text-xl border-2 border-white flex flex-col justify-center items-center text-[1.125rem] leading-none text-center">
                                <div class="">BDT</div>
                                <div class="">{{ item.price }}</div>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="bg-orange-500 text-white px-1.5 rounded font-medium text-sm">
                                    <div class="text-white flex items-center gap-1">
                                        <span class="block w-2 h-2 bg-white rounded-full"></span>
                                        {{ item.tag || 'Math' }}
                                    </div>
                                </div>
                                <!-- <div class="course-reiew">
                                    <span class="text-gray-700">{{ item.reviews }} reviews</span>
                                </div> -->
                            </div>
                            <CourseTitle :title="item.title" />
                            <div class="flex justify-between items-center py-2">
                                <div class="flex items-center gap-1">
                                    <Video /> 18x Lesson
                                </div>
                                <div class="course-btn">
                                    <RouterLink :to="`/courses/${item.university}/${item.year}/${item._id}`"
                                        class="text-white bg-orange-500 font-medium rounded-lg px-4 py-2 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none">
                                        Get started</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

const coursesData = ref<any[]>([])

sanityAPI.get_all_courses((data) => {
    coursesData.value = data
})
</script>

<style scoped></style>