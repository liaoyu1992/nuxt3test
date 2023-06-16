
<template>
  <n-layout has-sider :style="{ width: '100%' }" class="bg-[#f8f8f8] px-16px pt-16px">
  </n-layout>
</template>

<script setup lang="ts">

import { ref, Component, onMounted, reactive, h } from "vue";

import {
  NH3,
  NCollapse,
  NCollapseItem,
  NText,
  NDivider,
  NLayout,
  NLayoutSider,
  NLayoutContent,
  NSpace,
  NCard,
  NIcon,
  NSpin,
  NSelect,
  NGrid,
  NGridItem,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NInput,
  NDatePicker,
  NInputNumber,
  NModal,
  TreeOption,
  NTree,
  NSwitch,
  useDialog,
  NScrollbar,
} from "naive-ui";

import { useI18n } from "vue-i18n";
</script>

<style lang="scss" scoped>
.tableWrap {
  height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
}

.gridTable {
  flex: 1;
}

.formInput {
  width: 400px;
}

.shelfModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
