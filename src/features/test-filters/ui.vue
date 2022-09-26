<script lang="ts" setup>
import { useTests } from "entities/test/model/tests";
import { storeToRefs } from "pinia";
import { Card, Button, Drawer, Input } from "shared/ui";

const store = useTests();
const { isFiltersDrawerOpen } = storeToRefs(store)

// methods
const closeDrawer = () => store.closeFiltersDrawer();
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
              <Input />
            </div>
            <div :class="$style.questionCountInput">
              <p :class="$style.questionCountLabel">По какой</p>
              <Input />
            </div>
          </div>
        </template>
      </Card>
      <Button size="large" type="success" :class="$style.button">Применить</Button>
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