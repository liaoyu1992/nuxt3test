

<template>
  <div class="h-full">
   
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NModal,
  NInput,
  FormRules,
  NUpload,
  UploadCustomRequestOptions,
  UploadInst,
} from "naive-ui";
import { useI18n } from "vue-i18n";

</script>

<style scoped>
:deep(.searchForm .n-form-item .n-form-item-feedback-wrapper) {
  display: none;
}
.searchPart {
  flex: 0 0 64px;
  border-bottom: 1px solid #eee;
  @apply bg-white rounded h-64px flex items-center px-16px;
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
