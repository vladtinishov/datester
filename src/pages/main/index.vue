<script lang="ts" setup>
import { useHeader } from 'entities/layout';
import { TestCard } from 'entities/test';
import { Input } from 'shared/ui';
import { Toolbar } from 'widgets/toolbar'

const store = useHeader()
store.setHeader('Главная')
</script>

<template>
  <div :class="$style.main">
    <Toolbar />
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

.toolbar {
  padding: 10px 20px;
}
</style>