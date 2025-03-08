<script setup>
import NewsBar from "@/components/news/NewsBar.vue";
import SortByOptions from "@/components/news/SortByOptions.vue";
import NoteCard from "@/components/notes/NoteCard.vue";
</script>

<template>
    <NoteCard></NoteCard>

    <!--    <section id="news-page">-->
    <!--        <div class="mb-8">-->
    <!--            <h1>News</h1>-->
    <!--        </div>-->
    <!--        <SortByOptions />-->

    <!--        <news-bar v-for=" in 90"></news-bar>-->
    <!--    </section>-->
</template>

<style scoped>
#news-page {
    @apply p-8;
}

h1 {
    @apply text-2xl;
}
</style>
