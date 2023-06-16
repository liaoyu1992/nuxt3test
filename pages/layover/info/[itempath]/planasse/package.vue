
<template>
  <div class="package h-[100%] flex flex-col">

  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, h, computed, onMounted, reactive } from "vue";
import {
  NIcon,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NModal,
  NInput,
  NInputNumber,
  FormItemInst,
  NSpin,
  useDialog,
  NTree,
  NSelect,
} from "naive-ui";
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
:deep(.n-base-loading .n-base-loading__transition-wrapper) {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 10%;
}
:deep(.n-message-container) {
  margin-top: 175px;
}
:deep(.evaluatePacketBtn .n-button) {
  border-radius: 3px 0px 0px 3px;
}
:deep(.n-tree.n-tree--block-node .n-tree-node-content) {
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
