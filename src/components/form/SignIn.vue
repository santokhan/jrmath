<template>
    <section class="py-12 md:py-16">
        <div class="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
            <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-lg xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    <div class="flex items-center justify-center gap-3">
                        <GoogleButton :handleGoogleSignIn="handleGoogleSignIn" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import Auth from '../../components/firebase/auth';
import GoogleButton from './GoogleButton.vue';

const router = useRouter()
const route = useRoute()

function handleGoogleSignIn() {
    Auth.signInWithGoogle(user => {
        const email = user.email
        if (email) {
            if (route?.redirectedFrom) {
                router.push(route.redirectedFrom.path) 
            } else {
                router.push("/profile")
            }
        }
    })
}
</script>

