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
  border: 1px solid rgb(65, 65, 65);
  border-radius: 10px;

  background: #313135;
}

.header {
  border-bottom: 1px solid rgb(83, 83, 83);
}
.footer {
  border-top: 1px solid rgb(83, 83, 83);
}
</style>