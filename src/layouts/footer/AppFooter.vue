<template>
    <footer class="">
        <div class="bg-white">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="lg:flex lg:justify-between py-6 gap-8">
                    <div class="lg:w-6/12 mb-6 lg:mb-0 space-y-5">
                        <JRMath />
                        <form @submit="handleSubmit" class="relative flex gap-2 items-center">
                            <div class="flex items-center relative">
                                <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 20 16">
                                    <path
                                        d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path
                                        d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                                <input type="text"
                                    class="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-9 p-2.5"
                                    placeholder="jrmath@gmail.com">
                            </div>
                            <button
                                class="focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5">Subscribe</button>
                        </form>
                    </div>
                    <div class="w-full grid grid-cols-2 gap-12 sm:gap-6 lg:grid-cols-3 py-4 lg:py-0">
                        <div class="">
                            <h2 class="mb-4 font-bold text-gray-900 uppercase">Resources</h2>
                            <div class="text-gray-700 font-medium flex flex-col items-start gap-3">
                                <RouterLink to="/" class="hover:text-orange-500">Home</RouterLink>
                                <RouterLink to="/courses" class="hover:text-orange-500">Courses</RouterLink>
                                <RouterLink to="/admin" class="hover:text-orange-500" v-if="isAdmin">Admin</RouterLink>
                            </div>
                        </div>
                        <div class="">
                            <h2 class="mb-4 font-bold text-gray-900 uppercase">Legal</h2>
                            <div class="text-gray-700  font-medium flex flex-col gap-3">
                                    <RouterLink to="/question-bank" class="hover:text-orange-500">Question Bank</RouterLink>
                                    <RouterLink to="/about" class="hover:text-orange-500">About</RouterLink>
                                    <RouterLink to="/tools" class="hover:text-orange-500">Tools</RouterLink>
                            </div>
                        </div>
                        <div class="col-span-2 lg:col-span-1">
                            <h2 class="mb-4 font-bold text-gray-900 uppercase">Contact Us</h2>
                            <div class="text-gray-700">
                                <div class="flex items-center gap-2 mb-4">
                                    <IcoCall />
                                    <a :href="'tel:' + phone[0]"
                                        class="font-medium text-gray-800 hover:text-orange-500 whitespace-nowrap">
                                        {{ phone[0] }}</a>,
                                    <a :href="'tel:' + phone[1]"
                                        class="font-medium text-gray-800 hover:text-orange-500 whitespace-nowrap">
                                        {{ phone[1] }}</a>
                                </div>
                                <div class="flex items-center gap-2 mb-4">
                                    <IcoMail />
                                    <a :href="'mailto:' + email[0]" class="font-medium text-gray-800 hover:text-orange-500">
                                        {{ email[0] }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" /> -->
                <!-- <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-700 sm:text-center">© 2023 <a href="/"
                        class="hover:text-orange-500">JRMath™</a>.
                    Developed by <a href="https://santokhan.github.io" class="hover:text-orange-500">Santo</a>
                </span>
                <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                    <a href="#" class="text-gray-700 hover:text-orange-500">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 8 19">
                            <path fill-rule="evenodd"
                                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Facebook page</span>
                    </a>
                    <a href="#" class="text-gray-700 hover:text-orange-500">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 17">
                            <path fill-rule="evenodd"
                                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Twitter page</span>
                    </a>
                    <a href="#" class="text-gray-700 hover:text-orange-500">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Dribbble account</span>
                    </a>
                </div>
            </div> -->
            </div>
        </div>

        <div class="p-4 bg-orange-500">
            <div class="w-full max-w-screen-xl mx-auto">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-white sm:text-center">© 2023 <a href="/" class="hover:underline">JRMath™</a>.
                        Developed by <a href="https://santokhan.github.io" class="hover:underline">Santo</a>
                    </span>
                    <div class="flex space-x-5 sm:justify-center items-center">
                        <a :href="socialMedia.facebook" class="text-white hover:text-white/50">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 8 19">
                                <path fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="sr-only">Facebook page</span>
                        </a>
                        <a :href="socialMedia.youtube" class="text-white hover:text-white/50">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 20 17">
                                <path fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="sr-only">Twitter page</span>
                        </a>
                        <a :href="socialMedia.youtube" class="text-white hover:text-white/50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 24 24" fill="none">
                                <path fill="currentColor"
                                    d="M17 4H7C4 4 2 6 2 9v6c0 3 2 5 5 5h10c3 0 5-2 5-5V9c0-3-2-5-5-5zm-3.11 9.03l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.17.82-1.63 1.82-1.03l2.47 1.48c.95.58.95 1.5 0 2.07z">
                                </path>
                            </svg>
                            <span class="sr-only">Twitter page</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import admin from '../../components/firebase/admin'
import { email, phone, socialMedia } from '../../components/data/contact';
import IcoCall from '../../components/icons/IcoCall.vue';
import IcoMail from '../../components/icons/IcoMail.vue';
import JRMath from '../../components/logo/JRMath.vue';

function handleSubmit(e: any) {
    e.preventDefault();
}

const isAdmin = ref(false)
onBeforeMount(async () => {
    admin.adminValidation(bool => {
        isAdmin.value = bool
    })
})
</script>

