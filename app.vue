<template>
  <NuxtLayout>
    <!-- <div id="fb-root"></div> -->
    <Topbar />
    <Navbar />
    <NuxtPage></NuxtPage>
    <AppFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
import Topbar from './layouts/header/topbar/Topbar.vue'
import Navbar from './layouts/header/navbar/Navbar.vue'
import AppFooter from './layouts/footer/AppFooter.vue'
import auth from './components/firebase/auth';

auth.observer((user) => {
    if (user) {
        // console.log(getAuth().currentUser);
    }
})
</script>

<style scoped></style>