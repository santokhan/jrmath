<template>
    <section class="">
        <LayoutAppContainer>
            <SectionTitleBox>
                <SectionTag>WHAT WE GIVE</SectionTag>
                <SectionHeading>
                    Course Builder
                </SectionHeading>
            </SectionTitleBox>

            <div class="flex flex-wrap justify-center py-8">
                <div v-for="(item, index) in info" :key="index" class="w-1/2 md:w-1/4 p-2">
                    <div class="w-full md:w-[16rem] bg-white rounded-xl overflow-hidden relative py-5 md:p-8"
                        title="card">
                        <div class="flex justify-center items-center">
                            <BuilderImage :index="index" />
                        </div>
                        <div class="relative space-y-1 mt-4">
                            <h4 class="text-2xl font-semibold text-center">{{ item.title }}</h4>
                            <p class="text-gray-600 text-center">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
import BuilderImage from './BuilderImage.vue';

const info = [
    {
        title: "5129+",
        desc: "Trusted websites",
        src: ""
    },
    {
        title: "203+",
        desc: "Happy Customers",
        src: ""
    },
    {
        title: "293+",
        desc: "Recorded Videos",
        src: ""
    },
    {
        title: "5+",
        desc: "Professionals",
        src: ""
    },
]
</script>

<style scoped></style>