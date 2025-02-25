import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

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
      component: () => import("@/pages/SignupPage.vue"),
    },
    {
      path: "/notes",
      name: "notes",
      component: () => import("@/components/NotesPage.vue"),
    },
  ],
});

export default router;
