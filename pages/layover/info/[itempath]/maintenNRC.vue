
<template>
  <div class="package h-[100%] flex flex-col">
   
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref, onMounted, } from "vue";
import { FormInst, NForm, NFormItem, useMessage, NButton, NInput, } from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style scoped lang="scss">
:deep(.searchForm .n-form-item .n-form-item-feedback-wrapper) {
  display: none;
}

.tableWrap {
  flex: 1;
  @apply flex bg-white w-full px-[16px] flex-col;
}

.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}

.gridTable {
  flex: 1;
}

.paginat {
  flex: 0 0 50px;
}

.formRemark .formInput {
  width: 845px;
}

:deep(.n-base-loading .n-base-loading__transition-wrapper) {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 10%;
}

:deep(.n-message-container) {
  margin-top: 175px;
}
</style>
