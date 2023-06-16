

<template>
  <div class="basepn">
   
  </div>
</template>
<script lang="ts" setup>
import { ref, Component, watch, onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n";

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
  NTimePicker,
  NDatePicker,
  NCard,
  NGrid,
  NGi,
  NFormItemGi,
  NModal,
  SelectOption,
  NCheckbox,
  NInputNumber,
  UploadCustomRequestOptions,
  UploadInst,
  NUpload,
  UploadFileInfo,
} from "naive-ui";
</script>
<style lang="scss" scoped>
.basepn {
  @apply w-full h-full p-[16px] pb-[0px] bg-[#f8f8f8];
}
.tableWrap {
  flex: 1;
  @apply flex flex-col bg-white w-full px-[16px];
}
.btnWrap {
  flex: 0 0 60px;
}
.gridTable {
  flex: 1;
}
.paginat {
  flex: 0 0 50px;
}
.iconText {
  @apply flex items-center;
}
.filterBtn {
  @apply text-blue-700 inline-block w-[32px] text-14px;
}
:deep(.ag-theme-alpine) {
  min-height: 200px !important;
}
:deep(.aggridWarp) {
  min-height: 200px !important;
}
:deep(.n-upload-trigger + .n-upload-file-list) {
  margin-top: 0px;
}
.basepn::-webkit-scrollbar {
  width: 2px;
}
.basepn::-webkit-scrollbar-track {
  background-color: #eeeeee;
}
.basepn::-webkit-scrollbar-thumb {
  background-color: #d9d9d9;
  border-radius: 5px;
  box-shadow: inset 0 0 6px rgba(171, 171, 171, 0.3);
}
:deep(.commonForm .n-form-item .n-form-item-feedback-wrapper) {
  display: none;
}
</style>
