

<template>
  <div class="w-full h-full p-16px pb-0px bg-[#f8f8f8]">
    
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import {
  useMessage, NTree, NDropdown, TreeOption, DropdownOption, useDialog
} from "naive-ui";
import { useI18n } from "vue-i18n";

</script>
<style scoped>
.btnWrap {
  flex: 0 0 60px;
}

.tableWrap {
  @apply flex flex-col bg-white w-full px-16px;
  flex: 1;
}

.treeSide {
  flex: 0 0 200px;
}

:deep(.n-tree .n-tree-node) {
  padding: 1px 0px;
  margin-left: 12px;
  margin-right: 12px;
}

:deep(.n-tree .n-tree-node-wrapper) {
  padding: 6px 0px;
}

:deep(.n-tree-node-content__text) {
  font-size: 16px;
}
</style>
