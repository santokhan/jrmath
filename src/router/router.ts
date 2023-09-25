import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoursesView from '../views/CoursesView.vue'
import QuestionBankView from '../views/QuestionBankView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ProfileView from '../views/ProfileView.vue'
import SignInView from '../views/SignInView.vue'
import AdminView from '../views/AdminView.vue'
import { getCurrentUser } from 'vuefire'
import UpdateFormView from '../views/coureses/UpdateFormView.vue'
import IndividualCourseView from '../views/coureses/IndividualCourseView.vue'
import PlayListView from '../views/coureses/PlayListView.vue'
import ReferralView from '../views/ReferralView.vue'
import NoticeView from '../views/NoticeView.vue'

const routes_public = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/courses',
        component: CoursesView,
    },
    {
        path: '/about',
        component: AboutView
    },
    {
        path: '/contact',
        component: ContactView
    },
    {
        path: '/question-bank',
        component: QuestionBankView
    },
    {
        path: '/nuh-notice',
        component: NoticeView
    },
]

const routes_protected = [
    // Courses
    {
        path: '/courses/:course/:year/',
        component: CoursesView, // it will be card view
    },
    {
        path: '/courses/:course/:year/:id',
        component: IndividualCourseView,
    },
    {
        path: '/playlist/:course/:year/:courseId/',
        component: PlayListView, // this view will removed when we will get videoId 
        // we will check `currentUser` inside `PlayListView` component
    },
    {
        path: '/playlist/:course/:year/:courseId/:videoId',
        component: PlayListView,
        meta: { requiresAuth: false } // It will be true in production mode
    },
    // Authorization
    {
        path: '/profile',
        component: ProfileView,
        meta: { requiresAuth: true }
    },
    {
        path: '/signin',
        component: SignInView,
        meta: { requiresAuth: false }
    },
    // Admin
    {
        path: '/admin',
        component: AdminView,
        meta: { requiresAuth: true }
    },
    {
        path: '/update-video/:id',
        component: UpdateFormView,
        meta: { requiresAuth: true }
    },
    {
        path: '/referral/:id',
        component: ReferralView,
        meta: { requiresAuth: true }
    },
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes: [...routes_public, ...routes_protected], // short for `routes: routes`
})

router.beforeEach(async (to, from) => {
    // routes with `meta: { requiresAuth: true }` will check for
    // the users, others won't
    if (to.meta.requiresAuth) {
        const currentUser = await getCurrentUser()
        // if the user is not logged in, redirect to the login page
        if (!currentUser) {
            return {
                path: '/signin',
                query: {
                    // we keep the current path in the query so we can
                    // redirect to it after login with
                    // `router.push(route.query.redirect || '/')`
                    redirect: to.fullPath,
                },
            }
        }
    }
})