<template>
  <InjectComponent />
</template>

<script setup>
import { provide } from "vue";
import InjectComponent from "./InjectComponent.vue";

provide('userInfo',{
    name: 'John Doe',
    age: 25,
    email: "anwar@gmail.com"
})
</script>

<style lang="scss" scoped></style>
