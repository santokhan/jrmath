<template>
    <section class="">
        <LayoutAppContainer>
            <SectionTitleBox>
                <SectionTag>FAQs</SectionTag>
                <SectionHeading>
                    Frequently Asked Questions
                </SectionHeading>
            </SectionTitleBox>

            <div class="flex flex-wrap justify-center gap-4 py-8">
                <div v-for="(item, index) in info" :key="index" class="w-full max-w-4xl bg-white rounded-xl">
                    <button type="button" class="w-full flex justify-between items-center gap-3 px-4 md:px-6 py-4" @click="() => {
                        active = active === index ? null : index
                    }">
                        <h4 class="text-lg font-medium text-gray-800 text-start">{{ item.title }}</h4>
                        <IconsAngleDown :class="[false ? 'rotate-180' : '']" />
                    </button>
                    <p v-if="active === index" class="text-gray-500 mx-6 py-4 border-t">{{ item.desc }}</p>
                </div>
            </div>
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
const active = ref<number | null>(null)

const info = [
    {
        title: "ভাইয়া ক্লাসগুলো কি রেকর্ড ভিডিও নাকি লাইভ?",
        desc: "আমরা লাইভ এবং রের্কড দুই সিস্টেমেই পড়াই।",
    },
    {
        title: "ভাইয়া লাইভ ক্লাস করলে কি রেকর্ড ভিডিও পাবো না?",
        desc: "অবশ্যই পাবেন যারা লাইভ করবেন তারা রের্কড ফ্রি পাবেন।",
    },
    {
        title: "ভাইয়া ক্লাসগুলো কিভাবে করবো?",
        desc: `লাইভ জুম লাইভে, রের্কড ফেসবুক প্রাইভেট গ্রুপে।`,
    },
    {
        title: "ভাইয়া নোট পিডিএফ দিবেন না",
        desc: "অবশ্যই, টেলিগ্রাম গ্রুপে দিয়ে থাকি।"
    },
    {
        title: "ভাইয়া রেকর্ড মানে কি শুধু অডিও",
        desc: "না ভাইয়া,আমাদের রেকর্ড ভিডিও মানে হচ্ছে টিউটোরিয়াল ভিডিও।যা আমাদের ইউটিউব চ্যানেল ভিজিট করলেই বুঝতে পারবেন।"
    },
    {
        title: "ভাইয়া খাতায় লিখে নাকি বোর্ডে",
        desc: "ভাইয়া আমরা বোর্ডে লেকচার দিয়ে থাকি ফেস টু ফেস, আপনার মনে হবে আপনি সামনা সামনি ক্লাস করছেন।"
    },
    {
        title: "ভাইয়া আপনারা কি পুরো বই করান",
        desc: "ভাইয়া, পুরো বই বলতে আমরা অধ্যায়ভিত্তিক সাজেশন তৈরি করে পড়ায়। কারণ সাতটা সাবজেক্ট আপনাদের। ফুল বই পড়ার সময় কোথায়।তবে যদি কেউ কোন অধ্যায় আগ্রহ দেখায় আমরা সমাধান করে দেয়।"
    },
    {
        title: "ভাইয়া আপনারা উপপাদ্যগুলো করান না",
        desc: "যেহেতু উপপাদ্য গণিতের বিষয়, তাহলে করাবো না কেন।অবশ্যই করানো হয়।"
    },
    {
        title: "ভাইয়া ফেসবুকে এমবি বেশি কাটে, যাতে এমবি কম কাটে পরামর্শ দেন",
        desc: "আপনারা ফেসবুক লাইট ব্যবহার করতে পারেন।"
    },
    {
        title: "ভাইয়া রেকর্ড ভিডিও দেখে যদি না বুঝি তাহলে কি করণীয়",
        desc: "সরাসরি ইনবক্স, আমরা দুইজন স্যার আপনাদের মেসেজের অপেক্ষায়।"
    },
    {
        title: "ভাইয়া কোর্স ফি এবং পেমেন্ট সম্পর্কে যদি বলতেন।",
        desc: "আমরা বিকাশে পেমেন্ট নেয়।"
    },
    {
        title: "ভাইয়া কোন পাবলিকেশন বই পড়ান",
        desc: "বাংলা ভাষায় তুহিন প্রকাশনী এবং ইংরেজি তিতাস।"
    },
]

let a = `
desc:""

`
</script>

<style scoped></style>