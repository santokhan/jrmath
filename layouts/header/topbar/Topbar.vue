<template>
    <!-- component -->
    <section class="flex gap-12 justify-center bg-orange-500 h-10 border-b-2">
        <ul class="flex items-center text-white gap-6 md:gap-8">
            <div class="flex items-center gap-2">
                <IconsIcoCall />
                <a :href="'tel:' + phone[0]" class="font-medium hover:underline hidden md:block">{{ phone[0] }}</a>
                <a :href="'tel:' + phone[1]" class="font-medium hover:underline ">{{ phone[1] }}</a>
            </div>
            <div class="flex items-center gap-2">
                <IconsIcoMail /><a :href="'mailto:' + email[0]" class="font-medium hover:underline">{{ email[0] }}</a>
            </div>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { email, phone } from '../../../components/data/contact';
</script>

<style scoped></style>