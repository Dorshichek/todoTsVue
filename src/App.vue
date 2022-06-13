<template>
  <div class="container">
    <TaskForm @createPost="addTask"/>
    <TaskList :tasks="tasks" @removeTask="removeTask"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TaskForm from "@/components/TaskForm.vue";

import '/src/assets/main.scss'
import {IPost} from "@/interfaces/form";
import TaskList from "@/components/TaskList.vue";

export default defineComponent({
  name: 'App',
  components: {
    TaskList,
    TaskForm,
  },
  data() {
    return {
      tasks: [] as IPost[],
    }
  },
  methods: {
    addTask(newTask: IPost): void {
      this.tasks.push(newTask)
    },
    removeTask(task: IPost) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id)
    }
  },

});
</script>

<style lang="scss">
</style>
