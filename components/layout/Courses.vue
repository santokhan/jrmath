<template>
    <section class="">
        <LayoutAppContainer>
            <SectionTitleBox>
                <SectionTag>FIND A COURSE</SectionTag>
                <SectionHeading>
                    Pick A Course To Get Started
                </SectionHeading>
            </SectionTitleBox>

            <div class="flex flex-wrap justify-center gap-8 py-8">
                <div v-for="(item, index) in courses" :key="index"
                    class="max-w-[22rem] space-y-4 bg-white rounded-xl overflow-hidden relative" title="card">
                    <div class="">
                        <div class="">
                            <img :src="item.src" alt="c" class="h-60 w-full object-cover bg-white">
                        </div>
                        <div class="relative px-4 py-4 space-y-3">
                            <div
                                class="bg-orange-500 text-white h-14 w-14 rounded-full flex items-center justify-center font-bold absolute right-4 -top-6 text-xl border-2 border-white">
                                ${{ item.price }}</div>
                            <div class="flex items-center gap-2">
                                <div class="bg-orange-500 text-white px-2 py-0.5 rounded font-medium text-sm">
                                    <div class="text-white flex items-center gap-1">
                                        <span class="block w-2 h-2 bg-white rounded-full"></span>
                                        {{ item.tag }}
                                    </div>
                                </div>
                                <div class="course-reiew">
                                    <span class="ratting">
                                        <i class="icofont-ui-rating"></i>
                                        <i class="icofont-ui-rating"></i>
                                        <i class="icofont-ui-rating"></i>
                                        <i class="icofont-ui-rating"></i>
                                        <i class="icofont-ui-rating"></i>
                                    </span>
                                    <span class="text-gray-700">{{ item.reviews }} reviews</span>
                                </div>
                            </div>
                            <h4 class="text-xl font-semibold">{{ item.name }}</h4>
                            <div class="flex justify-between items-center py-2">
                                <div class="flex items-center gap-1">
                                    <IconsVideo /> 18x Lesson
                                </div>
                                <div class="course-btn">
                                    <NuxtLink :to="`/courses${item.to}`"
                                        class="text-white bg-orange-500 font-medium rounded-lg text- sm px-4 py-2 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 focus:outline-none">
                                        Get started</NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
const courses = [
    {
        name: "National University (NUH)",
        price: 50,
        to: "/nuh",
        src: "/images/courses/1.png",
        reviews: 3,
        lessons: 22,
        tag: "Math"
    },
    {
        name: "DUAC",
        price: 50,
        to: "/duac",
        src: "/images/courses/2.png",
        reviews: 3,
        lessons: 17,
        tag: "Math"
    },
]
</script>

<style scoped></style>