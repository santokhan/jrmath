<template>
    <div v-if="props.list?.length > 0" class="grid grid-cols-1 gap-8 mt-16">
        <div class="md:mx-4">
            <div class="grid place-items-center w-12 h-12 rounded-full my-3 bg-orange-50">
                <div class="text-orange-500">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
                            stroke-width="0" fill="currentColor"></path>
                        <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
                            stroke-width="0" fill="currentColor"></path>
                        <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
                            stroke-width="0" fill="currentColor"></path>
                        <path
                            d="M4.893 4.893a1 1 0 0 1 1.32 -.083l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 0 -1.414z"
                            stroke-width="0" fill="currentColor"></path>
                        <path
                            d="M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7z"
                            stroke-width="0" fill="currentColor"></path>
                        <path d="M14 18a1 1 0 0 1 1 1a3 3 0 0 1 -6 0a1 1 0 0 1 .883 -.993l.117 -.007h4z" stroke-width="0"
                            fill="currentColor"></path>
                        <path
                            d="M12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1 -.471 .192l-.129 .008h-6a1 1 0 0 1 -.6 -.2a6 6 0 0 1 3.6 -10.8z"
                            stroke-width="0" fill="currentColor"></path>
                    </svg>
                </div>
            </div><span class="text-orange-500  mb-3 inline-block font-medium md:font-semibold">Highly practical</span>
            <h2 class="text-3xl">What You'll Learn</h2>
            <ul class="my-6 space-y-4 text-left text-lg">
                <WithCheck v-for="item, i in props.list" :key="i">{{ item }}</WithCheck>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import WithCheck from './list/WithCheck.vue'

const props = defineProps<{ list: string[] }>()

const whatYouWillLearn = [
    "Confidently build front-end apps with React and TypeScript",
    "Build reusable function components",
    "Style your components using vanilla CSS, CSS modules, and CSS-in-JS",
    "Manage component state",
    "Build forms with React Hook Forms",
    "Implement form validation using Zod",
    "Connect your React apps to the backend",
    "Deploy your React apps",
    "Use VSCode shortcuts to increase your productivity",
    "Apply the latest techniques and best practices",
    "Troubleshoot errors with ease",
    "Write clean code like a pro",
]
</script>


