
<template>
  <div class="w-full h-full p-[16px] pb-[0px] bg-[#f8f8f8] flex flex-col">
  
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NTimePicker,
  NGrid,
  NFormItemGi,
  NModal,
  SelectOption,
  NSpace,
  FormItemRule,
} from "naive-ui";

</script>
<style scoped>
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
  flex: 1;
}

.btnWrap {
  flex: 0 0 60px;
}

:deep(.n-upload-trigger + .n-upload-file-list) {
  margin-top: 0px;
}

:deep(.searchForm .n-form-item .n-form-item-feedback-wrapper) {
  display: none;
}
</style>
