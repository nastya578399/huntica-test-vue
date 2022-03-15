<template>
  <!-- TODO: сделать компонент безопасным для использования и написать unit тесты с помощью Jest -->
  <div>
    <div v-if="user">
      Username: {{ user.username }}<br>
    </div>
    <button @click="fetchUser">fetch user</button>
  </div>
</template>

<script>
import {asyncFetchUser} from "@/components/questions/12/helpers/asyncFetchUser";

export default {
  name: "ComponentForTest",
  data() {
    return {
      user: null,
    }
  },
  methods: {
    async fetchUser() {
      this.user = await asyncFetchUser()
    }
  },
}
</script>

<style scoped>

</style>
