import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import { useAuthStore } from "@/stores/authStore.js";

const routes = [
    { path: "/", name: "home", component: HomePage },
    {
        path: "/sem:currentSemester",
        name: "semester",
        component: () =>
            import("@/components/subjectCards/SemesterSubjectCard.vue"),
        props: true,
    },
    {
        path: "/sem/all",
        name: "allSemesters",
        component: () => import("@/pages/SemesterPage.vue"),
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import("@/pages/SignUpPage.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/pages/LoginPage.vue"),
    },
    {
        path: "/notes",
        name: "notes",
        component: () => import("@/components/NotesPage.vue"),
    },
    {
        path: "/news",
        name: "news",
        component: () => import("@/pages/NewsPage.vue"),
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/dashboard/Dashboard.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});


// Navigation Guard
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

    // If the user is logged in and tries to access signup or login, redirect to home or dashboard
    if ((to.name === 'signup' || to.name === 'login') && authStore.isLoggedIn) {
        next({ name: 'home' }); // or 'dashboard' based on your app's structure
    } else {
        next();  // Allow the navigation
    }
});



export default router;
