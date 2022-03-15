<template>
    <div>
      <input :value="value" class="phone" placeholder="phone" />
      <span v-if="error">Не правильно введен номер телефона</span>
    </div>

</template>

<script>
// TODO: реализовать валидацию входных данных свойства и валидацию input - тип телефон, вида +7(XXX)-XXX-XX-XX
export default {
  name: "PhoneValidation",
  props: {
    value: {},
  },
  data() {
    return {
      error: Boolean
    }
  },
}
</script>

<style scoped>
  .error {
    color: red
  }
</style>
