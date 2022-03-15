<template>
<!--  FIXME: При нажатии на кнопку child click ожидаю увидеть надпись Child clicked-->
  <div>
    <div class="message" :class="{error}">
      <template v-if="error">Error: </template>
      <div v-html="text"></div>
    </div>
    <div class="parent">
      <div class="parent-title">Parent div</div>
      <button @click="onChildClick">child click</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClickComponent",
  data() {
    return {
      text: 'Click on the button. <br> You will see a text "Child clicked"',
      error: false,
    }
  },
  methods: {
    onChildClick() {
      this.text = 'Child clicked'
      this.error = false;
    }
  }
}
</script>

<style scoped>
  .parent {
    margin: 0 auto;
    border: 1px solid #ccc;
    width: 200px;
    padding: 20px;
  }
  .parent-title {
    margin-bottom: 1rem;
  }
  .message {
    width: 200px;
    margin: 0 auto 1rem;
    background: green;
    color: white;
    padding: 1rem;
  }
  .error {
    background: red;
  }
</style>
