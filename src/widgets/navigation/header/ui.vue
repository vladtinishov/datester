<script lang="ts" setup>
import { ChangeTheme } from 'features/change-theme';
import { ChangeLanguage } from 'features/change-language';
import { useHeader } from 'entities/layout';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue-demi';

const store = useHeader()
const router = useRouter()
const route = useRoute()

const { header } = storeToRefs(store);

//computed
const showBackButton = computed(() => route.name !== 'main')
// methods
const goToMain = () => {
  router.push({ name: 'main' })
}
</script>

<template>
  <div :class="$style.main">
    <div :class="$style.titleContainer">
      <font-awesome-icon :class="$style.icon" icon="fa-solid fa-angle-left" @click="goToMain()" v-if="showBackButton" />
      <h2 :class="$style.title">{{ header }}</h2>
    </div>
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

.titleContainer {
  display: flex;
  align-items: center;

  .icon {
    font-size: 24px;
    margin-right: 10px;
    color: #2fb87a;
    cursor: pointer;
  }
}
</style>