<template>
    <form 
        @submit.prevent="submitForm" 
    >
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="formData.name">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="formData.password">
        </div>
        <button type="submit">Submit</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
    name: '',
    email: '',
    password: ''
}); 

function submitForm() {
    console.log(formData.value);
}
</script>