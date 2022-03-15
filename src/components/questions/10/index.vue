<template>
  <div>
    <!-- FIXME при переключении шагов введенные значения пропадают -->
    <StepsComponentOne v-if="step === 1" />
    <StepsComponentTwo v-else />
    <button @click="step === 1 ? next() : back()">
      <template v-if="step === 1">
          Далее
      </template>
      <template v-else>
        Назад
      </template>
    </button>
  </div>

</template>

<script>
import StepsComponentOne from "@/components/questions/10/StepsComponentOne";
import StepsComponentTwo from "@/components/questions/10/StepsComponentTwo";
export default {
  name: "StepsComponent",
  components: {StepsComponentTwo, StepsComponentOne},
  data() {
    return {
      step: 1
    }
  },
  methods: {
    next() {
      this.step++;
    },
    back() {
      this.step--;
    }
  },
}
</script>

<style scoped>

</style>
