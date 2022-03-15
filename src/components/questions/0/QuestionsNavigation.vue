<template>
  <div class="nav">
<!--  TODO: Реализовать переключение роутов заданий при переключении селекта  -->
    <div class="warning">Навигация через select - не реализована. Необходимо реализовать</div>
    Выберите задание:
    <select v-model="question">
      <option value="">не выбрано</option>
      <option :key="question" v-for="question in questions" :value="question">{{question}}</option>
    </select>
  </div>
</template>

<script>
import {getQuestionsList} from "@/helpers/questions";

export default {
  name: "QuestionsNavigation",
  props: {
    current: {},
  },
  data() {
    return {
      question: 1,
    }
  },
  created() {
    this.question = this.current;
  },
  computed: {
    questions() {
      return getQuestionsList();
    },
  },
}
</script>

<style scoped>
  .nav {
    margin-bottom: 2rem;
  }
  .warning {
    background: yellow;
    width: 600px;
    padding: 1rem;
    margin: 0 auto 1rem;
  }
</style>
