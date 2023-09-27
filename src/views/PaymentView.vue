<template>
    <section>
        <AppContainer>
            <TitleBox>
                <Tag>পেমেন্ট সিস্টেম</Tag>
                <Heading>কোর্স অ্যাক্সেস নিতে পেমেন্ট করুন</Heading>
            </TitleBox>

            <div class="bg-white p-4 rounded-lg mt-4">
                <div class="flex flex-wrap justify-center gap-8 py-8">
                    <Bkash class="w-60" />
                    <img src="/images/payment/nagad.png" alt="payment" class="object-contain w-60">
                    <img src="/images/payment/rocket.png" alt="payment" class="object-contain w-60">
                </div>
                <ul class="space-y-4 list-disc list-inside">
                    <li>পেমেন্ট করার আগে উক্ত নাম্বারে কল দিয়ে কনফার্ম হোন</li>
                    <li>পেমেন্ট করার পর নিম্নের ফেসবুক আইডিতে নক দিন <a href="https://www.facebook.com/JaKaRiA.YO"
                            class="underline text-orange-500 hover:text-orange-700 font-medium">https://www.facebook.com/JaKaRiA.YO</a>
                    </li>
                    <li>আইডিতে নক দিয়ে আপনার মোবাইল ব্যাংকিং নাম্বারের লাস্ট তিন ডিজিট জানান এবং আপনার নাম, জেলা,ফোন নাম্বার
                        আলাদা
                        আলাদাভাবে টেক্সট করুন
                        <ul class="px-4 space-y-4 my-4 py-2 list-disc list-inside bg-gray-50 rounded-lg">
                            <li>লাস্ট ডিজিট (০৮৯) এবং কতটাকা পাঠাইছেন।</li>
                            <li>আপনার ইমেইল(someone@mail.com)</li>
                            <li>আপনার নাম(রহিম)</li>
                            <li>আপনার জেলা(জামালপুর)</li>
                            <li>আপনার ফোন নাম্বার(01910865705)</li>
                        </ul>
                    </li>
                    <a href="tel:+8801910865705"
                        class="underline text-orange-500 hover:text-orange-700 flex items-center gap-2 font-medium"><i
                            class="fa fa-phone"></i>বিকাশ/নগদ/রকেট: 01910865705 (জাকারিয়া স্যার পার্সোনাল)</a>
                </ul>
            </div>
        </AppContainer>
    </section>
</template>

<script setup lang="ts">
import AppContainer from '../components/layout/AppContainer.vue';
import Heading from '../components/section/Heading.vue';
import TitleBox from '../components/section/TitleBox.vue';
import Bkash from '../components/icons/Bkash.vue'
import Tag from '../components/section/Tag.vue';
</script>

<style scoped></style>