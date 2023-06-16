
<template>
  <div class="mainContainer">
    
  </div>
</template>
<script lang="ts" setup>
import {
  NSpace,
  NSelect,
  NButton,
  useMessage,
  useDialog,
  NTabs,
  NTabPane,
  NDropdown,
} from "naive-ui";
import { format } from "date-fns";
import { useI18n } from "vue-i18n";
import { onMounted, ref, reactive, watchEffect, h, defineComponent } from "vue";
</script>
<style scoped lang="scss">
.tableWrap {
  height: calc(100% - 64px);
  @apply flex flex-col bg-white w-full px-[16px];
}

.btnWrap {
  flex: 0 0 60px;
  @apply flex justify-between items-center;
}

.gridTable {
  flex: 1;
  height: calc(100% - 60px);
}

:deep(.n-tabs .n-tabs-pane-wrapper) {
  display: flex;
  flex: 1;
}
</style>
