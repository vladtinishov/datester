<script lang="ts" setup>
import { computed } from "vue-demi"

export interface IDrawer {
  width: number;
  isOpen: boolean;
}

const props = withDefaults(defineProps<IDrawer>(), {
  width: 500,
  isOpen: false,
})

const emits = defineEmits(['onClose'])

// computed
const mainStyle = computed(() => ({
  // width: props.width,
  // right: props.isOpen ? 0 : '-1000px'
  'display': 'grid',
  'grid-template-columns': `auto ${props.width}px`,
}))

const drawerStyle = computed(() => ({
  width: `${props.width}px`,
}))

// methods
const close = () => emits('onClose');
</script>

<template>
  <div :class="$style.main" :style="mainStyle" v-if="isOpen">
    <div :class="$style.overlay" @click="close"></div>
    <div :class="$style.drawerContainer" :style="drawerStyle">
      <h3>
        <slot name="title"></slot>
        <font-awesome-icon icon="fa-solid fa-circle-xmark" @click="close" />
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
    transition: 1s;
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