<template>
    <main v-if="isAdmin" class="grid grid-cols-1 lg:grid-cols-[15rem_auto]">
        <Sidebar :goToUserInfo="goToUserInfo" :activeNav="activeNav" :NAVS="NAVS" />
        <div class="">
            <UserAccess v-if="activeNav === NAVS[0]" />
        </div>
    </main>
    <div v-else class="text-center text-2xl text-orange-500 my-5">You don't have access to this page</div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import UserAccess from '../components/layout/admin/dashboard/UserAccess.vue';
import Sidebar from '../components/layout/admin/side/Bar.vue';
import admin from '../components/firebase/admin';

const NAVS = ['user-access']
const activeNav = ref(NAVS[0])

function goToUserInfo() {
    activeNav.value = NAVS[0]
}

const isAdmin = ref(false)
onBeforeMount(async () => {
    admin.adminValidation(bool => {
        isAdmin.value = bool
    })
})
</script>

