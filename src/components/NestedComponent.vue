<script setup>
// define props
const msg = "Hello Vue 3 + Vite + TypeScript";
console.log("HelloComponent loaded");
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
}
p {
  color: #333;
}
</style>
