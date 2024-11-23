<template>
  <!-- <h1>Event</h1>
  <h2>{{ count }}</h2>
  <button @:click="increment">increase</button>
  <button @:click="decrement">decrease</button>
  <button @:click="reset">reset</button>

  <hr> -->

  <button @click="$emit('incrementCounter')">
    Increment
  </button>
  <hr>
<!-- <h4>
    {{ counter }}
</h4>
  <form  @submit="submitHandling">
    <input type="text" v-model="count" />
    <button type="submit">reset</button>
  </form> -->
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
const counter = ref(0);

function increment() {
  count.value++;
}

function decrement() {
  count.value--;
}

function reset() {
  count.value = 0;
}

function submitHandling(e) {
  e.preventDefault();
  console.log(count.value);
  counter.value = count.value;
}
</script>
