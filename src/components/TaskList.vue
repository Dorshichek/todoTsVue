<template>
  <ul v-if="tasks.length > 0" class="task-list">
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" @removeTask="$emit('removeTask', task)"/>
  </ul>
  <span v-else class="task-list__empty">Задач нет!</span>
</template>

<script>
import {defineComponent} from 'vue';
import TaskItem from "@/components/TaskItem";

export default defineComponent({
  name: "TaskList",
  components: {TaskItem},
  props: {
    tasks: {
      type: Array,
    }
  }
})
</script>

<style scoped></style>