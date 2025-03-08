<script setup>
defineProps({
    width: {
        type: String,
        default: "32px",
    },
    height: {
        type: String,
        default: "32px",
    },
    fill: {
        type: String,
        default: "currentcolor",
    },
});
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :style="{ width: width, height: height }"
        viewBox="0 0 24 24">
        <circle cx="6" cy="6" r="6" fill="gray" />
    </svg>
</template>

<style scoped></style>
