<script setup>
defineProps({
    width: {
        type: String,
        default: "1em",
    },
    height: {
        type: String,
        default: "1em",
    },
    color: {
        type: String,
        default: "currentColor",
    },
    classes: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :style="{ width: width, height: height }"
        viewBox="0 0 24 24"
        :class="classes">
        <path
            fill="currentColor"
            d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z" />
    </svg>
</template>

<style scoped></style>
