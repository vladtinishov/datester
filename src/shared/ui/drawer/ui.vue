<script lang="ts" setup>
import { computed } from "vue-demi"

export interface IDrawer {
  width: number;
}

const props = withDefaults(defineProps<IDrawer>(), {
  width: 500,
})

// computed
const style = computed(() => ({
  width: props.width
}))
</script>

<template>
  <div :class="$style.main">
    <div :class="$style.drawerContainer" :style="style">
      <h3>
        <slot name="title"></slot>
        <font-awesome-icon icon="fa-solid fa-circle-xmark" />
      </h3>
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style lang="scss" module>
.main {
  width: 100%;
  height: 100%;

  position: absolute;

  top: 0;
  right: 0;

  background: rgba(0, 0, 0, .3);


  .drawerContainer {
    max-width: 100%;
    height: 100%;

    position: absolute;

    top: 0;
    right: 0;

    background: #3b3b40;

    padding: 10px;

    box-sizing: border-box;

    h3 {
      display: flex;
      justify-content: space-between;
    }
  }
}

@media (max-width: 450px)  {
  .drawerContainer {
    width: 100% !important;
  }
}
</style>