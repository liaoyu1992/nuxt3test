

<template>
  <div class="w-full h-full px-[16px] pt-16px bg-[#f8f8f8]">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, Component, watch, onMounted, reactive } from "vue";
import {
  NIcon,
  NSelect,
  FormInst,
  NForm,
  NFormItem,
  useMessage,
  NButton,
  NCheckbox,
} from "naive-ui";
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
