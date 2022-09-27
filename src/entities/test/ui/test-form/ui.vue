<script lang="ts" setup>
import { useTests } from "entities/test/model/tests";
import { TestFilters } from "features/test-filters";
import { storeToRefs } from "pinia";
import { Card, Button, Drawer, Input } from "shared/ui";
import { computed, onMounted, ref } from "vue";
import axios from 'axios'
import { useRoute } from "vue-router";

const store = useTests();
const route = useRoute();

store.setTest(+route.params.id);
store.initQuestions()

const { test, testResult, testQuestions, questionIndex } = storeToRefs(store);

let showResult = ref(false);
let isRight = ref(false);

// computed
const testName = computed(() => test.value.name)
const question = computed(() => testQuestions.value[questionIndex.value])
const rightAnswers = computed(() => testResult.value.filter(r => r.result).length)
const falseAnswers = computed(() => testResult.value.filter(r => !r.result).length)

// methods
const openDrawer = () => store.openFiltersDrawer();
const toNextQuestion = () => {
  showResult.value = false;
  store.toNextQuestion();
}
const toPrevQuestion = () => {
  showResult.value = false;
  store.toPrevQuestion();
}

const checkAnswer = (answer: { answer: string, isTrue: boolean}) => {
  showResult.value = true;

  if (answer.isTrue) isRight.value = true;
  else isRight.value = false;

  store.setAnswerResult(questionIndex.value, isRight.value)
}

</script>

<template>
  <TestFilters />
  <Card>
    <template #header>
      <div :class="$style.header">
        <span style="user-select: none" v-html="testName"></span>
        <Button :class="$style.filtersButton" type="success" @click="openDrawer">Фильтры</Button>
        <div :class="$style.arrows">
          <font-awesome-icon 
            icon="fa-solid fa-circle-arrow-left" 
            :class="$style.arrow" 
            @click="toPrevQuestion"
          />
          <span :class="$style.questionsCount">{{questionIndex + 1}}/{{testQuestions.length}}</span>
          <font-awesome-icon 
            icon="fa-solid fa-circle-arrow-right" 
            :class="$style.arrow" 
            @click="toNextQuestion"
          />
        </div>
      </div>
    </template>
    <template #body>
      <div :class="$style.questionBody">
        <div :class="$style.question" v-html="question.question"></div>
        <div :class="$style.answersContainer">
          <div
            :class="$style.answer"
            v-for="answer in question.answers"
            :key="answer"
            @click="checkAnswer(answer)"
            v-html="answer.answer"
          >
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div :class="$style.footer">
        <div :class="$style.answerData">
          <font-awesome-icon icon="fa-solid fa-circle-check" :class="$style.right" />
          <span>{{ rightAnswers }}</span>
        </div>
        <div :class="$style.answerData">
          <font-awesome-icon icon="fa-solid fa-circle-xmark" :class="$style.false" />
          <span>{{ falseAnswers }}</span>
        </div>
        <div :class="$style.result" v-if="showResult">
          <div v-if="isRight" :class="$style.rightAnswer">Верно</div>
          <div v-else :class="$style.falseAnswer">Не верно</div>
        </div>
      </div>
    </template>
  </Card>
  <br>
</template>

<style lang="scss" module>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  .filtersButton {
    width: 100px;
  }

  .arrows {
    font-size: 22px;

    display: flex;
    align-items: center;

    .questionsCount {
      margin: 0 10px;

      font-size: 15px;

      user-select: none;
    }

    .arrow {
      cursor: pointer;
    }
  }
}

.questionBody {
  padding: 10px;

  .question {
    font-size: 25px;
  }

  .answersContainer {
    margin: 20px 0;

    .answer {
      margin: 15px 0;
      padding: 10px;

      border-radius: 10px;

      cursor: pointer;

      &:hover {
        background: rgb(104, 104, 104);
      }
    }
  }
}

.footer {
  padding: 10px;
  font-size: 17px;
  display: flex;

  .answerData {
    display: flex;
    align-items: center;

    & span {
      margin-left: 7px;
      margin-right: 10px;
    }
  }
  .right {
    color: rgb(41, 153, 41);
  }

  .false {
    color: rgb(175, 46, 46);
  }

  .rightAnswer {
    color: rgb(41, 153, 41);
  }
  .falseAnswer {
    color: rgb(175, 46, 46);
  }
}
</style>