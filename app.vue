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
import AppFooter from './layouts/footer/AppFooter.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    // User is signed in
    console.log(`User exist`)
  } else {
    // User is signed out
  }
})
</script>

<style scoped></style>