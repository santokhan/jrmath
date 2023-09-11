<template></template>

<script setup lang="ts">
import admin from '../../components/firebase/admin';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const requirement = {
    course: route.params.course,
    year: route.params.year,
    id: route.params.id,
}

admin.watchVideo((data) => {
    if (data) {
        if (!requirement.id) {
            router.push({ path: `/courses/${requirement.course}/${requirement.year}/${data[0]._id}` })
        }
    }
})
</script>

<style scoped></style>