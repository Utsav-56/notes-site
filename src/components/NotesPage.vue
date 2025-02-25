<script setup>
import { useSemStore } from "@/stores/semStore.js";
import { ref } from "vue";

const semStore = useSemStore();

const selectedSemester = ref(0);
const selectedSubject = ref(0);
</script>

<template>
    <!-- Header -->
    <header class="shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-300">
                Upload Notes
            </h1>
        </div>
    </header>

    <!-- Main Content -->
    <main
        class="max-w-4xl mx-auto mt-10 dark:bg-gray-800 dark:text-gray-100 shadow-lg rounded-lg p-8"
    >
        <form id="blogForm" class="space-y-6">
            <!-- Photo Upload -->

            <div class="flex items-center justify-center w-full">
                <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                    <div
                        class="flex flex-col items-center justify-center pt-5 pb-6"
                    >
                        <svg
                            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>
                        <p
                            class="mb-2 text-sm text-gray-500 dark:text-gray-400"
                        >
                            <span class="font-semibold">Click to upload</span>
                            or drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div>

            <!-- Material Type -->
            <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label for="material-type">Material Type</label>
                    <select
                        id="material-type"
                        class="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    >
                        <option value="notes">Notes</option>
                        <option value="question-paper">Question Paper</option>
                        <option value="syllabus">MCQS</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div>
                    <label for="semester">Semester:</label>
                    <select
                        id="semester"
                        v-model="selectedSemester"
                        @change="selectedSubject = 0"
                        class="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    >
                        <option value="0" disabled>Select Semester</option>
                        <option
                            v-for="semester in 8"
                            :key="semester"
                            :value="semester"
                        >
                            Semester {{ semester }}
                        </option>
                    </select>
                </div>
                <div>
                    <label for="subject">Subject</label>
                    <select
                        id="subject"
                        v-model="selectedSubject"
                        @change="console.log(selectedSubject)"
                        class="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    >
                        <option value="0" disabled>Select Subject</option>
                        <option
                            v-if="selectedSemester != 0"
                            v-for="subjects in semStore.getSemSubjects(
                                selectedSemester,
                            )"
                            :key="subjects"
                            :value="subjects[1]"
                        >
                            {{ subjects[0] }}
                        </option>
                    </select>
                </div>
            </div>

            <!-- Title Input -->
            <div>
                <label
                    for="title"
                    class="block text-sm font-medium text-gray-700"
                >
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter blog title..."
                    class="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                />
            </div>

            <!-- Short Description -->
            <div>
                <label
                    for="description"
                    class="block text-sm font-medium text-gray-700"
                >
                    Short Description
                </label>
                <textarea
                    id="description"
                    rows="3"
                    placeholder="Write a short description..."
                    class="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
            </div>

            <!-- Uploader Name & Date -->
            <!--        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">-->
            <!--          <div>-->
            <!--            <label for="uploaderName" class="block text-sm font-medium text-gray-700">Uploader Name</label>-->
            <!--            <input type="text" id="uploaderName" placeholder="Uploader's name"-->
            <!--                   class="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500">-->
            <!--          </div>-->
            <!--          <div>-->
            <!--            <label for="uploadDate" class="block text-sm font-medium text-gray-700">Date</label>-->
            <!--            <input type="date" id="uploadDate"-->
            <!--                   class="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500">-->
            <!--          </div>-->
            <!--        </div>-->

            <!-- Submit Button -->
            <div>
                <button
                    type="button"
                    onclick="displayBlogPost()"
                    class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
                >
                    Post Blog
                </button>
            </div>
        </form>

        <!-- Blog Post Preview -->
        <div id="blogPostPreview" class="hidden mt-10 border-t pt-10">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">
                📸 Blog Preview
            </h2>
            <div class="space-y-4">
                <img
                    id="previewImage"
                    src=""
                    alt="Uploaded Image"
                    class="w-full h-64 object-cover rounded-lg shadow"
                />
                <h3
                    id="previewTitle"
                    class="text-xl font-semibold text-gray-900"
                ></h3>
                <p id="previewDescription" class="text-gray-700"></p>
                <p class="text-sm text-gray-500">
                    Uploaded by:
                    <span id="previewUploader"></span>
                    on
                    <span id="previewDate"></span>
                </p>
                <a
                    id="downloadBtn"
                    href="#"
                    download
                    class="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow"
                >
                    ⬇️ Download Photo
                </a>
            </div>
        </div>
    </main>
</template>

<style scoped>
* {
    @apply dark:text-gray-100;
}
</style>
