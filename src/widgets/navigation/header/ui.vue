<template>
  <div :class="$style.main">
    <h2 :class="$style.title">Главная</h2>
    <div :class="$style.actions">
      <font-awesome-icon icon="fa-solid fa-user-secret" />
    </div>
  </div>
</template>

<style lang="scss" module>
.main {
  width: 100%;
  max-width: 1000px;

  margin: 0 auto;
}
</style>