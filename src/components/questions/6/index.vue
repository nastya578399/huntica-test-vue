<template>
  <div>
    <!-- TODO: при нажатии на кнопку "Enter Email" инпут должен появляться с фокусом на нем-->
    <input v-if="showEmailInput" name="email" v-focus>
    <button @click="showEmailInput = true">Enter Email</button>
  </div>
</template>

<script>
export default {
  name: "InputFocus",
  data() {
    return {
      showEmailInput: false
    }
  },
  directives: {
  focus: {
    // определение директивы
    inserted: function (el) {
      el.focus()
    }
  }
}
}
</script>

<style scoped>

</style>
