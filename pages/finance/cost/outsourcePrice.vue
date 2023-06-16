
<template>
  <div class="h-full w-[100%]">
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import {
  NIcon, FormInst, NForm, NFormItem, useMessage, NButton, NModal, NInput,
  NInputNumber, FormItemRule, NTimePicker, NUpload, NDatePicker, UploadInst, NProgress, NSelect
} from "naive-ui";
import { useI18n } from "vue-i18n";
import { format, addMonths } from "date-fns";
</script>

<style scoped>
:deep(.searchForm .n-form-item .n-form-item-feedback-wrapper) {
  display: none;
}

.searchPart {
  flex: 0 0 64px;
  border-bottom: 1px solid #eee;
  @apply bg-white mx-16px rounded h-64px flex items-center;
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
</style>
