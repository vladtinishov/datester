<script lang="ts" setup>
import { useTests } from "entities/test/model/tests";
import { storeToRefs } from "pinia";
import { Card, Button, Drawer, NumberInput } from "shared/ui";
import { computed, ref } from "vue-demi";

const store = useTests();
const { isFiltersDrawerOpen } = storeToRefs(store)

// computed
const questionsCount = computed(() => store.testQuestions.length)


const filters = ref({
  range: { start: 0, end: questionsCount.value }
})

// methods
const closeDrawer = () => store.closeFiltersDrawer();
const setQuestionsByFilters = () => {
  store.setQuestionsByFilters(filters.value)
  closeDrawer()
};
</script>

<template>
  <Drawer :width="350" :isOpen="isFiltersDrawerOpen" @onClose="closeDrawer">
    <template #title>Фильтры</template>
    <template #body>
      <Card>
        <template #header>
          <div :class="$style.filtersHeader">Диапозон</div>
        </template>
        <template #body>
          <div :class="$style.filtersBody">
            <div :class="$style.questionCountInput">
              <p :class="$style.questionCountLabel">С какого</p>
              <NumberInput v-model="filters.range.start" type="number" :min="0" :max="questionsCount" />
            </div>
            <div :class="$style.questionCountInput">
              <p :class="$style.questionCountLabel">По какой</p>
              <NumberInput v-model="filters.range.end" type="number" :min="0" :max="questionsCount" />
            </div>
          </div>
        </template>
      </Card>
      <Button size="large" type="success" :class="$style.button" @click="setQuestionsByFilters">Применить</Button>
    </template>
  </Drawer>
</template>

<style lang="scss" module>
  p {
    margin: 0;
    padding: 0;
  }
.filtersBody {
  display: flex;
  align-items: center;

  padding: 10px;

  .questionCountInput {
    width: 100px;
  }
  .questionCountInput:last-child {
    margin-left: 40px;
  }

  .questionCountLabel {
    margin-bottom: 4px;
  }
}

.button {
  margin-top: 20px;
}

.filtersHeader {
  padding: 10px;
}
</style>