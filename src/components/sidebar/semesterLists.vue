<script setup>
import { ref } from "vue";
import ArrowDownIcon from "@/icons/ArrowDown-icon.vue";

const isListOpen = ref(false);
const listDropdown = ref();

function toggleList() {
  listDropdown.value.classList.toggle("hidden");
  isListOpen.value = !isListOpen.value;
}
</script>

<template>
  <div class="relative">
    <button
      @click="toggleList"
      type="button"
      class="flex items-center justify-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      aria-controls="dropdown-example"
      data-collapse-toggle="dropdown-example"
    >
      <svg
        class="shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="32"
        height="32"
        viewBox="0 0 24 24"

      >
        <path
          d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
        />
      </svg>
      <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
        Semesters
      </span>
      <ArrowDownIcon />
    </button>
    <ul
      id="dropdown-example"
      ref="listDropdown"
      class="hidden abs py-2 space-y-2"
    >
      <li>
        <router-link to="/sem/all" class="nav-inner-dropdown-item group">
          All Semesters
        </router-link>
      </li>
      <li v-for="semester in 8" :key="semester">
        <router-link
          :to="`/sem${semester}`"
          class="nav-inner-dropdown-item group"
        >
          Semester {{ semester }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav-inner-dropdown-item {
  @apply flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700;
}
</style>