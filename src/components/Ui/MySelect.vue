<template>
  <select :value="modelValue" class="my-select" @change="updateValue">
    <slot></slot>
  </select>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "MySelect",
  props: {
    modelValue: {
      type: String,
      required: true,
      default: '',
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
})
</script>

<style scoped>
.my-select {
  width: 100%;
  height: 40px;
  color: black;
  border: 1px solid darkcyan;
  background-color: inherit;
  padding: 7px;
}

.my-select::selection {
  color: red;
}

.option {
  color: black;
}

.option:focus {
  background-color: red;
}
</style>