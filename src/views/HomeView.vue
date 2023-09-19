<template>
    <Hero />
    <div class="py-8 md:py-16"></div>
    <CourseCards />
    <CourseBuilder />
    <Mentors />
    <Blog />
    <FAQs />
</template>

<script setup lang="ts">
import Hero from '../layouts/hero/Hero.vue';
import Mentors from '../components/layout/mentors/Mentors.vue';
import Blog from '../components/layout/blog/Blog.vue';
import CourseBuilder from '../components/layout/course-builder/CourseBuilder.vue';
import FAQs from '../components/layout/faqs/FAQs.vue';
import CourseCards from '../components/layout/course/CourseCards.vue';
</script>

<style scoped></style>