<script lang="ts" setup>
import { computed, InputHTMLAttributes, useAttrs, useSlots } from "vue";

interface IInput {
  modelValue: any,
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "text"
    ;
}

const slots = useSlots();
const emit = defineEmits(["update:modelValue"]);
const props = withDefaults(defineProps<IInput>(), {
  type: 'text'
})
// computed
const renderIcon = computed(() => {
  return !!slots.icon;
});

// methods
const handleInput = (val: InputEvent) => {
  console.log((val.target as InputHTMLAttributes).value);
  emit("update:modelValue", (val.target as InputHTMLAttributes).value);
};
</script>

<template>
  <div :class="$style.main">
    <slot name="icon" :class="$style.icon" v-if="renderIcon"></slot>
    <input @input="handleInput" :value="modelValue" :type="props.type" />
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