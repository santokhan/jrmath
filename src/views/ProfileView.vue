<template>
    <section>
        <AppContainer>
            <TitleBox>
                <Tag>User Profile</Tag>
                <Heading>Welcome to profile page</Heading>
            </TitleBox>
            <section class="max-w-xl mx-auto bg-white rounded-2xl p-6 mt-4 shadow-lg">
                <div class="mt-6 w-fit mx-auto">
                    <img src="../assets/images/profile/user.jpg" class="rounded-full w-40 h-40 border bg-gray-50"
                        alt="profile picture" srcset="">
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
                    <div class="mt-8">
                        <Logout :handleLogout="handleLogout" />
                    </div>
                </div>
            </section>
        </AppContainer>
    </section>

    <AddUserInfo v-if="modalOpen && !userDetails.name" />
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
import profile, { coin } from '../components/firebase/profile';
import { getCurrentUser } from 'vuefire';

const router = useRouter()
const userInfo = ref<any>({})
const userDetails = reactive<any>({})

const currentUser = getCurrentUser()
currentUser.then(user => {
    if (user?.email) {
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
}).catch(err => { console.log(err) })

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
</script>

