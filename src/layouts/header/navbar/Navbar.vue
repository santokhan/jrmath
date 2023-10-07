<template>
    <nav
        :class="[sticky ? 'sticky top-0 left-0 w-full z-[52] bg-white/80 backdrop-blur-sm h-16 drop-down' : 'border-gray-200 h-16 md:h-16 border-b relative']">
        <div class="h-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
            <JRMath />
            <div class="flex items-center md:order-2 relative">
                <RouterLink to="/profile" class="flex mr-1 text-sm rounded-full">
                    <IconUser class="text-orange-500 w-7 h-7" />
                </RouterLink>

                <button data-collapse-toggle="navbar-user" type="button" @click="handleDropdown" ref="hamburger"
                    class="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-white"
                    aria-controls="navbar-user" aria-expanded="false">
                    <IcoClose v-if="dropdown" class="w-6 h-6" />
                    <Hamburger v-else class="w-6 h-6" />
                </button>
            </div>
            <!-- Dropdown -->
            <div
                :class="[dropdown ? 'absolute right-0 top-16 w-60 z-[51]' : 'hidden w-full h-full md:flex md:items-center md:justify-between md:w-auto md:order-1',]">
                <ul ref="targetNavDD"
                    class="h-full flex flex-col font-medium py-3 md:py-0 bg-white md:bg-transparent border border-gray-100 rounded-lg md:flex-row md:space-x-6 md:border-0">
                    <li v-for="item, index in navs" :key="index" class="flex items-center h-full">
                        <RouterLink v-if="item.to" :to="item.to" @click="dropdown = false" :class="[
                            item.to === route.path ? 'text-white bg-orange-500 md:bg-transparent md:text-orange-500' :
                                'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500',
                            'capitalize w-full flex items-center pl-4 py-2'
                        ]" aria-current="page">{{ item.name }}</RouterLink>

                        <div v-else-if="item.dropdown" class="w-full h-full relative group">
                            <div :class="[item.to === route.path ? 'text-white bg-orange-500 md:bg-transparent md:text-orange-500' :
                                'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500',
                                'capitalize w-full h-full flex items-center gap-2 pl-4 py-2'
                            ]">{{ item.name }}<i class="fa fa-angle-down group-hover:rotate-180"></i></div>

                            <div
                                class="w-full group-hover:block hidden md:absolute top-full z-[51] bg-white md:w-40 md:shadow-lg md:py-2">
                                <!-- Hide dropdown on small screen when user navigate from dropdown -->
                                <div class="hidden md:block">
                                    <NestedDropdown :nav="item" />
                                </div>
                                <div class="block md:hidden">
                                    <NestedDropdown :nav="item" :hideDropdown="handleDropdown" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import IconUser from '../../../components/icons/IconUser.vue'
import navs from './navs'
import { onClickOutside } from '@vueuse/core'
import { useRoute } from 'vue-router';
import JRMath from '../../../components/logo/JRMath.vue';
import IcoClose from '../../../components/icons/IcoClose.vue';
import Hamburger from '../../../components/icons/Hamburger.vue';
import NestedDropdown from './NestedDropdown.vue';
import NestedDropdownMobile from './NestedDropdownMobile.vue';

const isOpenUserDD = ref(false)
const dropdown = ref(false)

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
    window.addEventListener("scroll", () => {
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