<template>
  <div class="subContainer">
    
  </div>
</template>
<script setup lang="ts">
import {
  ref,
  Component,
  watch,
  onMounted,
  reactive,
  toRaw,
  provide
} from "vue";
import { useRouter } from "vue-router";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NPagination,
  NModal,
  NInput,
  NInputNumber,
  FormItemInst,
  FormItemRule,
  FormRules,
  NRadioGroup,
  NRadio,
  NUpload,
  UploadFileInfo,
  NDatePicker,
} from "naive-ui";
import { useI18n } from "vue-i18n";

</script>

<style scoped>
.tableWrap {
  height: calc(100% - 186px);
  /* overflow-y: scroll; */
  display: flex;
  flex-direction: column;
}

.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center px-16px;
}

.gridTable {
  flex: 1;
}
</style>
