<template>
  <div>
    <div class="flex items-center gap-3">
      <button @click="filter = 'all'">all</button>
      <button @click="filter = 'fav'">love</button>
    </div>
  </div>

  <TaskForm />

  <div v-if="taskStore.isLoading">Loading...</div>

  <div v-if="filter === 'all'">
    <h1>
      Tasks
      <span v-if="getTasksCount > 0"> ({{ getTasksCount }}) </span>
    </h1>
    <div v-for="task in getTasks" :key="task.id">
      <TaskDetails :task="task" />
    </div>
  </div>
  <div v-if="filter === 'fav'">
    <h1>
      Favorite Tasks
      <span v-if="getFavTasksCount > 0"> ({{ getFavTasksCount }}) </span>
    </h1>
    <div v-for="favTask in getFavTasks" :key="favTask.id">
      <TaskDetails :task="favTask" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import useTaskStore from "../../stores/taskStore";
import TaskForm from "./TaskForm.vue";
import TaskDetails from "./TaskDetails.vue";

const taskStore = useTaskStore();
taskStore.fetchTasks();
const { getTasks, getTasksCount, getFavTasks, getFavTasksCount } = storeToRefs(taskStore);

const filter = ref("all");
</script>

<style lang="scss" scoped></style>
