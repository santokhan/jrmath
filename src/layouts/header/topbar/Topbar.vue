<template>
    <!-- component -->
    <section class="flex gap-12 justify-center bg-orange-500 h-10">
        <ul class="flex items-center text-white gap-5 md:gap-8">
            <div class="flex items-center gap-1 md:gap-2">
                <IcoCall />
                <a :href="'tel:' + phone[0]" class="font-medium hover:underline">{{ phone[0] }}</a>,
                <a :href="'tel:' + phone[1]" class="font-medium hover:underline">{{ phone[1] }}</a>
            </div>
            <div class="hidden md:flex items-center gap-1 md:gap-2">
                <IcoMail /><a :href="'mailto:' + email[0]" class="font-medium hover:underline">{{ email[0] }}</a>
            </div>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { email, phone } from '../../../components/data/contact';
import IcoCall from '../../../components/icons/IcoCall.vue';
import IcoMail from '../../../components/icons/IcoMail.vue';
</script>

