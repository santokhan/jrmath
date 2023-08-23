<template>
    <section>
        <LayoutAppContainer>
            <SectionTitleBox>
                <SectionTag>Contact Us</SectionTag>
                <SectionHeading>
                    Keep In Touch With Us
                </SectionHeading>
            </SectionTitleBox>

            <div class="grid grid-cols-1 lg:grid-cols-2 items-center py-8">
                <div class="">
                    <h5 class="text-lg font-medium">Address</h5>
                    <div class="mt-4">
                        <a href="tel:01700000000" class="flex items-center gap-2 mb-4 text-gray-800 hover:text-orange-500">
                            <IconsIcoCall /><span class="font-medium">{{ phone[0] }}<br> {{ phone[1] }}</span>
                        </a>
                        <a href="mailto:" class="flex items-center gap-2 text-gray-800 hover:text-orange-500">
                            <IconsIcoMail /><span class="font-medium">jrmath@gmail.com</span>
                        </a>
                        <p class="text-gray-800 font-medium mt-4">
                            Jamalpur Sadar, Mymensingh, Bangladesh
                        </p>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28945.194910238213!2d89.92727748032915!3d24.92698113466737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd7f432d79ab59%3A0xba4e9a6ed6f6682c!2sJamalpur!5e0!3m2!1sen!2sbd!4v1692796423553!5m2!1sen!2sbd"
                    width="600" height="400" style="border:0;" loading="lazy" class="rounded-lg"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
import { phone } from '../components/data/contact'
</script>

<style scoped></style>