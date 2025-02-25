<script setup>
import { useSemStore } from "@/stores/semStore.js";
import { ref } from "vue";

const semStore = useSemStore();

const props = defineProps({
    currentSemester: {
        type: Number,
        default: 1,
    },
});
</script>

<template>
    <header>
        <h1 class="text-2xl select-none">
            Semester {{ currentSemester }} Study Materials
        </h1>
    </header>

    <div class="subjects-grid">
        <div
            class="subject-card w-[99%] bg-base-100 shadow-md hover:shadow-2xl scale-[0.94] hover:scale-[1] transition-transform tdelay-500 duration-550 ease-in-out"
            v-for="subject in semStore.semesterData[currentSemester]"
            :key="subject.name"
        >
            <figure></figure>
            <div class="card-body">
                <h3 class="card-title">
                    {{ subject.name }} ({{ subject.code }})
                </h3>

                <div class="materials p-1">
                    <button
                        class="material-btn btn btn-small hover:shadow-sm text-white"
                        v-for="materials in subject.materials"
                        :key="subject.materials"
                    >
                        {{ materials }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.subjects-grid {
    @apply grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-1 p-1;
}

.subject-card {
    @apply bg-base-100 hover:border-[1px] border-primary rounded-lg p-2 shadow-md;
}

.subject-card h3 {
    @apply text-base-content mb-4;
}

.materials {
    @apply grid grid-cols-2 gap-2;
}

.material-btn {
    @apply bg-dark border-none hover:shadow-xl py-2 px-4 rounded-xl uppercase cursor-pointer text-secondary-content transition-transform duration-200 ease-in-out dark:bg-[#edd];
}

.material-btn:hover {
    @apply scale-105;
}
</style>
