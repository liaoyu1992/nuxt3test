
<template>
  <div class="w-full h-full p-[16px] pb-[0px] bg-[#f8f8f8]">
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import {
  NIcon,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NInput,
  NInputNumber,
  NGi,
  NGrid,
  NRadioGroup,
  NRadio,
  NUpload,
  NModal,
  NSelect,
  UploadInst,
  UploadFileInfo,
  FormItemRule,
} from "naive-ui";
import { useI18n } from "vue-i18n";

</script>

<style scoped>
.searchPart {
  border-bottom: 1px solid #eee;
  @apply flex h-[64px] items-center justify-between;
}
.shiftModalTitle {
  @apply font-500 text-18px text-center;
}
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
:deep(.searchForm .n-form-item .n-form-item-feedback-wrapper) {
  display: none;
}
</style>
