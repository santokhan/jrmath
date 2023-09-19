<template>
    <section class="">
        <AppContainer>
            <TitleBox>
                <Tag>WHAT WE GIVE</Tag>
                <Heading>
                    Course Builder
                </Heading>
            </TitleBox>

            <div class="flex flex-wrap justify-center py-8">
                <div v-for="(item, index) in info" :key="index" class="w-1/2 md:w-1/4 p-2 flex justify-center">
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
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import Heading from '../../section/Heading.vue';
import Tag from '../../section/Tag.vue';
import TitleBox from '../../section/TitleBox.vue';
import AppContainer from '../AppContainer.vue';
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

