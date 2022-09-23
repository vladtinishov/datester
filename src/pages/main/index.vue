<script lang="ts" setup>
import { TestCard } from 'entities/test';
import { ChangeTheme } from 'features/change-theme';
</script>

<template>
  <div :class="$style.main">
    <ChangeTheme />
    <TestCard />
  </div>
</template>

<style lang="scss" module>
.main {
  width: 100%;
  max-width: 1000px;

  margin: 0 auto;

  box-sizing: border-box;
}
</style>