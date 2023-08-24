<template>
    <main class="grid grid-cols-1 lg:grid-cols-[15rem_auto]">
        <LayoutAdminSideBar :goToUserInfo="goToUserInfo" :goToVideoData="goToVideoData" :activeNav="activeNav"
            :NAVS="NAVS" />
        <div class="">
            <LayoutAdminDashboardUserAccess v-if="activeNav === NAVS[0]" />
            <LayoutAdminDashboardVideoData v-if="activeNav === NAVS[1]" />
        </div>
    </main>
</template>

<script setup lang="ts">
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