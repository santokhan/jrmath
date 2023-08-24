<template>
    <section class="py-12 md:py-16">
        <div class="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
            <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    <div>
                        <button type="button" @click="handleFacebookSignIn"
                            class="bg-blue-600 rounded-lg text-white h-10 font-medium px-4">Continue with Facebook</button>
                    </div>
                    <!-- Firebase error -->
                    <div class="text-sm text-orange-400">{{ error }}</div>
                    <form class="space-y-4 md:space-y-6" @submit="handleSubmit">
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
                                    <FormEyeSlash v-if="eye" class="w-4 h-4" />
                                    <FormEye v-else class="w-4 h-4" />
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
                            <NuxtLink to="/signup" class="font-medium text-orange-500 hover:underline">Sign up</NuxtLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Auth from '../../components/firebase/auth';

const PATTERN = ['[A-Za-z\d]{6,}$', '^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$']

const router = useRouter()

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

function handleSubmit(e: any) {
    e.preventDefault();
    if (email.value) {
        if (password.value) {
            Auth.signIn(email.value, password.value, () => {
                // Signed in
                // Redirect to `/courses` page
                router.push('/courses')
            }, (err) => { error.value = err })
        } else {
            password.err = 'Invalid password'
        }
    } else {
        email.err = 'Invalid email address'
    }
}

function handleFacebookSignIn() {
    Auth.signInWithFacebook()
}
</script>

<style scoped>
.check {
    accent-color: green !important;
}
</style>