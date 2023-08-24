<template>
    <div class="relative">
        <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" ref="buttonRef"
            @click="handleDropdown" data-dropdown-trigger="hover"
            class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center"
            type="button">Access <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </button>

        <!-- Dropdown menu -->
        <div id="dropdownDelay" v-if="dropdown" ref="accessButton"
            class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-0 top-10">
            <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDelayButton">
                <li v-for="(item, index) in ['nuh', 'duac']" :key="index">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 uppercase font-medium">{{ item }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const dropdown = ref(false)
const accessButton = ref(null)
const buttonRef = ref(null)

function handleDropdown() {
    dropdown.value = !dropdown.value

    onClickOutside(accessButton, () => {
        dropdown.value = false
    }, { ignore: [buttonRef] })
}
</script>

<style scoped></style>