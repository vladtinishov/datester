<script lang="ts" setup>
import { ChangeTheme } from 'features/change-theme';
import { ChangeLanguage } from 'features/change-language';

</script>

<template>
  <div :class="$style.main">
    <h2 :class="$style.title">Главная</h2>
    <div :class="$style.actions">
      <ChangeLanguage />
      <ChangeTheme />
    </div>
  </div>
</template>

<style lang="scss" module>
.main {
  width: 100%;
  max-width: 1000px;

  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
}
</style>