<template>
    <!-- <div class="fixed inset-0 flex items-center justify-center">
        <button type="button" @click="openModal"
            class="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            Open dialog
        </button>
    </div> -->
    <TransitionRoot :appear="loading === false" :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-xs transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all bg-orange-500 text-center">
                            <RouterLink v-if="ads.image" :to="ads.link || ''">
                                <img :src="ads.image" alt="ads" class="object-contain">
                            </RouterLink>
                            <div class="absolute left-0 top-0 h-full w-full flex flex-col justify-between p-6">
                                <button type="button" @click="closeModal" :class="[
                                    'w-6 h-6 absolute right-4 top-4 bg-white',
                                    'text-orange-500 hover:text-orange-700 font-medium rounded-full focus:outline-none bg-white border-2 border-white'
                                ]">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24"
                                        fill="none">
                                        <path
                                            d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17"
                                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </button>
                                <DialogTitle as="h3"
                                    class="text-[2.25rem] leading-[1.1] font-bold leading-6 text-orange-500 mt-7 hidden">
                                    {{ ads.title }}
                                </DialogTitle>
                                <div class="hidden">
                                    <div
                                        class="text-white text-lg font-bold mt-8 mb-6 px-1 max-h-[7rem] border+ overflow-hidden">
                                        <ul class="text-start+">
                                            <li v-for="(item, index) in splitSlogun(ads.slogun)" :key="index">{{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                    <a :href="ads.link"
                                        class="w-full flex justify-center rounded-md border border-transparent bg-white px-4 py-3 text-sm font-bold text-orange-500 hover:bg-gray-100">
                                        ভর্তি হতে এখানে ক্লিক করুন
                                    </a>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script setup lang="ts">
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue';
import { ref, onMounted, reactive } from 'vue';
import Button from '../access/Button.vue';
import adsImage from '../../assets/images/ads/ads-main.png'
import { client, urlFor } from '../../sanity/sanityClient';

const isOpen = ref<boolean>(true);
const loading = ref<boolean>(true);
const ads = reactive<{ title: string, slogun: string, link: string, image: string }>({
    image: "",
    title: '45 BCS',
    slogun: 'অর্নাস ৪র্থ বর্ষের গণিত বিভাগের সকল কোর্সে ভর্তি চলছে',
    link: "/courses/nuh/4",
});

function splitSlogun(slogun: string) {
    return ads.slogun.split(/\n/g)
}

onMounted(async () => {
    const adsContent = await client.fetch(`*[_type in path("ads")][0]`);
    if (adsContent.image) {
        ads.image = urlFor(adsContent.image).url();
        ads.link = adsContent.link;
        ads.title = adsContent.title;
        ads.slogun = adsContent.description;

        loading.value = false;
    }
})

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true
}
</script>
  