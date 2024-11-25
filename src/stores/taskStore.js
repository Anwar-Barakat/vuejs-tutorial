import axios from 'axios';
import { defineStore } from 'pinia';

const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    isLoading: false,
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
    async fetchTasks() {
      this.isLoading = true;
      try {
        const response = await axios.get('http://localhost:3000/tasks');
        console.log(response);
        const data = response.data;
        // Ensure data is an array
        this.tasks = data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        this.isLoading = false;
      }
    },
    async addTask(task) {
      try {
        const res = await fetch('http://localhost:3000/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(task),
        });
        if (!res.ok) {
          throw new Error('Failed to add task');
        }
        // Get the task data from the server response (optional, depending on the backend)
        const newTask = await res.json(); // Assuming the server returns the created task

        // Add the newly created task to the state
        this.tasks.push(newTask);
      } catch (error) {
        console.error('Error adding task:', error);
      }
    },
    async removeTask(task) {
      try {
        const res = await fetch(`http://localhost:3000/tasks/${task.id}`, {
          method: 'DELETE',
        });
        if (!res.ok) {
          throw new Error('Failed to delete task');
        }
        this.tasks = this.tasks.filter((t) => t.id !== task.id); // Remove the deleted task from the store
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },
    async toggleTaskStatus(task) {
      try {
        const updatedTask = { ...task, isFav: !task.isFav }; // Toggle the completion status

        const res = await fetch(`http://localhost:3000/tasks/${task.id}`, {
          method: 'PUT', // Use PUT to update the resource
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTask),
        });

        if (!res.ok) {
          throw new Error('Failed to update task status');
        }

        // Update the local tasks array to reflect the task's new status
        const index = this.tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
          this.tasks[index] = updatedTask; // Update the task in the array
        }
      } catch (error) {
        console.error('Error updating task status:', error);
      }
    },
  },
});

export default useTaskStore;
