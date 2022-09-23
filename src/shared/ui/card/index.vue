<template>
  <div :class="$style.main">
    <div :class="$style.header">
      <slot name="header"></slot>
    </div>
    <div :class="$style.body">
      <slot name="body"></slot>
    </div>
    <div :class="$style.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" module>
.main {
  border: 1px solid black;
  border-radius: 20px;

  padding: 20px;

  .body {
    padding: 20px 0;
    margin: 20px 0;

    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
  }
}
</style>