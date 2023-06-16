
<template>
  <div class="fileManage">
  
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useMessage, NButton, NForm, NFormItem, } from "naive-ui";
</script>
<style scoped lang="scss">
:deep(.searchForm .n-form-item .n-form-item-feedback-wrapper){
  display: none;
}
.fileManage{
  @apply h-full bg-white flex flex-col;
}
.searchPart{
  flex: 0 0 64px;
  border-bottom:1px solid #eee;
  @apply bg-white rounded h-64px flex items-center mx-16px;
}
.attachModal{
  flex: 1;
}
</style>
