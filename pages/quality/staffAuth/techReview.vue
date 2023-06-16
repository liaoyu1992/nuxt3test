
<template>
  <div class="w-full h-full px-16px pb-0px pt-0 bg-[#f8f8f8]">
  
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch, watchEffect } from "vue";
import { NButton, NSelect, NIcon, useMessage } from "naive-ui";
import { useI18n } from "vue-i18n";
import { differenceInMonths } from "date-fns";
</script>

<style scoped lang="scss">
.tableWrap {
  @apply flex flex-col bg-white w-full px-[16px];
  flex: 1;
}

.btnWrap {
  flex: 0 0 60px;
}

.gridTable {
  flex: 1;
}

:deep(.commonForm .n-form-item .n-form-item-feedback-wrapper) {
  display: none;
}
</style>
