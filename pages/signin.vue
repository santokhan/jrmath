<template>
    <section>
        <LayoutAppContainer>
            <FormSignIn />          
        </LayoutAppContainer>
    </section>
</template>

<script setup lang="ts">
import Auth from '../components/firebase/auth';

const router = useRouter()

onBeforeMount(() => {
    Auth.observer((props: any) => {
        if (props.uid) {
            // console.log(uid)
            router.replace("/profile")
        }
    })
})

// Navigation guard middleware
// definePageMeta({
//     middleware: [
//         function (to, from) {
//             if (to.path === '/signin') {

//                 return navigateTo('/courses')
//             }
//         },
//         // 'auth',
//     ],
// });
</script>

<style scoped></style>