<script lang="ts" setup>
import { computed, InputHTMLAttributes, useAttrs, useSlots } from "vue";

interface IInput {
  modelValue: any,
  max: number,
  min: number
}

const slots = useSlots();
const emit = defineEmits(["update:modelValue"]);
const props = withDefaults(defineProps<IInput>(), {
  max: 0,
  min: 0
})
// computed
const renderIcon = computed(() => {
  return !!slots.icon;
});

// methods
const emitValue = (value: any) => emit("update:modelValue", value);

const handleInput = (val: InputEvent) => {
  console.log((val.target as InputHTMLAttributes).value);
  emitValue((val.target as InputHTMLAttributes).value)
};

const checkValues = () => {
  if (props.modelValue > props.max) emitValue(props.max)
  if (props.modelValue < props.min) emitValue(props.min)
}
</script>

<template>
  <div :class="$style.main">
    <slot name="icon" :class="$style.icon" v-if="renderIcon"></slot>
    <input @input="handleInput" @blur="checkValues" :value="modelValue" type="number" :max="max" :min="min" />
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

  padding: 0 5px;

  input {
    box-sizing: border-box;

    padding: 8px 3px;
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