<template>
    <nav
        :class="[sticky ? 'sticky top-0 left-0 w-full z-[13] bg-white/80 backdrop-blur-sm h-16 drop-down' : 'border-gray-200 h-16 md:h-16 border-b relative']">
        <div class="h-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
            <LazyLogoJRMath />
            <div class="flex items-center md:order-2 relative">
                <NuxtLink to="/signin" class="flex mr-3 text-sm rounded-full md:mr-0">
                    <IconUser class="text-orange-500 w-7 h-7" />
                </NuxtLink>
                <button type="button" class="fle x hidden mr-3 text-sm rounded-full md:mr-0 " id="user-menu-button"
                    ref="profileBtn" @click="handleUserDD" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"><span class="sr-only">Open user menu</span>
                    <IconUser class="text-orange-500 w-7 h-7" />
                </button>
                <!-- Dropdown menu -->
                <div v-if="isOpenUserDD" ref="targetUserDD"
                    class="my-4 text-base list-none divide-y bg-white divide-gray-100 rounded-lg shadow absolute right-0 top-full w-60 z-[11]"
                    id="user-dropdown">
                    <div class="px-4 py-3">
                        <span class="block text-gray-900 font-semibold">John Doe</span>
                        <span class="block  text-gray-400 truncate">doe@domain.com</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-medium">Profile</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-medium">Sign out</a>
                        </li>
                    </ul>
                </div>
                <button data-collapse-toggle="navbar-user" type="button" @click="handleDropdown" ref="hamburger"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    aria-controls="navbar-user" aria-expanded="false">
                    <IconsIcoClose v-if="dropdown" />
                    <svg v-else class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div :class="[
                dropdown ? 'absolute right-0 top-12 w-60 z-[12]' : 'items-center justify-between hidden w-full md:flex md:w-auto md:order-1',
            ]" id="navbar-user">
                <ul ref="targetNavDD"
                    class="flex flex-col font-medium p-3 md:p-0 mt-4 bg-white md:bg-transparent border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li v-for="item, index in navs" :key="index">
                        <NuxtLink :to="item.to" @click="dropdown = false" :class="[
                            item.to === route.path ? 'block py-2 pl-3 pr-4 text-white bg-orange-500 rounded md:bg-transparent md:text-orange-500 md:p-0' :
                                'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0',
                            'capitalize'
                        ]" aria-current="page">{{ item.name }}</NuxtLink>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import IconUser from '../../../components/icons/IconUser.vue'
import navs from './navs'
import { onClickOutside } from '@vueuse/core'

const isOpenUserDD = ref(false)
const dropdown = ref(false)

const targetUserDD = ref(null)
const profileBtn = ref(null)

function handleUserDD() {
    isOpenUserDD.value = !isOpenUserDD.value
    dropdown.value = false
    onClickOutside(targetUserDD, () => {
        isOpenUserDD.value = false
    }, { ignore: [profileBtn] })
}

const targetNavDD = ref(null)
const hamburger = ref(null)

function handleDropdown() {
    dropdown.value = !dropdown.value
    isOpenUserDD.value = false;
    onClickOutside(targetNavDD, () => {
        dropdown.value = false
    }, { ignore: [hamburger] })
}

const route = useRoute()

const scrollT = ref<number>(0)
const sticky = ref<boolean>(false)

onMounted(() => {
    window.addEventListener("scroll", (e) => {
        if (window.scrollY > 625) {
            sticky.value = true
        } else {
            sticky.value = false
        }
        scrollT.value = Math.floor(window.scrollY)
    })
})
</script>

<style scoped>
.drop-down {
    animation: drop 250ms linear forwards;
}

@keyframes drop {
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0);
    }
}
</style>