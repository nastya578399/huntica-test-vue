<template>
  <div>
    <!-- FIXME: при нажатии на кнопку send форма отправляется по старому адресу -->
    <form ref="form" :action="action" >
      <input placeholder="Enter email" name="email" />
    </form>
    <button @click="submit">Send</button>
  </div>

</template>

<script>
export default {
  name: "RefComponent",
  data() {
    return {
      action: 'https://example.com'
    }
  },
  methods: {
    submit() {
      this.action = 'https://test.com';
      this.$refs.form.submit();
    }
  },
}
</script>

<style scoped>

</style>
