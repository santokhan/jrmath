<template>
    <section v-if="coursesData.length" class="prose mt-8">
        <TitleBox>
            <Heading class="text-start">Free courses</Heading>
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

const coursesData = ref<any[]>([]);

onMounted(async () => {
    coursesData.value = await sanityAPI.getAllFreeCourses();
})
</script>
