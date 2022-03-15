<template>
    <div>
      <input 
      type="tel"
      :value="value"
      class="phone"  
      @input="change"
      placeholder="+7 (___) ___ __ __"
      />
      <span v-if="errors.phone">{{ errors.phone }}</span>
      
    </div>

</template>

<script>
// TODO: реализовать валидацию входных данных свойства и валидацию input - тип телефон, вида +7(XXX)-XXX-XX-XX
// for example https://gist.github.com/ralymov/611aee568a622fabc29be85546f0bb98
// https://www.npmjs.com/package/vue-phone-mask-input


export default {
  name: "PhoneValidation",
  props: {
    value: {},
  },
  data() {
    return {
      error: Boolean,
      errors: {
        phone: 'Не правильно введен номер телефона'
      }
    }
  },
  directives: {},
  methods: {
    formIsValid() {
      let isValid = true

      if(this.value.length === 0) {
        this.error
        isValid = false
      } else {
        this.errors.phone = null
      }

      return isValid
    }
  }
}
</script>

<style scoped>
  .error {
    color: red
  }
</style>
