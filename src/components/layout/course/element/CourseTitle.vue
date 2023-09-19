<template>
    <h4 class="text-xl font-semibold whitespace-nowrap" :title="props.title">
        {{ sliceTitle(props.title) }}
    </h4>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>()

function sliceTitle(title: string): string {
    const len = title.length
    const max = 25

    if (len < max) {
        return title
    } else {
        return title.slice(0, max) + '...'
    }
}
</script>

<style scoped></style>