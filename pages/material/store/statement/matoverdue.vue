
<template>
  <div class="w-full h-[100%] bg-[#f8f8f8] px-4px flex flex-col">
  
  </div>
</template>

<script setup lang="ts">
import {
  defineComponent,
  ref,
  Component,
  watch,
  onMounted,
  reactive,
  h,
  toRaw,
} from "vue";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  FormItemRule,
  useMessage,
  NButton,
  NInput,
  NDatePicker,
  NCard,
  NGrid,
  NGi,
  NFormItemGi,
  NInputNumber,
  NModal,
  SelectOption,
  NCheckbox,
  MenuOption,
  NMenu,
  TreeOption,
  NTree,
  NSwitch,
  NDescriptions,
  NDescriptionsItem,
  NTabs,
  NTabPane,
} from "naive-ui";
import { nullLiteral } from "@babel/types";
import { useI18n } from "vue-i18n";
</script>

<style lang="scss" scoped>
.tableWrap {
  height: calc(100% - 64px);
  @apply flex flex-col bg-white w-full px-[16px];
}

.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}

.gridTable {
  flex: 1;
  height: calc(100% - 60px);
}

.formInput {
  width: 300px;
}

.scrapModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}

:deep(.n-tabs .n-tabs-pane-wrapper) {
  display: flex;
  flex: 1;
}
</style>
