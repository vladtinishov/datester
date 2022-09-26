<script lang="ts" setup>
import { computed, onMounted, toRefs, watch } from "vue-demi"

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
  'display': 'grid',
  'grid-template-columns': `auto ${props.width}px`,
}))

let right = '0';
const drawerStyle = computed(() => ({
  width: `${props.width}px`,
  right: right,
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
        <font-awesome-icon icon="fa-solid fa-xmark" @click="close" :class="$style.closeButton" />
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

  transition: 1s;

  top: 0;
  right: 0;

  background: rgba(0, 0, 0, .3);


  .drawerContainer {
    transition: 1s;
    max-width: 100%;
    height: 100%;

    position: absolute;

    top: 0;
    right: -1000px;

    background: #3b3b40;

    padding: 10px;

    box-sizing: border-box;

    h3 {
      display: flex;
      justify-content: space-between;
    }

    .closeButton {
      font-size: 25px;
      cursor: pointer;
    }
  }
}

@media (max-width: 450px)  {
  .drawerContainer {
    width: 100% !important;
  }
}
</style>