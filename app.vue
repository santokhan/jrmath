<template>
  <NuxtLayout>
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

const route=useRoute()
console.log(route.path);
</script>

<style scoped></style>