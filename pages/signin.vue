<template>
    <section>
        <LayoutAppContainer>
            <FormSignIn />
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
import Auth from '../components/firebase/auth';

definePageMeta({
    middleware: [
        function (to, from) {
            if (to.path === '/signin') {
                console.log(Auth.currentUser());
                
                if (Auth.currentUser()) {
                    console.log(to, 2);
                    // Current user exists
                    // Redirect to requested path 
                    console.log('Current user exist');
                    // return navigateTo({ path: '/profile' })
                }
            }
        },
    ],
});
</script>

<style scoped></style>