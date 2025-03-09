<script setup>
import NavSidebar from "@/components/sidebar/Nav-Sidebar.vue";
import { useAuthStore } from "@/stores/authStore.js";

const authStore = useAuthStore();


authStore.checkAuth();

</script>

<template>
    <nav-sidebar></nav-sidebar>

    <main ref="mainBody" class="">
        <RouterView></RouterView>
    </main>
</template>
<style scoped>
main {
    @apply px-4 sm:ml-64 pt-14 sm:pt-4 pb-2;

    #main-container {
        @apply p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700;
    }
}
</style>
