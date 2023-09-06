import auth from "../components/firebase/auth"

export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = await auth.currentUser()

    // console.log(useNuxtApp())    

    // if user exists
    if (to.path === '/signin') {
        // If redirected from courses of profile
        if (user) {
            if (to.redirectedFrom) {
                return navigateTo(to.redirectedFrom.path)
            } else {
                return navigateTo('/profile')
            }
        }
    }

    if (to.path === '/signup') {
        if (user) {
            return navigateTo("/profile")
        }
    }

    if (to.path === '/profile' || to.path === '/courses' || to.path === '/courses/nuh' || to.path === '/courses/duac') {
        if (!user) {
            return navigateTo("/signin")
        }
    }
})