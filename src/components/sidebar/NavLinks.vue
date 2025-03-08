<script setup>
import { ref } from "vue";
import NewsIcon from "@/icons/News-icon.vue";
import HomeIcon from "@/icons/Home-icon.vue";
import LoginIcon from "@/icons/Login-icon.vue";
import SignupIcon from "@/icons/Signup-icon.vue";
import SemesterLists from "@/components/sidebar/semesterLists.vue";

const menuItems = [
    { to: "/", label: "HomePage", icon: HomeIcon },
    { to: "/news", label: "News", icon: NewsIcon, badge: 3 },
    { to: "/login", label: "Sign In", icon: LoginIcon },
    { to: "/signup", label: "Sign Up", icon: SignupIcon },
];
</script>

<template>
    <ul class="space-y-2 font-medium">
        <li v-for="(item, index) in menuItems" :key="index">
            <RouterLink :to="item.to" class="sidebar-item group">
                <component :is="item.icon" v-if="item.icon" />
                <span class="ms-3">{{ item.label }}</span>
                <span
                    v-if="item.badge"
                    class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {{ item.badge }}
                </span>
            </RouterLink>
            <!-- Insert semester-lists component after the first item -->
            <semester-lists v-if="index === 0"></semester-lists>
        </li>
    </ul>
</template>

<style scoped>
svg {
    width: 28px;
    height: 28px;
}

.sidebar-item {
    @apply flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700;

    .text {
        @apply flex-1 ms-3 whitespace-nowrap;
    }
}
.router-link-exact-active {
    background: rgba(178, 182, 174, 0.41);
}
</style>
