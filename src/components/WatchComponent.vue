<template>

    <h1>Watch</h1>
    <h2>{{ count }}</h2>
    <button @click="count++">increase</button>
    <button @click="count--">decrease</button>
    <button @click="count = 0">reset</button>
    
    <hr>
    <button @click="count++">
        Increment
    </button>
    <hr>
    <h4>
        {{ count }}
    </h4>
    <form @submit="submitHandling">
        <input type="text" v-model="count" />
        <button type="submit">reset</button>
    </form>
    <hr>
    <h1>{{ userInformation.name }}</h1>
    <h1>{{ userInformation.age }}</h1>
    <h1>{{ userInformation.isStudent }}</h1>
    <button @click="userInformation.age++">increase age</button>
    <button @click="userInformation.age--">decrease age</button>
    <button @click="userInformation.isStudent = !userInformation.isStudent">toggle student</button>
    <hr>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

const count = ref(0);
const userInformation = reactive({
    name: "John Doe",
    age: 25,
    isStudent: false,
});
watch(count, (newVal, oldVal) => {
  console.log(`newVal: ${newVal}, oldVal: ${oldVal}`);
});

watch(
  () => userInformation.age,
  (newVal, oldVal) => {
    console.log(`newVal: ${newVal}, oldVal: ${oldVal}`);
  }
);



</script>

<style lang="scss" scoped></style>
