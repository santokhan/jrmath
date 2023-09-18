<script setup lang="ts">
import Topbar from './layouts/header/topbar/Topbar.vue'
import Navbar from './layouts/header/navbar/Navbar.vue'
import AppFooter from './layouts/footer/AppFooter.vue'
import auth from './components/firebase/auth'
import { getCurrentUser } from 'vuefire';
import { useRouter } from 'vue-router';
import getSheetsData from './google-sheets/googleSheetsAPI'

const router = useRouter()

async function singleUser() {
  const currentUser = await getCurrentUser()
  if (currentUser) {
    if (currentUser.uid) {
      auth.activeDevice(currentUser.uid, () => {
        router.push('/signin')
      })

      setInterval(() => {
        auth.activeDevice(currentUser.uid, () => {
          router.push('/signin')
        })
      }, 30000)
    }
  }
}
singleUser()
</script>

<template>
  <Topbar />
  <Navbar />
  <RouterView></RouterView>
  <AppFooter />
</template>

<style scoped></style>
