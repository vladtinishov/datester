<script lang="ts" setup>
import { useTests } from 'entities/test/model/tests';
import { storeToRefs } from 'pinia';
import { Card, Button } from 'shared/ui';

const store = useTests();
const { tests } = storeToRefs(store)
</script>

<template>
  <div :class="$style.testCards">
    <Card v-for="test in tests" :key="test.id">
      <template #header>
        <div :class="$style.header">
          <span>{{ test.name }}</span>
          <div class="actions">
            <Button>Перейти</Button>
          </div>
        </div>
      </template>
      <template #body>
        <div :class="$style.testData">
          <span>количество вопросов: 44</span>
        </div>
      </template>
      <template #footer>
        <div :class="$style.actions">
          <span><Button type="danger">Удалить</Button></span>
        </div>
      </template>
    </Card>
  </div>
</template>

<style lang="scss" module>
.testCards {
  padding: 0 20px;

  display: grid;
  gap: 20px;

  grid-template-columns: auto auto auto;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
}

.testData {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 10px;

  font-size: 13px;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: end;

  padding: 10px;

  * {
    margin: 0 5px;
  }
}

@media (max-width: 880px)  {
  .testCards {
    display: grid;
    gap: 20px;

    grid-template-columns: auto auto;
  }
}
@media (max-width: 600px)  {
  .testCards {
    display: grid;
    gap: 20px;

    grid-template-columns: auto;
  }
}
</style>