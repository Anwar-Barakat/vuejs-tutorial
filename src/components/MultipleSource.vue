<template>
  <div>
    <h1>{{ username }}</h1>
    <input type="text" v-model="username" />
    <h1>{{ counter }}</h1>
    <button @click="counter++">Increase</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const username = ref("");
const counter = ref(0);

watch([username, counter], ([newUsername, newCounter], [oldUsername, oldCounter]) => {
  console.log(`newUsername: ${newUsername}, oldUsername: ${oldUsername}`);
  console.log(`newCounter: ${newCounter}, oldCounter: ${oldCounter}`);
});
</script>

<style lang="scss" scoped></style>
