<template>
    <div class="flex space-x-5 sm:justify-start items-center">
        <a :href="`tel:${props.links.whatsApp}`" class="text-orange-500 hover:text-orange-700">
            <i class="fa fa-phone"></i><span class="sr-only">YouTube</span>
        </a>
        <a :href="props.links.facebook" class="text-orange-500 hover:text-orange-700"><svg class="w-4 h-4"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
            </svg><span class="sr-only">Facebook</span>
        </a>
        <a :href="whatsApp(props.links.whatsApp)" class="text-orange-500 hover:text-orange-700"><svg class="w-4 h-4"
                viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                    d="M40 0C17.91 0 0 17.91 0 40C0 47.504 2.1078 54.5002 5.70312 60.5013L0.358073 80L20.2734 74.7721C26.0978 78.0835 32.8216 80 40 80C62.09 80 80 62.09 80 40C80 17.91 62.09 0 40 0ZM26.3086 21.3411C26.9586 21.3411 27.6265 21.3372 28.2031 21.3672C28.9165 21.3839 29.6929 21.4361 30.4362 23.0794C31.3195 25.0328 33.2429 29.933 33.4896 30.4297C33.7362 30.9264 33.911 31.5115 33.5677 32.1615C33.241 32.8281 33.0711 33.2316 32.5911 33.8216C32.0945 34.3949 31.5503 35.107 31.1003 35.5404C30.6036 36.037 30.0907 36.5816 30.6641 37.5716C31.2374 38.5616 33.2285 41.8071 36.1719 44.4271C39.9552 47.8071 43.1473 48.8458 44.1406 49.3424C45.134 49.8391 45.7092 49.7617 46.2826 49.0951C46.8726 48.4451 48.7604 46.2147 49.4271 45.2214C50.0771 44.228 50.7406 44.3999 51.6406 44.7266C52.554 45.0532 57.4246 47.4526 58.418 47.9492C59.4113 48.4459 60.0625 48.6917 60.3125 49.0951C60.5692 49.5117 60.5694 51.4953 59.7461 53.8086C58.9228 56.1186 54.8797 58.3524 53.0664 58.5091C51.2364 58.6791 49.5285 59.3317 41.1719 56.0417C31.0919 52.0717 24.7349 41.7474 24.2383 41.0807C23.7416 40.4307 20.2018 35.713 20.2018 30.8464C20.2018 25.963 22.7622 23.5715 23.6589 22.5781C24.5722 21.5848 25.6419 21.3411 26.3086 21.3411Z" />
            </svg><span class="sr-only">WhatsApp</span>
        </a>
        <a :href="`mailto:${props.links.gmail}`" class="text-orange-500 hover:text-orange-700">
            <i class="fa fa-envelope"></i><span class="sr-only">WhatsApp</span>
        </a>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ links: { facebook: string, whatsApp: string, youtube: string, gmail: string } }>()
const whatsApp = (num: string) => `https://wa.me/+88${num}`
</script>

<style scoped></style>