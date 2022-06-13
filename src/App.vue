<template>
  <div class="container">
    <TaskForm @createPost="addPost"/>
    <TaskList :tasks="tasks"/>
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
    addPost(newPost: IPost): void {
      this.tasks.push(newPost)
    }
  }
});
</script>

<style lang="scss">
</style>
