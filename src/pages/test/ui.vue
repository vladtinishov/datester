<script lang="ts" setup>
import { useHeader } from "entities/layout";
import { TestCard, TestForm } from "entities/test";
import { TestFilters } from "features/test-filters";
import { Input } from "shared/ui";
import { Toolbar } from "widgets/toolbar";

const store = useHeader()
store.setHeader('Тест')
</script>

<template>
  <div :class="$style.main">
    <TestForm />
  </div>
</template>

<style lang="scss" module>
.main {
  width: 100%;
  max-width: 1000px;

  margin: 0 auto;
  margin-top: 20px;
  padding: 0 20px;

  box-sizing: border-box;
}

.toolbar {
  padding: 10px 20px;
}
</style>