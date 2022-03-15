<template>
  <!-- TODO: Реализовать компонент кастомного инпута. Всe свойства, события и аттрибуты input должны работать и в CustomInput,-->
  <div>
    <p>
      {{value}}
    </p>
    <CustomInput v-model="value" />
  </div>
</template>

<script>
import CustomInput from "@/components/questions/5/CustomInput";
export default {
  name: "index",
  components: {CustomInput},
  data() {
    return {
      value: ''
    }
  },
}
</script>

<style scoped>

</style>
