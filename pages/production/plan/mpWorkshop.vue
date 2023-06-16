
<template>
  <div class="mainContainer">
    
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, } from "vue";
import { NIcon, FormInst, NForm, NFormItem, useMessage, NButton } from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style scoped>
:deep(.searchForm .n-form-item .n-form-item-feedback-wrapper){
  display: none;
}
.searchPart{
  flex: 0 0 64px;
  border-bottom:1px solid #eee;
  @apply bg-white rounded h-64px flex items-center px-16px;
}
.tableWrap {
  flex: 1;
  @apply flex flex-col bg-white w-full px-[16px];
}
.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}
.gridTable {
  flex: 1;
}
:deep(.n-tree .n-tree-node) {
  padding: 4px 0;
  margin-right: 6px;
}
:deep(.n-tree .n-tree-node-wrapper) {
    padding: 2px 0;
}
</style>
