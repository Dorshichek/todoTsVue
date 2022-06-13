<template>
  <input :value="modelValue" class="my-input" @input="updateValue">
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "MyInput",
  props: {
    modelValue: {
      type: String,
      required: true,
      default: '',
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
})
</script>

<style lang="scss" scoped>
.my-input {
  width: 100%;
  height: 40px;
  border: 1px solid darkcyan;
  padding: 7px;
  color: black;
}

.my-input:focus {
  border-color: red;
}

.my-input::placeholder {
  color: #2c3e50;
}
</style>