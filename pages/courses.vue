<template>
    <LayoutCourses />
</template>

<script setup lang="ts">
import auth from '../components/firebase/auth';

const router = useRouter()

definePageMeta({
    middleware: [
        function (to, from) {
            if (to.path === '/courses') {
                auth.observer((user) => {
                    if (!user.uid) {
                        router.push('/signin')
                    }
                })
            }
        },
    ],
});
</script>

<style scoped></style>
