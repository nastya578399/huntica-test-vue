<template>
<!-- TODO: При переключении типа логина, введенные значения должны очищаться -->
  <div>
    <template v-if="loginType === 'phone'">
      <label>Phone</label>
      <input v-model="info" placeholder="Enter your phone">
    </template>
    <template v-else>
      <label>Login</label>
      <input v-model="info" placeholder="Enter your login">
    </template>
    <button @click="switchMethod">Change login type</button>
  </div>
</template>

<script>
export default {
  name: "LoginType",
  data() {
    return {
      loginType: 'phone',
      info: '',
    }
  },
  methods: {
    switchMethod() {
      this.loginType = this.loginType === 'phone' ? 'email' : 'phone';
      this.info = '';
    }
  },
}
</script>

<style scoped>

</style>
