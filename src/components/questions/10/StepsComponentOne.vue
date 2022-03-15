<template>
  <div>
    <h1>Step 1</h1>
    <input v-model="text" />
  </div>
</template>

<script>
export default {
  name: "StepsComponentOne",
  data() {
    return {
      text: ''
    }
  },
}
</script>

<style scoped>

</style>
