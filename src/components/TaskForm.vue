<template>
  <form class="task-form" @submit.prevent>
    <MyInput v-model="post.title" placeholder="Введите название задачи" type="text"/>
    <MyTextarea v-model="post.text" cols="30" placeholder="Введите текст задачи" rows="10"/>
    <MySelect v-model="post.priority">
      <option class="option" disabled value="">Выберите приоритет</option>
      <option v-for="priority in optionsPriority" :key="priority.value" :value="priority.value" class="option">{{
          priority.title
        }}
      </option>
    </MySelect>
    <MyButton type="button" @click="createTask">Создать задачу</MyButton>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MyTextarea from "@/components/Ui/MyTextarea.vue";
import MyInput from "@/components/Ui/MyInput.vue";
import MyButton from "@/components/Ui/MyButton.vue";
import MySelect from "@/components/Ui/MySelect.vue";

export default defineComponent({
  name: 'TaskForm',
  components: {MySelect, MyButton, MyTextarea, MyInput},
  data() {
    return {
      optionsPriority: {
        high: {
          title: 'Высокий',
          value: 'Высокий',
        },
        low: {
          title: 'Низкий',
          value: 'Низкий',
        }
      },
      post: {
        id: '',
        title: '',
        text: '',
        priority: '',
      },
    }
  },
  methods: {
    createTask() {
      this.post.id = String(Date.now());
      this.$emit('createPost', this.post);
      this.post = {
        id: '',
        title: '',
        text: '',
        priority: '',
      }
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
