<template>
    <section>
        <LayoutAppContainer>
            <SectionTitleBox>
                <SectionTag>User Profile</SectionTag>
                <SectionHeading>Welcome to profile page</SectionHeading>
            </SectionTitleBox>
            <div>
                <div class="font-medium">User Id: {{ email }}</div>
                <div class="mt-8">
                    <button type="button" @click="handleLogout"
                        class="focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5">Logout</button>
                </div>
            </div>
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
import Auth from '../components/firebase/auth';

const router = useRouter()
const email = ref('')

Auth.observer((props) => {
    if (props.uid) {
        email.value = props.email
        // router.replace("/profile")
    }
})

function handleLogout() {
    Auth.signOut(() => {
        router.push('/signin')
    })
}
</script>

<style scoped></style>