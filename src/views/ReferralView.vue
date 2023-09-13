<template></template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { getCurrentUser } from 'vuefire';
import { coin, referralLink } from '../components/firebase/profile';

const router = useRouter()
const route = useRoute()

function redirectToPreferredLink(email: string) {
    const id = route.params.id
    if (typeof id === 'string') {
        referralLink.read(id, data => {
            const url = data.url
            if (url) {
                const usedBy = data.usedBy
                // set used by when usedBy is empty
                if (!usedBy && data.email !== email) {
                    referralLink.usedBy(data._id, email)
                    coin.create(email, 25)
                }

                const path = url.split("#")[1]
                // router.push(path)
            }
        })
    }
}

onBeforeMount(() => {
    async function currentUser() {
        await getCurrentUser().then(user => {
            // Go to firestore referral URL
            if (user?.email) {
                redirectToPreferredLink(user.email)
            } else {
                router.push({ path: '/signin' })
            }
        })
    }
    currentUser()
})
</script>

<style scoped></style>