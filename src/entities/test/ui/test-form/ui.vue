<script lang="ts" setup>
import { TestFilters } from "features/test-filters";
import { Card, Button, Drawer, Input } from "shared/ui";
</script>

<template>
  <TestFilters />
  <Card>
    <template #header>
      <div :class="$style.header">
        <span>Биология</span>
        <Button :class="$style.filtersButton" type="success">Фильтры</Button>
        <div :class="$style.arrows">
          <font-awesome-icon icon="fa-solid fa-circle-arrow-left" :class="$style.arrow" />
          <span :class="$style.questionsCount">1/44</span>
          <font-awesome-icon icon="fa-solid fa-circle-arrow-right" :class="$style.arrow" />
        </div>
      </div>
    </template>
    <template #body>
      <div :class="$style.questionBody">
        <div :class="$style.question">Когда было что-то там?</div>
        <div :class="$style.answersContainer">
          <div :class="$style.answer">а) Что-то там</div>
          <div :class="$style.answer">б) Что-то там</div>
          <div :class="$style.answer">в) Что-то там</div>
          <div :class="$style.answer">г) Что-то там</div>
          <div :class="$style.answer">д) Что-то там</div>
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