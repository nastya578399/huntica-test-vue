<template>
  <!-- TODO: Реализовать компонент кастомного инпута. Всe свойства, события и аттрибуты input должны работать и в CustomInput,-->
  <div>
    <p>
      {{text}}
    </p>
    <CustomInput v-model="text" />
  </div>
</template>

<script>
import CustomInput from "@/components/questions/5/CustomInput";
export default {
  name: "index",
  components: {CustomInput},
  data() {
    return {
      text: ''
    }
  },
}
</script>

<style scoped>

</style>
