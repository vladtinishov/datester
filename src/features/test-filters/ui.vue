<script lang="ts" setup>
import { Card, Button, Drawer, Input } from "shared/ui";

</script>

<template>
  <Drawer :width="400">
    <template #title>Фильтры</template>
    <template #body>
      <Card>
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
</style>