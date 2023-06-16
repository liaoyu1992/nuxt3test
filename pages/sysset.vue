<template>
  <div class="plan flex">
        <nuxt-page></nuxt-page>
  </div>
</template>

<script setup lang="ts">
import {
  NButton,
  NLayout,
  NLayoutSider,
  MenuOption,
  NMenu,
  useMessage,
  MenuInst,
} from "naive-ui";
import {
  h,
  ref,
  defineComponent,
  Component,
  watch,
  onMounted,
  reactive,
} from "vue";
import { NIcon } from "naive-ui";
import { RouterLink } from "vue-router";


</script>

<style scoped>
.plan {
  width: 100%;
  height:100%;
}
.sideBar {
  flex: 0 0 200px;
}
</style>
