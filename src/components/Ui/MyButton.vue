<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "MyButton"
})
</script>

<style scoped>
.my-button {
  padding: 10px;
  background-color: darkcyan;
  color: white;
  border-radius: 15px;
}
</style>