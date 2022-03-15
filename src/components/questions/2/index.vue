<template>
  <!-- FIXME: отправка формы перезагружает страницу после submit -->
  <form @submit="onSubmit">
    <input placeholder="name" v-model="name" id="name" /><br  /><br />
    <input placeholder="last name" v-model="lastName" id="lastName" />
    <br />
    <input type="submit" value="submit" />
  </form>
</template>

<script>
export default {
  name: "FormSubmit",
  data() {
    return {
      name: '',
      lastName: ''
    }
  },
  methods: {
    onSubmit() {
      alert(`${this.name} ${this.lastName}`);
    }
  },
}
</script>

<style scoped>

</style>
