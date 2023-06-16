

<template>
  <div class="w-full h-full  bg-[#f8f8f8]">
   
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { NIcon, useMessage, NButton } from "naive-ui";
import { useI18n } from "vue-i18n";

</script>
<style lang="scss" scoped>
.tableWrap {
  @apply flex flex-col bg-white w-full;
  flex: 1;
}

.gridTable {
  flex: 1;
}

.formInput {
  width: 300px;
}

.hangJobModalTitle {
  text-align: center;
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
}

:deep(.searchForm .n-form-item .n-form-item-feedback-wrapper) {
  display: none;
}
</style>
