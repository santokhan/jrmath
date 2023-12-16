<template>
    <AppContainer>
        <TitleBox>
            <Tag>User Profile</Tag>
            <Heading>Welcome to profile page</Heading>
        </TitleBox>
        <section class="max-w-xl mx-auto bg-white rounded-2xl p-6 mt-4 shadow-lg">
            <div class="mt-6 w-fit mx-auto">
                <img src="../assets/images/profile/user.png" class="rounded-full w-40 h-40 border bg-gray-50" alt="profile">
            </div>

            <div class="mt-8">
                <h2 class="text-gray-800 font-semibold text-2xl tracking-wide"></h2>
                <div class="mt-8">
                    <div class="font-semibold text-lg text-gray-800">Your Details</div>
                    <table v-if="userInfo" class="w-full text-gray-700 mt-1">
                        <tbody>
                            <tr>
                                <td class="py-1.5 whitespace-nowrap" width="32%">Name</td>
                                <td class="py-1.5 col-span-2">{{ userDetails.name || '...' }}</td>
                            </tr>
                            <tr>
                                <td class="py-1.5 whitespace-nowrap">Phone</td>
                                <td class="py-1.5 col-span-2">
                                    <a :href="`tel:${userDetails.phone}`" class="hover:underline">
                                        {{ userDetails.phone }}
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-1.5 whitespace-nowrap">Email</td>
                                <td class="py-1.5 col-span-2">
                                    <a :href="`mailto:${userInfo.email}`" class="hover:underline">
                                        {{ userInfo.email || '...' }}
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="py-1.5 whitespace-nowrap">Course Access</td>
                                <td class="py-1.5 col-span-2">{{ userInfo.access || '...' }}</td>
                            </tr>
                            <tr>
                                <td class="py-1.5 whitespace-nowrap">Coin</td>
                                <td class="py-1.5 col-span-2">{{ userInfo.coin || '...' }}</td>
                            </tr>
                            <tr>
                                <td class="py-1.5 whitespace-nowrap">User Status</td>
                                <td class="py-1.5 col-span-2">
                                    <div class="col-span-2 flex items-center gap-1 text-green-500 text-sm">
                                        <span class="block w-1 h-1 bg-green-400 rounded-full"></span>Active
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="mt-8 flex items-center gap-4">
                    <Logout :handleLogout="handleLogout" />
                    <button type="button" @click="editProfile"
                        class="flex gap-2 text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm pl-3 py-2.5 pr-4 flex items-center">
                        <i class="fa fa-edit"></i> Edit Profile
                    </button>
                </div>
            </div>
        </section>

        <FreeCourses />
        <PurchasedCourses v-if="userInfo.email" :email="userInfo.email" />
    </AppContainer>

    <AddUserInfo v-if="modalOpen && !userDetails.name" :hideModal="() => { modalOpen = !modalOpen }" />
    <EditModal v-if="openEdit" :hideModal="() => { openEdit = !openEdit }" :userDetails="userDetails"
        :readUserData="readUserData" />
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Auth from '../components/firebase/auth';
import Logout from '../components/buttons/Logout.vue';
import Tag from '../components/section/Tag.vue';
import Heading from '../components/section/Heading.vue';
import AppContainer from '../components/layout/AppContainer.vue';
import TitleBox from '../components/section/TitleBox.vue';
import AddUserInfo from '../components/profile/modal/AddUserInfo.vue'
import EditModal from '../components/profile/modal/EditModal.vue'
import profile, { coin } from '../components/firebase/profile';
import { getCurrentUser } from 'vuefire';
import FreeCourses from '../ui/profile-view/FreeCourses.vue';
import PurchasedCourses from '../ui/profile-view/PurchasedCourses.vue';

const router = useRouter()
const userInfo = ref<any>({})
const userDetails = reactive<any>({})

/**
 * 1. Call here initially
 * 2. Call on update form to sync update data
 */
async function readUserData() {
    const user = await getCurrentUser()
    const email = user?.email
    if (email) {
        profile.readUser(user.email, data => {
            if (data) {
                userDetails.name = data.name
                userDetails.phone = data.phone
                userDetails.address = data.address
            } else {
                console.log(`Data not exists on database`);
            }
        })
    }
} readUserData()

Auth.currentUser().then(data => {
    userInfo.value = data

    coin.read(userInfo.value.email, data => {
        // console.log(userInfo.value.email == data.email);
        if (userInfo.value.email == data.email) {
            userInfo.value.coin = data.coin
        }
    })
})

function handleLogout() {
    Auth.signOut(() => {
        router.push('/signin')
    })
}

const modalOpen = ref(false)
setTimeout(() => {
    modalOpen.value = true
}, 2000);

// edit
const openEdit = ref(false)
function editProfile() {
    openEdit.value = true
}
</script>

