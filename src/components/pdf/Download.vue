<template>
    <a :href="url" download
        class="ml-auto -mx-1.5 -my-1.5 bg-orange-50 text-orange-500 rounded-lg focus:ring-2 focus:ring-orange-400 p-1.5 hover:bg-orange-200 inline-flex items-center justify-center h-8 w-8">
        <i class="fa fa-download"></i>
    </a>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { client } from '../../sanity/sanityClient';

const props = defineProps<{ fileName: string }>()

const url = ref<string>()
const getLink = async (fileName: string) => {
    url.value = await client.fetch(`*[_id == $id][0].url`, { id: fileName })
}
getLink(props.fileName)
</script>

