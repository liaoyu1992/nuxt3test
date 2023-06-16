
<template>
  <div class="mainContainer">
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
  DataTableColumns,
  NTabs,
  NTabPane,
  NDataTable,
  useDialog,
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { options } from "preact";
</script>

<style lang="scss" scoped>
.tableWrap {
  height: calc(100vh - 190px);
  @apply flex flex-col bg-white w-full px-[16px];
}

.gridTable {
  flex: 1;
  height: calc(100% - 60px);
}

.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}

.formInput {
  width: 400px;
}

.depositModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
