<script setup>
import { ref } from 'vue';
import PropComponent from './components/PropComponent.vue';
const message = ref('Hello from AppVue');
const 
</script>
<template>
  <div>
    <!-- <FormComponent /> -->
    <PropComponent :message="'Hello from AppVue'"
      @increment=""
    />

  </div>
</template>
<style scoped></style>
