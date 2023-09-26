<template>
    <section>
        <AppContainer>
            <TitleBox>
                <Tag>Questions</Tag>
                <Heading>Question Bank</Heading>
            </TitleBox>

            <ul class="py-4" v-if="questionsList && questionsList.length > 0">
                <li v-for="(item, index) in questionsList" :key="index"
                    class="flex items-center p-4 mb-4 text-orange-800 rounded-lg bg-white"><i class="fa fa-file"></i>
                    <h4 class="ml-3 font-medium">{{ item.title }}</h4>
                    <Download :fileName="item.pdf.asset._ref" />
                </li>
            </ul>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { questions } from '../api/sanity';
import AppContainer from '../components/layout/AppContainer.vue';
import Download from '../components/pdf/Download.vue'
import TitleBox from '../components/section/TitleBox.vue';
import Tag from '../components/section/Tag.vue';
import Heading from '../components/section/Heading.vue';

const questionsList = ref<any[]>()
questions.get_questions(data => {
    questionsList.value = data
})
</script>

