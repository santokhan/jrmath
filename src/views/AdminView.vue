<template>
    <main class="grid grid-cols-1 lg:grid-cols-[15rem_auto]">
        <Sidebar :goToUserInfo="goToUserInfo" :goToVideoData="goToVideoData" :activeNav="activeNav"
            :NAVS="NAVS" />
        <div class="">
            <UserAccess v-if="activeNav === NAVS[0]" />
            <VideoData v-if="activeNav === NAVS[1]" />
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserAccess from '../components/layout/admin/dashboard/UserAccess.vue';
import VideoData from '../components/layout/admin/dashboard/VideoData.vue';
import Sidebar from '../components/layout/admin/side/Bar.vue';

const NAVS = ['user-access', 'video-data']
const activeNav = ref(NAVS[1])

function goToUserInfo() {
    activeNav.value = NAVS[0]
}
function goToVideoData() {
    activeNav.value = NAVS[1]
}
</script>

<style scoped></style>