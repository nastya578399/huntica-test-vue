<template>
  <div class="hello">
    <h1>Playground</h1>
    <QuestionsNavigation :current="question" />
    <div class="component-wrapper">
      <component v-if="question" :is="`question-${question}`" />
    </div>

  </div>
</template>

<script>

import {getQuestionsList} from "@/helpers/questions";
import QuestionsNavigation from '@/components/questions/0/QuestionsNavigation'

const components = {};

getQuestionsList().forEach((question) => {
  components[`question-${question}`] = () => import(`@/components/questions/${question}/index`)
})

components['QuestionsNavigation'] = QuestionsNavigation;

export default {
  name: 'Playground',
  components,
  props: {
    question: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.component-wrapper {
  background: #e7e7e7;
  padding: 3rem;
  width: 600px;
  margin: 0 auto;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
