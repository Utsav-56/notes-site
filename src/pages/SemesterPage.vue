<script setup>
import { useSemStore } from "@/stores/semStore.js";
import { ref } from "vue";
import SemesterSubjectCard from "@/components/subjectCards/SemesterSubjectCard.vue";
import NoteCard from "@/components/notes/NoteCard.vue";

const semStore = useSemStore();
</script>

<template>





    <SemesterSubjectCard
        v-for="(subjects, semesterNumber) in semStore.semesterData"
        :key="semesterNumber"
        :currentSemester="semesterNumber"
    />
</template>

<style scoped></style>
