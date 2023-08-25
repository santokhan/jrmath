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

// const route=useRoute()
// console.log(route.path);

// useHead({
//   script: [
//     {
//       async: true,
//       crossorigin: 'anonymous',
//       nonce: "o4MQP2Ol",
//       src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0&appId=1007372200681464&autoLogAppEvents=1",
//     },
//   ]
// })
</script>

<style scoped></style>