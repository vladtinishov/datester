<script lang="ts" setup>
import { useTests } from "entities/test/model/tests";
import { TestFilters } from "features/test-filters";
import { storeToRefs } from "pinia";
import { Card, Button, Drawer, Input } from "shared/ui";
import { computed, ref } from "vue";

const store = useTests();

const { test } = storeToRefs(store);

let questionIndex = ref(0);

// computed
const testName = computed(() => test.value.name)
const testQuestions = computed(() => test.value.questions)
const question = computed(() => testQuestions.value[questionIndex.value])

// methods
const openDrawer = () => store.openFiltersDrawer();
const toNextQuestion = () => {
  if (questionIndex.value < testQuestions.value.length - 1) questionIndex.value += 1;
}
const toPrevQuestion = () => {
  if (questionIndex.value > 0) questionIndex.value -= 1;
}
</script>

<template>
  <TestFilters />
  <Card>
    <template #header>
      <div :class="$style.header">
        <span style="user-select: none">{{ testName }}</span>
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
        <div :class="$style.question">{{ question.question }}</div>
        <div :class="$style.answersContainer">
          <div
            :class="$style.answer"
            v-for="answer in question.answers"
            :key="answer"
          >
            {{ answer.answer }}
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div :class="$style.footer">
        <div :class="$style.answerData">
          <font-awesome-icon icon="fa-solid fa-circle-check" :class="$style.right" />
          <span>33</span>
        </div>
        <div :class="$style.answerData">
          <font-awesome-icon icon="fa-solid fa-circle-xmark" :class="$style.false" />
          <span>22</span>
        </div>
      </div>
    </template>
  </Card>
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
}
</style>