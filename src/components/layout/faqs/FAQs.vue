<template>
    <section class="">
        <AppContainer>
            <TitleBox>
                <Tag>FAQs</Tag>
                <Heading>
                    Frequently Asked Questions
                </Heading>
            </TitleBox>

            <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-4 py-8">
                <div v-for="(item, index) in info" :key="index" class="w-full bg-white rounded-xl">
                    <button type="button" class="w-full flex justify-between items-center gap-3 px-4 md:px-6 py-4" @click="() => {
                        active = active === index ? null : index
                    }">
                        <h4 class="text-lg font-medium text-gray-800 text-start">{{ item.title }}</h4>
                        <AngleDown :class="[false ? 'rotate-180' : '']" />
                    </button>
                    <p v-if="active === index" class="text-gray-500 mx-6 py-4 border-t">
                    <div v-if="typeof item.desc === 'object'" v-for="(desc, i2) in item.desc" :key="i2">{{ desc }}</div>
                    <div v-else>{{ item.desc }}</div>
                    </p>
                </div>
            </div>
            <div
                class="flex justify-center items-center py-4 gap-2 font-medium bg-orange-500 text-white px-4 py-2 rounded-lg text-xl lg:text-2xl">
                বিস্তারিত জানতে: <a href="tel:+8801790-054896" class="text-white">01790-054896</a>
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Heading from '../../section/Heading.vue';
import Tag from '../../section/Tag.vue';
import TitleBox from '../../section/TitleBox.vue';
import AppContainer from '../AppContainer.vue';
import AngleDown from '../../icons/AngleDown.vue';

const active = ref<number | null>(null)

const info = [
    {
        title: "ভাইয়া ক্লাসগুলো কি রেকর্ড(টিউটোরিয়াল) ভিডিও নাকি লাইভ?",
        desc: "আমরা লাইভ এবং রেকর্ড(টিউটোরিয়াল) দুই সিস্টেমেই পড়াই।",
    },
    {
        title: "ভাইয়া লাইভ ক্লাস করলে কি রেকর্ড(টিউটোরিয়াল) ভিডিও পাবো না?",
        desc: "অবশ্যই পাবেন যারা লাইভ করবেন তারা রেকর্ড(টিউটোরিয়াল) ফ্রি পাবেন।",
    },
    {
        title: "ভাইয়া ক্লাসগুলো কিভাবে করবো?",
        desc: [
            "লাইভ ➡️জুম লাইভে",
            "রেকর্ড(টিউটোরিয়াল) ➡️ আমাদের ওয়েবসাইটে পাবেন।",
        ],
    },
    {
        title: "ভাইয়া নোট পিডিএফ দিবেন না?",
        desc: "অবশ্যই, প্রতিটা ভিডিও এর শেষের দিকে চোখ রাখুন।"
    },
    {
        title: "ভাইয়া রেকর্ড(টিউটোরিয়াল) মানে কি শুধু অডিও?",
        desc: "না ভাইয়া,আমাদের রেকর্ড(টিউটোরিয়াল) ভিডিও মানে হচ্ছে টিউটোরিয়াল ভিডিও যা আমাদের ইউটিউব চ্যানেল ভিজিট করলেই বুঝতে পারবেন।"
    },
    {
        title: "ভাইয়া খাতায় লিখে নাকি বোর্ডে?",
        desc: "ভাইয়া আমরা বোর্ডে লেকচার দিয়ে থাকি ফেস টু ফেস, আপনার মনে হবে আপনি সামনা সামনি ক্লাস করছেন।"
    },
    {
        title: "ভাইয়া আপনারা কি পুরো বই করান?",
        desc: "ভাইয়া, পুরো বই বলতে আমরা অধ্যায়ভিত্তিক সাজেশন তৈরি করে পড়াই। কারণ আপনাদের সময় খুবই স্বল্প, ফুল বই পড়ার সময় কোথায়? তবে যদি কেউ কোন অধ্যায় আগ্রহ দেখায় আমরা সমাধান করে দেই।"
    },
    {
        title: "ভাইয়া আপনারা উপপাদ্যগুলো করান না?",
        desc: "যেহেতু উপপাদ্য গণিতের বিষয়, তাহলে করাবো না কেন, অবশ্যই করানো হয়।"
    },
    {
        title: "ভাইয়া কোর্স ফি এবং পেমেন্ট সম্পর্কে যদি বলতেন",
        desc: "আমরা বিকাশ, নগদ এবং রকেটের মাধ্যমে পেমেন্ট নিয়ে থাকি।"
    },
    {
        title: "ভাইয়া কোন পাবলিকেশন বই পড়ান?",
        desc: "বাংলা ভাষায় তুহিন প্রকাশনী এবং ইংরেজি তিতাস।"
    },
]
</script>

