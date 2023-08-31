<template>
    <section>
        <LayoutAppContainer>
            <SectionTitleBox>
                <SectionTag>User Profile</SectionTag>
                <SectionHeading>Welcome to profile page</SectionHeading>
            </SectionTitleBox>

            <section class="max-w-xl mx-auto bg-white rounded-2xl px-8 py-6 mt-4 shadow-lg">
                <div class="mt-6 w-fit mx-auto">
                    <img src="../assets/images/profile/user.jpg" class="rounded-full w-32 h-32 border bg-gray-50"
                        alt="profile picture" srcset="">
                </div>

                <div class="mt-8 ">
                    <h2 class="text-gray-800 font-semibold text-2xl tracking-wide">{{ name }}</h2>

                    <div class="mt-8">
                        <div class="font-semibold">Details</div>
                        <div class="mt-2">Email: {{ email }}</div>
                        <div class="mt-2">Course Access: {{ access }}</div>
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
const email = ref('')
const name = ref('User Name')
const access = ref('')

function handleLogout() {
    Auth.signOut(() => {
        router.push('/signin')
    })
}
</script>

<style scoped></style>