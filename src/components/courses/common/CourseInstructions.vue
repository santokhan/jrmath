<template>
    <div v-if="props.iframeSrc" class="text-center mt-16">
        <h2 class="text-4xl font-bold">Course Instructions</h2>
        <p class="text-xl md:text-2xl leading-7 md:leading-9 my-5">Watch this vidoe properly to understand in details</p>
        <!-- <div class="my-8" v-html="iframe"></div> -->
        <div class="my-8">
            <iframe class="w-full aspect-[16/9]" :src="props.iframeSrc || 'https://www.youtube.com/embed/BkEv1AXNtbM'"
                title="JR Math Tutorial Intro" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ iframeSrc: string }>()

const iframe = `<iframe class="w-full aspect-[16/9]" src="${props.iframeSrc || 'https://www.youtube.com/embed/BkEv1AXNtbM'}" title="JR Math Tutorial Intro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
</script>

<style scoped></style>