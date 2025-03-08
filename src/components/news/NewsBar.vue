<script setup></script>

<template>
    <div class="news-bar h-fit mb-4">
        <div class="news-bar__container flex gap-4">
            <div
                class="date flex flex-col items-center text-black text-xl bg-yellow-300 p-4 h-15 w-15">
                <h1 class="day">9</h1>
                <h4 class="month">May</h4>
            </div>
            <div class="news-content p-4">
                <h1 class="news-title text-2xl">News Title</h1>
                <p class="news-description text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quidem.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.news-bar {
    @apply bg-gray-50 dark:bg-gray-900  scale-[99%] transition-transform duration-200 ease-in-out;

    &:hover {
        @apply dark:bg-gray-600 border-gray-400 border-0 shadow-xl scale-[100%];
    }
}
</style>
