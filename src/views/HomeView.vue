<template>
    <Hero />
    <div class="py-8 md:py-16"></div>
    <CoursesForHome />
    <Mentors />
    <Blog />
    <CourseBuilder />
    <FAQs />
    <Ads />
</template>

<script setup lang="ts">
import Hero from '../layouts/hero/Hero.vue';
import Mentors from '../components/layout/mentors/Mentors.vue';
import Blog from '../components/layout/blog/Blog.vue';
import CourseBuilder from '../components/layout/course-builder/CourseBuilder.vue';
import FAQs from '../components/layout/faqs/FAQs.vue';
import CoursesForHome from '../components/layout/course/CoursesForHome.vue';
import Ads from '../components/modal/Ads.vue';
</script>

