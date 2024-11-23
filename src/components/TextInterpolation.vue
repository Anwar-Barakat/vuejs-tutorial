<template>
    <div>
        <h1>{{ msg }}</h1>
        <button @click="addNumbers(1, 2)">
            Add
        </button>
        <p>{{ sum }}</p>
    </div>
</template> 

<script setup>
import { ref } from 'vue';

const msg = 'Hello from ChildComponent';
const sum = ref(0);

function addNumbers(a, b) {
    sum.value = a + b;
}
</script>