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
                        <!-- <FacebookButton :handleFacebookSignIn="handleFacebookSignIn" /> -->
                    </div>
                    <div class="text-sm text-orange-400">{{ error }}</div>
                    <form class="space-y-4 md:space-y-6 hidden" @submit="handleSubmit">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="email" name="email" id="email" v-model="email.value"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5"
                                placeholder="name@company.com" required="true">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <div class="relative">
                                <input :type="eye ? 'text' : 'password'" name="password" placeholder="••••••••"
                                    v-model="password.value" :required="true"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5">
                                <button type="button" @click="eye = !eye"
                                    class="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 grid place-items-center">
                                    <EyeSlash v-if="eye" class="w-4 h-4" />
                                    <Eye v-else class="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox"
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 check">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500">Remember me</label>
                                </div>
                            </div>
                            <!-- <a href="#" class="text-sm font-medium text-orange-500 hover:underline">Forgot password?</a> -->
                        </div>
                        <button type="submit"
                            class="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign
                            in</button>
                        <p class="text-sm font-light text-gray-500">
                            Don’t have an account yet?
                            <RouterLink to="/" class="font-medium text-orange-500 hover:underline">Sign up</RouterLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import Auth from '../../components/firebase/auth';
import Eye from './eye/Eye.vue';
import EyeSlash from './eye/EyeSlash.vue';
import GoogleButton from './GoogleButton.vue';

const router = useRouter()
const route = useRoute()

const eye = ref(false)
const error = ref<any>("")

const email = reactive({
    value: "",
    err: ""
})
const password = reactive({
    value: "",
    err: ""
})

function onSignIn() {
    if (route.redirectedFrom) {
        router.push(route.redirectedFrom.path)
    } else {
        router.push("/profile")
    }
}

function handleSubmit(e: any) {
    e.preventDefault();
    if (email.value) {
        if (password.value) {
            Auth.signIn(email.value, password.value, () => {
                onSignIn()
            }, (err) => {
                error.value = err
            })
        } else {
            password.err = 'Invalid password'
        }
    } else {
        email.err = 'Invalid email address'
    }
}

function handleGoogleSignIn() {
    Auth.signInWithGoogle(() => {
        onSignIn()
    })
}
</script>

<style scoped>
.check {
    accent-color: green !important;
}
</style>