<template>
    <div>
      <h1>{{ initialState.count }}</h1>
      <button @click="increment">Increase</button>
      <button @click="decrement">Decrease</button>
      <h2>
        {{ initialState.name }}
      </h2>
      <button
        @click="initialState.name = 'Vue 3.5'"
      >
        Change Name
      </button>
    </div>
</template>
  
<script setup>
  import { reactive } from 'vue';
  
  const initialState = reactive({
    count: 0,
    name: 'Vue 3'
  });
  
  function increment() {
    initialState.count++;
  }
  
  function decrement() {
    initialState.count--;
  }
</script>