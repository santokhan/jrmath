<template>
    <aside class="w-[15rem] py-8 border-r">
        <nav class="flex flex-col">
            <button type="button" @click="props.goToUserInfo" :class="[
                activeNav === NAVS[0] ? ' text-orange-500 hover:bg-orange-100' : 'hover:bg-orange-100 focus:bg-orange-500 focus:text-white',
                'text-start font-medium px-4 py-2.5'
            ]">User Details</button>
        </nav>
    </aside>
</template>

<script setup lang="ts">
const props = defineProps<{
    goToUserInfo: () => void,
    activeNav: string,
    NAVS: string[]
}>()
</script>

