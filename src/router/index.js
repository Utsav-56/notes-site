import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import { useRouteStore } from "@/stores/routeStore.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
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
    ],
});

//
// router.beforeEach((to, from, next) => {
//     const routeStore = useRouteStore();
//     if (to.name === "dashboard") {
//         routeStore.setInDashboard(true);
//     } else {
//         routeStore.setInDashboard(false);
//     }
//     next();
// });

export default router;
