<script>
export default {
    name: "copy-icon",
    props: {
        width: {
            type: String,
            default: "1em",
        },
        height: {
            type: String,
            default: "1em",
        },
        fill: {
            type: String,
            default: "currentColor",
        },
    },
};
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :style="{ width: width, height: height }"
        viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12z" />
    </svg>
</template>

<style scoped></style>
