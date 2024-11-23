<template>
  <div>
    <h1>Form</h1>
    <form @submit.prevent="$emit('userInfo',
        { username, email, password }
    )">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const username = ref("");
const email = ref("");
const password = ref("");
</script>

<style lang="scss" scoped></style>
