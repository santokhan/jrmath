<template>
    <section>
        <LayoutAppContainer>
            <SectionTitleBox>
                <SectionTag>User Profile</SectionTag>
                <SectionHeading>Welcome to profile page</SectionHeading>
            </SectionTitleBox>

            <section class="max-w-xl mx-auto bg-white rounded-2xl px-8 py-6 mt-4 shadow-lg">
                <div class="mt-6 w-fit mx-auto">
                    <img src="../assets/images/profile/user.jpg" class="rounded-full w-40 h-40 border bg-gray-50"
                        alt="profile picture" srcset="">
                </div>

                <div class="mt-8 ">
                    <h2 class="text-gray-800 font-semibold text-2xl tracking-wide"></h2>

                    <div class="mt-8">
                        <div class="font-semibold text-lg text-gray-800">Your Details</div>
                        <div v-if="userInfo" class="grid grid-cols-3 gap-2 my-3 text-gray-600">
                            <div class="font-medium">Email:</div>
                            <div class="col-span-2">{{ userInfo.email }}</div>
                            <div class="font-medium">Course Access:</div>
                            <div class="col-span-2">{{ userInfo.access || '[ ]' }}</div>
                            <div class="font-medium">User Status:</div>
                            <div class="col-span-2 flex items-center gap-1">
                                <span class="block w-1 h-1 bg-green-400 rounded-full"></span>
                                <span class="text-green-400 text-sm">Active</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8">
                        <ButtonsLogout :handleLogout="handleLogout" />
                    </div>
                </div>
            </section>
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
import Auth from '../components/firebase/auth';

const router = useRouter()
const userInfo = ref<any>({})

Auth.currentUser().then(data => {
    userInfo.value = data
})

function handleLogout() {
    Auth.signOut(() => {
        router.push('/signin')
    })
}
</script>

<style scoped></style>