import { getAuth } from "firebase/auth";
import auth from "../components/firebase/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = await auth.currentUser()

    // if user not exists
    if (!user) {
        if (to.path === '/profile') {
            await navigateTo("/signin")
        }
        if (to.path === '/courses') {
            await navigateTo("/signin")
        }
        if (to.path === '/courses/nuh') {
            await navigateTo("/signin")
        }
        if (to.path === '/courses/duac') {
            await navigateTo("/signin")
        }
    } else {
        // if user exists
        if (to.path === '/signin') {
            // If redirected from courses of profile
            if (to.redirectedFrom) {
                await navigateTo(to.redirectedFrom.path)
            } else {
                await navigateTo("/profile")
            }
        }
        if (to.path === '/signup') {
            await navigateTo("/profile")
        }
    }
})