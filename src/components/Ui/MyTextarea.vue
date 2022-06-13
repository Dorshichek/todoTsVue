<template>
  <textarea :value="modelValue" class="my-textarea" @input="updateValue"></textarea>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "MyTextarea",
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
.my-textarea {
  width: 100%;
  border: 1px solid darkcyan;
  padding: 7px;
  color: black;
  resize: none;
}

.my-textarea:focus {
  border-color: red;
}

.my-textarea::placeholder {
  color: #2c3e50;
}
</style>