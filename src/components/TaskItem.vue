<template>
  <li class="task-item">
    <input class="task-item__checkbox" type="checkbox" v-model="isChecked">
    <div class="task-item__text">
      <span class="task-item__title">{{ task.title }}</span>
      <p class="task-item__description">{{ task.text }}</p>
    </div>
    <div class="task-item__aside">
      <span class="task-item__priority">{{ task.priority }}</span>
      <MyButton type="button" @click="$emit('removeTask', task)">
        Удалить
      </MyButton>
    </div>
  </li>
</template>

<script>
import {defineComponent} from 'vue';
import MyButton from "@/components/Ui/MyButton";

export default defineComponent({
  name: "TaskItem",
  components: {MyButton},
  data() {
    return {
      isChecked: false,
    }
  },
  props: {
    task: {
      type: Object,
    }
  },
  methods: {
    doneTask() {
      const isChecked = this.isChecked
    }
  }
})
</script>

<style scoped>

</style>