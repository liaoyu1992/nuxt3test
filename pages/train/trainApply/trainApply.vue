
<template>
  <div class="w-full h-full pb-[0px] pt-0 bg-[#f8f8f8]">
   
  </div>
</template>
<script lang="ts" setup>
import {
  NButton,
  NSpace,
  NIcon,
  NModal,
  NInput,
  NForm,
  NFormItem,
  NSelect,
  NDatePicker,
  FormRules,
  FormInst,
  FormItemRule,
  useMessage,
  UploadCustomRequestOptions,
  NUpload,
  NGrid,
  NFormItemGi,
} from "naive-ui";
import { useI18n } from "vue-i18n";

</script>
<style lang="scss" scoped>
.table {
  height: calc(100vh - 282px);
  display: flex;
  flex-direction: column;
}

.hei {
  flex: 0 0 50px;
}

.typeActive {
  background: #3491fa;
  color: #fff;
}

:deep(.n-layout .n-layout-scroll-container) {
  background-color: white;
}
</style>
