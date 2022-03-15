<template>
  <input type="text"
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: {type: String, default: null,}
  },
}
</script>

<style scoped>

</style>
