<script setup>
import { onMounted, ref, useTemplateRef } from "vue";
import CloseBtn from "@/icons/close-btn.vue";

import HamburgerIcon from "@/icons/Hamburger-Icon.vue";
import { onClickOutside } from "@vueuse/core";
import DashboardLinks from "@/dashboard/components/sidebar/DashboardLinks.vue";

defineProps({
    heading: {
        type: String,
        default: "Made by utsav",
    },
});

const emit = defineEmits(["sideBarOpend", "sideBarClosed"]);

const sideBar = ref(null);
const isSideBarActive = ref(false);
const sideBarTarget = useTemplateRef("sideBar");

function openSidebar() {
    sideBar.value.classList.remove("-translate-x-full");

    emit("sideBarOpend");
}
function closeSidebar() {
    sideBar.value.classList.add("-translate-x-full");
    emit("sideBarClosed");
}

function handleResize() {
    const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;
    if (isSmallScreen) {
        onClickOutside(sideBarTarget, () => {
            if (!isSideBarActive.value) {
                closeSidebar();
            }
        });
    }
}

onMounted(() => {
    handleResize();
    isSideBarActive.value =
        !sideBar.value.classList.contains("-translate-x-full");
});
</script>

<template>
    <div
        class="w-full shadow-md fixed z-[999] h-fit bg-white dark:bg-darkLight sm:hidden flex justify-center items-center"
    >
        <button
            @click="openSidebar"
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
            <span class="sr-only">Open sidebar</span>
            <HamburgerIcon />
        </button>

        <div class="head-text">
            {{ heading }}
        </div>

        <div
            class="inline-flex ml-auto mr-4 tooltip tooltip-info tooltip-bottom bg"
            data-tip="myinfo"
        >
            <img
                class="h-12 rounded-full w-12 p-1 border-blue-2"
                src="../../../assets_old/bishwash.jpg"
                alt=""
            />
        </div>
    </div>

    <aside
        id="logo-sidebar"
        ref="sideBar"
        class="fixed top-0 left-0 z-[999999] w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
        v-once
    >
        <div
            class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
        >
            <button
                class="flex w-full mb-1 p-4 justify-end text-gray-400 sm:hidden hover:cursor-default"
            >
                <close-btn
                    height="1.5rem"
                    width="1.5rem"
                    @click="closeSidebar"
                    class="ml-auto hover:cursor-pointer"
                ></close-btn>
            </button>
            <RouterLink to="/" class="flex items-center ps-2.5 mb-5">
                <img
                    src="../../assets/images/utsav.jpg"
                    class="h-6 me-3 sm:h-7 rounded-xl"
                    alt="Flowbite Logo"
                />
                <span
                    class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                >
                    Topper Notes
                </span>
            </RouterLink>
            <DashboardLinks />
        </div>
    </aside>
</template>

<style scoped>
aside {
    @apply border-2 border-gray-200  rounded-lg dark:border-gray-700;
}
button {
    user-select: none;
}

#logo-sidebar {
    user-select: none;
    .sidebar-item {
        @apply flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700;

        .text {
            @apply flex-1 ms-3 whitespace-nowrap;
        }
    }
}
</style>
