<template>
    <section>
        <AppContainer>
            <TitleBox>
                <Tag>Notice</Tag>
                <Heading>NUH Notice</Heading>
            </TitleBox>

            <ul class="py-4" v-if="notices && notices.length > 0">
                <li v-for="(item, index) in notices" :key="index"
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
import { notice } from '../api/sanity'
import AppContainer from '../components/layout/AppContainer.vue';
import TitleBox from '../components/section/TitleBox.vue';
import Heading from '../components/section/Heading.vue';
import Tag from '../components/section/Tag.vue';
import Download from '../components/pdf/Download.vue';

const notices = ref<any[]>()
notice.get_notices(data => {
    notices.value = data
})
</script>

