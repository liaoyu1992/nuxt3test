
<template>
  <div >
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { ref, onBeforeUnmount, onBeforeMount, watch } from "vue";
import { useMessage } from "naive-ui";

</script>
<style lang="scss" scoped>
.fullscreen {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: white;
}
</style>
