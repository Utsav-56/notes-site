<script setup>

import { ref } from "vue";
import utsavImg from "@/assets/images/utsav.jpg";


const base_img_dir = "./assets/images";


const devList = ref([
  {
    name: "Utsav Pokharel",
    role: "Lead Contributor",
    img: utsavImg,
  }

]);


</script>

<template>


  <header>

    <h1 class="text-2xl my-8 ">
    Made with ❤️ by our Developers
    </h1>

  </header>
<div class="info-grid">
    <div class="grid-child" v-for="dev in devList" :key="dev.name">
        <img :src="dev.img"
              :alt="`${dev.name} - ${dev.role}`"
             class="contributor-img">
        <h3 class="name"> {{dev.name}} </h3>
        <p class="role">{{dev.role}}</p>
        <p class="role">BCA Student</p>
    </div>

</div>

</template>

<style scoped>

.contributor-img{
  @apply w-44 h-44 rounded-full mb-6 object-cover border-4 border-gray-700 hover:border  shadow-lg transition-all
}

.info-grid{
  @apply grid grid-cols-1 430p:grid-cols-2  sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8;
}

.grid-child{
  @apply flex flex-col items-center transition-transform hover:-translate-y-2;
}

.name{
  @apply text-xl font-semibold mb-2;
}

.role{
  @apply text-gray-600 dark:text-gray-400;
}

</style>