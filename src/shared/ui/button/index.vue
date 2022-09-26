<script lang="ts" setup>
import { computed } from "@vue/runtime-core"

export interface IButton {
  type?: 'primary' | 'success' | 'danger';
  size?: 'small' | 'normal' | 'large';
}

const props = withDefaults(defineProps<IButton>(), {
  type: 'primary',
  size: 'normal',
})
</script>

<template>
  <button :class="[$style.button, $style[props.size], $style[props.type]]" role="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" module>
.button {
  display: flex;
  align-items: center;
  background-color: initial;
  border-radius: 4px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;
  width: 100%;
  border: 0;
}

.normal {
  height: 30px;
  line-height: 30px;
}
.small {
  height: 20px;
  line-height: 20px;
}
.large {
  height: 40px;
  line-height: 40px;
}

.primary {
  background: #3063a7;

  &:hover {
    background: #3c7bcc;
  }
}
.success {
  background: #2fb87a;
  &:hover {
    background: #35cf8a;
  }
}
.danger {
  background: #b82626;
  &:hover {
    background: #c23232;

  }
}
</style>