<template>
    <section>
        <LayoutAppContainer>
            <SectionTitleBox>
                <SectionTag>Contact Us</SectionTag>
                <SectionHeading>Keep In Touch With Us</SectionHeading>
            </SectionTitleBox>

            <div class="grid grid-cols-1 lg:grid-cols-2 items-center py-8 space-y-8">
                <div class="">
                    <h5 class="text-lg font-medium">Address</h5>
                    <div class="mt-4">
                        <div class="flex items-center gap-2 mb-4">
                            <IconsIcoCall />
                            <div class="">
                                <a :href="'tel:' + phone[0]" class="block text-gray-800 hover:text-orange-500">
                                    {{ phone[0] }}
                                </a>
                                <a :href="'tel:' + phone[1]" class="block text-gray-800 hover:text-orange-500">
                                    {{ phone[1] }}
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <IconsIcoMail />
                            <a href="mailto:" class="text-gray-800 hover:text-orange-500">
                                {{ email[0] }}
                            </a>
                        </div>
                        <div class="flex items-center gap-2 mb-4">
                            <IconsMap />
                            <a href="https://www.google.com/maps?ll=24.925114,89.947019&z=14&t=m&hl=en&gl=BD&mapclient=embed&q=Jamalpur" class="text-gray-800 hover:text-orange-500">
                                {{ address }}
                            </a>
                        </div>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28945.194910238213!2d89.92727748032915!3d24.92698113466737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd7f432d79ab59%3A0xba4e9a6ed6f6682c!2sJamalpur!5e0!3m2!1sen!2sbd!4v1692796423553!5m2!1sen!2sbd"
                    style="border:0;" loading="lazy" class="rounded-lg w-full h-80"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
import { email, phone, address } from '../components/data/contact'
</script>

<style scoped></style>