
<template>
  <div class="h-full">
   
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { NSelect, FormInst, NForm, NFormItem, useMessage, NButton, NModal, FormRules, FormItemRule, NDatePicker } from "naive-ui";
import { useI18n } from "vue-i18n";
</script>

<style scoped>
:deep(.searchForm .n-form-item .n-form-item-feedback-wrapper){
  display: none;
}
.searchPart{
  border-bottom:1px solid #eee;
  @apply bg-white rounded flex items-center py-15px px-16px;
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
</style>
