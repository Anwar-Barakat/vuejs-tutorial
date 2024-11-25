import { defineStore } from 'pinia';

const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'Learn Vue 3', isFav: false },
      { id: 2, title: 'Learn Vuex', isFav: true },
      { id: 3, title: 'Learn Pinia', isFav: false },
    ],
  }),

  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getTasksCount(state) {
      return state.tasks.length;
    },
    getFavTasks(state) {
      return state.tasks.filter((task) => task.isFav);
    },
    getFavTasksCount(state) {
      return state.tasks.filter((task) => task.isFav).length;
    },
  },

  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    removeTask(task) {
      this.tasks = this.tasks.filter((item) => item.id !== task.id);
    },
    toggleTaskStatus(task) {
      const index = this.tasks.findIndex((item) => item.id === task.id);
      this.tasks[index].isFav = !this.tasks[index].isFav;
    },
  },
});

export default useTaskStore;
