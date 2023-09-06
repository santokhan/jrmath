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
import auth from '../components/firebase/auth';

const router = useRouter()

const NAVS = ['user-access', 'video-data']
const activeNav = ref(NAVS[1])

function goToUserInfo() {
    activeNav.value = NAVS[0]
}
function goToVideoData() {
    activeNav.value = NAVS[1]
}

// Require authentication
definePageMeta({
    middleware: [
        function (to, from) {
            if (to.path === '/admin') {
                auth.observer((user) => {
                    // Current user exists
                    // Redirect to requested path 
                    router.push('/profile')
                })
            }
        },
    ],
});
</script>

<style scoped></style>