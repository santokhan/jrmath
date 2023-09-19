<template>
    <main v-if="isAdmin" class="grid grid-cols-1 lg:grid-cols-[15rem_auto]">
        <Sidebar :goToUserInfo="goToUserInfo" :goToVideoData="goToVideoData" :activeNav="activeNav" :NAVS="NAVS" />
        <div class="">
            <UserAccess v-if="activeNav === NAVS[0]" />
            <VideoData v-if="activeNav === NAVS[1]" />
        </div>
    </main>
    <div v-else class="text-center text-2xl text-orange-500 my-5">You don't have access to this page</div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import UserAccess from '../components/layout/admin/dashboard/UserAccess.vue';
import VideoData from '../components/layout/admin/dashboard/VideoData.vue';
import Sidebar from '../components/layout/admin/side/Bar.vue';
import admin from '../components/firebase/admin';

const NAVS = ['user-access', 'video-data']
const activeNav = ref(NAVS[1])

function goToUserInfo() {
    activeNav.value = NAVS[0]
}
function goToVideoData() {
    activeNav.value = NAVS[1]
}

const isAdmin = ref(false)
onBeforeMount(async () => {
    admin.adminValidation(bool => {
        isAdmin.value = bool
    })
})
</script>

