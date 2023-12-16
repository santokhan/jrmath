<template>
    <section v-if="coursesData.length" class="prose mt-8">
        <TitleBox>
            <Heading class="text-start">Purchased courses</Heading>
        </TitleBox>
        <hr>
        <div class="flex flex-wrap gap-8 mt-4">
            <CCard v-for="(item, index) in coursesData" :key="index" :data="item" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CCard from '../../components/layout/course/element/CCard.vue';
import sanityAPI from '../../api/sanity.ts';
import TitleBox from '../../components/section/TitleBox.vue';
import Heading from '../../components/section/Heading.vue';

type Props = { email: string }
const props = defineProps<Props>();
const coursesAccess = ref<any[]>([]);
const coursesData = ref<any[]>([]);

onMounted(async () => {
    if (props.email) {
        const purchased = await sanityAPI.getCourseAccessByEmail(props.email);
        if (!purchased) return;
        coursesAccess.value = purchased;
        // console.log(purchased);
        purchased.forEach(async (e: any) => {
            const course = await sanityAPI.getCourseByTitle(e.university, e.year, e.courseTitle);
            // console.log(course[0]);
            coursesData.value.push(course[0]);
        })
    }
})
</script>
