<script setup>
import Sidebar from "@/components/Sidebar.vue";
import NavSidebar from "@/components/sidebar/Nav-Sidebar.vue";
import { ref } from "vue";
import SemesterSubjectCard from "@/components/subjectCards/SemesterSubjectCard.vue";
import DevsCarousel from "@/components/contributors/DevsCarousel.vue";
import AllSemesterMaterialsCard from "@/components/subjectCards/AllSemesterMaterialsCard.vue";


</script>

<template>
  <section class=" text-primary dark:text-gray-300 py-20 px-6 text-center">

    <h1 class="text-4xl                 md:text-6xl font-bold mb-4">Welcome to Topper Notes</h1>
    <p class="text-lg md:text-2xl mb-8">Your one-stop destination for quality study materials for BCA, curated by passionate learners and educators.</p>
    <a href="#contributors" class="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-gray-100 transition">Meet the Contributors</a>
  </section>

  <AllSemesterMaterialsCard />

  <section id="contributors">

  <DevsCarousel></DevsCarousel>
  </section>

  <footer class="bg-gray-800 text-white text-center py-6">
    <p>&copy; 2025 Utsav-56. All rights reserved.</p>
  </footer>
</template>

<style scoped>

</style>
