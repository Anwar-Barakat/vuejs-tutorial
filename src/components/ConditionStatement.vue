<template>
  <div>
    <h1 v-if="initData.isStudent">Student</h1>
    <h1 v-else-if="initData.name === 'John Doe'">John Doe</h1>
    <h1 v-else>Not a student</h1>

    <h3 v-show="initData.age > 18">Adult</h3>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const initData = reactive({
  name: 'John Doe',
  age: 25,
  isStudent: false
});
</script>