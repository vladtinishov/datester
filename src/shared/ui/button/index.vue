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
  position: relative;
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
  background-image: linear-gradient(-180deg, #23508a, #193b7a);

  &:hover {
    background-image: linear-gradient(-180deg, #335d94, #20458b);
  }
}
.success {
  background-image: linear-gradient(-180deg, #2fb87a, #156b45);
  &:hover {
    background-image: linear-gradient(-180deg, #3cd691, #3fd390);
  }
}
.danger {
  background-image: linear-gradient(-180deg, #b82626, #7a1a1a);
  &:hover {
    background-image: linear-gradient(-180deg, #c93131, #9c2323);

  }
}
</style>