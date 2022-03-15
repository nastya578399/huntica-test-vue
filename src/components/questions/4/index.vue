<template>
  <div>
    <!-- FIXME: При первичном рендере компонента все ок. Но при вводе числа, компонент все равно выдает ошибку -->
    <span v-if="!Number.isInteger(value)" style="color: red">Вы ввели не число</span><br />
    <input v-model="value" />
  </div>

</template>

<script>
export default {
name: "WrongType",
  data() {
    return {
      value: 1
    }
  },
}
</script>

<style scoped>

</style>
