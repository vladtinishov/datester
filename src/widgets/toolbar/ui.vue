<script lang="ts" setup>
import { Input, Button } from "shared/ui";
</script>

<template>
  <div :class="$style.toolbar">
    <Input :class="$style.search">
      <template #icon><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></template>
    </Input>
    <Button :class="$style.button" type="success">
      <font-awesome-icon icon="fa-solid fa-plus" :class="$style.icon" />
      Добавить
    </Button>
  </div>
</template>

<style lang="scss" module>
.toolbar {
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search {
  width: 250px;
}
.button {
  width: 150px;
}

.icon {
  font-size: 15px;
  font-weight: bold;
}
</style>