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
import PaymentView from '../views/PaymentView.vue'
import sanityAPI from '../api/sanity'
import checkUserAccess from '../components/courses/playlist/check-user-access'
import ToolsView from '../views/ToolsView.vue'
import BlogView from '../views/BlogView.vue'
import DummyVideos from '../views/coureses/DummyVideos.vue'
import { getCourseVisibilityById } from '../sanity/sanityClient'
import { valid } from '../global/functions'

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
    {
        path: '/payment',
        name: 'payment',
        component: PaymentView
    },
    {
        path: '/tools',
        name: 'tools',
        component: ToolsView
    },
    {
        path: '/blogs/:blogId',
        name: 'blogs',
        component: BlogView
    },
    {
        path: '/dummy',
        name: 'dummy',
        component: DummyVideos
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
        name: "playlist",
        component: PlayListView,
        meta: {
            requiresAuth: true, // It will be true in production mode
            courseAccess: true, // It will be true in production mode
        }
    },
    // Authorization
    {
        path: '/profile',
        name: "profile",
        component: ProfileView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/signin',
        name: "signin",
        component: SignInView,
        meta: {
            requiresAuth: false,
        }
    },
    // Admin
    {
        path: '/admin',
        name: "admin",
        component: AdminView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/update-video/:id',
        component: UpdateFormView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/referral/:id',
        component: ReferralView,
        meta: {
            requiresAuth: true,
        }
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
    if (to.meta.requiresAuth === true) {
        const currentUser = await getCurrentUser();
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

        if (to.meta.courseAccess === true) {
            const courseId = to.params.courseId; // must have courseId on URL path

            if (!courseId) throw new Error("courseId is not defined");

            const visibility = await getCourseVisibilityById(valid(courseId));
            if (visibility === 'public') return; // if course is public then no need to check access

            const data = await sanityAPI.getCourseTitle2(valid(courseId));
            const courseTitle = data[0].title
            if (!courseTitle) return { name: "signin" };
            // check access
            const access = await checkUserAccess(courseTitle);
            if (!access) {
                console.log(courseTitle);
                // user trying to enter on this router directly using url
                // user can not find this route if don't have access
                return { name: "payment" };
            }
        }
    }
})