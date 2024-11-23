<template>
  <div>
    <h1>{{ fullName }}</h1>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const firstName = ref("John");
const lastName = ref("Doe");

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});
</script>
