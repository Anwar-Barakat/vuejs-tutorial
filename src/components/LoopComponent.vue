<template>
  <div>
    <h1>People</h1>
    <ul v-for="person in people" :key="person.name">
      <li>{{ person.name }} - {{ person.age }}</li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const people = reactive([
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jake", age: 35 },
  { name: "Jill", age: 40 },
  { name: "Jack", age: 45 },
]);
</script>
