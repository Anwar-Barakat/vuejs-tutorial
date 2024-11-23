<template>
    <h1 class="text-red">
        hello again
    </h1>
</template>

<script setup>
    import { ref } from 'vue';
    const count = ref(0);
</script>

<style scoped>
    .text-red {
        color: red;
    }
</style>