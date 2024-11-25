<template>
  <div>
    <div class="flex items-center gap-3">
      <p>{{ task.title }}</p>
      <button @click="taskStore.toggleTaskStatus(task)" :class="{ active: task.isFav }">
        love
      </button>
      <button @click="handleDelete">delete</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import useTaskStore from "../../stores/taskStore";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const taskStore = useTaskStore();



const handleDelete = () => {
  taskStore.removeTask(props.task);
};
</script>

<style lang="scss" scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #000;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: red;
  }

  &.active {
    color: red;
  }
}
</style>
