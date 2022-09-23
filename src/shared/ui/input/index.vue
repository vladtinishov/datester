<template>
  <div :class="$style.main">
    <slot name="icon" :class="$style.icon"></slot>
    <input type="text">
  </div>
</template>

<style lang="scss" module>
.main {
  border: 1px 10solid rgb(65, 65, 65);
  border-radius: 10px;

  background: #242427;

  box-sizing: border-box;

  display: flex;
  align-items: center;

  padding: 0 10px;

  input {
    box-sizing: border-box;

    padding: 8px 5px;
    margin: 0 15px;

    color: rgb(190, 190, 190);
    font-weight: bold;

    font-size: 15px;

    width: 100%;

    background: none;
    border: none;
    outline: none;

  }

  .icon {
    box-sizing: border-box;

    font-size: 19px;
  }
}
</style>