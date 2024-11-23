<template>
  <div>
    <h1>Data Fetching</h1>
    <transition-group name="list" tag="ul">
      <li v-for="item in data" :key="item.id" class="list-item">
        {{ item.title }}
      </li>
    </transition-group>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import toastr from 'toastr';

const data = ref([]);
onMounted(async () => {
    try {
        const response = await fetch("https://dummyjson.com/posts").then((res) => res.json());
        if(!response || !response.posts){
            toastr.error('Failed to fetch data');
            return;
        }
        data.value = response.posts;
    } catch (error) {
        toastr.error('Failed to fetch data');
    }

});
</script>

<style lang="scss" scoped>
.list-item {
  transition: all 0.5s ease;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
