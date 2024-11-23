<template>
  <div>
    <h1>{{ message }}</h1>
    <button
      @click="$emit('increment')"
    ></button>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    message: {
      type: String,
      required: true,
      validator: (value) => {
        return value.length > 2;
      },
    },
  });
</script>
