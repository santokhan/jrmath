<template>
    <div v-for="(ddItem, ddIndex) in props.nav.dropdown" :key="ddIndex" class="w-full relative nested">
        <button type="button" class="w-full flex justify-between items-center font-medium px-4 py-2 hover:text-orange-500">
            {{ ddItem.name }} <i class="fa fa-angle-right text-base rotate-90 md:rotate-0 rotate-flip"></i></button>

        <div class="md:absolute left-full top-0 bg-white hidden w-full md:w-40 md:shadow-lg z-[15] md:py-2 dropdown">
            <RouterLink @click="props.hideDropdown" v-for="(link, linkIndex) in ddItem.links" :key="linkIndex" :to="link.to" :class="[
                link.to === route.path ? 'block text-white bg-orange-500 md:bg-transparent md:text-orange-500' :
                    'block text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500',
                'capitalize whitespace-nowrap px-4 py-2 w-full']">{{ link.name }}</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 * Both dropdown are same but only Mobile screen can hide dropdown on click year or nested route. 
 * It will hide dropdown navs on navigate
 */
import { useRoute } from 'vue-router';

const props = defineProps<{ nav: any, hideDropdown: () => void }>()
const route = useRoute()
</script>

<style scoped>
.nested:hover .dropdown {
    display: block;
}

.nested:hover .rotate-flip {
    transform: rotate(45);
}

.nested:hover .rotate-90 {
    transform: rotate(45);
}
</style>