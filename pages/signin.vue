<template>
    <section>
        <LayoutAppContainer>
            <FormSignIn />
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
import { getAuth } from 'firebase/auth';
import Auth from '../components/firebase/auth';


definePageMeta({
    middleware: [
        function (to, from) {
            const router = useRouter();

            if (to.path === '/signin') {
                Auth.observer((user) => {
                    if (user) {
                        console.log(getAuth().currentUser);
                        router.push({ path: "/profile" })
                    }
                })
            }
        },
    ],
});
</script>

<style scoped></style>