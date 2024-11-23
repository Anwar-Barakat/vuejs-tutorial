<template>
  <div>
    <input type="text" ref="username" />
  </div>

  <hr>

  <h1>{{ counter.count }}</h1>
  <button @click="counter.increment">Increment</button>
  <button @click="counter.decrement">Decrement</button>
  <button @click="counter.reset">Reset</button>

</template>

<script setup>
import { onMounted, ref } from "vue";
import useCounter from "../shared/useCounter";

const username = ref("123123");

const counter = useCounter();

onMounted(() => {
  username.value.value = "John Doe";
  console.log(username.value.value);
  username.value.focus();
});
</script>

<style lang="scss" scoped></style>
