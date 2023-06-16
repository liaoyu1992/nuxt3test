
<template>
  <div class="h-full">
   
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import {
  NIcon,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NInput,
  NSelect,
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
  @apply bg-white rounded h-64px flex items-center mx-16px;
}

.tableWrap {
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
}

.btnWrap {
  flex: 0 0 60px;
}

.gridTable {
  flex: 1;
}
</style>
