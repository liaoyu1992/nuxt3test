<template>
  <n-layout
    has-sider
    class="bg-[#f8f8f8] px-16px pt-16px"
  >
  </n-layout>
</template>

<script setup lang="ts">
import { ref, onMounted, Component, h } from "vue";

import {
  NSpin,
  NIcon,
  FormInst,
  useMessage,
  NButton,
  NInput,
  NLayout,
  NLayoutContent,
  NLayoutSider,
  TreeOption,
  NTree,
  NSwitch,
  useDialog,
} from "naive-ui";

import { useI18n } from "vue-i18n";
</script>

<style lang="scss" scoped>
.tableWrap {
  height: calc(100vh - 147px);
  display: flex;
  flex-direction: column;
}

.gridTable {
  flex: 1;
}

.formInput {
  width: 300px;
}

.shelfModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
