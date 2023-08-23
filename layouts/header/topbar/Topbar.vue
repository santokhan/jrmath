<template>
    <!-- component -->
    <section class="flex gap-12 justify-center bg-orange-500 h-10 border-b-2">
        <ul class="flex items-center text-white gap-6 md:gap-8">
            <a :href="'tel:' + phone[0]" class="hidden md:flex items-center gap-2 hover:underline ">
                <IconsIcoCall /><span class="font-medium">{{ phone[0] }}, {{ phone[1] }}</span>
            </a>
            <a :href="'tel:' + phone[0]" class="flex md:hidden items-center gap-2 hover:underline">
                <IconsIcoCall /><span class="font-medium">{{ phone[0] }}</span>
            </a>
            <a :href="'mailto:' + email[0]" class="flex items-center gap-2 hover:underline">
                <IconsIcoMail /><span class="font-medium">{{ email[0] }}</span>
            </a>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { email, phone } from '../../../components/data/contact';
</script>

<style scoped></style>