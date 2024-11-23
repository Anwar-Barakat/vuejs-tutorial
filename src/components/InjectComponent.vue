<template>
  <div>
    <h1>Inject Component</h1>
    <p>Name: {{ userInfo.name }}</p>
    <p>Age: {{ userInfo.age }}</p>
    <p>Email: {{ userInfo.email }}</p>
  </div>
</template>

<script setup>
import { inject } from "vue";

const userInfo = inject("userInfo");
</script>

<style lang="scss" scoped></style>
