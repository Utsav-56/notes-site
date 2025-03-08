<script setup></script>

<template>
    <header>
        <h1 class="text-2xl mb-8 select-none">Study Materials</h1>
    </header>

    <div
        class="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <router-link
            v-for="semester in 8"
            :to="`/sem${semester}`"
            class="semesteer-btns">
            Semester {{ semester }}
        </router-link>
    </div>
</template>

<style scoped>
.semesteer-btns {
    @apply dark:bg-white bg-gray-100 text-primary p-4 px-8 rounded-xl shadow hover:shadow-2xl transition-all scale-95 hover:scale-100 opacity-80 hover:opacity-100;
}
</style>
