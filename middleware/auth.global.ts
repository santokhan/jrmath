import { getAuth } from "firebase/auth";
import auth from "../components/firebase/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = await auth.currentUser()

    if (to.path === '/courses') {
        if (!user) {
            return navigateTo("/signin")
        }
    }

    if (to.path === '/profile') {
        if (!user) {
            return navigateTo("/signin")
        }
    }

    if (to.path === '/signin') {
        if (user) {
            // If redirected from courses of profile
            if (to.redirectedFrom) {
                return navigateTo(to.redirectedFrom.path)
            }else{
                return navigateTo("/profile")
            }
        }
    }
})