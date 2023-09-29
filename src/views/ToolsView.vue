<template>
    <AppContainer>
        <div class="space-y-6">
            <Heading>YouTube & Google Drive Embed code editor</Heading>
            <div class="flex flex-wrap">
                <div class="lg:w-1/2 p-2">
                    <form class="bg-white p-4 rounded-lg space-y-4" @submit="handleSubmit">
                        <div class="">
                            <label for="message" class="block mb-4 text-sm font-medium text-gray-900">Paste your YouTube & Google Drive Embed iframe code here</label>
                            <textarea id="message" rows="4" v-model="URL"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Write your iframe code thoughts here..."></textarea>
                        </div>
                        <div class="">
                            <button
                                class="focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5">Build
                                URL</button>
                        </div>
                    </form>
                </div>
                <div class="lg:w-1/2 p-2" v-if="builded">
                    <div class="bg-white p-4 rounded-lg space-y-4">
                        <h5 class="mb-2 text-sm font-medium text-gray-900">Embed URL</h5>
                        <p>{{ builded }}</p>
                        <button @click="handleCopy"
                            class="focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5"><i
                                class="fa fa-copy"></i> Copy
                            URL</button>
                    </div>
                </div>
            </div>
        </div>
    </AppContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppContainer from '../components/layout/AppContainer.vue';
import Heading from '../components/section/Heading.vue';

const URL = ref("")
const regex = /(src=".\S+")/g
const builded = ref("")

function handleSubmit(e: any) {
    e.preventDefault()

    URL.value.replace(regex, (full, text) => {
        const split = text.split('=')[1].replace(/"/g, '')
        builded.value = split
        return text;
    })
}

async function handleCopy() {
    await navigator.clipboard.writeText(builded.value)
}
</script>

<style scoped></style>