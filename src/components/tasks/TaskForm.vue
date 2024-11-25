<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="task.title" type="text" placeholder="Task title" />
    <label>
      <input v-model="task.isFav" type="checkbox" />
      Favorite
    </label>
    <button type="submit">Add Task</button>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import useTaskStore from "../../stores/taskStore";
import { storeToRefs } from "pinia";
import { z } from "zod";

const taskStore = useTaskStore();
const { tasks } = storeToRefs(taskStore);

const task = ref({
  id: tasks.value.length + 1,
  title: "",
  isFav: false,
});

// add zod validation control
const schema = z.object({
  task: z.object({
    title: z.string().nonempty("Title is required"),
    isFav: z.boolean().optional(),
  }),
});

const error = ref(null);

const handleSubmit = () => {
  try {
    schema.parse({ task: task.value });
    taskStore.addTask(task.value);
    // reset
    task.value = {
      id: tasks.value.length + 1,
      title: "",
      isFav: false,
    };
    error.value = null;
  } catch (e) {
    if (e instanceof z.ZodError) {
      error.value = e.errors[0].message;
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>
